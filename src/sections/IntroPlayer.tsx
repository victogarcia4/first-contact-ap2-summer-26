import { motion } from "framer-motion";

export function IntroPlayer() {
  return (
    <section id="intro" className="relative w-full bg-black px-6 py-28">
      {/* soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(56,225,255,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 text-[13px] uppercase tracking-[0.2em] text-white/40">
            Press play · turn the sound on
          </div>
          <h2
            className="font-light leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(30px, 6vw, 56px)" }}
          >
            Watch the <span className="text-bio-cyan">intro</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            A quick hello and a walkthrough of how this course works. Hit play,
            unmute, and get the full picture before day one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.02] shadow-[0_0_60px_-20px_rgba(56,225,255,0.5)]"
        >
          <video
            className="aspect-video w-full bg-black"
            controls
            playsInline
            preload="metadata"
            poster="/assets/hero-poster.jpg"
          >
            <source src="/assets/intro.mp4" type="video/mp4" />
            Your browser doesn't support embedded video.
          </video>
        </motion.div>

        <p className="mt-4 text-center text-[12px] text-white/35">
          🔊 Audio plays here — the background clips elsewhere on the page stay
          muted so the page can autoplay them.
        </p>
      </div>
    </section>
  );
}
