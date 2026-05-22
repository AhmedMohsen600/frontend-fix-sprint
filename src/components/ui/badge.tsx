import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  tone?: "neutral" | "mint" | "sky" | "coral" | "gold";
  className?: string;
};

const tones = {
  neutral: "border-line bg-white text-ink",
  mint: "border-emerald-200 bg-emerald-50 text-emerald-900",
  sky: "border-sky-200 bg-sky-50 text-sky-900",
  coral: "border-orange-200 bg-orange-50 text-orange-900",
  gold: "border-yellow-200 bg-yellow-50 text-yellow-900"
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
