// Simple LeetCode API service using CORS-friendly endpoint
export const fetchLeetCodeStats = async (username) => {
  try {
    const response = await fetch(
      `https://leetcode-stats-api.herokuapp.com/${username}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      username: data.name || username,
      totalSolved: data.totalSolved || 0,
      easySolved: data.easySolved || 0,
      mediumSolved: data.mediumSolved || 0,
      hardSolved: data.hardSolved || 0,
    };
  } catch (error) {
    console.error("Error fetching LeetCode stats:", error);
    return {
      username: username,
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
    };
  }
};
