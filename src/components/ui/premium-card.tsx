import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PremiumCardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
  tone?: "dark" | "light";
};

export function PremiumCard({
  as: Component = "article",
  className,
  tone = "dark",
  ...props
}: PremiumCardProps) {
  return (
    <Component
      className={cn(
        "group relative overflow-hidden rounded-[22px] border shadow-dark-soft transition duration-500 hover:-translate-y-1",
        tone === "dark"
          ? "border-white/10 bg-[linear-gradient(180deg,#111622_0%,#080a10_100%)] text-white"
          : "border-white/10 bg-white/8 text-white",
        className
      )}
      {...props}
    />
  );
}

export function PremiumCardGlow() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-[linear-gradient(90deg,transparent,#0542ff,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(5,66,255,0.28),transparent_36%)] opacity-80 transition duration-500 group-hover:opacity-100"
      />
    </>
  );
}
