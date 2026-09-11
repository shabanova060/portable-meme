import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/products/$productId")({
  component: (): React.JSX.Element => (
    <main>
      <h1>Product Page</h1>
    </main>
  ),
});
