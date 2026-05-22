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
  mint: "bg-emerald-300/10 text-emerald-100 border-emerald-300/20",
  sky: "bg-blue-400/10 text-blue-100 border-blue-300/20",
  coral: "bg-orange-300/10 text-orange-100 border-orange-300/20",
  gold: "bg-amber-300/10 text-amber-100 border-amber-300/20"
};

export function MetricCard({ label, value, change, tone, icon: Icon }: MetricCardProps) {
  return (
    <article className="dark-card rounded-[22px] p-5 transition duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-white/54">{label}</p>
        <span className={cn("rounded-lg border p-2", toneClasses[tone])}>
          <Icon aria-hidden="true" className="size-4" />
        </span>
      </div>
      <div className="mt-5 flex items-end justify-between gap-4">
        <strong className="text-3xl font-bold text-white">{value}</strong>
        <span className="text-sm font-semibold text-emerald-200">{change}</span>
      </div>
    </article>
  );
}
