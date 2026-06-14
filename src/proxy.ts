import { NextResponse } from "next/server";

/**
 * Next.js 16 renamed `middleware` to `proxy`. This runs on the Node.js runtime.
 *
 * Route protection lives here. It's a pass-through today because no auth
 * provider is configured yet (see src/auth.ts) — enforcing it now would lock
 * out the entire app. Once a provider exists, replace the body with:
 *
 *   import { auth } from "@/auth";
 *   export default auth((req) => {
 *     if (!req.auth) {
 *       return NextResponse.redirect(new URL("/sign-in", req.nextUrl));
 *     }
 *   });
 */
export function proxy() {
  return NextResponse.next();
}

export const config = {
  // Protect everything except Next internals, the auth API, and static assets.
  matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico|sign-in).*)"],
};
