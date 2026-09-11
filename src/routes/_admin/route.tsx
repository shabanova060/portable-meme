import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "~/components/layouts/Header";
import { Sidebar } from "~/components/layouts/Sidebar";

export const Route = createFileRoute("/_admin")({
  component: (): React.JSX.Element => (
    <div className="Layout" data-layout="admin-layout">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  ),
});
