import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/brands/$brandId")({
  component: () => (
    <main>
      <h1>Brand Page</h1>
    </main>
  ),
});
