"use client";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { MotionStagger, MotionStaggerItem } from "./MotionFade";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="What I bring to the lab and the room"
        />

        <MotionStagger
          staggerChildren={0.06}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((g) => {
            const Icon = g.icon;
            return (
              <MotionStaggerItem
                key={g.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-zinc-200/70">
                    <Icon className="size-4 text-sky-600" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {g.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full bg-zinc-50 px-2.5 py-1 text-[12px] text-zinc-700 ring-1 ring-zinc-200/70"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
