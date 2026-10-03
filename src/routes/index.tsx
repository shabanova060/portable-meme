import { createFileRoute } from "@tanstack/react-router";
import { ProductEditor } from "~/components/editor/ProductEditor";
import { Button } from "~/components/ui/Button";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "~/components/ui/Field";

export const Route = createFileRoute("/")({
  component: () => (
    <>
      <h1 className="text-heading-40">Dashboard Page</h1>
      <p>This is the dashboard page!</p>
      <section className="material-base p-4 mt-4">
        <h2 className="text-heading-24">Button Component</h2>
        <section className="flex gap-x-3.5">
          <Button intent="primary" size="md">
            Click Me
          </Button>
          <Button intent="secondary" size="md">
            Click Me
          </Button>
          <Button intent="tertiary" size="md">
            Click Me
          </Button>
          <Button intent="primary" size="md" disabled>
            Click Me
          </Button>
        </section>
        <section className="flex gap-x-3.5">
          <Field>
            <FieldLabel>E-mail address</FieldLabel>
            <FieldControl data-valid type="email" />
            <FieldDescription>Enter your e-mail address</FieldDescription>
            <FieldError />
          </Field>
        </section>
        <ProductEditor />
      </section>
    </>
  ),
});
