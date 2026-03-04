import { useEffect, useState, useCallback } from "react";

export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved =
        typeof window !== "undefined" && localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch (e) {}
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("dark", Boolean(isDark));
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {}
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((v) => !v), []);

  return { isDark, setIsDark, toggle };
}
