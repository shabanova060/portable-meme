import { Link } from "@tanstack/react-router";
import css from "~/components/layouts/Sidebar.module.css";

export const Sidebar = () => {
  return (
    <nav className={css.Sidebar}>
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
      </ul>
    </nav>
  );
};
