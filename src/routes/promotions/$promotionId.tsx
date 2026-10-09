import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/promotions/$promotionId")({
  component: () => (
    <>
      <h1 className="text-heading-40">Promotion Page</h1>
      <section className="material-base">
        <p className="p-4">Random promotion data for now!</p>
      </section>
    </>
  ),
});
