/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { ThemeProvider } from "~/components/ThemeProvider";

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
  }),

  component: () => (
    <html lang="en" dir="ltr">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" storageKey="theme">
          <Outlet />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  ),
});
