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

// --- New: GraphQL user profile via LeetCode official endpoint (proxied) ---
const GQL_ENDPOINT = import.meta.env?.DEV ? "/api/leetcode" : "/api/leetcode";

export const getUserProfileQuery = `
  query getUserProfile($username: String!) { 
    matchedUser(username: $username) { 
      username 
      githubUrl 
      twitterUrl 
      linkedinUrl 
      profile { 
        ranking 
        reputation 
        reputationDiff 
        solutionCount 
        solutionCountDiff 
        postViewCount 
        postViewCountDiff 
      } 
      submitStatsGlobal { 
        acSubmissionNum { 
          difficulty 
          count 
          submissions 
        } 
      } 
    } 
  }
`;

export async function fetchLeetCodeUserProfile(username) {
  try {
    const res = await fetch(GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query: getUserProfileQuery,
        variables: { username },
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`LeetCode GraphQL error ${res.status}: ${text}`);
    }

    const data = await res.json();
    if (data.errors) {
      throw new Error(data.errors.map((e) => e.message).join("; "));
    }

    return data.data?.matchedUser;
  } catch (err) {
    console.error("Error fetching LeetCode profile:", err);
    return null;
  }
}
