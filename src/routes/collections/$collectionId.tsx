import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/collections/$collectionId")({
  component: () => (
    <>
      <h1 className="text-heading-40">Collection Page</h1>
      <section className="material-base">
        <p className="p-4">Random collection data for now!</p>
      </section>
    </>
  ),
});
