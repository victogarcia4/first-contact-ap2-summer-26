import type { ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Reveal -- fade-up on scroll into view (fires once).
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  className,
  amount = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.215, 0.61, 0.355, 1.0] }}
    >
      {children}
    </motion.div>
  );
}
