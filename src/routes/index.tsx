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
import { Radio, RadioGroup } from "~/components/ui/RadioGroup";
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
        <h2 className="text-heading-24">There will be charts here soon...</h2>
      </section>
    </>
  ),
});
