import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/login/")({
  component: () => (
    <main>
      <h1>Login</h1>
      <section className="Material" data-size="base">
        <Link to="/">Back to Home</Link>
      </section>
    </main>
  ),
});
