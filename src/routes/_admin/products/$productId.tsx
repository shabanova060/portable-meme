import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/products/$productId")({
  component: () => (
    <main>
      <h1>Product Page</h1>
    </main>
  ),
});
