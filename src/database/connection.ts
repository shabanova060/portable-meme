import { drizzle } from "drizzle-orm/bun-sql";

if (!Bun.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const database = drizzle(Bun.env.DATABASE_URL);
