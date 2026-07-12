import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { INSTRUCTOR } from "../data";

export function Welcome() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 15,
    damping: 32,
    mass: 1.8,
  });
  const y = useTransform(smooth, [0, 1], [60, -120]);
  const opacity = useTransform(smooth, [0.25, 0.5], [0, 1]);
  const transform = useMotionTemplate`perspective(400px) rotateX(20deg) translateY(${y}px)`;

  return (
    <section
      id="start"
      ref={ref}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div
        className="mx-auto max-w-5xl px-6 text-center sm:px-12"
        style={{ perspective: 400 }}
      >
        <motion.p
          style={{ transform, opacity }}
          className="select-none text-[22px] font-normal leading-[1.4] tracking-[-0.02em] text-white sm:text-[30px] md:text-[38px]"
        >
          Welcome to A&amp;P II. This is a continuation of everything you built in
          2401 — but now we connect the systems. You'll map how the body{" "}
          <span className="text-bio-cyan">senses</span>,{" "}
          <span className="text-bio-pulse">defends</span>, feeds, filters and
          reproduces, and how all of it holds{" "}
          <span className="text-bio-cyan">homeostasis</span> together.
        </motion.p>
      </div>

      {/* Instructor line */}
      <motion.div
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-[11px] uppercase tracking-[0.25em] text-white/40">
          Your instructor
        </div>
        <div className="mt-1 text-[15px] text-white/80">{INSTRUCTOR.name}</div>
      </motion.div>
    </section>
  );
}
