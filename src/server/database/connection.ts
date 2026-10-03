import { drizzle } from "drizzle-orm/bun-sql";

if (!Bun.env.DATABASE_URL) throw Error("DATABASE_URL is missing from .env!");

export const database = drizzle(Bun.env.DATABASE_URL);
