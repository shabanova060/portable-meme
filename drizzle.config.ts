import { defineConfig } from "drizzle-kit";

if (!Bun.env.DATABASE_URL) throw Error("DATABASE_URL is missing from .env!");

export default defineConfig({
  dialect: "postgresql",
  schema: "src/server/database/schema.ts",
  out: "drizzle",
  dbCredentials: {
    url: Bun.env.DATABASE_URL,
  },
});
