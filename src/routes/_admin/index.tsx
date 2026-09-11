import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/Button";

export const Route = createFileRoute("/_admin/")({
  component: (): React.JSX.Element => (
    <main>
      <h1>Dashboard</h1>
      <section className="Material" data-size="base">
        <Link to="/products">Products</Link>
        <Link to="/brands">Brands</Link>
        <Button data-variant="primary" data-size="medium">
          Click Me
        </Button>
        <Button data-variant="secondary" data-size="medium">
          Upload
        </Button>
        <Button data-variant="tertiary" data-size="medium" disabled>
          Upload
        </Button>
      </section>
    </main>
  ),
});
