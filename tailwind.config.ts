import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#09090b",
        ink: "#121215",
        line: "#27272a",
        frost: "#f4f4f5",
        mist: "#a1a1aa",
        violet: {
          accent: "#8b5cf6",
        },
        emerald: {
          accent: "#10b981",
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
        glow: "0 0 80px -20px rgba(139, 92, 246, 0.55)",
        "glow-emerald": "0 0 80px -20px rgba(16, 185, 129, 0.45)",
      },
      backgroundImage: {
        mesh: "radial-gradient(ellipse 80% 50% at 20% -10%, rgba(139, 92, 246, 0.18), transparent), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(16, 185, 129, 0.12), transparent), radial-gradient(ellipse 50% 30% at 50% 100%, rgba(139, 92, 246, 0.08), transparent)",
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
