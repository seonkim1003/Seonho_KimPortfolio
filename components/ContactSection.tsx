"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { MotionFade } from "./MotionFade";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <MotionFade className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_24px_60px_-24px_rgba(56,189,248,0.30)] md:p-14">
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
              <span aria-hidden className="size-1 rounded-full bg-sky-500" />
              Contact
            </span>

            <h2
              id="contact-heading"
              className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 md:text-5xl"
            >
              Let&apos;s build something{" "}
              <span className="text-zinc-900">
                that helps people
              </span>
              .
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg">
              Open to research collaborations, shadowing opportunities,
              tutoring requests, and conversations about pediatric healthcare,
              biotech, and youth-led community work.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 text-sm font-medium text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_24px_-8px_rgba(24,24,27,0.40)] transition-[background,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-[0_12px_32px_-8px_rgba(56,189,248,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Email me
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white/80 px-6 text-sm font-medium text-zinc-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                Browse my work
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-3 border-t border-zinc-200/60 pt-8 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/70">
                  <Mail className="size-4 text-sky-600" aria-hidden />
                </span>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-[13px] text-zinc-800 transition-colors hover:text-sky-700"
                    >
                      {profile.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/70">
                  <Phone className="size-4 text-sky-600" aria-hidden />
                </span>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:+1${profile.phone.replace(/-/g, "")}`}
                      className="font-mono text-[13px] text-zinc-800 transition-colors hover:text-sky-700"
                    >
                      {profile.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200/70">
                  <MapPin className="size-4 text-sky-600" aria-hidden />
                </span>
                <div>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Based in
                  </dt>
                  <dd className="text-[13px] text-zinc-800">
                    {profile.location}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
