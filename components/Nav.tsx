"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-zinc-900 focus:shadow-md focus:outline focus:outline-2 focus:outline-sky-600"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 transition-[background,backdrop-filter,border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-b border-zinc-200/60 bg-white/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6"
        >
          <a
            href="#top"
            className="flex items-center gap-2 text-sm font-semibold text-zinc-900"
          >
            <span
              aria-hidden
              className="inline-flex size-7 items-center justify-center rounded-lg bg-sky-500 text-[11px] font-semibold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_4px_12px_-4px_rgba(56,189,248,0.5)]"
            >
              {profile.initials}
            </span>
            <span>{profile.shortName}</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors duration-150 hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="hidden h-9 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-150 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_4px_12px_-4px_rgba(56,189,248,0.25)] md:inline-flex"
            >
              Say hi
            </a>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors duration-150 hover:bg-zinc-50 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu className="size-4" aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-zinc-900/30 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-zinc-200/60 bg-white px-6 pb-8 pt-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.15)] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
          }}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
              <span
                aria-hidden
                className="inline-flex size-7 items-center justify-center rounded-lg bg-sky-500 text-[11px] font-semibold text-white shadow-sm"
              >
                {profile.initials}
              </span>
              {profile.shortName}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:bg-zinc-50"
              aria-label="Close menu"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-zinc-700 transition-colors hover:bg-sky-50/70 hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(24,24,27,0.4)] transition hover:bg-zinc-800"
          >
            Say hi
          </a>
        </div>
      </div>
    </>
  );
}
