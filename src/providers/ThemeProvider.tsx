"use client";

import { useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <button
        className="rounded-md border border-gray-300 p-2"
        onClick={toggleDarkMode}
      >
        다크모드 버튼
      </button>
      {children}
    </div>
  );
}
