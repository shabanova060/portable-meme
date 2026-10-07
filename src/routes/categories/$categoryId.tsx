import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/categories/$categoryId")({
  component: () => (
    <>
      <h1 className="text-heading-40">Category Page</h1>
      <section className="material-base">
        <p className="p-4">Random category data for now!</p>
      </section>
    </>
  ),
});
