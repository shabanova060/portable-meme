import { createFileRoute, Link } from "@tanstack/react-router";
import { button } from "~/components/ui/Button";

export const Route = createFileRoute("/promotions/")({
  component: () => (
    <>
      <section className="flex justify-between items-center">
        <h1 className="text-heading-40">Promotions</h1>
        <Link
          className={button({ intent: "primary", size: "md" })}
          to="/promotions/create"
        >
          Create promotion
        </Link>
      </section>
      <section className="material-base p-4">No content here yet.</section>
    </>
  ),
});
