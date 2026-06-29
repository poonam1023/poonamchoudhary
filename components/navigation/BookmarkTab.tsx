"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkTabProps {
  label: string;
  numeral: string;
  isActive: boolean;
  onClick: () => void;
  index: number;
  color: { main: string; text: string };
  xOffset: number; // px right of spine (left: 0 = spine crease)
}

// ─────────────────────────────────────────────────────────────────────────────
// CLOTH RIBBON GEOMETRY
//  Total height  84px
//  PageEdge      8px  — masks top portion of ribbon
//  Swallowtail V-cut at bottom
// ─────────────────────────────────────────────────────────────────────────────
const W = 18;      // Ribbon width
const H = 84;      // Ribbon height
const VCUT = 7;    // swallowtail cut depth

export default function BookmarkTab({
  label,
  numeral,
  isActive,
  onClick,
  index,
  color,
  xOffset,
}: BookmarkTabProps) {
  const [hovered, setHovered] = React.useState(false);

  // Active: slides down 12px for prominent hang. Hover: slides down 6px. Inactive: sits at 0px.
  const targetY = isActive ? 12 : hovered ? 6 : 0;

  // Swallowtail ribbon shape polygon path
  const swallowtailPath = `polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - ${VCUT}px), 0 100%)`;

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        top: 0,
        left: xOffset,
        width: W,
        height: H,
        // Realistic multi-stage cloth shadow cast onto the page face
        filter: isActive
          ? "drop-shadow(1px 4px 8px rgba(0,0,0,0.18)) drop-shadow(2px 8px 16px rgba(0,0,0,0.10))"
          : "drop-shadow(0.5px 2px 4px rgba(0,0,0,0.12)) drop-shadow(1px 4px 8px rgba(0,0,0,0.06))",
      }}
      initial={{ y: -6, opacity: 0 }}
      animate={{ y: targetY, opacity: 1 }}
      transition={{
        y: { duration: 0.32, ease: "easeOut" },
        opacity: { duration: 0.45, delay: 0.1 + index * 0.05 },
      }}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={label}
        className="relative w-full h-full focus:outline-none"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        aria-label={isActive ? `Current chapter: ${label}` : `Go to ${label}`}
        aria-pressed={isActive}
      >
        {/* ── RIBBON BODY ── */}
        <div
          className="absolute inset-0 transition-colors duration-300"
          style={{
            clipPath: swallowtailPath,
            backgroundColor: color.main,
          }}
        >
          {/* 1. Fine Linen/Cloth Weave Overlay */}
          <div
            className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 3px),
                repeating-linear-gradient(0deg, #000, #000 1px, transparent 1px, transparent 3px)
              `,
            }}
          />

          {/* 2. Stitched Edges (Fine dashes down left and right borders) */}
          <div
            className="absolute top-0 bottom-[10px] left-[1.5px] w-[0.5px] opacity-40"
            style={{
              borderLeft: "0.75px dashed #FAF7EE",
            }}
          />
          <div
            className="absolute top-0 bottom-[10px] right-[1.5px] w-[0.5px] opacity-40"
            style={{
              borderLeft: "0.75px dashed #FAF7EE",
            }}
          />

          {/* 3. Subtle Ribbon Crease (Vertical gradient in middle for 3D fold depth) */}
          <div
            className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[4px] pointer-events-none opacity-[0.18]"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(255,255,255,0.3) 100%)",
            }}
          />

          {/* 4. Shadow/Glow transition at insertion point (top edge) */}
          <div
            className="absolute top-0 left-0 right-0 h-4 pointer-events-none opacity-40"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)",
            }}
          />
        </div>

        {/* ── GOLD FOIL TYPOGRAPHY ── */}
        <div
          className="absolute left-0 right-0 pointer-events-none select-none"
          style={{
            top: 14,
            height: "45%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          <span
            className="font-display font-bold tracking-[0.18em] text-center"
            style={{
              fontSize: "9px",
              textTransform: "uppercase",
              // Elegant reflective gold foil gradient
              background: isActive
                ? "linear-gradient(135deg, #ECC880 0%, #C49E52 50%, #FAF0CD 100%)"
                : "linear-gradient(135deg, #ECC880/70 0%, #C49E52/70 50%, #FAF0CD/70 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0.5px 0.5px 0.5px rgba(0,0,0,0.25))",
              opacity: isActive ? 1.0 : 0.75,
              transition: "opacity 0.25s ease",
            }}
          >
            {numeral}
          </span>
        </div>
      </button>
    </motion.div>
  );
}
