"use client";

import React from "react";

function WritingDeskBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Walnut wood desk surface */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            /* Base walnut heartwood */
            linear-gradient(to bottom, #5C3D2E 0%, #6B4A35 15%, #5A3B2A 30%, #6E4F3A 50%, #5C3D2E 65%, #6B4A35 80%, #5A3B2A 100%)
          `,
        }}
      />

      {/* Wood grain planks — three-panel construction */}
      {/* Plank 1 (left) */}
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: "36%",
          background: `
            repeating-linear-gradient(4deg, transparent, transparent 30px, rgba(90,59,42,0.25) 30px, rgba(90,59,42,0.25) 31px),
            repeating-linear-gradient(-3deg, transparent, transparent 45px, rgba(78,50,34,0.15) 45px, rgba(78,50,34,0.15) 46px),
            radial-gradient(ellipse 180% 40% at 30% 20%, rgba(160,130,90,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 150% 30% at 50% 70%, rgba(200,170,130,0.04) 0%, transparent 50%)
          `,
          borderRight: "1px solid rgba(50,30,18,0.3)",
          boxShadow: "inset -2px 0 4px rgba(0,0,0,0.08)",
        }}
      />

      {/* Plank 2 (center) */}
      <div
        className="absolute inset-y-0"
        style={{
          left: "36%",
          width: "30%",
          background: `
            repeating-linear-gradient(-2deg, transparent, transparent 25px, rgba(90,59,42,0.2) 25px, rgba(90,59,42,0.2) 26px),
            repeating-linear-gradient(5deg, transparent, transparent 50px, rgba(78,50,34,0.12) 50px, rgba(78,50,34,0.12) 51px),
            radial-gradient(ellipse 200% 35% at 60% 40%, rgba(180,150,110,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 120% 25% at 40% 80%, rgba(160,130,90,0.04) 0%, transparent 40%)
          `,
          borderLeft: "1px solid rgba(50,30,18,0.2)",
          borderRight: "1px solid rgba(50,30,18,0.2)",
          boxShadow: "inset 2px 0 4px rgba(0,0,0,0.04), inset -2px 0 4px rgba(0,0,0,0.04)",
        }}
      />

      {/* Plank 3 (right) */}
      <div
        className="absolute inset-y-0 right-0"
        style={{
          width: "34%",
          background: `
            repeating-linear-gradient(3deg, transparent, transparent 35px, rgba(90,59,42,0.22) 35px, rgba(90,59,42,0.22) 36px),
            repeating-linear-gradient(-4deg, transparent, transparent 40px, rgba(78,50,34,0.15) 40px, rgba(78,50,34,0.15) 41px),
            radial-gradient(ellipse 160% 30% at 70% 50%, rgba(200,170,130,0.05) 0%, transparent 45%),
            radial-gradient(ellipse 140% 25% at 20% 60%, rgba(160,130,90,0.03) 0%, transparent 40%)
          `,
          borderLeft: "1px solid rgba(50,30,18,0.3)",
          boxShadow: "inset 2px 0 4px rgba(0,0,0,0.08)",
        }}
      />

      {/* Maple/grain highlight streaks */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 300% 2% at 20% 30%, rgba(220,195,160,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 250% 1.5% at 65% 55%, rgba(220,195,160,0.03) 0%, transparent 60%),
            radial-gradient(ellipse 280% 2% at 45% 75%, rgba(220,195,160,0.035) 0%, transparent 65%),
            radial-gradient(ellipse 200% 1% at 80% 20%, rgba(220,195,160,0.025) 0%, transparent 50%)
          `,
        }}
      />

      {/* Edge shadow at bottom for desk thickness */}
      <div
        className="absolute bottom-0 left-0 right-0 h-3"
        style={{
          background: "linear-gradient(to top, rgba(30,16,8,0.3) 0%, transparent 100%)",
        }}
      />

      {/* Edge highlight at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(to right, transparent 5%, rgba(220,195,160,0.08) 50%, transparent 95%)",
        }}
      />

      {/* ===== DESK ACCESSORIES ===== */}

      {/* 1. Ceramic Teacup (bottom-left area) */}
      <div
        className="absolute z-10"
        style={{
          bottom: "8%",
          left: "5%",
          width: "clamp(40px, 5vw, 70px)",
          height: "clamp(40px, 5vw, 70px)",
          filter: "drop-shadow(2px 6px 12px rgba(30,16,8,0.25))",
        }}
      >
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Saucer */}
          <ellipse cx="40" cy="68" rx="28" ry="5" fill="#F0EBE1" stroke="#D4C9B8" strokeWidth="0.5" />
          {/* Cup body */}
          <path d="M 18 28 L 54 28 L 50 58 Q 48 64 34 64 Q 20 64 18 58 Z" fill="#F5F0E8" stroke="#C8BBA8" strokeWidth="0.6" />
          {/* Cup handle */}
          <path d="M 50 36 Q 62 36 62 46 Q 62 56 50 52" stroke="#F5F0E8" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Cup handle outline */}
          <path d="M 50 36 Q 62 36 62 46 Q 62 56 50 52" stroke="#C8BBA8" strokeWidth="0.5" strokeLinecap="round" fill="none" />
          {/* Tea surface */}
          <ellipse cx="36" cy="30" rx="16" ry="4" fill="#C4A882" />
          {/* Tea ring stain */}
          <ellipse cx="36" cy="30" rx="15" ry="3.5" fill="none" stroke="#A8886A" strokeWidth="0.3" opacity="0.4" />
          {/* Steam wisps */}
          <path d="M 30 26 Q 28 20 32 14" stroke="rgba(200,180,155,0.2)" strokeWidth="0.6" strokeLinecap="round" fill="none" />
          <path d="M 38 24 Q 40 18 36 12" stroke="rgba(200,180,155,0.15)" strokeWidth="0.5" strokeLinecap="round" fill="none" />
          {/* Cup highlight */}
          <path d="M 22 32 Q 20 45 24 54" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* 2. Fountain Pen (top-left area) */}
      <div
        className="absolute z-10"
        style={{
          top: "12%",
          left: "4%",
          width: "clamp(60px, 8vw, 110px)",
          height: "clamp(16px, 2vw, 28px)",
          filter: "drop-shadow(1px 3px 6px rgba(30,16,8,0.2))",
          transform: "rotate(-12deg)",
        }}
      >
        <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Pen body */}
          <rect x="25" y="10" width="75" height="10" rx="2" fill="#2A1A0E" />
          {/* Pen body highlight */}
          <rect x="25" y="11" width="75" height="3" rx="1" fill="rgba(60,40,25,0.6)" />
          {/* Cap band */}
          <rect x="22" y="9" width="6" height="12" rx="1" fill="#C4A882" />
          {/* Gold nib */}
          <path d="M 6 16 L 18 10 L 18 20 Z" fill="#EAD8B2" />
          {/* Nib slit */}
          <line x1="14" y1="13" x2="6" y2="16" stroke="#8A7050" strokeWidth="0.4" />
          {/* Ink feed */}
          <path d="M 18 12 L 22 11 L 22 19 L 18 18 Z" fill="#1A0E06" opacity="0.7" />
          {/* Cap finial */}
          <circle cx="28" cy="15" r="2" fill="#C4A882" />
        </svg>
      </div>

      {/* 3. Reading Glasses (center-right area, above where book sits) */}
      <div
        className="absolute z-10"
        style={{
          top: "10%",
          right: "8%",
          width: "clamp(50px, 7vw, 90px)",
          height: "clamp(18px, 2.2vw, 30px)",
          filter: "drop-shadow(1px 4px 8px rgba(30,16,8,0.15))",
          transform: "rotate(3deg)",
        }}
      >
        <svg viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left lens */}
          <ellipse cx="28" cy="15" rx="20" ry="11" fill="rgba(200,195,185,0.06)" stroke="#8A7A6A" strokeWidth="0.6" />
          {/* Right lens */}
          <ellipse cx="72" cy="15" rx="20" ry="11" fill="rgba(200,195,185,0.06)" stroke="#8A7A6A" strokeWidth="0.6" />
          {/* Bridge */}
          <path d="M 48 15 Q 50 11 52 15" stroke="#8A7A6A" strokeWidth="0.5" fill="none" />
          {/* Left temple arm */}
          <path d="M 8 12 Q 0 10 -2 6" stroke="#8A7A6A" strokeWidth="0.5" fill="none" />
          {/* Right temple arm */}
          <path d="M 92 12 Q 100 10 102 6" stroke="#8A7A6A" strokeWidth="0.5" fill="none" />
          {/* Lens reflections */}
          <path d="M 22 10 Q 24 8 26 10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" strokeLinecap="round" fill="none" />
          <path d="M 66 10 Q 68 8 70 10" stroke="rgba(255,255,255,0.08)" strokeWidth="0.4" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* 4. Dried Leaf / Pressed Fern (bottom-right area) */}
      <div
        className="absolute z-10"
        style={{
          bottom: "6%",
          right: "4%",
          width: "clamp(50px, 6vw, 80px)",
          height: "clamp(60px, 8vw, 110px)",
          filter: "drop-shadow(1px 3px 6px rgba(30,16,8,0.15))",
          transform: "rotate(15deg)",
        }}
      >
        <svg viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Stem */}
          <path d="M 30 75 Q 32 50 35 30 Q 37 15 36 5" stroke="#7A8A6A" strokeWidth="0.8" strokeLinecap="round" />
          {/* Leaf/fern fronds */}
          <path d="M 35 65 Q 28 58 22 55 Q 18 53 20 48 Q 28 52 35 60" fill="#8A9A78" opacity="0.4" />
          <path d="M 35 60 Q 42 52 48 48 Q 52 45 50 40 Q 42 45 35 55" fill="#8A9A78" opacity="0.35" />
          <path d="M 35 50 Q 28 44 24 38 Q 22 34 25 32 Q 30 38 35 46" fill="#8A9A78" opacity="0.3" />
          <path d="M 35 46 Q 40 38 45 35 Q 48 32 46 28 Q 40 33 35 42" fill="#8A9A78" opacity="0.3" />
          <path d="M 35 38 Q 30 32 28 26 Q 26 22 29 20 Q 32 26 35 34" fill="#8A9A78" opacity="0.25" />
          {/* Vein details */}
          <path d="M 35 65 Q 25 58 20 50" stroke="#6A7A5A" strokeWidth="0.3" opacity="0.3" fill="none" />
          <path d="M 35 60 Q 45 52 50 45" stroke="#6A7A5A" strokeWidth="0.3" opacity="0.3" fill="none" />
          <path d="M 35 50 Q 28 42 24 35" stroke="#6A7A5A" strokeWidth="0.3" opacity="0.25" fill="none" />
          {/* Brown dried edges */}
          <path d="M 22 55 Q 20 50 22 48" stroke="#8A7060" strokeWidth="0.3" opacity="0.3" fill="none" />
        </svg>
      </div>

      {/* 5. Handwritten Parenting Notes (bottom-center left, two overlapping papers) */}
      {/* Note 1 (back) */}
      <div
        className="absolute z-10"
        style={{
          bottom: "4%",
          left: "18%",
          width: "clamp(70px, 10vw, 130px)",
          height: "clamp(50px, 7vw, 90px)",
          filter: "drop-shadow(1px 4px 8px rgba(30,16,8,0.18))",
          transform: "rotate(-4deg)",
        }}
      >
        <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Paper with slight tear */}
          <path
            d="M 2 2 L 130 2 Q 138 2 138 10 L 138 80 Q 138 90 128 92 L 12 92 Q 4 92 2 84 Z"
            fill="#F5F0E8"
            stroke="#D4C9B8"
            strokeWidth="0.3"
            opacity="0.85"
          />
          {/* Handwritten lines (cursive-ish) */}
          <path d="M 12 20 Q 25 18 40 22 Q 55 25 70 20 Q 85 16 100 22" stroke="#6E5A4E" strokeWidth="0.5" opacity="0.3" fill="none" />
          <path d="M 12 32 Q 30 30 50 34 Q 65 36 80 32 Q 95 28 115 34" stroke="#6E5A4E" strokeWidth="0.5" opacity="0.25" fill="none" />
          <path d="M 12 44 Q 25 42 40 46 Q 55 48 70 44" stroke="#6E5A4E" strokeWidth="0.5" opacity="0.2" fill="none" />
        </svg>
      </div>

      {/* Note 2 (front, slightly offset) */}
      <div
        className="absolute z-20"
        style={{
          bottom: "6%",
          left: "22%",
          width: "clamp(70px, 10vw, 130px)",
          height: "clamp(50px, 7vw, 90px)",
          filter: "drop-shadow(2px 6px 10px rgba(30,16,8,0.2))",
          transform: "rotate(2deg)",
        }}
      >
        <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Paper */}
          <path
            d="M 2 2 L 130 2 Q 138 2 138 10 L 138 80 Q 138 90 128 92 L 12 92 Q 4 92 2 84 Z"
            fill="#FAF7F2"
            stroke="#D4C9B8"
            strokeWidth="0.3"
          />
          {/* Handwritten text */}
          <path d="M 15 18 Q 30 16 45 20 Q 60 22 75 18" stroke="#6E5A4E" strokeWidth="0.4" opacity="0.35" fill="none" />
          <path d="M 15 28 Q 28 26 42 30 Q 55 32 70 28 Q 85 26 100 30" stroke="#6E5A4E" strokeWidth="0.4" opacity="0.3" fill="none" />
          <path d="M 15 38 Q 30 36 48 40 Q 62 42 78 38" stroke="#6E5A4E" strokeWidth="0.4" opacity="0.25" fill="none" />
          <path d="M 15 48 Q 25 46 35 50 Q 45 52 55 48" stroke="#6E5A4E" strokeWidth="0.4" opacity="0.2" fill="none" />
          {/* Small heart doodle */}
          <path d="M 100 14 Q 103 10 106 12 Q 109 10 112 14 Q 112 18 106 22 Q 100 18 100 14 Z" stroke="#6E5A4E" strokeWidth="0.3" opacity="0.2" fill="none" />
        </svg>
      </div>

      {/* Ambient warm light overlay on desk */}
      <div
        className="absolute inset-0 z-5"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,248,230,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

export default React.memo(WritingDeskBackground);
