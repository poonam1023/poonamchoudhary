"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface TreeOfValuesProps {
  className?: string;
  style?: React.CSSProperties;
}

const leaderColor = "rgba(110,90,78,0.45)";
const labelInk = "#6E5A4E";
const labelStrong = "#4A3728";

const annotations = [
  {
    key: "growth",
    anchor: [770, 158],
    end: [1226, 118],
    control: [1011, 94],
    lines: ["V. GROWTH IS", "LIFELONG"],
    align: "end",
    delay: 0.2,
  },
  {
    key: "boundaries",
    anchor: [1062, 370],
    end: [1246, 318],
    control: [1165, 302],
    lines: ["IV. BOUNDARIES", "WITH LOVE"],
    align: "end",
    delay: 0.32,
  },
  {
    key: "connection",
    anchor: [940, 560],
    end: [1240, 565],
    control: [1108, 506],
    lines: ["II. CONNECTION BEFORE", "CORRECTION"],
    align: "end",
    delay: 0.44,
  },
  {
    key: "empathy",
    anchor: [610, 330],
    end: [322, 304],
    control: [444, 278],
    lines: ["III. EMPATHY CREATES", "RESILIENCE"],
    align: "start",
    delay: 0.56,
  },
  {
    key: "presence",
    anchor: [520, 535],
    end: [318, 598],
    control: [406, 578],
    lines: ["I. PRESENCE BEFORE", "PERFECTION"],
    align: "start",
    delay: 0.68,
  },
  {
    key: "roots",
    anchor: [768, 900],
    end: [318, 916],
    control: [532, 952],
    lines: ["FOUNDATIONAL BELIEF:", "SEEING THE CHILD AS", "A WHOLE PERSON"],
    align: "start",
    delay: 0.08,
  },
] as const;

export default function TreeOfValues({
  className = "",
  style = {},
}: TreeOfValuesProps) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        left: "50%",
        top: "7%",
        height: "86%",
        aspectRatio: "3 / 2",
        transform: "translateX(-50%)",
        zIndex: 14,
        ...style,
      }}
    >
      <Image
        src="/tree-of-values.png"
        alt="Tree of values illustration"
        width={1536}
        height={1024}
        priority
        className="h-full w-full object-contain"
        style={{
          display: "block",
          opacity: 0.98,
        }}
        sizes="(max-width: 768px) 100vw, 60vw"
      />

      <svg
        viewBox="0 0 1536 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        {annotations.map((item) => {
          const [anchorX, anchorY] = item.anchor;
          const [endX, endY] = item.end;
          const [controlX, controlY] = item.control;
          const labelOffset = item.align === "end" ? -18 : 18;
          const textAnchor = item.align;

          return (
            <g key={item.key}>
              <motion.path
                d={`M ${anchorX} ${anchorY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                stroke={leaderColor}
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.85,
                  delay: item.delay,
                  ease: "easeInOut",
                }}
              />
              <motion.g
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: item.delay + 0.42,
                  ease: "easeOut",
                }}
              >
                <circle cx={endX} cy={endY} r="2.5" fill={leaderColor} />
                <line
                  x1={endX}
                  y1={endY}
                  x2={endX + (item.align === "end" ? -22 : 22)}
                  y2={endY}
                  stroke={leaderColor}
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                {item.lines.map((line, index) => (
                  <text
                    key={line}
                    x={endX + labelOffset}
                    y={endY - 16 + index * 15}
                    fill={index === 0 ? labelStrong : labelInk}
                    fontFamily="var(--font-sans), sans-serif"
                    fontSize={index === 0 ? "15" : "14"}
                    fontWeight={index === 0 ? 700 : 600}
                    letterSpacing="0.08em"
                    textAnchor={textAnchor}
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
