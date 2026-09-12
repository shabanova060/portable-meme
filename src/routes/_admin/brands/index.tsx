import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/brands/")({
  component: (): React.JSX.Element => (
    <main>
      <h1 className="Heading" data-size="1">
        Brands Page
      </h1>
    </main>
  ),
});
