import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  label: string;
  value: string;
  change: string;
  tone: "mint" | "sky" | "coral" | "gold";
  icon: LucideIcon;
};

const toneClasses = {
  mint: "bg-emerald-50 text-emerald-700 border-emerald-100",
  sky: "bg-sky-50 text-sky-700 border-sky-100",
  coral: "bg-orange-50 text-orange-700 border-orange-100",
  gold: "bg-yellow-50 text-yellow-700 border-yellow-100"
};

export function MetricCard({ label, value, change, tone, icon: Icon }: MetricCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-zinc-500">{label}</p>
        <span className={cn("rounded-lg border p-2", toneClasses[tone])}>
          <Icon aria-hidden="true" className="size-4" />
        </span>
      </div>
      <div className="mt-5 flex items-end justify-between gap-4">
        <strong className="text-3xl font-bold text-ink">{value}</strong>
        <span className="text-sm font-semibold text-emerald-700">{change}</span>
      </div>
    </article>
  );
}
