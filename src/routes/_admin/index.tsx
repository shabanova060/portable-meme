import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";

export const Route = createFileRoute("/_admin/")({
  component: (): React.JSX.Element => (
    <main>
      <h1 className="Heading" data-size="1">
        Dashboard
      </h1>
      <section className="Material" data-size="base">
        <Link to="/products">Products</Link>
        <Link to="/brands">Brands</Link>
        <Button data-variant="primary" data-size="medium">
          Click Me
        </Button>
        <Button data-variant="secondary" data-size="medium">
          Upload
        </Button>
        <Button data-variant="tertiary" data-size="medium">
          Upload
        </Button>
        <Button data-variant="danger" data-size="medium">
          Upload
        </Button>
        <Button data-variant="warning" data-size="medium">
          Upload
        </Button>
        <Input
          data-size="medium"
          type="email"
          data-invalid
          placeholder="Enter your e-mail address"
        />
      </section>
    </main>
  ),
});
