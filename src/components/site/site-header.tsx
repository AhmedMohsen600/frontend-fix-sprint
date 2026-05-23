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
        <Link
          className="group flex min-w-0 items-center gap-3 rounded-[18px] focus:outline-none focus:ring-2 focus:ring-sky focus:ring-offset-2 focus:ring-offset-black"
          href="/"
          onClick={closeMenu}
        >
          <span className="relative flex h-10 w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-[16px] border border-white/10 bg-[radial-gradient(ellipse_80%_90%_at_25%_0%,rgba(5,66,255,0.32),transparent_62%),linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.035))] px-2.5 shadow-[0_18px_44px_rgba(5,10,30,0.32)] transition duration-300 group-hover:border-white/18 group-hover:bg-white/[0.08]">
            <span
              aria-hidden="true"
              className="absolute inset-x-3 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7),transparent)]"
            />
            <Image
              alt=""
              aria-hidden="true"
              className="h-[26px] w-auto object-contain drop-shadow-[0_0_16px_rgba(255,255,255,0.16)] transition duration-300 group-hover:scale-[1.04]"
              height={122}
              priority
              src="/brand/ahmed-mohsen-mark-white.png"
              width={192}
            />
          </span>
          <span className="hidden min-w-0 leading-none min-[460px]:grid">
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-white">
              Ahmed Mohsen
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/42">
              Senior Frontend
            </span>
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
