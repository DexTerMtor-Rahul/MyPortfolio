// Simple serverless handler (Vercel/Netlify compatible) to proxy LeetCode GraphQL with CORS
// Expects POST with JSON { query, variables }

function setCors(req, res) {
  const origin = req.headers?.origin || "";
  const env =
    typeof globalThis !== "undefined" &&
    globalThis.process &&
    globalThis.process.env
      ? globalThis.process.env
      : undefined;
  const envAllowed = ((env && env.ALLOWED_ORIGINS) || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const defaults = [
    "http://localhost:5173",
    "http://localhost:5174",
    env?.SITE_URL,
    env?.VERCEL_URL ? `https://${env.VERCEL_URL}` : undefined,
  ].filter(Boolean);
  const allowed = envAllowed.length ? envAllowed : defaults;

  if (allowed.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // Fallback: be permissive (adjust to your needs)
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

async function readJsonBody(req) {
  try {
    if (req.body && typeof req.body === "object") return req.body;
    let raw = "";
    for await (const chunk of req) raw += chunk;
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  setCors(req, res);

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { query, variables } = await readJsonBody(req);
    if (!query) return res.status(400).json({ error: "Missing GraphQL query" });

    const resp = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        referer: "https://leetcode.com",
        origin: "https://leetcode.com",
      },
      body: JSON.stringify({ query, variables }),
    });

    const data = await resp.json();
    return res.status(resp.ok ? 200 : resp.status).json(data);
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Failed to fetch from LeetCode", details: String(err) });
  }
}
