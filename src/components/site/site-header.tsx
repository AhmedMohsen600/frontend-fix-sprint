"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-black/45 text-white backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" onClick={closeMenu}>
          <span className="flex h-11 w-[68px] items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.06] px-2.5 shadow-[0_0_34px_rgba(5,66,255,0.22)]">
            <Image
              alt=""
              aria-hidden="true"
              className="h-7 w-auto object-contain"
              height={122}
              priority
              src="/brand/ahmed-mohsen-mark-white.png"
              width={192}
            />
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
          className="hidden min-h-10 px-4 lg:inline-flex"
          href={getContactHref()}
          icon={<ArrowRight aria-hidden="true" className="size-4" />}
          variant="primary"
        >
          Send frontend issue
        </ButtonLink>

        <button
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-[12px] border border-white/12 bg-white/8 text-white shadow-sm transition hover:border-white/24 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-black lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/88 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto grid max-w-7xl gap-2 px-4 py-5 sm:px-6"
        >
          {navItems.map((item) => (
            <Link
              className="rounded-[12px] border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/72 transition hover:border-white/16 hover:bg-white/[0.08] hover:text-white"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            className="mt-2 w-full"
            href={getContactHref()}
            icon={<ArrowRight aria-hidden="true" className="size-4" />}
            onClick={closeMenu}
          >
            Send frontend issue
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
