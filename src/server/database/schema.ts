import { sql } from "drizzle-orm";
import {
  boolean,
  check,
  foreignKey,
  index,
  integer,
  primaryKey,
  snakeCase,
  text,
  timestamp,
  unique,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { id, seo, timestamps } from "~/server/database/columns";
import {
  inventoryPolicy,
  productStatus,
  visibilityStatus,
} from "~/server/database/enums";

/* -------------------------------------------------------------------------- */
/* Brands                                                                     */
/* -------------------------------------------------------------------------- */

export const brands = snakeCase.table(
  "brands",
  {
    id: id(),
    slug: varchar({ length: 250 }).unique().notNull(),
    logo: varchar({ length: 500 }),
    logoAlt: varchar({ length: 250 }),
    coverImage: varchar({ length: 500 }),
    coverImageAlt: varchar({ length: 250 }),
    name: varchar({ length: 250 }).notNull(),
    description: text(),
    position: integer().default(0).notNull(),
    status: visibilityStatus().default("active").notNull(),
    ...seo,
    ...timestamps,
  },
  (t) => [
    index("brand_name_idx").on(t.name),
    check("brand_slug_lowercase", sql`${t.slug} = lower(${t.slug})`),
  ],
);

/* -------------------------------------------------------------------------- */
/* Products                                                                   */
/* -------------------------------------------------------------------------- */

export const products = snakeCase.table(
  "products",
  {
    id: id(),
    brandId: uuid().references(() => brands.id, { onDelete: "restrict" }),
    slug: varchar({ length: 250 }).unique().notNull(),
    name: varchar({ length: 250 }).notNull(),
    description: text(),
    status: productStatus().default("draft").notNull(),
    ...seo,
    ...timestamps,
  },
  (t) => [
    index("product_status_idx").on(t.status),
    index("product_brand_idx").on(t.brandId),
    check("product_slug_lowercase", sql`${t.slug} = lower(${t.slug})`),
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
  (t) => [
    unique("product_option_name_uq").on(t.productId, t.name),
    // FK target so the junction can prove option and variant share a product.
    unique("product_option_id_product_uq").on(t.id, t.productId),
  ],
);

export const productOptionValues = snakeCase.table(
  "product_option_values",
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
    // FK target so the junction can prove a value belongs to its option.
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
    sku: varchar({ length: 100 }).notNull(),
    barcode: varchar({ length: 100 }),
    // Minor units. Currency is intentionally not modelled yet (single-currency).
    priceAmount: integer().notNull(),
    compareAtAmount: integer(),
    // Deterministic string of the variant's sorted `optionId:optionValueId`
    // pairs (or a hash of it). "" = the option-less default variant.
    optionsHash: text().default("").notNull(),
    position: integer().default(0).notNull(),
    isPurchasable: boolean().default(true).notNull(),
    trackInventory: boolean().default(true).notNull(),
    // May go negative only under the 'backorder' policy; the negative amount
    // is then the outstanding backordered quantity.
    stockQuantity: integer().default(0).notNull(),
    inventoryPolicy: inventoryPolicy().default("deny").notNull(),
    ...timestamps,
  },
  (t) => [
    unique("product_variant_options_uq").on(t.productId, t.optionsHash),
    // FK target for the junction.
    unique("product_variant_id_product_uq").on(t.id, t.productId),
    // Case-insensitive SKU uniqueness. Look up with lower(sku) = lower($1).
    uniqueIndex("product_variant_sku_uq").on(sql`lower(${t.sku})`),
    check("product_variant_price_nonneg", sql`${t.priceAmount} >= 0`),
    check(
      "product_variant_compare_at_gt_price",
      sql`${t.compareAtAmount} > ${t.priceAmount}`,
    ),
    // Switching a variant with negative stock back to 'deny' is rejected
    // until the backorder is resolved.
    check(
      "product_variant_stock_nonneg",
      sql`${t.stockQuantity} >= 0 OR ${t.inventoryPolicy} = 'backorder'`,
    ),
  ],
);

/**
 * Which value a variant has for each option.
 *
 * Integrity chain, all enforced by composite FKs:
 *   variant  -> same product  <- option      (product_id on both FKs)
 *   option_value -> belongs to option        (option_value_id, option_id)
 *
 * The option and option-value FKs are NO ACTION (not cascade/restrict):
 * deleting a product still works (the junction rows go via the variant
 * cascade, checked at end of statement), but deleting an option or value
 * that a variant uses is rejected. To remove an option, delete its junction
 * rows and recompute affected options_hash values in one transaction first.
 */
export const productVariantOptionValues = snakeCase.table(
  "product_variant_option_values",
  {
    productId: uuid().notNull(),
    variantId: uuid().notNull(),
    optionId: uuid().notNull(),
    optionValueId: uuid().notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.variantId, t.optionId] }),
    foreignKey({
      name: "pvov_variant_product_fk",
      columns: [t.variantId, t.productId],
      foreignColumns: [productVariants.id, productVariants.productId],
    }).onDelete("cascade"),
    foreignKey({
      name: "pvov_option_product_fk",
      columns: [t.optionId, t.productId],
      foreignColumns: [productOptions.id, productOptions.productId],
    }),
    foreignKey({
      name: "pvov_value_option_fk",
      columns: [t.optionValueId, t.optionId],
      foreignColumns: [productOptionValues.id, productOptionValues.optionId],
    }),
    index("product_variant_option_value_idx").on(t.optionValueId),
    index("product_variant_option_option_idx").on(t.optionId),
  ],
);

