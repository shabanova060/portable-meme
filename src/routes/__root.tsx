/// <reference types="vite/client" />

import type { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

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
        <div className="row-span-2 col-start-1 z-50 bg-background-100 shadow-border w-64 h-full">
          <nav aria-label="Main Navigation" className="p-4">
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>

        <header className="col-start-2 row-start-1 w-full bg-background-100 shadow-border h-16 flex items-center px-6">
          <nav aria-label="Secondary Navigation">Header</nav>
        </header>
        <main className="col-start-2 row-start-2 p-6 overflow-y-auto">
          <Outlet />
        </main>

        <Scripts />
      </body>
    </html>
  ),
  notFoundComponent: () => (
    <section>
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
