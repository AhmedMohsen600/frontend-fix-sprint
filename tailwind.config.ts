import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#151515",
        paper: "#f6f7f9",
        line: "#d9dee7",
        mint: "#10b981",
        coral: "#f9735b",
        gold: "#f4b740",
        sky: "#0ea5e9"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(21, 21, 21, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
