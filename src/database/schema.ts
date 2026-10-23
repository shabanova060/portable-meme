import { snakeCase } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core/columns";
import { id, timestamps } from "~/database/columns";

export const admins = snakeCase.table("admins", {
  id: id(),
  firstName: varchar({ length: 64 }).notNull(),
  lastName: varchar({ length: 64 }).notNull(),
  email: varchar({ length: 128 }).unique().notNull(),
  passwordHash: varchar({ length: 264 }).notNull(),
  ...timestamps,
});

export const users = snakeCase.table("users", {
  id: id(),
  firstName: varchar({ length: 64 }).notNull(),
  lastName: varchar({ length: 64 }).notNull(),
  email: varchar({ length: 128 }).unique().notNull(),
  passwordHash: varchar({ length: 264 }).notNull(),
  ...timestamps,
});
