import { createFileRoute, Link } from "@tanstack/react-router";
import { button } from "~/components/ui/Button";

export const Route = createFileRoute("/categories/")({
  component: () => (
    <section className="flex justify-between items-center">
      <h1 className="text-heading-40">Categories</h1>
      <Link
        className={button({ intent: "primary", size: "md" })}
        to="/categories/create"
      >
        Create category
      </Link>
    </section>
  ),
});
