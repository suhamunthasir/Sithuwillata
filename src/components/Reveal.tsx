import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** delay in seconds */
  delay?: number;
  /** vertical travel in px */
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "section";
};

/**
 * Scroll-triggered fade-up used across the page to mimic New Story's
 * smooth, staggered entrance animations.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
