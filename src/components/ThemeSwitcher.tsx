import { createStore, useSelector } from "@tanstack/react-store";
import { MonitorCog, Moon, Sun } from "lucide-react";
import css from "~/components/ThemeSwitcher.module.css";

type Theme = "system" | "light" | "dark";

const getInitialTheme = () => {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem("theme");
  return saved === "light" || saved === "dark" || saved === "system"
    ? saved
    : "system";
};

export const themeStore = createStore(getInitialTheme());

export const getResolvedTheme = (theme: Theme) => {
  if (typeof window === "undefined") return "light";

  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return theme;
};

export const setTheme = async (theme: Theme) => {
  const resolvedTheme = getResolvedTheme(theme);
  const css = document.createElement("style");
  css.textContent = "*, *::before, *::after { transition: none !important; }";
  document.head.appendChild(css);
  document.documentElement.setAttribute("data-theme", resolvedTheme);
  themeStore.setState(() => theme);
  window.getComputedStyle(css).opacity;

  requestAnimationFrame(() => {
    document.head.removeChild(css);
  });

  localStorage.setItem("theme", theme);
};

export const ThemeSwitcher = () => {
  const theme = useSelector(themeStore, (state) => state);

  return (
    <fieldset className={css.ThemeSwitcher}>
      <legend className={css.SrOnly}>Select theme:</legend>
      <label className={css.ThemeSwitcherLabel}>
        <input
          className={css.ThemeSwitcherRadio}
          type="radio"
          name="theme"
          value="system"
          checked={theme === "system"}
          onChange={() => setTheme("system")}
        />
        <span className={css.SrOnly}>System</span>
        <MonitorCog size={16} aria-hidden="true" />
      </label>
      <label className={css.ThemeSwitcherLabel}>
        <input
          className={css.ThemeSwitcherRadio}
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={() => setTheme("light")}
        />
        <span className={css.SrOnly}>Light</span>
        <Sun size={16} aria-hidden="true" />
      </label>
      <label className={css.ThemeSwitcherLabel}>
        <input
          className={css.ThemeSwitcherRadio}
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={() => setTheme("dark")}
        />
        <span className={css.SrOnly}>Dark</span>
        <Moon size={16} aria-hidden="true" />
      </label>
    </fieldset>
  );
};
