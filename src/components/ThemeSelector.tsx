import { createStore, useSelector } from "@tanstack/react-store";
import { Button } from "~/components/ui/Button";

export type Theme = "light" | "dark";

export const themeStore = createStore<Theme>("light");

export const disableTransitionsTemporarily = () => {
  const css = document.createElement("style");
  css.append(
    document.createTextNode(
      `* {
         -webkit-transition: none !important;
         -moz-transition: none !important;
         -o-transition: none !important;
         -ms-transition: none !important;
         transition: none !important;
       }`,
    ),
  );
  document.head.append(css);

  return () => {
    window.getComputedStyle(document.body);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        css.remove();
      });
    });
  };
};

export const updateTheme = async (theme: Theme) => {
  const enableTransitions = disableTransitionsTemporarily();
  document.documentElement.setAttribute("data-theme", theme);
  themeStore.setState(() => theme);
  await cookieStore.set("theme", theme);
  enableTransitions();
};

export const ThemeSelector = () => {
  const theme = useSelector(themeStore, (state) => state);
  return (
    <div>
      <dl>
        <dt>Theme</dt>
        <dd style={{ textTransform: "capitalize" }}>{theme}</dd>
      </dl>
      <Button onClick={() => updateTheme("dark")}>Dark</Button>
      <Button onClick={() => updateTheme("light")}>Light</Button>
    </div>
  );
};
