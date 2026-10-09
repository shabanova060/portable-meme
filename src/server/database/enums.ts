import { pgEnum } from "drizzle-orm/pg-core";

export const visibilityStatus = pgEnum("visibility_status", [
  "active",
  "hidden",
  "inactive",
]);

export const productStatus = pgEnum("product_status", [
  "active",
  "hidden",
  "draft",
  "archived",
]);

export const inventoryPolicy = pgEnum("inventory_policy", [
  "deny",
  "backorder",
  "preorder",
  "on_demand",
]);
