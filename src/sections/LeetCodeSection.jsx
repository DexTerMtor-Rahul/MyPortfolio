import { useState, useEffect, useRef } from "react";
import { leetcodeCounterItems } from "../constants";
// import { fetchLeetCodeStats } from "../services/leetcodeApi";
import { fetchLeetCodeUserProfile } from "../services/leetcodeApi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const LeetCodeSection = ({ username }) => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use new GraphQL API
        const user = await fetchLeetCodeUserProfile(username);

        if (!user) throw new Error("No user data returned from GraphQL API");

        const arr = user?.submitStatsGlobal?.acSubmissionNum || [];
        const getCount = (key) => {
          const row = arr.find((r) => r.difficulty?.toLowerCase() === key);
          return row?.count ?? 0;
        };

        const mapped = {
          username: user.username || username,
          totalSolved: getCount("all"),
          easySolved: getCount("easy"),
          mediumSolved: getCount("medium"),
          hardSolved: getCount("hard"),
        };

        setLeetcodeStats(mapped);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch LeetCode stats (GraphQL):", err);
        // Optional: fallback to legacy REST if desired
        // try {
        //   const legacy = await fetchLeetCodeStats(username);
        //   setLeetcodeStats(legacy);
        //   setError(null);
        // } catch (e2) {
        //   console.error("Fallback also failed:", e2);
        // }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  // GSAP ScrollTrigger animation for counters
  useGSAP(() => {
    if (!leetcodeStats) return;

    countersRef.current.forEach((counter, index) => {
      if (!counter) return;

      const numberElement = counter.querySelector(".counter-number");
      const item = leetcodeCounterItems[index];
      const value = leetcodeStats[item.key] || 0;

      if (!numberElement) return;

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#leetcode-counter",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${value}${item.suffix}`;
        },
        // Update text during animation
        onUpdate: function () {
          const currentValue = Math.floor(this.targets()[0].innerText);
          numberElement.textContent = `${currentValue}${item.suffix}`;
        },
      });

      // Animate the counter cards
      gsap.fromTo(
        counter,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: "#leetcode-counter",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [leetcodeStats]); // Re-run when stats are loaded

  return (
    <div
      id="leetcode-counter"
      ref={counterRef}
      className="md:mt-40 mt-20 section-padding xl:px-0 px-4"
    >
      <TitleHeader title="LeetCode Statistics" sub={"💻 My LeetCode Journey"} />

      {loading && (
        <div className="flex justify-center items-center mt-10">
          <div className="text-white-50 text-lg">Loading stats...</div>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center mt-10">
          <div className="text-red-400 text-lg">
            Failed to load stats: {error}
          </div>
        </div>
      )}

      {leetcodeStats && (
        <div className="mx-auto grid-4-cols mt-5 px-4">
          {leetcodeCounterItems.map((item, index) => {
            return (
              <div
                key={index}
                ref={(el) => el && (countersRef.current[index] = el)}
                className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center hover:bg-zinc-800 transition-colors duration-300 opacity-0"
              >
                <div
                  className={`counter-number text-5xl font-bold mb-2 ${item.color}`}
                >
                  0{item.suffix}
                </div>
                <div className={`${item.color} text-lg text-center`}>
                  {item.label}
                </div>
                {item.key === "totalSolved" && (
                  <div className="text-orange-400 text-sm mt-1">
                    Total Problems
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LeetCodeSection;
