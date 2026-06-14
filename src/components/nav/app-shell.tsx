import type { ReactNode } from "react";

import { BottomNav } from "./bottom-nav";
import { Sidebar } from "./sidebar";

/** Responsive chrome: sidebar on desktop, bottom nav on mobile. */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh">
      <Sidebar />
      {/* pb-20 keeps content clear of the fixed mobile bottom nav. */}
      <main className="flex-1 pb-20 md:pb-0">
        <div className="mx-auto w-full max-w-3xl px-4 py-6 md:px-8 md:py-8">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
