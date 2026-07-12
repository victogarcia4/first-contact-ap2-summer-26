import { motion } from "framer-motion";
import { MATERIALS, LINKS } from "../data";

const toneMap: Record<string, { chip: string; bar: string; glow: string }> = {
  pulse: {
    chip: "text-bio-pulse border-bio-pulse/40 bg-bio-pulse/10",
    bar: "bg-bio-pulse",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(255,59,107,0.6)]",
  },
  cyan: {
    chip: "text-bio-cyan border-bio-cyan/40 bg-bio-cyan/10",
    bar: "bg-bio-cyan",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(56,225,255,0.6)]",
  },
  gold: {
    chip: "text-lsc-gold border-lsc-gold/40 bg-lsc-gold/10",
    bar: "bg-lsc-gold",
    glow: "group-hover:shadow-[0_0_40px_-12px_rgba(253,181,21,0.55)]",
  },
};

export function Materials() {
  return (
    <section id="materials" className="relative w-full bg-black px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 text-[13px] uppercase tracking-[0.2em] text-white/40">
            Get set up
          </div>
          <h2
            className="font-light leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(30px, 6vw, 56px)" }}
          >
            Everything you need lives in{" "}
            <span className="text-bio-cyan">D2L</span>.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/55">
            Log in on day one and knock these out before the first exam. Reading
            the material is the single biggest predictor of your grade in this
            course.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m, i) => {
            const tone = toneMap[m.tone] ?? toneMap.cyan;
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 ${tone.glow}`}
              >
                <div className={`absolute left-0 top-0 h-full w-[3px] ${tone.bar}`} />
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-3xl">{m.emoji}</span>
                  <span
                    className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${tone.chip}`}
                  >
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-[17px] font-bold text-white">{m.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-white/55">
                  {m.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={LINKS.d2l}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-4 text-[14px] font-bold text-black transition hover:bg-bio-cyan"
          >
            🚀 Open D2L →
          </a>
          <span className="text-[12px] text-white/40">
            Navigation: Course Activities → Content / Course Materials
          </span>
        </motion.div>
      </div>
    </section>
  );
}
