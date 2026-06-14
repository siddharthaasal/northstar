import { CalendarClock } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";

export default function RoutinesPage() {
  return (
    <>
      <PageHeader
        title="Routines"
        description="Reusable groups of actions, like a morning routine."
      />
      <EmptyState
        icon={CalendarClock}
        title="No routines yet"
        description="Bundle actions you repeat — water, vitamins, sunscreen — into a single routine. Coming in Phase 4."
      />
    </>
  );
}
