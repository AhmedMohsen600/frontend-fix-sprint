import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "mint" | "sky" | "coral" | "gold";
  className?: string;
};

const tones = {
  neutral: "border-white/10 bg-white/8 text-white/72",
  mint: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
  sky: "border-blue-300/20 bg-blue-400/10 text-blue-100",
  coral: "border-red-300/20 bg-red-300/10 text-red-100",
  gold: "border-amber-300/20 bg-amber-300/10 text-amber-100"
};

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-[10px] border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
