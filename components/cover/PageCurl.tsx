"use client";

import { motion } from "framer-motion";

interface PageCurlProps {
  isHovered: boolean;
}

export default function PageCurl({ isHovered }: PageCurlProps) {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32">
      <motion.svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <defs>
          <radialGradient
            id="curl-shadow"
            cx="100%"
            cy="100%"
            r="100%"
          >
            <stop offset="0%" stopColor="#2C221A" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#2C221A" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#2C221A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.path
          d={isHovered ? "M128 72 L128 128 L72 128 Z" : "M128 96 L128 128 L96 128 Z"}
          fill="url(#curl-shadow)"
          animate={isHovered ? { d: "M128 56 L128 128 L56 128 Z" } : { d: "M128 96 L128 128 L96 128 Z" }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.path
          d={isHovered ? "M128 72 L128 128 L72 128Z" : "M128 96 L128 128 L96 128Z"}
          fill="#EFE4D2"
          stroke="#DCCBB3"
          strokeWidth="0.5"
          animate={
            isHovered
              ? {
                  d: "M128 56 L128 128 L56 128Q52 100 72 88Q96 80 128 56Z",
                }
              : { d: "M128 96 L128 128 L96 128Z" }
          }
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.svg>
    </div>
  );
}
