import { motion } from "framer-motion";
import { CountUp } from "../components/CountUp";
import { METRICS } from "../data";

export function Metrics() {
  return (
    <section className="relative w-full overflow-hidden bg-black px-6 py-28">
      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,225,255,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center text-[13px] uppercase tracking-[0.2em] text-white/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          The course at a glance
        </motion.div>

        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              <div
                className="font-light leading-none tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(40px, 9vw, 84px)" }}
              >
                <CountUp end={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-3 text-[12px] tracking-wide text-white/45 sm:text-[14px]">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
