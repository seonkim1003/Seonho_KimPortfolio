"use client";

import { Quote } from "lucide-react";
import {
  aboutCards,
  aboutIntro,
  accentClasses,
  personalFacts,
  profile,
} from "@/lib/data";
import { MotionFade, MotionStagger, MotionStaggerItem } from "./MotionFade";

const stripPlaceholder = (s: string) => s.replace(/^\[REPLACE\]\s*/i, "");

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        {/* Heading + lead */}
        <MotionFade as="header" className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
            <span aria-hidden className="size-1 rounded-full bg-sky-500" />
            {aboutIntro.eyebrow}
          </span>
          <h2
            id="about-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl"
          >
            {aboutIntro.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-700 md:text-xl">
            {stripPlaceholder(aboutIntro.lead)}
          </p>
        </MotionFade>

        {/* Personal facts row */}
        <MotionStagger
          as="ul"
          className="mt-10 flex flex-wrap gap-2"
          staggerChildren={0.04}
        >
          {personalFacts.map((fact) => (
            <MotionStaggerItem
              as="li"
              key={fact.question}
              className="inline-flex items-baseline gap-2 rounded-full border border-zinc-200/80 bg-white/70 px-3.5 py-1.5 text-xs shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur"
            >
              <span className="font-medium text-zinc-500">
                {fact.question}
              </span>
              <span aria-hidden className="text-zinc-300">
                ·
              </span>
              <span className="font-medium text-zinc-900">
                {stripPlaceholder(fact.answer)}
              </span>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Pull quote */}
        <MotionFade
          delay={0.1}
          className="relative mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 backdrop-blur md:p-10">
            <Quote
              className="absolute right-5 top-5 size-6 text-sky-200"
              aria-hidden
            />
            <p className="pr-10 text-2xl font-medium leading-snug tracking-tight text-zinc-900 md:pr-12 md:text-3xl">
              <span className="text-zinc-900">
                &ldquo;
              </span>
              {stripPlaceholder(aboutIntro.pullQuote)}
              <span className="text-zinc-900">
                &rdquo;
              </span>
            </p>
            <p className="mt-4 text-sm font-medium text-zinc-500">
              — {aboutIntro.pullQuoteAttribution}
            </p>
          </div>

          {/* Mini bio card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-8 backdrop-blur md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
              In short
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-zinc-500">Name</dt>
                <dd className="text-right font-medium text-zinc-900">
                  {profile.name}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-zinc-500">Based in</dt>
                <dd className="text-right text-zinc-800">
                  {profile.location}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-zinc-500">Currently</dt>
                <dd className="text-right text-zinc-800">
                  Research Team Captain
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-zinc-500">Languages</dt>
                <dd className="text-right text-zinc-800">EN · KO · ASL</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-t border-zinc-200/70 pt-3">
                <dt className="text-zinc-500">Email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-[12px] text-sky-700 transition-colors hover:text-sky-800"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </MotionFade>

        {/* About cards grid */}
        <MotionStagger
          staggerChildren={0.06}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5"
        >
          {aboutCards.map((card) => {
            const Icon = card.icon;
            const accent = accentClasses[card.accent];
            return (
              <MotionStaggerItem
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_2px_4px_rgba(0,0,0,0.04),0_16px_40px_-16px_rgba(56,189,248,0.18)]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-zinc-100 blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                />
                <div className="relative">
                  <div
                    className={`inline-flex size-11 items-center justify-center rounded-2xl ${accent.iconBg}`}
                  >
                    <Icon className={`size-5 ${accent.iconFg}`} aria-hidden />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-zinc-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-700">
                    {stripPlaceholder(card.body)}
                  </p>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>

        {/* Helper note for placeholders */}
        <MotionFade
          delay={0.2}
          className="mt-8 rounded-2xl border border-dashed border-sky-300/70 bg-sky-50/50 px-5 py-4 text-xs text-sky-800/80"
        >
          <span className="font-mono font-medium">[draft copy]</span> Every
          About section block is yours to rewrite — open{" "}
          <code className="rounded bg-white/70 px-1.5 py-0.5 font-mono text-[11px] text-sky-900">
            lib/data.ts
          </code>{" "}
          and search for the placeholder marker to find each section.
        </MotionFade>
      </div>
    </section>
  );
}
