import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: () => (
    <>
      <h1 className="">Products</h1>
      <p>This is the products page.</p>
      <section>
        <h2>Product List</h2>
        <ul>
          <li>
            <a href="/products/1">Product 1</a>
          </li>
        </ul>
      </section>
    </>
  ),
});
