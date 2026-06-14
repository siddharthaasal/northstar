import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

// postgres-js connects lazily (on first query), so constructing the client at
// import time is safe even during `next build`. The fallback only keeps imports
// working without env; real queries require a valid DATABASE_URL at runtime.
const connectionString =
  process.env.DATABASE_URL ?? "postgres://localhost:5432/northstar";

if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL is not set. Database access will fail. See .env.example.");
}

// Reuse the client across hot reloads in development to avoid exhausting
// connections.
const globalForDb = globalThis as unknown as {
  client?: ReturnType<typeof postgres>;
};

const client =
  globalForDb.client ?? postgres(connectionString, { prepare: false });

if (process.env.NODE_ENV !== "production") {
  globalForDb.client = client;
}

export const db = drizzle(client, { schema });

export { schema };
