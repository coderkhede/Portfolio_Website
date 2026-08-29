import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--bg)",
        ink: "var(--ink)",
        line: "var(--line)",
        frost: "var(--frost)",
        mist: "var(--mist)",
        violet: {
          accent: "var(--violet)",
        },
        emerald: {
          accent: "var(--emerald)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        content: "64rem",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        "glow-emerald": "0 0 80px -20px rgba(16, 185, 129, 0.45)",
      },
      backgroundImage: {
        mesh: "radial-gradient(ellipse 80% 50% at 20% -10%, var(--mesh-bg-1), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, var(--mesh-bg-2), transparent), radial-gradient(ellipse 50% 30% at 50% 100%, var(--mesh-bg-3), transparent)",
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
