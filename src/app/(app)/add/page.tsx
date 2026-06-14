import { Zap } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";

export default function AddPage() {
  return (
    <>
      <PageHeader title="Quick Add" description="Log anything in a few seconds." />
      <EmptyState
        icon={Zap}
        title="Quick Add is coming"
        description="This is where you'll log water, expenses, food, and workouts in one tap. Tracker types and entry forms land in Phase 1."
      />
    </>
  );
}
