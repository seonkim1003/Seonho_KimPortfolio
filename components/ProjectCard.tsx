"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { accentClasses, type Project } from "@/lib/data";
import { MotionStaggerItem } from "./MotionFade";

type Props = { project: Project };

export function ProjectCard({ project }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const Icon = project.icon;
  const accent = accentClasses[project.accent];

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const isExternal = project.href.startsWith("http");
  const hostname = project.url
    ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <MotionStaggerItem as="article">
      <a
        ref={ref}
        href={project.href}
        onMouseMove={handleMouseMove}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        aria-label={`${project.title} — ${project.summary}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_2px_4px_rgba(0,0,0,0.04),0_16px_40px_-16px_rgba(56,189,248,0.20)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 md:p-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-zinc-100 blur-2xl opacity-35 transition-opacity duration-500 group-hover:opacity-55"
        />
        <div className="relative flex items-start justify-between gap-4">
          <div
            className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent.iconBg} overflow-hidden`}
          >
            {project.logo ? (
              <Image
                src={project.logo}
                alt={`${project.title} logo`}
                width={40}
                height={40}
                className="size-10 object-contain"
              />
            ) : project.emoji ? (
              <span className="text-2xl" role="img" aria-label={project.title}>
                {project.emoji}
              </span>
            ) : (
              <Icon className={`size-5 ${accent.iconFg}`} aria-hidden />
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 ring-1 ring-zinc-200/70">
              {project.kind}
            </span>
            <span
              aria-hidden
              className="flex size-9 items-center justify-center rounded-full bg-white text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>

        <div className="relative mt-6">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-[1.4rem]">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-zinc-500">
            {project.role}
          </p>
        </div>

        <p className="relative mt-3 text-[15px] leading-relaxed text-zinc-700">
          {project.summary}
        </p>

        <div className="relative mt-6 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${accent.chip}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {hostname && (
          <div className="relative mt-5 flex items-center gap-2 border-t border-zinc-200/70 pt-4 font-mono text-[12px] text-zinc-500">
            <span aria-hidden className="size-1 rounded-full bg-zinc-300" />
            {hostname}
          </div>
        )}
      </a>
    </MotionStaggerItem>
  );
}
