"use client";

import { motion } from "framer-motion";

interface OpenBookButtonProps {
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}

export default function OpenBookButton({ onHover, onClick }: OpenBookButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className="group relative inline-flex items-center gap-3 border-b border-ink-brown/30 pb-1 font-display text-lg tracking-wide text-ink-brown transition-colors hover:border-gold-muted"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="relative">
        Open the Book
        <motion.span
          className="absolute -bottom-0.5 left-0 h-px bg-gold-muted"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
      <motion.span
        className="inline-block"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        &rarr;
      </motion.span>
    </motion.button>
  );
}
