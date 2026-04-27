"use client";

import { GraduationCap } from "lucide-react";
import { awards, education } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { MotionStagger, MotionStaggerItem } from "./MotionFade";

export function EducationAwardsSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="education-heading"
          eyebrow="Education & Awards"
          title="Where I'm learning and what I've been recognized for"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <MotionStagger as="div" className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              <span aria-hidden className="size-1 rounded-full bg-sky-500" />
              Education
            </h3>
            <ul className="flex flex-col gap-3">
              {education.map((e) => (
                <MotionStaggerItem
                  as="li"
                  key={e.school}
                  className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-zinc-200/70">
                      <GraduationCap
                        className="size-4 text-sky-600"
                        aria-hidden
                      />
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="text-base font-semibold text-zinc-900">
                          {e.school}
                        </h4>
                        <span className="font-mono text-xs text-zinc-500">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-zinc-600">{e.detail}</p>
                      {e.notes && (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {e.notes.map((n) => (
                            <li
                              key={n}
                              className="rounded-full bg-zinc-50 px-2.5 py-1 text-[12px] text-zinc-700 ring-1 ring-zinc-200/70"
                            >
                              {n}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </MotionStaggerItem>
              ))}
            </ul>
          </MotionStagger>

          <MotionStagger as="div" className="flex flex-col gap-4">
            <h3 className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
              <span aria-hidden className="size-1 rounded-full bg-amber-500" />
              Awards
            </h3>
            <ul className="flex flex-col gap-3">
              {awards.map((a) => {
                const Icon = a.icon;
                return (
                  <MotionStaggerItem
                    as="li"
                    key={a.title}
                    className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-amber-50 ring-1 ring-amber-200/70">
                        <Icon className="size-4 text-amber-600" aria-hidden />
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h4 className="text-base font-semibold text-zinc-900">
                            {a.title}
                          </h4>
                          <span className="font-mono text-xs text-zinc-500">
                            {a.year}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-zinc-600">{a.org}</p>
                      </div>
                    </div>
                  </MotionStaggerItem>
                );
              })}
            </ul>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
