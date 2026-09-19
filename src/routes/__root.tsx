/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import css from "~/globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "TanStack Start Starter",
      },
    ],
    links: [{ rel: "stylesheet", href: css }],
    scripts: [
      {
        children:
          "const storedTheme = localStorage.getItem('theme') || 'system';\n" +
          "const resolvedTheme = storedTheme === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : storedTheme;\n" +
          "document.documentElement.setAttribute('data-theme', resolvedTheme);",
      },
    ],
  }),

  component: () => (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});
