import { createFileRoute, Link } from "@tanstack/react-router";
import { ThemeSelector } from "~/components/ThemeSelector";
import { Button } from "~/components/ui/Button";
import { ErrorMessage } from "~/components/ui/ErrorMessage";
import { Input } from "~/components/ui/Input";
import { Switch } from "~/components/ui/Switch";

export const Route = createFileRoute("/_admin/")({
  component: () => (
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
        <ErrorMessage>
          <strong>Error: </strong>something went wrong
        </ErrorMessage>
        <ThemeSelector />
        <Switch />
      </section>
    </main>
  ),
});
