import type { Variants } from "framer-motion";

/** Standard cubic-bezier easing for mobile section reveals */
export const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];

/**
 * Creates stagger-child variants for section items.
 * `custom={index}` on the motion element sets the delay per item.
 */
export function createItemVariants(
  durationSeconds = 0.6,
  baseDelaySeconds = 0.1
): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: durationSeconds,
        ease: EASE_OUT,
        delay: i * baseDelaySeconds,
      },
    }),
  };
}

/** Standard container variants for stagger children */
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Simple fade-slide-up with no custom delay */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};
