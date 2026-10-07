/// <reference types="vite/client" />

import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import { Header } from "~/components/layouts/Header";
import { Sidebar } from "~/components/layouts/Sidebar";

import tailwindCss from "~/globals.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
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
    links: [{ rel: "stylesheet", href: tailwindCss }],
  }),
  component: () => (
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        <HeadContent />
      </head>
      <body className="relative bg-background-200 isolate antialiased min-h-screen grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
        <Sidebar />
        <Header />
        <main className="col-start-2 row-start-2 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <section className="h-full bg-red-200 border border-red-400 text-red-900 rounded-lg text-center grid place-items-center place-content-center font-semibold">
      <h1>Not Found - 404</h1>
      <p>The page you are looking for does not exist.</p>
    </section>
  ),
  errorComponent: () => (
    <section>
      <h1>There was an error!</h1>
      <p>The page you are looking for does not exist.</p>
    </section>
  ),
});
