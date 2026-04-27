"use client";

import { metrics } from "@/lib/data";
import { MotionStagger, MotionStaggerItem } from "./MotionFade";

export function ImpactStats() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="relative"
    >
      <h2 id="impact-heading" className="sr-only">
        Impact at a glance
      </h2>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="rounded-3xl border border-white/60 bg-white/70 px-6 py-8 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur md:px-10 md:py-10">
          <MotionStagger
            as="ul"
            className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          >
            {metrics.map((m) => (
              <MotionStaggerItem
                as="li"
                key={m.label}
                className="flex flex-col gap-1"
              >
                <span className="font-mono text-2xl font-semibold tabular-nums text-zinc-900 md:text-3xl">
                  {m.value}
                </span>
                <span className="text-sm font-medium text-zinc-900">
                  {m.label}
                </span>
                <span className="text-xs text-zinc-500">{m.hint}</span>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
