import { ScriptOnce } from "@tanstack/react-router";
import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "system" | "light" | "dark";

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export interface ThemeProviderState {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
}

export const initThemeScript = (storageKey: string, defaultTheme: Theme) => {
  const key = JSON.stringify(storageKey);
  const fallback = JSON.stringify(defaultTheme);

  return `(function(){try{var t=localStorage.getItem(${key});if(t!=='light'&&t!=='dark'&&t!=='system'){t=${fallback}}var d=matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.setAttribute('data-theme',r);e.style.colorScheme=r}catch(e){}})();`;
};

export const applyThemeDOM = (theme: Theme) => {
  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

  const css = document.createElement("style");
  css.textContent = "*, *::before, *::after { transition: none !important; }";
  document.head.appendChild(css);

  document.documentElement.setAttribute("data-theme", resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;

  window.getComputedStyle(css).opacity;

  requestAnimationFrame(() => {
    document.head.removeChild(css);
  });
};

export const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, defaultTheme = "system", storageKey = "theme" } = props;

  // undefined on server AND on first client render — no radio matches
  const [theme, setThemeState] = useState<Theme | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  // Resolve the real theme only after mount
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    const resolved =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : defaultTheme;

    setThemeState(resolved);
    setMounted(true);
  }, [storageKey, defaultTheme]);

  // Apply DOM attributes when theme changes
  useEffect(() => {
    if (!mounted || !theme) return;
    applyThemeDOM(theme);
  }, [theme, mounted]);

  // Listen for OS scheme shifts when in "system" mode
  useEffect(() => {
    if (!mounted || theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyThemeDOM("system");

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme, mounted]);

  const setTheme = (next: Theme) => {
    localStorage.setItem(storageKey, next);
    setThemeState(next);
  };

  return (
    <ThemeProviderContext value={{ theme, setTheme }}>
      <ScriptOnce>{initThemeScript(storageKey, defaultTheme)}</ScriptOnce>
      {children}
    </ThemeProviderContext>
  );
};
