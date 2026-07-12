import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { ScrambleText } from "./ScrambleText";
import { LINKS } from "../data";

const NAV = [
  { label: "Start", href: "#start" },
  { label: "Materials", href: "#materials" },
  { label: "Roadmap", href: "#roadmap" },
];

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative h-3 w-[18px]">
      <motion.span
        className="absolute left-0 h-[1.5px] w-full bg-white"
        style={{ top: 0 }}
        animate={open ? { rotate: 45, y: 5.25 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.span
        className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-white"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute left-0 h-[1.5px] w-full bg-white"
        style={{ bottom: 0 }}
        animate={open ? { rotate: -45, y: -5.25 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </div>
  );
}

export function Navbar({ entranceComplete }: { entranceComplete: boolean }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: entranceComplete ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Left cluster */}
        <div className="flex items-center gap-2">
          <a
            href="#top"
            className="flex h-11 items-center gap-2 rounded-[14px] border border-white/10 bg-white/10 px-4 backdrop-blur-md transition hover:bg-white/[0.18]"
          >
            <Logo size={18} className="text-bio-cyan" />
            <span className="text-[14px] font-bold tracking-tight text-white">
              A&amp;P<span className="text-bio-cyan"> II</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 rounded-[14px] border border-white/10 bg-white/10 px-2 py-1 backdrop-blur-md md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onMouseEnter={() => setHovered(n.href)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-[10px] px-3 py-2 text-[13px] text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                <ScrambleText text={n.label} isHovered={hovered === n.href} />
              </a>
            ))}
          </nav>
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <a
            href="#kickoff"
            className="hidden h-11 items-center gap-2 rounded-full bg-bio-cyan px-5 text-[13px] font-bold text-black transition hover:bg-white sm:flex"
          >
            Join the kickoff
          </a>
          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/10 backdrop-blur-md md:hidden"
          >
            <Hamburger open={open} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-1 flex flex-col gap-1 rounded-2xl border border-white/10 bg-black/80 p-3 backdrop-blur-xl md:hidden"
          >
            {[...NAV, { label: "Kickoff", href: "#kickoff" }].map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href={LINKS.zoom}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-bio-cyan px-4 py-3 text-center text-[15px] font-bold text-black"
            >
              Open Zoom link ↗
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
