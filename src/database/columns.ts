import { sql } from "drizzle-orm";
import { uuid, timestamp } from "drizzle-orm/pg-core/columns";

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
