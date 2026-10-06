import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brands/$brandId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/brands/$brandId"!</div>;
}
