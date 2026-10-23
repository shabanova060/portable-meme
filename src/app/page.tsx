import { verifyLogin } from "~/lib/dal";
export const instant = false;

export default async function Home() {
  const admin = await verifyLogin();

  return (
    <section>
      <h1 className="form-heading">Log in to Dashboard</h1>
    </section>
  );
}
