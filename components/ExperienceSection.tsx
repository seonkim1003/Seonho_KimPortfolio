"use client";

import { experience } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { MotionStagger, MotionStaggerItem } from "./MotionFade";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've been doing the work"
          description="Research leadership, biotech lab work, community fundraising, and one-on-one tutoring — the through-line is patient, hands-on care for people and data."
        />

        <MotionStagger as="ul" className="space-y-4">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <MotionStaggerItem
                as="li"
                key={`${item.org}-${item.role}`}
                className="relative grid grid-cols-1 gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_2px_4px_rgba(0,0,0,0.04),0_16px_40px_-16px_rgba(56,189,248,0.16)] md:grid-cols-[44px_1fr] md:gap-6 md:p-7"
              >
                <div
                  aria-hidden
                  className="relative inline-flex size-11 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-zinc-200/70"
                >
                  <Icon className="size-4 text-sky-600" />
                </div>
                <div>
                  <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-baseline md:gap-4">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-900 md:text-lg">
                        {item.role}
                      </h3>
                      <p className="text-sm text-zinc-600">
                        {item.org}
                        <span aria-hidden className="mx-2 text-zinc-300">
                          ·
                        </span>
                        <span className="text-zinc-500">{item.location}</span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-zinc-500">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-zinc-700 md:text-[15px]">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 rounded-full bg-sky-400"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
