import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        paper: "#f7f9fc",
        line: "#d8e2ef",
        mint: "#0f766e",
        coral: "#dc2626",
        gold: "#b45309",
        sky: "#2563eb"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
