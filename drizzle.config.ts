import { defineConfig } from "drizzle-kit";

// `generate` only reads the schema; `migrate`/`push`/`studio` need a real
// DATABASE_URL and will fail clearly without one.
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "postgres://localhost:5432/northstar",
  },
  verbose: true,
  strict: true,
});
