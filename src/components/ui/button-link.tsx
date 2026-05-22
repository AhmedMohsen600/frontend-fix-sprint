import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "border-sky bg-sky text-white shadow-[0_0_34px_rgba(5,66,255,0.34)] hover:border-blue-400 hover:bg-blue-500",
  secondary:
    "border-white/12 bg-white/8 text-white hover:border-white/28 hover:bg-white/12 hover:text-white",
  ghost:
    "border-transparent bg-transparent text-white/72 hover:bg-white/8 hover:text-white"
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
        "group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[10px] border px-4 py-2 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-black",
        variants[variant],
        className
      )}
      {...props}
    >
      {iconPosition === "start" && icon ? (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
      {iconPosition === "end" && icon ? (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
