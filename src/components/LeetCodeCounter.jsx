import { useState, useEffect } from "react";
import { leetcodeCounterItems } from "../constants";
import { fetchLeetCodeStats } from "../services/leetcodeApi";
import CountUp from "react-countup";

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
    <div id="leetcode-counter" className="padding-x-lg xl:mt-8 mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-orange-100 mb-2">
          LeetCode Statistics
        </h2>
        <p className="text-orange-500">
          @{leetcodeStats?.username || username}
        </p>
      </div>
      <div className="mx-auto grid-4-cols">
        {leetcodeCounterItems.map((item, index) => {
          const value = leetcodeStats?.[item.key] || 0;
          return (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg p-10 flex flex-col items-center hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="counter-number text-orange-100 text-5xl font-bold mb-2">
                <CountUp suffix={item.suffix} end={value} duration={2.5} />
              </div>
              <div className="text-orange-100 text-lg text-center">
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
