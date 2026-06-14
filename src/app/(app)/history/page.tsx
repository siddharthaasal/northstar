import { History } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";

export default function HistoryPage() {
  return (
    <>
      <PageHeader title="History" description="How have I been doing lately?" />
      <EmptyState
        icon={History}
        title="No entries yet"
        description="Every logged event shows up here. Start tracking and your timeline will fill in."
      />
    </>
  );
}
