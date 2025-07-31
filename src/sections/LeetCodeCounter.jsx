import { useState, useEffect } from "react";
import { leetcodeCounterItems } from "../constants";
import { fetchLeetCodeStats } from "../services/leetcodeApi";
import CountUp from "react-countup";
import TitleHeader from "../components/TitleHeader";

const LeetCodeCounter = ({ username }) => {
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);
        const stats = await fetchLeetCodeStats(username);
        setLeetcodeStats(stats);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch LeetCode stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return (
    <div id="leetcode-counter" className="padding-x-lg xl:mt-0 mt-20">
      <TitleHeader title="LeetCode Statistics" sub={"💻 My LeetCode Journey"} />
      <div className="mx-auto grid-4-cols mt-5">
        {leetcodeCounterItems.map((item, index) => {
          const value = leetcodeStats?.[item.key] || 0;
          return (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center hover:bg-zinc-800 transition-colors duration-300"
            >
              <div
                className={`counter-number text-5xl font-bold mb-2 ${item.color}`}
              >
                <CountUp suffix={item.suffix} end={value} duration={2.5} />
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
    </div>
  );
};

export default LeetCodeCounter;
