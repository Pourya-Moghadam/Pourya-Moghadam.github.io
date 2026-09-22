import { useEffect, useRef, useState } from "react";

const storageKey = "portfolio-theme";

function readPreference() {
  try {
    const value = localStorage.getItem(storageKey);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export default function useTheme() {
  const preference = useRef(readPreference());
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#1b1c1e" : "#faf9f6",
    );
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () => {
      if (!preference.current) setTheme(media.matches ? "dark" : "light");
    };
    const syncPreference = (event) => {
      if (event.key !== storageKey && event.key !== null) return;
      preference.current = readPreference();
      setTheme(preference.current || (media.matches ? "dark" : "light"));
    };
    updateSystemTheme();
    media.addEventListener("change", updateSystemTheme);
    window.addEventListener("storage", syncPreference);
    return () => {
      media.removeEventListener("change", updateSystemTheme);
      window.removeEventListener("storage", syncPreference);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    preference.current = nextTheme;
    setTheme(nextTheme);
    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  };

  return { theme, toggleTheme };
}
