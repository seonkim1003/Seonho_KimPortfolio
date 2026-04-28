"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, RotateCcw } from "lucide-react";
import { accentClasses, type Project } from "@/lib/data";
import { MotionStaggerItem } from "./MotionFade";

function useCanHover() {
  const [canHover, setCanHover] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return canHover;
}

type Props = { project: Project };

function WebsiteCard({ project }: Props) {
  const [flipped, setFlipped] = useState(false);
  const canHover = useCanHover();
  const Icon = project.icon;
  const accent = accentClasses[project.accent];
  const hostname = project.url
    ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  const handleMouseEnter = useCallback(() => {
    if (canHover) setFlipped(true);
  }, [canHover]);

  const handleMouseLeave = useCallback(() => {
    if (canHover) setFlipped(false);
  }, [canHover]);

  const handleClick = useCallback(() => {
    if (!canHover) setFlipped((f) => !f);
  }, [canHover]);

  return (
    <MotionStaggerItem as="article" className="perspective-[1200px]">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className={`relative h-full [transform-style:preserve-3d] transition-transform duration-500 ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        >
          {/* Front */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur [backface-visibility:hidden] md:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-zinc-100 blur-2xl opacity-35"
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
                  className="flex size-9 items-center justify-center rounded-full bg-white text-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.06)] ring-1 ring-zinc-200/70"
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

            <p className="mt-auto pt-4 text-center text-[11px] text-zinc-400">
              {canHover ? "Hover to flip" : "Tap to flip"}
            </p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div
              className="inline-flex size-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 overflow-hidden"
            >
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              ) : (
                <Icon className="size-7 text-white" aria-hidden />
              )}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <ExternalLink className="size-4" aria-hidden />
              Visit Website
            </a>
            {hostname && (
              <p className="mt-1 font-mono text-xs text-zinc-400">{hostname}</p>
            )}
            {!canHover && (
              <button
                onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
                className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
              >
                <RotateCcw className="size-3" aria-hidden />
                Flip back
              </button>
            )}
          </div>
        </div>
      </div>
    </MotionStaggerItem>
  );
}

function ResearchCard({ project }: Props) {
  const [flipped, setFlipped] = useState(false);
  const canHover = useCanHover();
  const accent = accentClasses[project.accent];

  const handleMouseEnter = useCallback(() => {
    if (canHover) setFlipped(true);
  }, [canHover]);

  const handleMouseLeave = useCallback(() => {
    if (canHover) setFlipped(false);
  }, [canHover]);

  const handleClick = useCallback(() => {
    if (!canHover) setFlipped((f) => !f);
  }, [canHover]);

  return (
    <MotionStaggerItem as="article" className="perspective-[1200px]">
      <div
        className="cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <div
          className={`relative h-full [transform-style:preserve-3d] transition-transform duration-500 ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
        >
          {/* Front */}
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.7)_inset,0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_-12px_rgba(0,0,0,0.06)] backdrop-blur [backface-visibility:hidden] md:p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-zinc-100 blur-2xl opacity-35"
            />
            <div className="relative flex items-start justify-between gap-4">
              <div
                className={`inline-flex size-12 items-center justify-center rounded-2xl ${accent.iconBg}`}
              >
                {project.emoji ? (
                  <span className="text-2xl" role="img" aria-label={project.title}>
                    {project.emoji}
                  </span>
                ) : null}
              </div>
              <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-zinc-600 ring-1 ring-zinc-200/70">
                {project.kind}
              </span>
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

            <p className="mt-auto pt-4 text-center text-[11px] text-zinc-400">
              {canHover ? "Hover to flip" : "Tap to flip"}
            </p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-zinc-900 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {project.image && (
              <div className="relative flex-1 min-h-0">
                <Image
                  src={project.image}
                  alt={`${project.title} — presenting at science fair`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
              </div>
            )}
            <div className="relative px-7 pb-7 pt-5 md:px-8 md:pb-8">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Competition Highlights
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                <li className="flex items-baseline gap-2">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-400" />
                  Competed at LACSEF (LA County Science & Engineering Fair)
                </li>
                <li className="flex items-baseline gap-2">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-400" />
                  2nd Place — Human Services, SkillsUSA State Competition
                </li>
              </ul>
              {!canHover && (
                <button
                  onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs text-zinc-500 transition-colors hover:text-zinc-300"
                >
                  <RotateCcw className="size-3" aria-hidden />
                  Flip back
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </MotionStaggerItem>
  );
}

export function ProjectCard({ project }: Props) {
  if (project.kind === "App") {
    return <ResearchCard project={project} />;
  }
  return <WebsiteCard project={project} />;
}
