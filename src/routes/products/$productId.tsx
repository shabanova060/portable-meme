import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$productId")({
  component: () => (
    <>
      <h1 className="text-heading-40">Product Page</h1>
      <section className="material-base">
        <p className="p-4">Random product data for now!</p>
      </section>
    </>
  ),
});
