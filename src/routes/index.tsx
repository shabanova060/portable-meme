import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <h1 className="text-heading-40">Dashboard Page</h1>
      <p>This is the dashboard page!</p>
      <section className="material-base p-4 mt-4">
        <h2 className="text-heading-24">
          I'm currently adding the database schema.
        </h2>
      </section>
    </>
  ),
});
