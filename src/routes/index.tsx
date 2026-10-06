import { createFileRoute } from "@tanstack/react-router";
import { ProductEditor } from "~/components/editor/ProductEditor";
import { Button } from "~/components/ui/Button";
import { Checkbox } from "~/components/ui/Checkbox";
import {
  Field,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "~/components/ui/Field";
import {
  OTPField,
  OTPFieldInput,
  OTPFieldSeparator,
} from "~/components/ui/OTPField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/Select";

const items = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
];

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
        <Select items={items}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <label
          className="flex justify-center items-center gap-x-2 text-sm text-gray-900"
          htmlFor="checkbox-example"
        >
          <Checkbox id="checkbox-example" name="checkbox-example" />
          Checkbox Example
        </label>

        <OTPField length={6} id="otp-field">
          <OTPFieldInput aria-label="Character 1 of 6" />
          <OTPFieldInput aria-label="Character 2 of 6" />
          <OTPFieldInput aria-label="Character 3 of 6" />
          <OTPFieldSeparator />
          <OTPFieldInput aria-label="Character 4 of 6" />
          <OTPFieldInput aria-label="Character 5 of 6" />
          <OTPFieldInput aria-label="Character 6 of 6" />
        </OTPField>
      </section>
    </>
  ),
});
