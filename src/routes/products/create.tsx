import { createFileRoute, Link } from "@tanstack/react-router";
import { button } from "~/components/ui/Button";

export const Route = createFileRoute("/products/create")({
  component: () => (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-heading-40">Create product</h1>
        <Link
          className={button({ intent: "primary", size: "md" })}
          to="/products/create"
        >
          Cancel
        </Link>
      </section>
      <section className="material-base p-4">No content here yet.</section>
    </>
  ),
});
