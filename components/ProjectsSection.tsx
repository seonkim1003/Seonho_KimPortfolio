"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { MotionStagger } from "./MotionFade";

export function ProjectsSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          id="work-heading"
          eyebrow="Featured Work"
          title="Things I've built and led"
          description="Three websites and one healthcare app — small attempts at turning research, fundraising, or storytelling into something that helps real people."
        />

        <MotionStagger
          as="div"
          staggerChildren={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
