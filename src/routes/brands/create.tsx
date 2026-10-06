import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/brands/create")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/brands/create"!</div>;
}
