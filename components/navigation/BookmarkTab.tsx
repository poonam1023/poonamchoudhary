"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookmarkTabProps {
  label: string;
  isActive: boolean;
  onNavigate: (page: number) => void;
  page: number;
  index: number;
  xOffset: number;
  rotation: number;
  height: number;
  tintOffset: number;
  notchOffset: number;
}

function BookmarkTab({
  label,
  isActive,
  onNavigate,
  page,
  index,
  xOffset,
  rotation,
  height: baseHeight,
  tintOffset,
  notchOffset,
}: BookmarkTabProps) {
  const [hovered, setHovered] = React.useState(false);

  const handleClick = React.useCallback(() => {
    onNavigate(page);
  }, [onNavigate, page]);

  const WIDTH = 62;
  const ACTIVE_DROP = 9;
  const HOVER_DROP = 4;
  const TOP_OFFSET = -6;

  const height = isActive ? baseHeight + 8 : baseHeight;
  const targetY = isActive ? ACTIVE_DROP : hovered ? HOVER_DROP : 0;

  const textColor = isActive ? "#FAF7F2" : "#4A3728";
  const iconColor = isActive ? "#FAF7F2" : "#5A3A2C";
  const notchWidth = isActive ? 2 : 1.5;

  const bgGradient = isActive
    ? "linear-gradient(180deg, #B6C1AA 0%, #A8B29A 36%, #98A58B 100%)"
    : "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(250,247,242,1) 18%, rgba(247,241,232,1) 80%, rgba(231,222,209,1) 100%)";

  const ambientShadow = isActive
    ? "drop-shadow(0 9px 18px rgba(50,35,20,0.12)) drop-shadow(0 2px 5px rgba(50,35,20,0.08))"
    : hovered
    ? "drop-shadow(0 4px 10px rgba(50,35,20,0.07)) drop-shadow(0 2px 4px rgba(50,35,20,0.03))"
    : "drop-shadow(0 3px 8px rgba(50,35,20,0.05)) drop-shadow(0 1px 3px rgba(50,35,20,0.02))";

  const notchDepth = 10 + notchOffset;
  const notchTip = 92 - Math.abs(notchOffset) * 0.5;

  const clipPath = `polygon(
    0.8% 0.4%, 99.2% 0%,
    100% calc(100% - ${notchDepth}px),
    ${53 + notchOffset * 0.3}% 100%,
    50% ${notchTip}%,
    ${47 - notchOffset * 0.3}% 100%,
    0% calc(100% - ${notchDepth + 1}px)
  )`;

  // ── Deterministic texture elements based on index ──
  const seed = index * 7 + 13;
  const fiberDefs = [
    { t: 16 + (seed % 11) * 6, l: 5 + (seed * 3) % 20, w: 14 + (seed % 7), r: -22 + (seed % 36) },
    { t: 42 + (seed * 5 % 13) * 5, l: 55 + (seed * 7) % 25, w: 9 + (seed * 3 % 8), r: 18 + (seed % 28) },
    { t: 68 + (seed * 11 % 9) * 4, l: 20 + (seed * 13) % 30, w: 11 + (seed % 6), r: -10 + (seed * 7 % 30) },
    { t: 28 + (seed * 17 % 7) * 8, l: 70 + (seed * 19) % 15, w: 7 + (seed * 5 % 6), r: 35 + (seed % 20) },
  ];

  const stainSpots = [
    { t: 22 + (seed % 15), l: 12 + (seed * 7 % 20), s: 3 + (seed % 4), o: 0.04 + (seed % 3) * 0.01 },
    { t: 72 + (seed * 3 % 12), l: 65 + (seed * 11 % 18), s: 2 + (seed * 5 % 3), o: 0.03 + (seed * 7 % 4) * 0.01 },
    { t: 50 + (seed * 13 % 20), l: 40 + (seed * 17 % 15), s: 4 + (seed % 3), o: 0.02 + (seed * 11 % 3) * 0.01 },
  ];

  const speckles = [
    { t: 30 + (seed * 19 % 40), l: 25 + (seed * 23 % 50), s: 1, o: 0.06 + (seed % 5) * 0.01 },
    { t: 60 + (seed * 29 % 30), l: 50 + (seed * 31 % 35), s: 1.2, o: 0.05 + (seed * 37 % 4) * 0.01 },
    { t: 80 + (seed * 41 % 15), l: 15 + (seed * 43 % 40), s: 0.8, o: 0.07 + (seed % 3) * 0.01 },
    { t: 15 + (seed * 47 % 20), l: 80 + (seed * 53 % 15), s: 1.5, o: 0.04 + (seed * 59 % 3) * 0.01 },
  ];

  const getIcon = () => {
    const sv = 1.5;
    switch (label.toUpperCase()) {
      case "HOME":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={sv} strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case "ABOUT":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={sv} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        );
      case "BOOKS":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={sv} strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        );
      case "SPEAKING":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={sv} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
            <line x1="12" x2="12" y1="19" y2="22" />
          </svg>
        );
      case "JOURNAL":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={sv} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v12" />
            <path d="M8 10h8" />
            <path d="M8 14h8" />
          </svg>
        );
      case "CONNECT":
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth={sv} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-auto"
      style={{
        top: TOP_OFFSET,
        left: xOffset,
        width: WIDTH,
        height: height,
        rotate: `${rotation}deg`,
        filter: ambientShadow,
        zIndex: isActive ? 30 : 24 + (5 - index),
      }}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: targetY, opacity: 1 }}
      transition={{
        y: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
        opacity: { duration: 0.4, delay: 0.04 * index },
      }}
    >
      {/* ── 3D PAPER EDGE (thickness) ── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: 2,
          right: -1.2,
          bottom: `${notchDepth + 3}px`,
          width: 1.2,
          background: isActive
            ? "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, #8EA88A 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, #E8DCCB 100%)",
          borderRadius: "0 1px 0 0",
          zIndex: 2,
        }}
      />
      {/* Bottom paper edge (paper thickness visible at bottom) */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          left: 2,
          right: `${notchWidth * 2}px`,
          bottom: -0.8,
          height: 1.2,
          background: isActive ? "#8EA88A" : "#E0D4C4",
          borderRadius: "0 0 0 1px",
          zIndex: 2,
        }}
      />

      {/* ── MAIN PAPER BODY ── */}
      <div
        className="relative w-full h-full"
        style={{
          borderRadius: "3px 3px 0 0",
          clipPath,
          background: bgGradient,
          boxShadow: isActive
            ? "inset 0 1px 0.5px rgba(255,255,255,0.34), inset 0 -2px 3px rgba(50,35,20,0.08), inset 7px 0 10px rgba(255,255,255,0.06)"
            : "inset 0 1px 0.5px rgba(255,255,255,0.46), inset 0 -1px 1.5px rgba(50,35,20,0.025)",
          overflow: "hidden",
        }}
      >
        {/* ── PAPER GRAIN TEXTURE ── */}
        <div
          className="absolute inset-0 pointer-events-none select-none mix-blend-multiply"
          style={{ opacity: isActive ? 0.04 : 0.06 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 200 300" preserveAspectRatio="none">
            <filter id={`grain-${index}`}>
              <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter={`url(#grain-${index})`} opacity="0.15" />
          </svg>
        </div>

        {/* ── PAPER FIBERS ── */}
        {fiberDefs.map((f, i) => (
          <div
            key={`fiber-${i}`}
            className="absolute pointer-events-none select-none"
            style={{
              top: `${f.t}%`,
              left: `${f.l}%`,
              width: `${f.w}px`,
              height: "0.4px",
              background: isActive ? "rgba(255,255,255,0.2)" : "rgba(110,90,78,0.08)",
              transform: `rotate(${f.r}deg)`,
              borderRadius: "50%",
              opacity: 0.5,
            }}
          />
        ))}

        <div
          className="absolute inset-0 pointer-events-none select-none mix-blend-multiply"
          style={{
            opacity: isActive ? 0.08 : 0.10,
            backgroundImage: `
              repeating-linear-gradient(88deg, rgba(110,90,78,0.055) 0px, rgba(110,90,78,0.055) 0.5px, transparent 0.5px, transparent 9px),
              repeating-linear-gradient(2deg, rgba(255,255,255,0.35) 0px, rgba(255,255,255,0.35) 0.5px, transparent 0.5px, transparent 13px)
            `,
          }}
        />

        {/* ── AGING STAINS ── */}
        {stainSpots.map((s, i) => (
          <div
            key={`stain-${i}`}
            className="absolute rounded-full pointer-events-none select-none"
            style={{
              top: `${s.t}%`,
              left: `${s.l}%`,
              width: `${s.s}px`,
              height: `${s.s}px`,
              background: isActive ? "rgba(255,255,255,0.08)" : "rgba(110,90,78,0.06)",
              opacity: s.o,
              filter: "blur(0.5px)",
            }}
          />
        ))}

        {/* ── WATERCOLOR SPECKLES ── */}
        {speckles.map((sp, i) => (
          <div
            key={`speckle-${i}`}
            className="absolute rounded-full pointer-events-none select-none"
            style={{
              top: `${sp.t}%`,
              left: `${sp.l}%`,
              width: `${sp.s}px`,
              height: `${sp.s}px`,
              background: isActive ? "rgba(168,178,154,0.15)" : "rgba(168,178,154,0.04)",
              opacity: sp.o,
            }}
          />
        ))}

        {/* ── TOP ATTACHMENT SHADOW (where bookmark enters the book) ── */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none select-none"
          style={{
            height: isActive ? "15px" : "11px",
            background: isActive
              ? "linear-gradient(to bottom, rgba(50,35,20,0.16) 0%, rgba(50,35,20,0.055) 48%, transparent 100%)"
              : "linear-gradient(to bottom, rgba(50,35,20,0.08) 0%, rgba(50,35,20,0.03) 40%, transparent 100%)",
            zIndex: 3,
          }}
        />
        {/* Fold crease line at the top edge */}
        <div
          className="absolute top-0 left-2 right-2 pointer-events-none select-none"
          style={{
            height: "0.5px",
            background: isActive ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.25)",
            zIndex: 3,
          }}
        />

        {/* ── CONTENT ── */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative w-full h-full flex flex-col items-center justify-center focus:outline-none z-10"
          style={{
            background: "none",
            border: "none",
            padding: "10px 4px 16px",
            cursor: "pointer",
          }}
          aria-label={`Go to ${label}`}
          aria-pressed={isActive}
        >
          {/* Icon */}
          <div
            className="flex items-center justify-center"
            style={{ width: "18px", height: "18px", marginBottom: "6px" }}
          >
            {getIcon()}
          </div>

          {/* Label */}
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "6.5px",
              fontWeight: 600,
              letterSpacing: "0.10em",
              color: textColor,
              textTransform: "uppercase",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            {label}
          </span>
        </button>

        {/* ── CONTACT SHADOW (at the notch edge) ── */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none select-none"
          style={{
            height: "16px",
            background: "linear-gradient(to top, rgba(50,35,20,0.03) 0%, transparent 100%)",
            zIndex: 3,
          }}
        />
      </div>
    </motion.div>
  );
}

export default React.memo(BookmarkTab);
