"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MaskedRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
};

export function MaskedReveal({ children, className, delay = "0s" }: MaskedRevealProps) {
  return (
    <span className={cn("reveal-clip", className)} style={{ "--reveal-delay": delay } as CSSProperties}>
      <span className="block">{children}</span>
    </span>
  );
}

type SoftRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
};

export function SoftReveal({ children, className, delay = "0s" }: SoftRevealProps) {
  return (
    <div className={cn("reveal-soft", className)} style={{ "--reveal-delay": delay } as CSSProperties}>
      {children}
    </div>
  );
}

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 32
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "transition-[opacity,transform,filter] duration-[760ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform,filter]",
        isVisible ? "translate-y-0 opacity-100 blur-0" : "opacity-0 blur-sm",
        className
      )}
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`
      }}
    >
      {children}
    </div>
  );
}
