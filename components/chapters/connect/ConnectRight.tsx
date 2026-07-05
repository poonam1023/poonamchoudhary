"use client";

import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
type Phase = "letter" | "folding" | "sealing" | "floating" | "inserting" | "thanks";

/* ─────────────────────────────────────────────
   Inline SVG: Vintage Brass Mailbox
───────────────────────────────────────────── */
function BrassMailbox({
  isHovered,
  doorOpen,
  showNewLetter,
  onDoorAnimComplete,
}: {
  isHovered: boolean;
  doorOpen: boolean;
  showNewLetter: boolean;
  onDoorAnimComplete?: () => void;
}) {
  return (
    <svg
      viewBox="0 0 320 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", overflow: "visible" }}
    >
      <defs>
        {/* Aged brass gradient */}
        <linearGradient id="brassBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A853" />
          <stop offset="18%" stopColor="#C8943F" />
          <stop offset="42%" stopColor="#B07B2A" />
          <stop offset="65%" stopColor="#C8943F" />
          <stop offset="82%" stopColor="#9A6820" />
          <stop offset="100%" stopColor="#7A5218" />
        </linearGradient>
        <linearGradient id="brassTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E0B865" />
          <stop offset="50%" stopColor="#C8943F" />
          <stop offset="100%" stopColor="#A87830" />
        </linearGradient>
        <linearGradient id="brassDoor" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D9AF5A" />
          <stop offset="30%" stopColor="#C49040" />
          <stop offset="70%" stopColor="#B07B2A" />
          <stop offset="100%" stopColor="#8B6020" />
        </linearGradient>
        <linearGradient id="brassPost" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A87830" />
          <stop offset="50%" stopColor="#C8943F" />
          <stop offset="100%" stopColor="#A07020" />
        </linearGradient>
        <linearGradient id="letterSlot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A2810" />
          <stop offset="100%" stopColor="#1A1005" />
        </linearGradient>
        <linearGradient id="flagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C84830" />
          <stop offset="100%" stopColor="#A03020" />
        </linearGradient>
        <radialGradient id="knobGrad" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#E8C870" />
          <stop offset="60%" stopColor="#C8943F" />
          <stop offset="100%" stopColor="#8B6020" />
        </radialGradient>
        <radialGradient id="brassShine" cx="30%" cy="25%" r="55%">
          <stop offset="0%" stopColor="rgba(255,235,170,0.45)" />
          <stop offset="100%" stopColor="rgba(255,200,80,0)" />
        </radialGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="6" stdDeviation="8" floodColor="rgba(58,40,15,0.35)" />
        </filter>
        <filter id="innerShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="SourceGraphic" operator="arithmetic" k2="-1" k3="1" />
        </filter>
        <pattern id="brassTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="transparent" />
          <line x1="0" y1="0" x2="4" y2="4" stroke="rgba(255,200,80,0.04)" strokeWidth="0.5" />
          <line x1="0" y1="2" x2="2" y2="4" stroke="rgba(160,120,40,0.06)" strokeWidth="0.3" />
        </pattern>
        {/* Warm glow for hover */}
        <radialGradient id="warmGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="rgba(255,180,60,0.18)" stopOpacity={isHovered ? 1 : 0} />
          <stop offset="100%" stopColor="rgba(255,180,60,0)" />
        </radialGradient>
        {/* Dust particle defs */}
      </defs>

      {/* ── POST / STAND ── */}
      <rect x="145" y="340" width="30" height="75" rx="4" fill="url(#brassPost)" />
      <rect x="145" y="340" width="30" height="75" rx="4" fill="url(#brassTexture)" opacity="0.6" />
      {/* Post highlight */}
      <rect x="148" y="342" width="6" height="71" rx="2" fill="rgba(255,235,170,0.18)" />
      {/* Post shadow */}
      <rect x="166" y="342" width="6" height="71" rx="2" fill="rgba(58,40,15,0.18)" />

      {/* ── BASE PLATE ── */}
      <ellipse cx="160" cy="413" rx="55" ry="8" fill="#8B6020" opacity="0.5" />
      <rect x="100" y="406" width="120" height="10" rx="5" fill="url(#brassPost)" />
      <rect x="100" y="406" width="120" height="10" rx="5" fill="url(#brassTexture)" opacity="0.4" />

      {/* ── MAIN MAILBOX BODY ── */}
      {/* Curved top (arched) */}
      <path
        d="M55 165 C55 108 100 78 160 78 C220 78 265 108 265 165 L265 300 C265 320 250 335 160 335 C70 335 55 320 55 300 Z"
        fill="url(#brassBody)"
        filter="url(#softShadow)"
      />
      {/* Brass texture overlay */}
      <path
        d="M55 165 C55 108 100 78 160 78 C220 78 265 108 265 165 L265 300 C265 320 250 335 160 335 C70 335 55 320 55 300 Z"
        fill="url(#brassTexture)"
        opacity="0.8"
      />
      {/* Warm glow on hover */}
      <path
        d="M55 165 C55 108 100 78 160 78 C220 78 265 108 265 165 L265 300 C265 320 250 335 160 335 C70 335 55 320 55 300 Z"
        fill="url(#warmGlow)"
        style={{ transition: "opacity 0.8s ease", opacity: isHovered ? 1 : 0 }}
      />
      {/* Body shine / highlight */}
      <path
        d="M80 150 C78 120 95 95 120 88"
        stroke="rgba(255,235,170,0.45)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M68 200 C65 180 70 160 80 148"
        stroke="rgba(255,235,170,0.22)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Shadow on right */}
      <path
        d="M240 150 C248 160 255 185 253 220"
        stroke="rgba(58,40,15,0.28)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* ── ENGRAVED BORDER RIM ── */}
      <path
        d="M62 170 C62 115 104 84 160 84 C216 84 258 115 258 170 L258 298 C258 316 244 330 160 330 C76 330 62 316 62 298 Z"
        fill="none"
        stroke="rgba(180,140,50,0.35)"
        strokeWidth="1.5"
      />
      <path
        d="M68 172 C68 120 106 90 160 90 C214 90 252 120 252 172 L252 296 C252 312 238 326 160 326 C82 326 68 312 68 296 Z"
        fill="none"
        stroke="rgba(230,190,100,0.18)"
        strokeWidth="1"
      />

      {/* ── FLORAL ENGRAVING (top arch) ── */}
      <g opacity="0.55" stroke="#8B6020" strokeWidth="0.9" strokeLinecap="round" fill="none">
        {/* Central bloom */}
        <circle cx="160" cy="108" r="10" stroke="rgba(200,148,63,0.6)" />
        <circle cx="160" cy="108" r="6" stroke="rgba(200,148,63,0.4)" />
        <path d="M160 98 Q165 103 160 108 Q155 103 160 98Z" fill="rgba(200,148,63,0.25)" stroke="none" />
        <path d="M150 108 Q155 103 160 108 Q155 113 150 108Z" fill="rgba(200,148,63,0.25)" stroke="none" />
        <path d="M160 118 Q155 113 160 108 Q165 113 160 118Z" fill="rgba(200,148,63,0.25)" stroke="none" />
        <path d="M170 108 Q165 113 160 108 Q165 103 170 108Z" fill="rgba(200,148,63,0.25)" stroke="none" />
        {/* Left vine */}
        <path d="M150 108 C138 108 128 102 120 95" strokeWidth="0.8" />
        <path d="M135 106 Q132 100 128 98" strokeWidth="0.6" />
        <path d="M128 101 Q126 96 124 94" strokeWidth="0.5" />
        <ellipse cx="120" cy="93" rx="5" ry="3" transform="rotate(-30 120 93)" fill="rgba(160,120,40,0.2)" strokeWidth="0.7" />
        <ellipse cx="130" cy="99" rx="4" ry="2.5" transform="rotate(-15 130 99)" fill="rgba(160,120,40,0.15)" strokeWidth="0.6" />
        {/* Right vine */}
        <path d="M170 108 C182 108 192 102 200 95" strokeWidth="0.8" />
        <path d="M185 106 Q188 100 192 98" strokeWidth="0.6" />
        <path d="M192 101 Q194 96 196 94" strokeWidth="0.5" />
        <ellipse cx="200" cy="93" rx="5" ry="3" transform="rotate(30 200 93)" fill="rgba(160,120,40,0.2)" strokeWidth="0.7" />
        <ellipse cx="190" cy="99" rx="4" ry="2.5" transform="rotate(15 190 99)" fill="rgba(160,120,40,0.15)" strokeWidth="0.6" />
        {/* Side flourishes */}
        <path d="M80 195 C85 185 90 188 88 195" strokeWidth="0.7" />
        <path d="M88 195 C90 205 85 208 80 200" strokeWidth="0.7" />
        <path d="M240 195 C235 185 230 188 232 195" strokeWidth="0.7" />
        <path d="M232 195 C230 205 235 208 240 200" strokeWidth="0.7" />
        {/* Bottom botanical */}
        <path d="M130 315 C138 310 148 308 160 308" strokeWidth="0.8" />
        <path d="M190 315 C182 310 172 308 160 308" strokeWidth="0.8" />
        <ellipse cx="145" cy="311" rx="5" ry="2.5" transform="rotate(-20 145 311)" fill="rgba(160,120,40,0.18)" strokeWidth="0.6" />
        <ellipse cx="175" cy="311" rx="5" ry="2.5" transform="rotate(20 175 311)" fill="rgba(160,120,40,0.18)" strokeWidth="0.6" />
      </g>

      {/* ── EMBOSSED INITIALS "PC" ── */}
      <g opacity="0.7">
        <text
          x="160"
          y="290"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="28"
          fontWeight="bold"
          fill="none"
          stroke="rgba(140,100,30,0.55)"
          strokeWidth="1.5"
          letterSpacing="4"
        >
          PC
        </text>
        <text
          x="159"
          y="289"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="28"
          fontWeight="bold"
          fill="none"
          stroke="rgba(230,190,100,0.3)"
          strokeWidth="0.8"
          letterSpacing="4"
        >
          PC
        </text>
      </g>

      {/* ── LETTER SLOT (top) ── */}
      <rect x="110" y="130" width="100" height="12" rx="3" fill="url(#letterSlot)" />
      <rect x="110" y="130" width="100" height="6" rx="2" fill="rgba(80,60,20,0.4)" />
      {/* Slot shine */}
      <rect x="112" y="131" width="96" height="2" rx="1" fill="rgba(255,220,100,0.08)" />

      {/* ── DOOR (bottom half, opens slightly) ── */}
      <motion.g
        animate={{ rotateY: doorOpen ? -25 : 0 }}
        style={{ transformOrigin: "55px 220px", transformBox: "fill-box" }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={onDoorAnimComplete}
      >
        {/* Door panel */}
        <path
          d="M62 220 L258 220 L258 298 C258 316 244 330 160 330 C76 330 62 316 62 298 Z"
          fill="url(#brassDoor)"
        />
        <path
          d="M62 220 L258 220 L258 298 C258 316 244 330 160 330 C76 330 62 316 62 298 Z"
          fill="url(#brassTexture)"
          opacity="0.7"
        />
        {/* Door panel border engraving */}
        <path
          d="M70 225 L250 225 L250 296 C250 312 236 326 160 326 C84 326 70 312 70 296 Z"
          fill="none"
          stroke="rgba(180,140,50,0.3)"
          strokeWidth="1"
        />
        {/* Door inner panel */}
        <path
          d="M80 232 L240 232 L240 292 C240 306 228 318 160 318 C92 318 80 306 80 292 Z"
          fill="rgba(100,72,20,0.15)"
        />
        {/* Door shine */}
        <path
          d="M72 225 C70 235 68 255 72 275"
          stroke="rgba(255,235,170,0.28)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Knob */}
        <circle cx="228" cy="270" r="9" fill="url(#knobGrad)" />
        <circle cx="228" cy="270" r="9" stroke="rgba(140,100,30,0.5)" strokeWidth="0.8" />
        <circle cx="225" cy="267" r="3" fill="rgba(255,235,170,0.4)" />
        <circle cx="224" cy="266" r="1.5" fill="rgba(255,255,255,0.35)" />
        {/* Hinges */}
        <rect x="58" y="228" width="14" height="10" rx="2" fill="url(#knobGrad)" stroke="rgba(140,100,30,0.4)" strokeWidth="0.6" />
        <rect x="58" y="290" width="14" height="10" rx="2" fill="url(#knobGrad)" stroke="rgba(140,100,30,0.4)" strokeWidth="0.6" />
        {/* Horizontal divider between slot and door */}
        <rect x="62" y="218" width="196" height="4" rx="1" fill="rgba(100,72,20,0.35)" />
        <rect x="62" y="218" width="196" height="2" rx="1" fill="rgba(255,220,100,0.1)" />
      </motion.g>

      {/* ── LETTERS INSIDE (visible through partially open door) ── */}
      <AnimatePresence>
        {doorOpen && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Stack of letters */}
            <rect x="82" y="265" width="155" height="48" rx="2" fill="#F0EBE0" opacity="0.95" transform="rotate(-2 160 290)" />
            <rect x="84" y="262" width="155" height="48" rx="2" fill="#EDE8DC" opacity="0.9" transform="rotate(1 160 288)" />
            <rect x="86" y="268" width="152" height="46" rx="2" fill="#F5F0E8" opacity="0.95" />
            {/* Letter lines */}
            <line x1="96" y1="278" x2="228" y2="278" stroke="rgba(140,110,70,0.15)" strokeWidth="0.8" />
            <line x1="96" y1="285" x2="215" y2="285" stroke="rgba(140,110,70,0.12)" strokeWidth="0.8" />
            <line x1="96" y1="292" x2="220" y2="292" stroke="rgba(140,110,70,0.10)" strokeWidth="0.8" />
            {/* Wax dot on top letter */}
            <circle cx="230" cy="288" r="5" fill="#BA664A" opacity="0.7" />
            <circle cx="230" cy="288" r="3" fill="#C47A5E" opacity="0.6" />
          </motion.g>
        )}
      </AnimatePresence>

      {/* ── FLAG ── */}
      <motion.g
        animate={{ rotate: showNewLetter ? -90 : 0 }}
        style={{ transformOrigin: "270px 200px", transformBox: "fill-box" }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Flag pole */}
        <rect x="268" y="160" width="4" height="55" rx="1.5" fill="url(#brassPost)" />
        {/* Flag */}
        <path d="M272 162 L295 168 L272 178 Z" fill="url(#flagGrad)" />
        <path d="M272 162 L295 168 L272 178 Z" fill="rgba(255,120,80,0.2)" />
      </motion.g>

      {/* ── WEAR MARKS / SCRATCHES ── */}
      <g opacity="0.12" stroke="#3A2810" strokeWidth="0.6" strokeLinecap="round">
        <line x1="95" y1="155" x2="100" y2="162" />
        <line x1="97" y1="175" x2="104" y2="179" />
        <line x1="220" y1="145" x2="226" y2="152" />
        <line x1="215" y1="240" x2="220" y2="245" />
        <line x1="105" y1="290" x2="108" y2="295" />
      </g>

      {/* ── GLOBAL SHINE ── */}
      <path
        d="M55 165 C55 108 100 78 160 78 C220 78 265 108 265 165 L265 300 C265 320 250 335 160 335 C70 335 55 320 55 300 Z"
        fill="url(#brassShine)"
      />

      {/* ── DUST PARTICLES on hover ── */}
      {isHovered && (
        <g>
          {[
            { cx: 90, cy: 100, delay: 0 },
            { cx: 240, cy: 120, delay: 0.4 },
            { cx: 130, cy: 85, delay: 0.8 },
            { cx: 185, cy: 92, delay: 0.2 },
            { cx: 75, cy: 180, delay: 0.6 },
            { cx: 255, cy: 200, delay: 1.0 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={1.2}
              fill="rgba(220,180,80,0.5)"
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [-8, -20, -32],
                x: [0, (i % 2 === 0 ? 3 : -3), 0],
              }}
              transition={{
                duration: 2.5,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </g>
      )}

      {/* ── FLYING ENVELOPE ANIMATION ── */}
      {showNewLetter && (
        <motion.g
          initial={{ x: 80, y: -40, opacity: 0, rotate: -5 }}
          animate={{ x: 0, y: 0, opacity: [0, 1, 1, 0.8, 0], rotate: [-5, 2, -1, 0] }}
          transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <rect x="105" y="128" width="52" height="36" rx="2" fill="#EDE8DC" stroke="rgba(160,120,50,0.4)" strokeWidth="0.8" />
          <path d="M105 128 L131 148 L157 128" stroke="rgba(160,120,50,0.3)" strokeWidth="0.8" fill="none" />
          <circle cx="131" cy="152" r="5" fill="#BA664A" opacity="0.8" />
        </motion.g>
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Inline SVG: Fountain Pen
───────────────────────────────────────────── */
function FountainPen({ active }: { active: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 140 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 120, height: 24, overflow: "visible" }}
      animate={active ? { x: [0, 2, -1, 0], y: [0, -1, 1, 0] } : {}}
      transition={{ duration: 0.4, repeat: active ? Infinity : 0, repeatDelay: 0.6 }}
    >
      {/* Body */}
      <path d="M10 14 L115 8 L125 14 L115 20 L10 14Z" fill="#2A1E16" />
      <path d="M10 14 L115 8 L125 14" fill="rgba(255,255,255,0.06)" />
      {/* Cap */}
      <path d="M0 14 L12 9 L12 19 Z" fill="#3A2C1E" />
      {/* Clip */}
      <rect x="20" y="7" width="2" height="14" rx="1" fill="rgba(200,180,100,0.5)" />
      {/* Nib */}
      <path d="M125 14 L138 12 L140 14 L138 16 L125 14Z" fill="#C8943F" />
      <line x1="130" y1="14" x2="140" y2="14" stroke="rgba(200,160,60,0.4)" strokeWidth="0.5" />
      {/* Gold ring */}
      <ellipse cx="18" cy="14" rx="2" ry="6" fill="#C8943F" opacity="0.7" />
      <ellipse cx="110" cy="14" rx="2" ry="7" fill="#C8943F" opacity="0.5" />
      {/* Ink drop */}
      {active && (
        <motion.ellipse
          cx="141"
          cy="15"
          rx="1.5"
          ry="1"
          fill="#2A1E16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.9, 0], scale: [0, 1, 1.5], y: [0, 2, 5] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.2 }}
        />
      )}
    </motion.svg>
  );
}

/* ─────────────────────────────────────────────
   Inline SVG: Wax Seal Stamp
───────────────────────────────────────────── */
function WaxSealStamp() {
  return (
    <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 38, height: 58 }}>
      {/* Handle */}
      <rect x="22" y="0" width="16" height="48" rx="4" fill="#6B4C2A" />
      <rect x="24" y="2" width="6" height="44" rx="3" fill="rgba(255,220,140,0.12)" />
      <rect x="20" y="18" width="20" height="6" rx="2" fill="#8B6A3A" />
      {/* Base disk */}
      <ellipse cx="30" cy="68" rx="24" ry="10" fill="#C8943F" />
      <ellipse cx="30" cy="68" rx="20" ry="8" fill="#A87830" />
      {/* Connecting flange */}
      <path d="M18 46 L42 46 L46 60 L14 60 Z" fill="#8B6020" />
      <path d="M20 47 L40 47 L43 58 L17 58 Z" fill="#A07830" />
      {/* PC monogram on base */}
      <text x="30" y="72" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="rgba(255,235,170,0.6)" fontWeight="bold" letterSpacing="1">PC</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Inline SVG: Vintage Postage Stamp
───────────────────────────────────────────── */
function PostageStamp({ rotation = 0 }: { rotation?: number }) {
  return (
    <svg
      viewBox="0 0 55 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 42, height: 52, transform: `rotate(${rotation}deg)` }}
    >
      {/* Perforated border */}
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={`t${i}`} cx={6 + i * 6.5} cy="4" r="2.5" fill="#FAF7F0" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={`b${i}`} cx={6 + i * 6.5} cy="64" r="2.5" fill="#FAF7F0" />
      ))}
      {Array.from({ length: 9 }, (_, i) => (
        <circle key={`l${i}`} cx="4" cy={6 + i * 6.5} r="2.5" fill="#FAF7F0" />
      ))}
      {Array.from({ length: 9 }, (_, i) => (
        <circle key={`r${i}`} cx="51" cy={6 + i * 6.5} r="2.5" fill="#FAF7F0" />
      ))}
      {/* Body */}
      <rect x="5" y="5" width="45" height="58" rx="1" fill="#E8E0D0" />
      {/* Inner image area */}
      <rect x="8" y="8" width="39" height="42" rx="1" fill="#D4C8B0" />
      {/* Simple botanical illustration */}
      <path d="M27 45 C27 35 22 28 20 22" stroke="#8B7050" strokeWidth="1" fill="none" />
      <ellipse cx="20" cy="21" rx="4" ry="6" transform="rotate(-20 20 21)" fill="#A89060" opacity="0.6" />
      <path d="M27 38 C23 36 19 38 18 42" stroke="#8B7050" strokeWidth="0.8" fill="none" />
      <ellipse cx="17" cy="43" rx="3" ry="5" transform="rotate(15 17 43)" fill="#A89060" opacity="0.5" />
      <path d="M27 32 C31 30 35 32 36 28" stroke="#8B7050" strokeWidth="0.8" fill="none" />
      <ellipse cx="36" cy="27" rx="4" ry="5" transform="rotate(-10 36 27)" fill="#A89060" opacity="0.5" />
      {/* Value text */}
      <text x="27" y="57" textAnchor="middle" fontFamily="Georgia, serif" fontSize="5" fill="#6B5040" letterSpacing="0.5">INDIA • 1</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Inline SVG: Small envelope
───────────────────────────────────────────── */
function SmallEnvelope({ rotation = 0 }: { rotation?: number }) {
  return (
    <svg viewBox="0 0 80 55" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 60, height: 42, transform: `rotate(${rotation}deg)` }}>
      <rect x="1" y="1" width="78" height="53" rx="3" fill="#EDE8DC" stroke="rgba(140,110,70,0.3)" strokeWidth="0.8" />
      <path d="M1 1 L40 30 L79 1" stroke="rgba(140,110,70,0.25)" strokeWidth="0.8" fill="none" />
      <path d="M1 54 L28 32" stroke="rgba(140,110,70,0.15)" strokeWidth="0.6" />
      <path d="M79 54 L52 32" stroke="rgba(140,110,70,0.15)" strokeWidth="0.6" />
      {/* Red wax seal */}
      <circle cx="60" cy="40" r="7" fill="#BA664A" opacity="0.75" />
      <circle cx="60" cy="40" r="5" fill="#C47A5E" opacity="0.6" />
      <text x="60" y="43" textAnchor="middle" fontSize="5" fill="rgba(255,235,200,0.7)" fontFamily="Georgia, serif" fontWeight="bold">P</text>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Pressed lavender sprig (SVG inline)
───────────────────────────────────────────── */
function LavenderSprig({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 28, height: 70, ...style }}>
      <path d="M20 95 C20 75 18 50 20 20" stroke="#9EA88A" strokeWidth="1.2" strokeLinecap="round" />
      {[0, 10, 20, 30, 40, 50].map((y, i) => (
        <g key={i}>
          <ellipse cx={14} cy={20 + y} rx="4" ry="6" transform={`rotate(-15 14 ${20 + y})`} fill="#B8A8C8" opacity={0.55 - i * 0.05} />
          <ellipse cx={26} cy={23 + y} rx="4" ry="6" transform={`rotate(15 26 ${23 + y})`} fill="#B8A8C8" opacity={0.5 - i * 0.05} />
        </g>
      ))}
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function ConnectRight() {
  const [phase, setPhase] = useState<Phase>("letter");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [doorOpen, setDoorOpen] = useState(false);
  const [showNewLetter, setShowNewLetter] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nameSpanRef = useRef<HTMLSpanElement>(null);
  const subjectSpanRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth] = useState(80);
  const [subjectWidth, setSubjectWidth] = useState(80);

  const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useSafeLayoutEffect(() => {
    if (nameSpanRef.current) setNameWidth(nameSpanRef.current.getBoundingClientRect().width + 4);
  }, [name]);

  useSafeLayoutEffect(() => {
    if (subjectSpanRef.current) setSubjectWidth(subjectSpanRef.current.getBoundingClientRect().width + 4);
  }, [subject]);

  const handleTyping = useCallback(() => {
    setIsTyping(true);
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => setIsTyping(false), 1200);
  }, []);

  const handleSend = () => {
    if (!name.trim() || !message.trim()) return;
    // 1. Fold (letter phase exits)
    setPhase("folding");
    // 2. Seal
    setTimeout(() => setPhase("sealing"), 1400);
    // 3. Float toward mailbox
    setTimeout(() => setPhase("floating"), 2800);
    // 4. Door opens, letter inserts
    setTimeout(() => {
      setPhase("inserting");
      setDoorOpen(true);
    }, 3800);
    // 5. Letter slides in
    setTimeout(() => setShowNewLetter(true), 4400);
    // 6. Door closes + flag raises → thanks
    setTimeout(() => {
      setDoorOpen(false);
      setPhase("thanks");
    }, 5800);
  };

  const handleBack = () => {
    setPhase("letter");
    setName("");
    setSubject("");
    setMessage("");
    setShowNewLetter(false);
    setDoorOpen(false);
  };

  const canSend = name.trim() !== "" && message.trim() !== "";

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: "linear-gradient(198deg, #FFFDF8 0%, #FAF7F2 44%, #F6EFE5 100%)",
      }}
    >
      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        .letter-input::placeholder {
          color: rgba(110, 90, 78, 0.55) !important;
          font-style: italic;
        }
        .letter-textarea::placeholder {
          color: rgba(110, 90, 78, 0.50) !important;
          font-style: italic;
          font-size: clamp(12px, 1.7vh, 14px) !important;
        }
        .letter-input:focus, .letter-textarea:focus {
          outline: none;
        }
        @keyframes inkFlow {
          0%   { stroke-dashoffset: 200; opacity: 0; }
          20%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.7; }
        }
        @keyframes dustFloat {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          30%  { opacity: 0.6; }
          100% { transform: translateY(-30px) translateX(8px); opacity: 0; }
        }
      `}</style>

      {/* ─── SUBTLE PAPER TEXTURE LINES ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(110,90,78,0.025) 28px, rgba(110,90,78,0.025) 29px)",
          zIndex: 1,
        }}
      />

      {/* ─── WATERCOLOR WASHES ─── */}
      <div
        className="absolute pointer-events-none"
        style={{ top: "5%", right: "-5%", width: "55%", height: "55%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(212,168,83,0.06) 0%, transparent 70%)", zIndex: 1 }}
      />
      <div
        className="absolute pointer-events-none"
        style={{ bottom: "8%", left: "2%", width: "40%", height: "35%", borderRadius: "50%", background: "radial-gradient(ellipse, rgba(158,168,138,0.07) 0%, transparent 70%)", zIndex: 1 }}
      />

      {/* ─── PROP: Lavender sprigs (top-left corner) ─── */}
      <div className="absolute pointer-events-none select-none" style={{ top: "6%", left: "4%", zIndex: 3, transform: "rotate(-8deg)", opacity: 0.75 }}>
        <LavenderSprig />
      </div>
      <div className="absolute pointer-events-none select-none" style={{ top: "8%", left: "9%", zIndex: 3, transform: "rotate(5deg)", opacity: 0.55 }}>
        <LavenderSprig style={{ width: 20, height: 50 }} />
      </div>

      {/* ─── PROP: Vintage Postage stamps (top area) ─── */}
      <div className="absolute pointer-events-none select-none" style={{ top: "4%", right: "6%", zIndex: 3, opacity: 0.8 }}>
        <PostageStamp rotation={-6} />
      </div>
      <div className="absolute pointer-events-none select-none" style={{ top: "7%", right: "14%", zIndex: 3, opacity: 0.65 }}>
        <PostageStamp rotation={4} />
      </div>

      {/* ─── PROP: Small envelopes (lower left, below mailbox) ─── */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "12%", left: "2%", zIndex: 3, opacity: 0.7 }}>
        <SmallEnvelope rotation={8} />
      </div>
      <div className="absolute pointer-events-none select-none" style={{ bottom: "9%", left: "7%", zIndex: 3, opacity: 0.55 }}>
        <SmallEnvelope rotation={-4} />
      </div>
      <div className="absolute pointer-events-none select-none" style={{ bottom: "15%", left: "1%", zIndex: 3, opacity: 0.45 }}>
        <SmallEnvelope rotation={12} />
      </div>

      {/* ─── PROP: Wax Seal Stamp (bottom right) ─── */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "8%", right: "4%", zIndex: 3, opacity: 0.9, transform: "rotate(10deg)" }}>
        <WaxSealStamp />
      </div>

      {/* ─── PROP: Fountain Pen (above letter) ─── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "16%",
          right: "5%",
          zIndex: 12,
          opacity: 0.85,
          transform: "rotate(-35deg)",
        }}
      >
        <FountainPen active={isTyping} />
      </div>

      {/* ─── PROP: Tiny handwritten note (bottom center-right) ─── */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ bottom: "18%", right: "5%", zIndex: 3, transform: "rotate(6deg)", opacity: 0.6 }}
      >
        <svg viewBox="0 0 70 50" fill="none" style={{ width: 55, height: 38 }}>
          <rect width="70" height="50" rx="2" fill="#F5F0E5" stroke="rgba(140,110,70,0.2)" strokeWidth="0.5" />
          {[10, 18, 26, 34, 42].map((y, i) => (
            <line key={i} x1="6" y1={y} x2={60 - i * 2} y2={y} stroke="rgba(110,90,70,0.12)" strokeWidth="0.7" />
          ))}
          <text x="35" y="47" textAnchor="middle" fontFamily="Georgia, serif" fontSize="5" fill="rgba(110,90,70,0.3)" fontStyle="italic">a note</text>
        </svg>
      </div>

      {/* ─── PROP: Paper clip (beside letter) ─── */}
      <div className="absolute pointer-events-none select-none" style={{ top: "23%", left: "5%", zIndex: 12, transform: "rotate(45deg)", opacity: 0.6 }}>
        <svg viewBox="0 0 18 55" fill="none" style={{ width: 14, height: 40 }}>
          <path d="M9 50 C3 50 2 40 2 30 L2 12 C2 6 6 3 9 3 C12 3 16 6 16 12 L16 35" stroke="#9A8070" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M5 12 C5 8 7 6 9 6 C11 6 13 8 13 12 L13 30" stroke="rgba(180,160,130,0.5)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* ─── DOMINANT: MAILBOX ILLUSTRATION (hero element) ─── */}
      <div
        className="absolute"
        style={{
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "62%",
          height: "70%",
          zIndex: 5,
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          style={{ width: "100%", height: "100%" }}
          animate={isHovered ? { y: -4, filter: "drop-shadow(0 12px 24px rgba(58,40,15,0.18))" } : { y: 0, filter: "drop-shadow(0 6px 14px rgba(58,40,15,0.10))" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BrassMailbox
            isHovered={isHovered}
            doorOpen={doorOpen}
            showNewLetter={showNewLetter}
            onDoorAnimComplete={undefined}
          />
        </motion.div>
      </div>

      {/* ─── FLOATING LETTER / FORM ─── */}
      <AnimatePresence mode="wait">
        {/* ── LETTER WRITING ── */}
        {phase === "letter" && (
          <motion.div
            key="letter-form"
            className="absolute"
            style={{
              bottom: "4%",
              left: "4%",
              right: "4%",
              zIndex: 20,
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.02, y: "60%", transformOrigin: "bottom center", transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Paper — deckled edges via SVG clipPath workaround with box-shadow trick */}
            <div
              style={{
                position: "relative",
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 50%, #F7F2E8 100%)",
                borderRadius: "1px",
                boxShadow:
                  "0 1px 0 rgba(255,255,255,0.7) inset, 0 -1px 0 rgba(110,90,60,0.06) inset, 2px 6px 18px rgba(58,44,30,0.08), -1px 0 0 rgba(110,90,60,0.05)",
                padding: "14px 16px 12px",
              }}
            >
              {/* Deckled top edge */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: -3,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: "linear-gradient(90deg, #FAF7EE 0%, #F7F2E8 20%, #FEFCF5 40%, #F7F2E8 60%, #FAF7EE 80%, #F7F2E8 100%)",
                  clipPath: "polygon(0% 60%, 1% 0%, 2% 80%, 3% 20%, 4% 70%, 5% 10%, 6% 60%, 7% 0%, 8% 80%, 9% 30%, 10% 70%, 11% 10%, 12% 60%, 13% 0%, 14% 80%, 15% 20%, 16% 70%, 17% 10%, 18% 60%, 19% 0%, 20% 80%, 21% 30%, 22% 60%, 23% 10%, 24% 80%, 25% 20%, 26% 70%, 27% 0%, 28% 80%, 29% 30%, 30% 70%, 31% 10%, 32% 60%, 33% 0%, 34% 80%, 35% 20%, 36% 70%, 37% 10%, 38% 60%, 39% 0%, 40% 80%, 41% 30%, 42% 60%, 43% 10%, 44% 80%, 45% 20%, 46% 70%, 47% 0%, 48% 80%, 49% 30%, 50% 70%, 51% 10%, 52% 60%, 53% 0%, 54% 80%, 55% 20%, 56% 70%, 57% 10%, 58% 60%, 59% 0%, 60% 80%, 61% 30%, 62% 60%, 63% 10%, 64% 80%, 65% 20%, 66% 70%, 67% 0%, 68% 80%, 69% 30%, 70% 70%, 71% 10%, 72% 60%, 73% 0%, 74% 80%, 75% 20%, 76% 70%, 77% 10%, 78% 60%, 79% 0%, 80% 80%, 81% 30%, 82% 60%, 83% 10%, 84% 80%, 85% 20%, 86% 70%, 87% 0%, 88% 80%, 89% 30%, 90% 70%, 91% 10%, 92% 60%, 93% 0%, 94% 80%, 95% 20%, 96% 70%, 97% 10%, 98% 60%, 99% 0%, 100% 60%)",
                  zIndex: 2,
                }}
              />

              {/* Ruled lines (very subtle) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(110,90,70,0.045) 22px, rgba(110,90,70,0.045) 23px)",
                  borderRadius: "1px",
                  zIndex: 0,
                }}
              />

              {/* Letter content */}
              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Opening line */}
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "clamp(11.5px, 1.6vh, 13.5px)",
                    color: "rgba(110, 90, 78, 0.7)",
                    lineHeight: 2.1,
                    marginBottom: 0,
                  }}
                >
                  Dear Poonam,{" "}my name is{" "}
                  <span className="relative inline-block">
                    <span
                      ref={nameSpanRef}
                      className="absolute invisible whitespace-pre"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11.5px, 1.6vh, 13.5px)", fontStyle: "italic", fontWeight: name ? 600 : 400, padding: "0 2px" }}
                    >
                      {name || "your name"}
                    </span>
                    <input
                      value={name}
                      onChange={(e) => { setName(e.target.value); handleTyping(); }}
                      placeholder="your name"
                      className="letter-input bg-transparent"
                      style={{
                        width: `${nameWidth}px`,
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(11.5px, 1.6vh, 13.5px)",
                        fontStyle: "italic",
                        fontWeight: name ? 600 : 400,
                        color: name ? "#2A1E16" : "rgba(110, 90, 78, 0.6)",
                        border: "none",
                        borderBottom: `1px solid ${name ? "rgba(110,90,78,0.4)" : "rgba(110,90,78,0.2)"}`,
                        paddingBottom: "1px",
                        verticalAlign: "baseline",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </span>
                  {" "}and I am writing regarding{" "}
                  <span className="relative inline-block">
                    <span
                      ref={subjectSpanRef}
                      className="absolute invisible whitespace-pre"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(11.5px, 1.6vh, 13.5px)", fontStyle: "italic", fontWeight: subject ? 600 : 400, padding: "0 2px" }}
                    >
                      {subject || "a matter"}
                    </span>
                    <input
                      value={subject}
                      onChange={(e) => { setSubject(e.target.value); handleTyping(); }}
                      placeholder="a matter"
                      className="letter-input bg-transparent"
                      style={{
                        width: `${subjectWidth}px`,
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(11.5px, 1.6vh, 13.5px)",
                        fontStyle: "italic",
                        fontWeight: subject ? 600 : 400,
                        color: subject ? "#2A1E16" : "rgba(110, 90, 78, 0.6)",
                        border: "none",
                        borderBottom: `1px solid ${subject ? "rgba(110,90,78,0.4)" : "rgba(110,90,78,0.2)"}`,
                        paddingBottom: "1px",
                        verticalAlign: "baseline",
                        transition: "all 0.2s ease",
                      }}
                    />
                  </span>
                  .
                </p>

                {/* Message textarea */}
                <textarea
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); handleTyping(); }}
                  placeholder="Write your message here…"
                  rows={3}
                  className="letter-textarea bg-transparent w-full resize-none"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(11.5px, 1.6vh, 13.5px)",
                    fontStyle: "italic",
                    color: "#2A1E16",
                    border: "none",
                    borderBottom: "1px solid rgba(110, 90, 78, 0.1)",
                    paddingBottom: "4px",
                    marginTop: "4px",
                    marginBottom: "8px",
                    lineHeight: 2.1,
                  }}
                />

                {/* Closing + signature */}
                <div className="flex items-end justify-between">
                  <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(11px, 1.5vh, 13px)", color: "rgba(110,90,78,0.65)", marginBottom: 0 }}>
                    With gratitude,
                  </p>
                  {/* Seal & Send */}
                  <motion.button
                    onClick={handleSend}
                    disabled={!canSend}
                    whileHover={canSend ? { scale: 1.03 } : {}}
                    whileTap={canSend ? { scale: 0.97 } : {}}
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontStyle: "italic",
                      fontSize: "clamp(10px, 1.4vh, 12px)",
                      letterSpacing: "0.05em",
                      color: canSend ? "#FAF7EE" : "rgba(250,247,238,0.5)",
                      background: canSend ? "linear-gradient(135deg, #BA664A, #9A4830)" : "rgba(186,102,74,0.3)",
                      border: canSend ? "0.5px solid rgba(160,82,58,0.6)" : "0.5px solid rgba(186,102,74,0.3)",
                      padding: "5px 14px 6px",
                      borderRadius: "1px",
                      cursor: canSend ? "pointer" : "default",
                      boxShadow: canSend ? "0 2px 8px rgba(186,102,74,0.2)" : "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" />
                    </svg>
                    Seal &amp; Send
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── FOLDING PHASE ── */}
        {phase === "folding" && (
          <motion.div
            key="folding"
            className="absolute"
            style={{ bottom: "4%", left: "15%", right: "15%", zIndex: 25 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              style={{
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 100%)",
                border: "0.5px solid rgba(110,90,60,0.12)",
                padding: "14px 16px",
                boxShadow: "2px 6px 18px rgba(58,44,30,0.08)",
                transformOrigin: "center bottom",
              }}
              animate={{ scaleY: [1, 0.5, 0.15], scaleX: [1, 0.85, 0.7] }}
              transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "12px", color: "rgba(110,90,78,0.6)", lineHeight: 1.9 }}>
                Dear Poonam, my name is {name} and I am writing regarding {subject || "a matter"}.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "11px", color: "#4A3728", lineHeight: 1.7, marginTop: 4 }}>
                {message.slice(0, 60)}{message.length > 60 ? "…" : ""}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ── SEALING PHASE ── */}
        {phase === "sealing" && (
          <motion.div
            key="envelope-seal"
            className="absolute"
            style={{ bottom: "8%", left: "20%", right: "20%", zIndex: 25 }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Envelope shape */}
            <div style={{ position: "relative", background: "#EDE8DC", border: "0.5px solid rgba(140,110,70,0.3)", padding: "18px 14px 14px", boxShadow: "2px 6px 20px rgba(58,44,30,0.1)" }}>
              {/* Flap */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 28, clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)", background: "#E0DBD0" }} />
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", color: "#6E5A4E", opacity: 0.5, marginTop: 12 }}>To Poonam Choudhary</p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "7.5px", color: "#6E5A4E", opacity: 0.35 }}>New Delhi, India</p>
              {/* Wax seal appearing */}
              <motion.div
                style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)" }}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.3 }}
              >
                <svg width="36" height="36" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="#BA664A" />
                  <circle cx="20" cy="20" r="13" fill="#C47A5E" />
                  <text x="20" y="24" textAnchor="middle" fill="rgba(255,240,210,0.75)" fontSize="10" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="1">PC</text>
                  <circle cx="14" cy="14" r="2" fill="rgba(255,255,255,0.2)" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ── FLOATING PHASE — envelope rises toward mailbox ── */}
        {phase === "floating" && (
          <motion.div
            key="floating-envelope"
            className="absolute pointer-events-none"
            style={{ bottom: "8%", left: "20%", right: "20%", zIndex: 25 }}
            initial={{ y: 0, x: 0, opacity: 1, rotate: 0 }}
            animate={{ y: -280, x: 20, opacity: [1, 1, 0.8, 0], rotate: [-2, 2, -1, 0] }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <div style={{ background: "#EDE8DC", border: "0.5px solid rgba(140,110,70,0.3)", padding: "14px 12px 10px", boxShadow: "2px 4px 14px rgba(58,44,30,0.12)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 22, clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)", background: "#E0DBD0" }} />
              <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)" }}>
                <svg width="30" height="30" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="#BA664A" />
                  <circle cx="20" cy="20" r="13" fill="#C47A5E" />
                  <text x="20" y="24" textAnchor="middle" fill="rgba(255,240,210,0.75)" fontSize="10" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="1">PC</text>
                </svg>
              </div>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", color: "#6E5A4E", opacity: 0.4, marginTop: 10 }}>To Poonam Choudhary</p>
            </div>
          </motion.div>
        )}

        {/* ── THANKS ── */}
        {phase === "thanks" && (
          <motion.div
            key="thanks"
            className="absolute"
            style={{ bottom: "4%", left: "6%", right: "6%", zIndex: 30 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div
              style={{
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 100%)",
                border: "0.5px solid rgba(110,90,60,0.10)",
                padding: "18px 20px 16px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), 2px 6px 18px rgba(58,44,30,0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 6,
              }}
            >
              <div style={{ width: 28, height: "0.5px", background: "rgba(168,178,154,0.4)", marginBottom: 4 }} />
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(14px, 2vh, 17px)", color: "#3A2C1E", lineHeight: 1.5 }}>
                Your story has found its way.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(10px, 1.4vh, 12px)", color: "#5A4A38", lineHeight: 1.7, maxWidth: 260, opacity: 0.8 }}>
                Thank you, {name}. Every letter is read with care and warmth. I shall write back soon.
              </p>
              <div style={{ marginTop: 6, opacity: 0.18 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
              <div style={{ width: 28, height: "0.5px", background: "rgba(168,178,154,0.4)", marginBottom: 2 }} />
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "9.5px", color: "#6E5A4E", opacity: 0.5 }}>
                With warmth, Poonam
              </p>
              <button
                onClick={handleBack}
                style={{
                  marginTop: 8,
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "10px",
                  color: "#9EA88A",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  opacity: 0.65,
                  letterSpacing: "0.03em",
                }}
              >
                ← Write another letter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── PAGE NUMBER ─── */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "1.5%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.2 }}>5</span>
      </div>
    </div>
  );
}
