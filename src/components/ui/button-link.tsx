import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-ink bg-ink text-white hover:bg-black",
  secondary: "border-line bg-white text-ink hover:border-ink",
  ghost: "border-transparent bg-transparent text-ink hover:bg-white/70"
};

export function ButtonLink({
  children,
  className,
  icon,
  iconPosition = "end",
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {iconPosition === "start" ? icon : null}
      <span>{children}</span>
      {iconPosition === "end" ? icon : null}
    </a>
  );
}
