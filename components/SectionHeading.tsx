import type { ReactNode } from "react";
import { MotionFade } from "./MotionFade";

type Props = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: Props) {
  const alignment = align === "center" ? "items-center text-center" : "items-start";

  return (
    <MotionFade as="header" className={`flex flex-col ${alignment} mb-10 md:mb-14`}>
      <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-sky-700">
        <span aria-hidden className="size-1 rounded-full bg-sky-500" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600">
          {description}
        </p>
      )}
    </MotionFade>
  );
}
