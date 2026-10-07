import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brands/$brandId")({
  component: () => (
    <>
      <h1 className="text-heading-40">Brand Page</h1>
      <section className="material-base">
        <p className="p-4">Random brand data for now!</p>
      </section>
    </>
  ),
});
