import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070910",
        night: "#05060a",
        surface: "#0d111b",
        "surface-soft": "#121621",
        paper: "#f7f8fb",
        line: "#d8deea",
        mint: "#10b981",
        coral: "#ef4444",
        gold: "#fbb041",
        sky: "#0542ff"
      },
      boxShadow: {
        glow: "0 0 80px rgba(5, 66, 255, 0.24)",
        soft: "0 24px 90px rgba(7, 9, 16, 0.14)",
        "dark-soft": "0 24px 90px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
