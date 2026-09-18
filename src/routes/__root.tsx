/// <reference types="vite/client" />
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

import css from "~/globals.css?url";

export const getPreferredTheme = createServerFn({ method: "GET" }).handler(
  async () => {
    const theme = getCookie("data-theme");
    return theme ?? "light";
  },
);

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
  loader: async () => {
    const theme = await getPreferredTheme();
    return { theme };
  },
  component: () => {
    const { theme } = Route.useLoaderData();
    return (
      <html lang="en" dir="ltr" data-theme={theme}>
        <head>
          <HeadContent />
        </head>
        <body>
          <Outlet />
          <Scripts />
        </body>
      </html>
    );
  },
});