/* -------------------------------------------------------------------------- */
/* Categories: hierarchical taxonomy (navigation, breadcrumbs, URLs)          */
/* -------------------------------------------------------------------------- */

/**
 * Adjacency list. Trees are small, so ancestors/descendants are resolved with
 * a recursive CTE; no denormalized path to keep in sync. If descendant
 * lookups ever show up in profiles, add a closure table without touching
 * this one.
 *
 * Slugs are globally unique (like products/brands) so URLs stay stable when a
 * category moves; the cost is slugs like "men-shoes" / "women-shoes".
 *
 * Moving a category: in one transaction, reject the move if the new parent
 * is the category itself or any of its descendants (recursive CTE). The DB
 * only blocks the direct self-reference.
 */
export const categories = snakeCase.table(
  "categories",
  {
    id: id(),
    parentId: uuid(),
    slug: varchar({ length: 250 }).unique().notNull(),
    name: varchar({ length: 250 }).notNull(),
    description: text(),
    image: varchar({ length: 500 }),
    position: integer().default(0).notNull(),
    status: visibilityStatus().default("inactive").notNull(),
    ...seo,
    ...timestamps,
  },
  (t) => [
    foreignKey({
      name: "category_parent_fk",
      columns: [t.parentId],
      foreignColumns: [t.id],
    }).onDelete("restrict"),
    index("category_parent_position_idx").on(t.parentId, t.position),
    check("category_slug_lowercase", sql`${t.slug} = lower(${t.slug})`),
    check("category_parent_not_self", sql`${t.parentId} <> ${t.id}`),
  ],
);

/**
 * A product can sit in several categories, with at most one primary
 * (the canonical category for breadcrumbs and canonical URLs).
 * Attach products to leaf categories only; that rule lives in the app.
 */
export const productCategories = snakeCase.table(
  "product_categories",
  {
    productId: uuid()
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    // restrict: a category with products must be emptied/reassigned first.
    categoryId: uuid()
      .notNull()
      .references(() => categories.id, { onDelete: "restrict" }),
    isPrimary: boolean().default(false).notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.productId, t.categoryId] }),
    index("product_category_category_idx").on(t.categoryId),
    uniqueIndex("product_category_primary_uq")
      .on(t.productId)
      .where(sql`${t.isPrimary}`),
  ],
);

/* -------------------------------------------------------------------------- */
/* Collections: flat, curated merchandising lists                             */
/* ("New arrivals", "Summer sale", "Gift ideas")                              */
/* -------------------------------------------------------------------------- */

export const collections = snakeCase.table(
  "collections",
  {
    id: id(),
    slug: varchar({ length: 250 }).unique().notNull(),
    name: varchar({ length: 250 }).notNull(),
    description: text(),
    image: varchar({ length: 500 }),
    status: visibilityStatus().default("inactive").notNull(),
    ...seo,
    ...timestamps,
  },
  (t) => [
    check("collection_slug_lowercase", sql`${t.slug} = lower(${t.slug})`),
  ],
);

export const productCollections = snakeCase.table(
  "product_collections",
  {
    collectionId: uuid()
      .notNull()
      .references(() => collections.id, { onDelete: "cascade" }),
    productId: uuid()
      .notNull()
      .references(() => products.id, { onDelete: "cascade" }),
    // Manual ordering within the collection. Not unique: reorder in bulk.
    position: integer().default(0).notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.collectionId, t.productId] }),
    index("product_collection_position_idx").on(t.collectionId, t.position),
    index("product_collection_product_idx").on(t.productId),
  ],
);

/* -------------------------------------------------------------------------- */
/* Promotions: percentage off lines that match a condition                    */
/* -------------------------------------------------------------------------- */

/**
 * Evaluation rules (application code; the schema only stores the data):
 *  - Applies when status <> 'inactive' (hidden still applies, it is just not
 *    advertised) AND now >= starts_at AND (ends_at IS NULL OR now < ends_at).
 *  - code IS NULL  -> automatic. code set -> applies only when the customer enters it.
 *  - Applied per cart line. A line matches when its variant, its product,
 *    one of its product's categories (including descendant categories) or one
 *    of its product's collections is a target of the promotion.
 *  - A promotion with NO targets applies to nothing (never to the whole cart),
 *    so losing a target can only narrow a promotion, never widen it.
 *  - No stacking: if several promotions match a line, the highest percentage wins.
 *  - Lines that came from a bundle are excluded; bundles already carry a discount.
 *  - Percentages only, so no money or currency columns here.
 *  - Orders must snapshot the applied percentage, the amount, and the
 *    promotion's name/code as text (FK ON DELETE SET NULL), never rely on this row.
 */
