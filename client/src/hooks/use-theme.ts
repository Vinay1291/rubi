import { useEffect, useCallback, useState } from "react";

const THEME_STORAGE_KEY = "rubi-theme";
const THEME_CLASSES = ["dark"] as const;

export type ThemeOption = "light" | "dark";

function applyThemeClasses(theme: ThemeOption) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  THEME_CLASSES.forEach((themeClass) => root.classList.remove(themeClass));

  if (theme === "dark") {
    root.classList.add("dark");
  }
}

function getInitialTheme(): ThemeOption {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(
    THEME_STORAGE_KEY,
  ) as ThemeOption | null;
  if (storedTheme) {
    return storedTheme;
  }

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  ).matches;
  return prefersDark ? "dark" : "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeOption>("light");

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyThemeClasses(initialTheme);
    setThemeState(initialTheme);
  }, []);

  const setTheme = useCallback((nextTheme: ThemeOption) => {
    applyThemeClasses(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setThemeState(nextTheme);
  }, []);

  return {
    theme,
    setTheme,
  };
}

