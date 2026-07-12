import { motion } from "framer-motion";
import { KICKOFF, LINKS } from "../data";

export function Kickoff() {
  return (
    <section
      id="kickoff"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-28"
    >
      {/* Video background reused, heavily tinted */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/intro.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,225,255,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Spinning ring badge */}
        <div className="relative mb-10 h-28 w-28">
          <div
            className="absolute inset-0 animate-spin-slow rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, #38E1FF 90deg, transparent 200deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-full border border-white/10 bg-black/60 backdrop-blur">
            <span className="text-4xl">🎥</span>
          </div>
        </div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="rounded-full border border-bio-cyan/40 bg-bio-cyan/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-bio-cyan"
        >
          Live course kickoff
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-light leading-[1.02] tracking-[-0.03em] text-white"
          style={{ fontSize: "clamp(38px, 8vw, 84px)" }}
        >
          {KICKOFF.dayLabel}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 flex items-center gap-3 text-[18px] text-white/80 sm:text-[22px]"
        >
          <span className="font-bold text-bio-cyan">
            {KICKOFF.time} {KICKOFF.tz}
          </span>
          <span className="text-white/30">·</span>
          <span>on Zoom</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 max-w-md text-[14px] leading-relaxed text-white/60"
        >
          {KICKOFF.note} We'll walk through the syllabus, D2L, exam setup and how
          to win this fast-track session. Attendance isn't mandatory — showing up
          just makes week one a lot easier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <a
            href={LINKS.zoom}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-bio-cyan px-9 py-4 text-[15px] font-bold text-black transition hover:scale-[1.03] hover:bg-white"
          >
            Join the Zoom kickoff ↗
          </a>
          <span className="break-all text-[11px] text-white/35">
            {LINKS.zoom}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
