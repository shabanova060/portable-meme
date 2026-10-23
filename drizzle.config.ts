import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/server/database/schema.ts",
  out: "./migrations",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_cTOvxh5st8LI@ep-long-dream-b2hyz4ai-pooler.c-6.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});
