import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { getContactHref } from "@/features/service";

const navItems = [
  { label: "Offer", href: "/#offer" },
  { label: "Fixes", href: "/#fixes" },
  { label: "Cleanup", href: "/#cleanup" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Proof", href: "/#proof" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Demo", href: "/demo" }
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/45 text-white backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex size-10 items-center justify-center rounded-[12px] bg-sky text-sm font-bold text-white shadow-[0_0_34px_rgba(5,66,255,0.32)]">
            AM
          </span>
          <span className="hidden text-sm font-semibold text-white sm:inline">
            Ahmed Mohsen
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-white/62 transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          className="hidden min-h-10 px-4 sm:inline-flex"
          href={getContactHref()}
          icon={<ArrowRight aria-hidden="true" className="size-4" />}
          variant="primary"
        >
          Send frontend issue
        </ButtonLink>
      </div>
    </header>
  );
}
