"use client";

import { useTheme } from "@/providers/ThemeProvider";

export function ThemeToggle() {
  const { toggleDarkMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        className="rounded-md border border-gray-300 px-4 py-2 dark:text-white"
        onClick={() => toggleDarkMode("system")}
      >
        시스템
      </button>
      <button
        className="rounded-md border border-gray-300 px-4 py-2 dark:text-white"
        onClick={() => toggleDarkMode("dark")}
      >
        다크
      </button>
      <button
        className="rounded-md border border-gray-300 px-4 py-2 dark:text-white"
        onClick={() => toggleDarkMode("light")}
      >
        라이트
      </button>
    </div>
  );
}
