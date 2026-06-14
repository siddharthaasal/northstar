import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";

import { db } from "@/db";
import { accounts, sessions, users, verificationTokens } from "@/db/schema";

/**
 * Auth.js (NextAuth v5) configuration.
 *
 * This is wired but intentionally has no providers yet — add one (e.g. an
 * OAuth provider or Credentials) and the matching env vars to enable sign-in.
 * Until then `auth()` resolves to `null` and the app runs unauthenticated.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  session: { strategy: "database" },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    // TODO: add a provider, e.g.
    // GitHub({ clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET }),
  ],
});
