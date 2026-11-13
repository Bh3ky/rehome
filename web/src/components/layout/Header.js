"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "@/components/layout/Logo";
import LocationStatus from "@/components/layout/LocationStatus";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronDown, Close, Menu } from "@/components/ui/icons";
import { NAV_LINKS, REHOME_CTA, whatsappLink } from "@/config/site";
import { getActiveCampaigns } from "@/data/campaigns";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop
  const [mobileCampaignsOpen, setMobileCampaignsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const campaigns = getActiveCampaigns();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setDropdownOpen(false);
      setMobileOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = (e) => e.matches && setMobileOpen(false);

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, []);

  const solid = scrolled || mobileOpen;
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transform-gpu will-change-transform">
      <div
        inert={scrolled}
        className={`overflow-hidden bg-brand text-white transition-[max-height] duration-300 ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="flex h-10 items-center justify-center gap-3 px-4 text-sm font-medium">
          <LocationStatus />
          <span aria-hidden="true" className="hidden text-white/50 sm:inline">
            |
          </span>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span className="underline underline-offset-4">
              Get in touch with us on WhatsApp
            </span>
            <ArrowRight width={16} height={16} className="animate-nudge" />
          </a>
        </div>
      </div>

      <nav
        aria-label="Main"
        className={`transition-colors duration-300 [body:has([data-dark-top])_&]:bg-white ${
          solid ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="site-container flex h-24 items-center justify-between md:h-28">
          <Logo />

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setDropdownOpen(false);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                    onClick={() => setDropdownOpen(true)}
                    className="flex items-center gap-1.5 text-[17px] font-medium hover:text-brand"
                  >
                    {link.label}
                    <ChevronDown
                      width={16}
                      height={16}
                      className={`transition-transform ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                      <div className="w-80 rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                        <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wider text-ink/50">
                          Active campaigns
                        </p>
                        {campaigns.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/campaigns/${c.slug}`}
                            onClick={() => setDropdownOpen(false)}
                            className="block rounded-xl px-3 py-2.5 hover:bg-surface"
                          >
                            <span className="block font-medium">{c.title}</span>
                            <span className="block text-sm text-ink/60">
                              {c.hub} · {c.city}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href={link.href}
                          onClick={() => setDropdownOpen(false)}
                          className="mt-1 flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-sm font-medium text-brand hover:bg-surface"
                        >
                          View all campaigns
                          <ArrowRight width={15} height={15} />
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[17px] font-medium hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="flex items-center gap-3">
            <Button
              href={REHOME_CTA.href}
              variant="outline"
              className="hidden px-5 py-2.5 sm:inline-flex"
            >
              {REHOME_CTA.label}
            </Button>
            <Button
              href="/contact"
              className="hidden px-5 py-2.5 sm:inline-flex"
            >
              Contact Us
            </Button>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-xl hover:bg-black/5 lg:hidden"
            >
              {mobileOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="max-h-[calc(100svh-6rem)] overflow-y-auto border-t border-black/5 bg-white px-5 pb-6 pt-2 lg:hidden">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <li key={link.label} className="border-b border-black/5">
                    <button
                      type="button"
                      aria-expanded={mobileCampaignsOpen}
                      onClick={() => setMobileCampaignsOpen((o) => !o)}
                      className="flex w-full items-center justify-between py-4 text-lg font-medium"
                    >
                      {link.label}
                      <ChevronDown
                        className={`transition-transform ${
                          mobileCampaignsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileCampaignsOpen && (
                      <div className="pb-3">
                        {campaigns.map((c) => (
                          <Link
                            key={c.slug}
                            href={`/campaigns/${c.slug}`}
                            onClick={closeMobile}
                            className="block rounded-xl px-3 py-2.5 hover:bg-surface"
                          >
                            <span className="block font-medium">{c.title}</span>
                            <span className="block text-sm text-ink/60">
                              {c.hub} · {c.city}
                            </span>
                          </Link>
                        ))}
                        <Link
                          href={link.href}
                          onClick={closeMobile}
                          className="block px-3 py-2.5 text-sm font-medium text-brand"
                        >
                          View all campaigns →
                        </Link>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={link.label} className="border-b border-black/5">
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className="block py-4 text-lg font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <Button
              href={REHOME_CTA.href}
              variant="outline"
              onClick={closeMobile}
              className="mt-5 w-full"
            >
              {REHOME_CTA.label}
            </Button>
            <Button
              href="/contact"
              onClick={closeMobile}
              className="mt-3 w-full"
            >
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
