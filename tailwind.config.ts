import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070707",
          900: "#0c0c0c",
          850: "#111111",
          800: "#161616",
          700: "#1f1f1f",
          600: "#2a2a2a",
        },
        bone: {
          50: "#f6f5f1",
          100: "#ecebe5",
          200: "#d6d4cb",
          300: "#a9a69a",
          400: "#7d7a70",
        },
        champagne: {
          300: "#e6cfa6",
          400: "#d6b986",
          500: "#c8a97e",
          600: "#a8895e",
          700: "#8a6e47",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
