import { drizzle } from "drizzle-orm/bun-sql";
import { DATABASE_URL } from "$app/env/private";

export const database = drizzle(DATABASE_URL);
