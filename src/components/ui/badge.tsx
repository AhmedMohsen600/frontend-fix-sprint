import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "mint" | "sky" | "coral" | "gold";
  className?: string;
};

const tones = {
  neutral: "border-slate-200 bg-white text-slate-700",
  mint: "border-emerald-200 bg-emerald-50 text-emerald-800",
  sky: "border-blue-200 bg-blue-50 text-blue-800",
  coral: "border-red-200 bg-red-50 text-red-800",
  gold: "border-amber-200 bg-amber-50 text-amber-800"
};

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
