import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary: "border-sky bg-sky text-white hover:border-blue-700 hover:bg-blue-700",
  secondary: "border-line bg-white text-ink hover:border-sky hover:text-sky",
  ghost: "border-transparent bg-transparent text-ink hover:bg-sky/5 hover:text-sky"
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
        "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2",
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
