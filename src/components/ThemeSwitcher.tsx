import { MonitorCog, Moon, Sun } from "lucide-react";
import { useTheme } from "~/components/ThemeProvider";
import css from "~/components/ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

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
