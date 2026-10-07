import { Link } from "@tanstack/react-router";

export function Sidebar() {
  return (
    <div className="row-span-2 col-start-1 z-50 bg-background-100 shadow-border w-64 h-full">
      <nav aria-label="Main Navigation" className="p-4">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
