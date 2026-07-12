import { motion } from "framer-motion";
import { GRADING, COURSE } from "../data";

export function Grading() {
  return (
    <section className="relative w-full bg-black px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-12">
        {/* Grade breakdown */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="mb-4 text-[13px] uppercase tracking-[0.2em] text-white/40">
              How you're graded
            </div>
            <h2
              className="font-light leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(26px, 5vw, 44px)" }}
            >
              1,000 points. <span className="text-bio-cyan">100%</span> yours to
              earn.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {GRADING.map((g, i) => (
              <motion.div
                key={g.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="mb-1.5 flex items-baseline justify-between">
                  <span className="text-[14px] text-white/85">{g.label}</span>
                  <span className="text-[13px] text-white/45">{g.detail}</span>
                  <span className="ml-3 w-12 text-right text-[15px] font-bold text-bio-cyan">
                    {g.pct}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-bio-cyan to-bio-pulse"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.pct * 2}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-white/40">
            Grade scale: A 90+ · B 80–89.9 · C 70–79.9 · D 60–69.9 · F below 60.
            Plus up to <span className="text-lsc-gold">5% extra credit</span>.
          </p>
        </div>

        {/* Must-know dates + tech */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <div className="mb-4 text-[13px] uppercase tracking-[0.2em] text-white/40">
              Lock these in
            </div>
            <h2
              className="font-light leading-[1.05] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(26px, 5vw, 44px)" }}
            >
              Dates & tech that <span className="text-bio-pulse">matter</span>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Class starts", v: "Jul 16" },
              { k: "Official Day of Record", v: COURSE.odr },
              { k: "Withdrawal 'W' date", v: COURSE.withdrawal },
              { k: "Final Exam", v: COURSE.finalExam },
            ].map((d, i) => (
              <motion.div
                key={d.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="text-[11px] uppercase tracking-[0.12em] text-white/40">
                  {d.k}
                </div>
                <div className="mt-1 text-[16px] font-bold text-white">
                  {d.v}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 rounded-xl border border-bio-pulse/30 bg-bio-pulse/5 p-5"
          >
            <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-bio-pulse">
              ⚠ Don't get dropped
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/60">
              You must complete <strong className="text-white">Lecture Exam 1</strong>{" "}
              by the Official Day of Record ({COURSE.odr}) or you'll be dropped
              and may lose financial aid. Exams need Chrome, a webcam and your
              phone as a second camera — no Chromebooks or iPads.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
