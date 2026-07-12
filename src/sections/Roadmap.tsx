import { motion } from "framer-motion";
import { ROADMAP } from "../data";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative w-full bg-black px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <div className="mb-4 text-[13px] uppercase tracking-[0.2em] text-white/40">
            The 6-week map
          </div>
          <h2
            className="font-light leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(30px, 6vw, 56px)" }}
          >
            Six weeks. <span className="text-bio-pulse">Zero</span> coasting.
          </h2>
          <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-white/55">
            This is a fast-track session — a new chapter almost every day. Here's
            the shape of it so nothing sneaks up on you. Dates are tentative and
            may shift; always check weekly D2L announcements.
          </p>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-bio-cyan/60 via-white/15 to-transparent md:left-[9px]" />

          <div className="flex flex-col gap-10">
            {ROADMAP.map((r, i) => (
              <motion.div
                key={r.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-9 md:pl-12"
              >
                <div className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-bio-cyan bg-black md:h-[19px] md:w-[19px]" />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="text-[16px] font-bold text-white sm:text-[18px]">
                    {r.week}
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.15em] text-bio-cyan">
                    {r.dates}
                  </span>
                </div>
                <div className="mt-1 text-[15px] text-white/85 sm:text-[17px]">
                  {r.focus}
                </div>
                <div className="mt-1 text-[13px] leading-relaxed text-white/45">
                  {r.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
