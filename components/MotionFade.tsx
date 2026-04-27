"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "li";
  y?: number;
};

const ease = [0.16, 1, 0.3, 1];

export function MotionFade({
  children,
  delay = 0,
  className,
  as = "div",
  y = 16,
}: Props) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={variants}
      transition={{ duration: reduced ? 0 : 0.6, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}

export function MotionStagger({
  children,
  className,
  staggerChildren = 0.06,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  as?: "div" | "ul" | "section";
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : staggerChildren },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function MotionStaggerItem({
  children,
  className,
  as = "div",
  y = 12,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
  y?: number;
}) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0 : 0.5, ease },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
