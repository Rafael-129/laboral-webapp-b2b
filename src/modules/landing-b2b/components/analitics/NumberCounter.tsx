"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate, useTransform } from "framer-motion";

type NumberCounterProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export default function NumberCounter({ value, duration = 1.2, prefix = "", suffix = "" }: NumberCounterProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: prefersReduced ? 0 : duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [inView, value, duration, prefersReduced, count]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
