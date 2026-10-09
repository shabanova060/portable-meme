import { sql } from "drizzle-orm";
import { timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const id = () =>
  uuid()
    .default(sql`uuidv7()`)
    .primaryKey();

export const timestamps = {
  createdAt: timestamp({ withTimezone: true, mode: "date" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp({ withTimezone: true, mode: "date" })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};

export const seo = {
  metaTitle: varchar({ length: 255 }),
  metaDescription: varchar({ length: 500 }),
};
