import {
  Dumbbell,
  Flame,
  Beef,
  GlassWater,
  ListChecks,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Metric = {
  label: string;
  icon: LucideIcon;
  value: string;
  hint: string;
};

// Placeholder metrics — these read from `entries` once tracking is wired up.
const metrics: Metric[] = [
  { label: "Calories", icon: Flame, value: "—", hint: "of daily goal" },
  { label: "Protein", icon: Beef, value: "—", hint: "grams today" },
  { label: "Water", icon: GlassWater, value: "—", hint: "of daily goal" },
  { label: "Workout", icon: Dumbbell, value: "—", hint: "logged today" },
  { label: "Routines", icon: ListChecks, value: "—", hint: "completed" },
  { label: "Expenses", icon: Wallet, value: "—", hint: "spent today" },
];

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Today" description="How am I doing today?" />
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </CardTitle>
                <Icon className="size-4 text-muted-foreground" aria-hidden />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold tabular-nums">
                  {metric.value}
                </div>
                <p className="text-xs text-muted-foreground">{metric.hint}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </>
  );
}