export const promotions = snakeCase.table(
  "promotions",
  {
    id: id(),
    name: varchar({ length: 250 }).notNull(),
    code: varchar({ length: 64 }),
    // Basis points: 1250 = 12.5%. Integer to avoid float/numeric rounding.
    percentOffBps: integer().notNull(),
    startsAt: timestamp({ withTimezone: true, mode: "date" })
      .defaultNow()
      .notNull(),
    endsAt: timestamp({ withTimezone: true, mode: "date" }),
    status: visibilityStatus().default("inactive").notNull(),
    ...timestamps,
  },
  (t) => [
    // Case-insensitive code uniqueness (NULL codes never conflict).
    // Look up with lower(code) = lower($1).
    uniqueIndex("promotion_code_uq").on(sql`lower(${t.code})`),
    check(
      "promotion_code_clean",
      sql`${t.code} = btrim(${t.code}) AND ${t.code} <> ''`,
    ),
    check(
      "promotion_percent_range",
      sql`${t.percentOffBps} BETWEEN 1 AND 10000`,
    ),
    check("promotion_window_valid", sql`${t.endsAt} > ${t.startsAt}`),
  ],
);

/**
 * Exactly one target per row, each with a real FK. RESTRICT everywhere:
 * a product/variant/category/collection used by a promotion can't be deleted
 * until the promotion no longer targets it.
 */
export const promotionTargets = snakeCase.table(
  "promotion_targets",
  {
    id: id(),
    promotionId: uuid()
      .notNull()
      .references(() => promotions.id, { onDelete: "cascade" }),
    productId: uuid().references(() => products.id, { onDelete: "restrict" }),
    variantId: uuid().references(() => productVariants.id, {
      onDelete: "restrict",
    }),
    categoryId: uuid().references(() => categories.id, {
      onDelete: "restrict",
    }),
    collectionId: uuid().references(() => collections.id, {
      onDelete: "restrict",
    }),
  },
  (t) => [
    check(
      "promotion_target_exactly_one",
      sql`num_nonnulls(${t.productId}, ${t.variantId}, ${t.categoryId}, ${t.collectionId}) = 1`,
    ),
    // NULLs are distinct, so each constraint only applies to its own target kind.
    unique("promotion_target_product_uq").on(t.promotionId, t.productId),
    unique("promotion_target_variant_uq").on(t.promotionId, t.variantId),
    unique("promotion_target_category_uq").on(t.promotionId, t.categoryId),
    unique("promotion_target_collection_uq").on(t.promotionId, t.collectionId),
    // Reverse lookups ("which promotions touch this product?") and FK checks.
    index("promotion_target_product_idx").on(t.productId),
    index("promotion_target_variant_idx").on(t.variantId),
    index("promotion_target_category_idx").on(t.categoryId),
    index("promotion_target_collection_idx").on(t.collectionId),
  ],
);

/* -------------------------------------------------------------------------- */
/* Bundles ("sets"): fixed combinations of variants, cheaper together         */
/* -------------------------------------------------------------------------- */

/**
 * Bundle price = sum(variant.price_amount * quantity) reduced by discount_bps.
 * It tracks component prices automatically; nothing price-like is stored here.
 * Round once on the bundle total, then allocate the discount across component
 * lines (largest remainder) so the line discounts sum exactly to the total.
 *
 * Inventory: a bundle has no stock of its own. Adding one to a cart expands it
 * into its component lines (each carrying the bundle id and a snapshot into
 * order lines), so stock is decremented per variant by the existing atomic
 * path. Availability = min over components of floor(stock / quantity), and all
 * components must be purchasable.
 *
 * Components are specific variants ("Black / M"), not products. Let-the-customer-
 * pick-a-size would need a product-level slot table; add it only if needed.
 * A bundle needs at least two component rows (app-level).
 */
export const productBundles = snakeCase.table(
  "product_bundles",
  {
    id: id(),
    slug: varchar({ length: 250 }).unique().notNull(),
    name: varchar({ length: 250 }).notNull(),
    description: text(),
    image: varchar({ length: 500 }),
    status: productStatus().default("draft").notNull(),
    // Basis points off the component sum: 1500 = 15% cheaper as a set.
    discountBps: integer().notNull(),
    ...seo,
    ...timestamps,
  },
  (t) => [
    index("product_bundle_status_idx").on(t.status),
    check("product_bundle_slug_lowercase", sql`${t.slug} = lower(${t.slug})`),
    check(
      "product_bundle_discount_range",
      sql`${t.discountBps} BETWEEN 1 AND 9999`,
    ),
  ],
);

export const productBundleItems = snakeCase.table(
  "product_bundle_items",
  {
    bundleId: uuid()
      .notNull()
      .references(() => productBundles.id, { onDelete: "cascade" }),
    // restrict: removing a variant must not silently make a bundle cheaper.
    variantId: uuid()
      .notNull()
      .references(() => productVariants.id, { onDelete: "restrict" }),
    quantity: integer().default(1).notNull(),
    position: integer().default(0).notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.bundleId, t.variantId] }),
    index("product_bundle_item_variant_idx").on(t.variantId),
    check("product_bundle_item_quantity_pos", sql`${t.quantity} > 0`),
  ],
);
