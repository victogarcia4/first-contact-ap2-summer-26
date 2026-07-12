import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrambleIn } from "../components/ScrambleText";
import { COURSE } from "../data";

export function Hero({ entranceComplete }: { entranceComplete: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Hero video autoplay failed:", err);
      });
    }
  }, []);

  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[100dvh] w-full flex-col overflow-hidden px-4 pb-8 pt-24 sm:px-6 sm:pb-12 md:px-8"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        defaultMuted
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/intro.mp4" type="video/mp4" />
      </video>

      {/* Darkening + tint overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.06]" />

      {/* Giant watermark word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="select-none font-display uppercase leading-none"
          style={{
            fontSize: "clamp(90px, 26vw, 460px)",
            letterSpacing: "-4px",
            opacity: 0.08,
            color: "#38E1FF",
            transform: "translateY(30px)",
          }}
        >
          ANATOMY
        </span>
      </div>

      {/* Top eyebrow */}
      <motion.div
        className="relative z-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] uppercase tracking-[0.25em] text-white/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-bio-cyan">●</span>
        <span>{COURSE.code}</span>
        <span className="text-white/30">/</span>
        <span>{COURSE.term}</span>
        <span className="text-white/30">/</span>
        <span>Session {COURSE.session}</span>
      </motion.div>

      {/* spacer pushes content down */}
      <div className="flex-1" />

      {/* Bottom content */}
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-5">
          <h1
            className="font-light leading-[0.92] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(44px, 10vw, 108px)" }}
          >
            <ScrambleIn
              text="Anatomy"
              delay={200}
              triggered={entranceComplete}
              className="block"
            />
            <ScrambleIn
              text="& Physiology"
              delay={500}
              triggered={entranceComplete}
              className="block text-bio-cyan"
            />
          </h1>

          <motion.p
            className="max-w-md text-[14px] leading-relaxed text-white/70 sm:text-[15px]"
            initial={{ opacity: 0, y: 22 }}
            animate={
              entranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }
            }
            transition={{
              duration: 0.9,
              ease: [0.215, 0.61, 0.355, 1.0],
              delay: 0.3,
            }}
          >
            Part two of the human body's operating system — endocrine,
            circulatory, immune, respiratory, digestive, reproductive & urinary.
            Six weeks. One comprehensive map of how you actually work.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: entranceComplete ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <a
              href="#kickoff"
              className="rounded-full bg-bio-cyan px-6 py-3 text-[13px] font-bold text-black transition hover:bg-white"
            >
              Join the July 16 kickoff
            </a>
            <a
              href="#materials"
              className="rounded-full border border-white/25 px-6 py-3 text-[13px] font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              What's in D2L →
            </a>
          </motion.div>
        </div>

        {/* Right — start date badge */}
        <motion.div
          className="text-left md:text-right"
          initial={{ opacity: 0, y: 22 }}
          animate={
            entranceComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }
          }
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-white/50">
            Class begins
          </div>
          <div
            className="font-light leading-[0.95] tracking-[-0.03em] text-white"
            style={{ fontSize: "clamp(30px, 6vw, 64px)" }}
          >
            Jul 16
          </div>
          <div className="text-[12px] text-white/50">Thursday · 2026</div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="relative z-10 mt-8 flex items-center gap-2.5 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-bio-cyan transition-colors duration-300 cursor-pointer w-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: entranceComplete ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          document.getElementById("start")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-bio-cyan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
