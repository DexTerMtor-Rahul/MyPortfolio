import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/leetcode": {
        target: "https://leetcode.com",
        changeOrigin: true,
        secure: true,
        headers: {
          Referer: "https://leetcode.com",
          Origin: "https://leetcode.com",
        },
        rewrite: (path) => path.replace(/^\/api\/leetcode/, "/graphql"),
      },
    },
  },
});
