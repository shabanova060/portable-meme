import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  foreignKey,
  index,
  integer,
  pgEnum,
  primaryKey,
  snakeCase,
  text,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const productStatus = pgEnum("product_status", [
  "active",
  "hidden",
  "draft",
  "archived",
]);

export const inventoryPolicy = pgEnum("inventory_policy", [
  "deny",
  "backorder",
]);

const id = () =>
  uuid()
    .default(sql`uuidv7()`)
    .primaryKey();

const timestamps = {
  createdAt: timestamp({ withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp({ withTimezone: true, mode: "date" })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};

export const brands = snakeCase.table(
  "brands",
  {
    id: id(),
    slug: varchar({ length: 250 }).unique().notNull(),
    name: varchar({ length: 250 }).notNull(),
    logo: varchar({ length: 500 }),
    description: text(),
    ...timestamps,
  },
  (t) => [index("brand_name_idx").on(t.name)],
);

export const products = snakeCase.table(
  "products",
  {
    id: id(),
    brandId: uuid().references(() => brands.id, { onDelete: "restrict" }),
    slug: varchar({ length: 250 }).unique().notNull(),
    name: varchar({ length: 250 }).notNull(),
    description: text(),
    status: productStatus().default("draft").notNull(),
    ...timestamps,
  },
  (t) => [
    index("product_status_idx").on(t.status),
    index("product_brand_idx").on(t.brandId),
  ],
);

export const productOptions = snakeCase.table(
  "product_options",
  {
    id: id(),
    productId: uuid()
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    name: varchar({ length: 100 }).notNull(),
    position: integer().default(0).notNull(),
  },
  (t) => [unique("product_option_name_uq").on(t.productId, t.name)],
);

export const productOptionValues = snakeCase.table(
  "option_values",
  {
    id: id(),
    optionId: uuid()
      .notNull()
      .references(() => productOptions.id, { onDelete: "cascade" }),
    value: varchar({ length: 100 }).notNull(),
    position: integer().default(0).notNull(),
  },
  (t) => [
    unique("product_option_value_uq").on(t.optionId, t.value),
    unique("product_option_value_id_option_uq").on(t.id, t.optionId),
  ],
);

export const productVariants = snakeCase.table(
  "product_variants",
  {
    id: id(),
    productId: uuid()
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    sku: varchar({ length: 100 }).unique().notNull(),
    barcode: varchar({ length: 100 }),
    priceAmount: integer().notNull(),
    compareAtAmount: integer(),
    optionsHash: text().default("").notNull(),
    position: integer().default(0).notNull(),
    isPurchasable: boolean().default(true).notNull(),
    trackInventory: boolean().default(true).notNull(),
    stockQuantity: integer().default(0).notNull(),
    inventoryPolicy: inventoryPolicy().default("deny").notNull(),
    ...timestamps,
  },
  (t) => [
    unique("product_variant_options_uq").on(t.productId, t.optionsHash),
    check("product_variant_price_nonneg", sql`${t.priceAmount} >= 0`),
    check(
      "product_variant_compare_at_gt_price",
      sql`${t.compareAtAmount} IS NULL OR ${t.compareAtAmount} > ${t.priceAmount}`,
    ),
    check("product_variant_stock_nonneg", sql`${t.stockQuantity} >= 0`),
  ],
);

export const productVariantOptionValues = snakeCase.table(
  "product_variant_option_values",
  {
    variantId: uuid()
      .notNull()
      .references(() => productVariants.id, { onDelete: "cascade" }),
    optionId: uuid()
      .notNull()
      .references(() => productOptions.id, { onDelete: "cascade" }),
    optionValueId: uuid().notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.variantId, t.optionId] }),
    foreignKey({
      columns: [t.optionValueId, t.optionId],
      foreignColumns: [productOptionValues.id, productOptionValues.optionId],
    }),
    index("product_variant_option_value_idx").on(t.optionValueId),
  ],
);
