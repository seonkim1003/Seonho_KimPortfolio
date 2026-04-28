"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24 lg:pb-32 lg:pt-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Left column: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur"
            >
              <span aria-hidden className="relative flex size-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
              </span>
              Open to research collaborations & shadowing
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: 0.05, ease }}
              className="mt-6 text-[clamp(2.25rem,1rem+5.5vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-zinc-900"
            >
              Hi, I&apos;m {profile.name.split(" ")[0]}.
              <br />
              <span className="text-zinc-900">
                {profile.headline}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: 0.12, ease }}
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: 0.2, ease }}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#about"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(24,24,27,0.35)] transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_12px_32px_-8px_rgba(56,189,248,0.4)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Get to know me
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-medium text-zinc-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                See my work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.6, delay: 0.35, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" aria-hidden />
                {profile.location}
              </span>
              <span
                aria-hidden
                className="hidden size-1 rounded-full bg-zinc-300 sm:inline-block"
              />
              <span>{profile.tagline}</span>
            </motion.div>
          </div>

          {/* Right column: avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: reduced ? 1 : 0.96, y: reduced ? 0 : 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.8, delay: 0.15, ease }}
            className="relative mx-auto w-full max-w-sm lg:mt-2"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_24px_60px_-24px_rgba(56,189,248,0.4)]">
              {/* Decorative orbs */}
              <div
                aria-hidden
                className="absolute -left-10 -top-10 size-44 rounded-full bg-sky-100"
              />
              <div
                aria-hidden
                className="absolute -bottom-12 -right-10 size-48 rounded-full bg-zinc-100"
              />

              <Image
                src="/me.png"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 90vw, 384px"
              />

              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-white/90 via-white/60 to-transparent px-6 pb-5 pt-16 text-center">
                <p className="text-sm font-medium text-zinc-900">
                  {profile.name}
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200/60 backdrop-blur">
                  <Sparkles className="size-3 text-amber-500" aria-hidden />
                  Hi! Glad you stopped by.
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <div className="absolute -bottom-4 -left-4 hidden rotate-[-4deg] rounded-2xl border border-zinc-200/70 bg-white px-4 py-3 text-xs shadow-[0_8px_24px_-12px_rgba(0,0,0,0.10)] sm:block">
              <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                Currently
              </p>
              <p className="mt-0.5 text-sm font-medium text-zinc-900">
                Building a med-adherence app
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
