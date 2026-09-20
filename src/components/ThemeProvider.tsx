import { ScriptOnce } from "@tanstack/react-router";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type Theme = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

export interface ThemeProviderState {
  theme: Theme | undefined;
  resolvedTheme: ResolvedTheme | undefined;
  setTheme: (theme: Theme) => void;
}

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const initThemeScript = (storageKey: string, defaultTheme: Theme) => {
  const key = JSON.stringify(storageKey);
  const fallback = JSON.stringify(defaultTheme);

  return `(function(){try{var t=localStorage.getItem(${key});if(t!=='light'&&t!=='dark'&&t!=='system'){t=${fallback}}var d=matchMedia('(prefers-color-scheme: dark)').matches;var r=t==='system'?(d?'dark':'light'):t;var e=document.documentElement;e.setAttribute('data-theme',r);e.style.colorScheme=r}catch(e){}})();`;
};

/**
 * Applies a resolved theme with transitions suppressed for one paint cycle.
 *
 * The nested rAF matters: a single rAF callback runs *before* the browser
 * paints the current frame, so removing the suppression style there can let
 * the paint land with transitions already back on. The inner rAF runs after
 * that paint has happened, so the suppression was actually in effect for the
 * frame where the theme changed.
 */
export const applyThemeDOM = (resolvedTheme: ResolvedTheme) => {
  const style = document.createElement("style");
  style.textContent =
    "*, *::before, *::after { transition: none !important; }";
  document.head.appendChild(style);

  document.documentElement.setAttribute("data-theme", resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;

  // Force a synchronous style flush so the no-transition rule is in effect
  // before anything else observes the new attribute value.
  window.getComputedStyle(style).opacity;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.head.removeChild(style);
    });
  });
};

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, defaultTheme = "system", storageKey = "theme" } = props;

  // undefined on server AND on first client render — no hydration mismatch
  const [theme, setThemeState] = useState<Theme | undefined>(undefined);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme | undefined>(
    undefined,
  );
  const isFirstApply = useRef(true);

  // Resolve the real theme only after mount.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(storageKey);
    } catch {
      // localStorage can throw (private browsing, disabled storage, quota)
    }

    const resolved: Theme =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : defaultTheme;

    setThemeState(resolved);
    setSystemTheme(getSystemTheme());
  }, [storageKey, defaultTheme]);

  const resolvedTheme: ResolvedTheme | undefined = theme
    ? theme === "system"
      ? systemTheme
      : theme
    : undefined;

  // Apply DOM attributes when the resolved theme changes.
  useEffect(() => {
    if (!resolvedTheme) return;

    if (isFirstApply.current) {
      // The inline script already applied this before hydration — just
      // sync the attribute, skip the transition-suppression dance.
      isFirstApply.current = false;
      document.documentElement.setAttribute("data-theme", resolvedTheme);
      document.documentElement.style.colorScheme = resolvedTheme;
      return;
    }

    applyThemeDOM(resolvedTheme);
  }, [resolvedTheme]);

  // Keep systemTheme live once mounted, so switching *to* "system" later
  // reflects the current OS state immediately rather than waiting on the
  // next OS-level change event.
  useEffect(() => {
    if (!theme) return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback(
    (next: Theme) => {
      try {
        localStorage.setItem(storageKey, next);
      } catch {
        // ignore — theme still applies for this session, just won't persist
      }
      setThemeState(next);
    },
    [storageKey],
  );

  const value = useMemo<ThemeProviderState>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  );

  return (
    <ThemeProviderContext value={value}>
      <ScriptOnce>{initThemeScript(storageKey, defaultTheme)}</ScriptOnce>
      {children}
    </ThemeProviderContext>
  );
};
