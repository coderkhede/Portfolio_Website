"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({
  className = "",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={`inline-flex items-center justify-center rounded-full border border-line p-2 text-mist transition hover:text-frost ${className}`}
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative inline-flex items-center gap-2 rounded-full border border-line bg-ink/50 p-2 text-mist transition-all duration-300 hover:border-violet-accent/50 hover:bg-ink hover:text-frost ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-4 w-4">
        {isDark ? (
          <Sun
            size={16}
            className="text-amber-400 transition duration-300 group-hover:rotate-45 group-hover:scale-110"
          />
        ) : (
          <Moon
            size={16}
            className="text-violet-500 transition duration-300 group-hover:-rotate-12 group-hover:scale-110"
          />
        )}
      </div>
      {showLabel && (
        <span className="pr-1 text-xs font-medium">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}

