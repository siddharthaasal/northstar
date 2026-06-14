import { UtensilsCrossed } from "lucide-react";

import { EmptyState } from "@/components/empty-state";
import { PageHeader } from "@/components/page-header";

export default function FoodPage() {
  return (
    <>
      <PageHeader
        title="Food Catalog"
        description="Reusable foods with their nutrition."
      />
      <EmptyState
        icon={UtensilsCrossed}
        title="No foods yet"
        description="Create a food once and reuse it whenever you log a meal. The catalog arrives in Phase 2."
      />
    </>
  );
}
