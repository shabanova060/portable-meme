import { SignupForm } from "~/components/signup-form";

export default function LoginPage() {
  return (
    <main className="login-main">
      <section className="card">
        <h1 className="form-heading">Log in to Dashboard</h1>
        <SignupForm />
      </section>
    </main>
  );
}
