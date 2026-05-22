import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { getContactHref } from "@/features/service";

const navItems = [
  { label: "Offer", href: "/#offer" },
  { label: "Fixes", href: "/#fixes" },
  { label: "Cleanup", href: "/#cleanup" },
  { label: "Proof", href: "/#proof" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Demo", href: "/demo" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex size-9 items-center justify-center rounded-lg bg-ink text-sm font-bold text-white">
            AM
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">
            Ahmed Mohsen
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              className="text-sm font-medium text-zinc-600 transition hover:text-ink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          className="hidden sm:inline-flex"
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
