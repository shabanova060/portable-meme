import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  component: (): React.JSX.Element => (
    <div className="Layout" data-layout="auth-layout">
      <Outlet />
    </div>
  ),
});
