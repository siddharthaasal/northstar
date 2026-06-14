# Northstar

Northstar is a personal operating system.

It is not:
- A habit tracker
- An expense tracker
- A calorie tracker

Those are modules.

The core purpose is helping a user understand whether they are moving toward their desired future state.

Design priorities:

1. Fast capture
2. Daily awareness
3. Weekly reflection
4. Long-term trends

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui (dark-mode first)
- Drizzle ORM + PostgreSQL (Neon)
- Auth.js (NextAuth v5)

Everything tracked is an `Entry` against a `TrackerType` — new trackers need no
schema changes. See `.ai/` for principles and rules, `docs/plans/` for the spec.

## Getting started

```bash
pnpm install
cp .env.example .env        # then fill in DATABASE_URL and AUTH_SECRET
pnpm db:push                # create the schema in your database
pnpm dev
```

The app runs unauthenticated until an auth provider is configured — add one in
`src/auth.ts`, then enable route protection in `src/proxy.ts`.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` / `pnpm start` — production build and serve
- `pnpm lint` — ESLint
- `pnpm db:generate` — generate SQL migrations from the schema
- `pnpm db:migrate` — apply migrations
- `pnpm db:push` — push the schema directly (good for early dev)
- `pnpm db:studio` — open Drizzle Studio

## Layout

```
src/
  app/            # routes — (app) group holds the six primary screens
  components/     # nav shell, page primitives, ui/ (shadcn)
  db/             # Drizzle schema + client
  auth.ts         # Auth.js config
  proxy.ts        # Next 16 middleware (route protection)
drizzle/          # generated migrations
```
