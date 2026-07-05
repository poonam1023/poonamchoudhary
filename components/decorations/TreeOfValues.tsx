"use client";

import React from "react";
import { motion } from "framer-motion";

interface TreeOfValuesProps {
  className?: string;
  style?: React.CSSProperties;
}



export default function TreeOfValues({ className = "", style = {} }: TreeOfValuesProps) {
  // Naturalist watercolor colors
  const colors = {
    sageLight: "#E7EFE2",
    sageMid: "#D6DED2",
    sageDark: "#B8C2AA",
    oliveDark: "#A8B29A",
    oliveDeep: "#95A088",
    trunk: "#6E5942",          // Warm mid-brown (softened from near-black)
    accentWarm: "#C4784A",     // Terracotta/gold accent cluster
    accentWarmMid: "#D4956A",
    accentWarmLight: "#E4B48A",
    leaderLine: "rgba(110,90,78,0.65)", // Muted but clearly visible ink lines
    labelDark: "#2A1E16",
    labelMuted: "#6E5A4E",
  };

  return (
    <div
      className={`absolute pointer-events-none select-none overflow-visible ${className}`}
      style={{
        left: "5%",
        top: "6%",
        width: "90%",
        height: "82%",
        zIndex: 5,
        mixBlendMode: "multiply",
        ...style,
      }}
    >
      <svg
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Premium Watercolor SVG Filter */}
          <filter id="tree-watercolor-filter" x="-20%" y="-20%" width="140%" height="140%">
            {/* Edge displacement noise */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves="4"
              result="edgeNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="edgeNoise"
              scale="14"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedGraphic"
            />
            
            {/* Granulation texture */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08"
              numOctaves="2"
              result="granulation"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.15 0"
              in="granulation"
              result="softGranulation"
            />
            <feComposite
              operator="arithmetic"
              k1="0.18"
              k2="0.88"
              k3="0"
              k4="0"
              in="displacedGraphic"
              in2="softGranulation"
              result="texturedWash"
            />

            {/* Fringe/Drying Ring outline */}
            <feMorphology
              operator="erode"
              radius="1.6"
              in="texturedWash"
              result="erodedWash"
            />
            <feComposite
              operator="out"
              in="texturedWash"
              in2="erodedWash"
              result="edgeOutline"
            />
            <feGaussianBlur
              stdDeviation="0.6"
              in="edgeOutline"
              result="blurredEdge"
            />
            <feColorMatrix
              type="matrix"
              values="0.32 0 0 0 0
                      0 0.38 0 0 0
                      0 0 0.28 0 0
                      0 0 0 1.3 0"
              in="blurredEdge"
              result="coloredEdge"
            />

            {/* Merge wash & drying ring */}
            <feMerge>
              <feMergeNode in="texturedWash" />
              <feMergeNode in="coloredEdge" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 1. SOIL/ROOT BASE WATERCOLOR WASH ── */}
        <path
          d="M 120,720 C 180,690 420,690 480,720 C 530,745 450,770 300,770 C 150,770 70,745 120,720 Z"
          fill="#FAF1E8"
          opacity="0.5"
          filter="url(#tree-watercolor-filter)"
        />
        <path
          d="M 170,730 C 220,710 380,710 430,730 C 470,745 400,760 300,760 C 200,760 130,745 170,730 Z"
          fill="#ECDCC4"
          opacity="0.35"
          filter="url(#tree-watercolor-filter)"
        />

        {/* ── 2. WATERCOLOR TRUNK & ROOTS (Filled Tapered Shapes with filter) ── */}
        <g filter="url(#tree-watercolor-filter)">
          
          {/* Main Tapered Trunk (scales up from bottom) */}
          <motion.path
            d="M 290 680 Q 290 550 284 480 Q 286 410 286 350 Q 285 240 277 150 L 282 150 Q 290 240 294 350 Q 294 410 295 480 Q 302 550 308 680 Z"
            fill={colors.trunk}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            style={{ originY: 1 }}
          />

          {/* Branch I (Presence - Left Lower Branch, Tapered) */}
          <motion.path
            d="M 285,492 Q 210,480 110,431 L 110.5,429 Q 210,477 287.5,488 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            style={{ transformOrigin: "286px 490px" }}
          />

          {/* Branch II (Connection - Right Lower Branch, Tapered) */}
          <motion.path
            d="M 292,434 Q 380,415 490.5,371 L 489.5,369 Q 380,412 291.5,426 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "290px 430px" }}
          />

          {/* Branch III (Empathy - Left Upper Branch, Tapered) */}
          <motion.path
            d="M 288,358 Q 210,340 100,271 L 100.5,269 Q 210,337 288.5,352 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            style={{ transformOrigin: "287px 355px" }}
          />

          {/* Branch IV (Boundaries - Right Upper Branch, Tapered) */}
          <motion.path
            d="M 289,307 Q 370,287 480.5,211 L 479.5,209 Q 370,283 288.5,299 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            style={{ transformOrigin: "288px 305px" }}
          />

          {/* Tapered Root 1 (Left Root) */}
          <motion.path
            d="M 285,677 C 235,710 190,725 140,736 L 140.5,734 C 189.5,723 234.5,708 288.5,677 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "285px 677px" }}
          />

          {/* Tapered Root 2 (Center Root) */}
          <motion.path
            d="M 296,678 Q 301,715 294,755 L 296,755 Q 303,715 298,678 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "297px 678px" }}
          />

          {/* Tapered Root 3 (Right Root) */}
          <motion.path
            d="M 310,677 C 365,705 410,720 460,736 L 459.5,734 C 409.5,718 364.5,703 308.5,677 Z"
            fill={colors.trunk}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "309px 677px" }}
          />
        </g>

        {/* ── 3. SOFT WATERCOLOR FOLIAGE CLUSTERS (Layered blobs at every branch tip) ── */}

        {/* ── Branch I: Presence (tip at ~110, 430) — sage cluster ── */}
        <motion.g
          filter="url(#tree-watercolor-filter)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
          style={{ transformOrigin: "110px 430px" }}
        >
          <ellipse cx="108" cy="432" rx="44" ry="38" fill={colors.sageDark} opacity="0.72" />
          <ellipse cx="88" cy="420" rx="32" ry="28" fill={colors.oliveDark} opacity="0.68" />
          <ellipse cx="124" cy="418" rx="30" ry="26" fill={colors.sageMid} opacity="0.75" />
          <ellipse cx="100" cy="448" rx="28" ry="22" fill={colors.sageDark} opacity="0.60" />
          <ellipse cx="120" cy="444" rx="22" ry="18" fill={colors.sageLight} opacity="0.55" />
          <ellipse cx="94" cy="415" rx="18" ry="15" fill={colors.oliveDark} opacity="0.50" />
        </motion.g>

        {/* ── Branch II: Connection (tip at ~490, 370) — sage/olive cluster ── */}
        <motion.g
          filter="url(#tree-watercolor-filter)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.45, ease: "easeOut" }}
          style={{ transformOrigin: "490px 370px" }}
        >
          <ellipse cx="492" cy="368" rx="44" ry="38" fill={colors.sageDark} opacity="0.72" />
          <ellipse cx="510" cy="356" rx="32" ry="28" fill={colors.oliveDark} opacity="0.68" />
          <ellipse cx="476" cy="358" rx="30" ry="26" fill={colors.sageMid} opacity="0.75" />
          <ellipse cx="506" cy="382" rx="28" ry="22" fill={colors.sageDark} opacity="0.60" />
          <ellipse cx="480" cy="385" rx="22" ry="18" fill={colors.sageLight} opacity="0.55" />
          <ellipse cx="514" cy="360" rx="18" ry="15" fill={colors.oliveDark} opacity="0.50" />
        </motion.g>

        {/* ── Branch III: Empathy (tip at ~100, 270) — deep olive cluster ── */}
        <motion.g
          filter="url(#tree-watercolor-filter)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.55, ease: "easeOut" }}
          style={{ transformOrigin: "100px 270px" }}
        >
          <ellipse cx="98" cy="272" rx="44" ry="38" fill={colors.oliveDark} opacity="0.72" />
          <ellipse cx="78" cy="260" rx="32" ry="28" fill={colors.sageDark} opacity="0.68" />
          <ellipse cx="114" cy="258" rx="30" ry="26" fill={colors.oliveDeep} opacity="0.70" />
          <ellipse cx="90" cy="288" rx="28" ry="22" fill={colors.sageMid} opacity="0.62" />
          <ellipse cx="112" cy="284" rx="22" ry="18" fill={colors.sageLight} opacity="0.55" />
          <ellipse cx="84" cy="255" rx="18" ry="15" fill={colors.oliveDark} opacity="0.52" />
        </motion.g>

        {/* ── Branch IV: Boundaries (tip at ~480, 210) — WARM GOLD/BLUSH focal accent ── */}
        <motion.g
          filter="url(#tree-watercolor-filter)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.65, ease: "easeOut" }}
          style={{ transformOrigin: "480px 210px" }}
        >
          {/* Main sage base so it blends into the tree */}
          <ellipse cx="482" cy="212" rx="44" ry="38" fill={colors.sageDark} opacity="0.65" />
          <ellipse cx="500" cy="198" rx="32" ry="28" fill={colors.sageMid} opacity="0.60" />
          {/* Warm accent overlay — the focal point */}
          <ellipse cx="488" cy="205" rx="30" ry="26" fill={colors.accentWarm} opacity="0.55" />
          <ellipse cx="472" cy="218" rx="24" ry="20" fill={colors.accentWarmMid} opacity="0.50" />
          <ellipse cx="498" cy="222" rx="20" ry="16" fill={colors.accentWarmLight} opacity="0.45" />
          {/* Sage fringe to blend edges */}
          <ellipse cx="468" cy="200" rx="18" ry="15" fill={colors.sageDark} opacity="0.48" />
        </motion.g>

        {/* ── Branch V: Growth — canopy top (tip at ~280, 140) — full sage crown ── */}
        <motion.g
          filter="url(#tree-watercolor-filter)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.8, ease: "easeOut" }}
          style={{ transformOrigin: "280px 140px" }}
        >
          <ellipse cx="278" cy="142" rx="50" ry="44" fill={colors.sageDark} opacity="0.72" />
          <ellipse cx="258" cy="128" rx="36" ry="32" fill={colors.oliveDark} opacity="0.68" />
          <ellipse cx="296" cy="130" rx="34" ry="30" fill={colors.sageMid} opacity="0.75" />
          <ellipse cx="268" cy="158" rx="32" ry="26" fill={colors.sageDark} opacity="0.60" />
          <ellipse cx="294" cy="156" rx="26" ry="22" fill={colors.sageLight} opacity="0.55" />
          <ellipse cx="252" cy="136" rx="22" ry="18" fill={colors.oliveDark} opacity="0.52" />
          <ellipse cx="302" cy="148" rx="20" ry="16" fill={colors.oliveDeep} opacity="0.50" />
        </motion.g>

        {/* ── 4. VISIBLE NATURALIST LEADER LINES (Thin curved ink lines drawing out) ── */}
        
        {/* Branch I (Presence) */}
        <motion.path
          d="M 110,430 Q 75,445 45,455"
          stroke={colors.leaderLine}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
        />
        
        {/* Branch II (Connection) */}
        <motion.path
          d="M 490,370 Q 520,385 555,395"
          stroke={colors.leaderLine}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.3, ease: "easeInOut" }}
        />
        
        {/* Branch III (Empathy) */}
        <motion.path
          d="M 100,270 Q 70,285 45,295"
          stroke={colors.leaderLine}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeInOut" }}
        />
        
        {/* Branch IV (Boundaries) */}
        <motion.path
          d="M 480,210 Q 515,225 555,235"
          stroke={colors.leaderLine}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
        />
        
        {/* Branch V (Growth) */}
        <motion.path
          d="M 280,115 Q 180,105 90,95"
          stroke={colors.leaderLine}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeInOut" }}
        />
        
        {/* Roots Foundational Belief */}
        <motion.path
          d="M 280,730 Q 170,738 60,750"
          stroke={colors.leaderLine}
          strokeWidth="0.8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 2.1, ease: "easeInOut" }}
        />

        {/* ── 5. FIELD-GUIDE LABELS & TERMINAL TICKS/DOTS (Fades in last) ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.9 }}
        >
          {/* Ticks and Dots under/before labels */}
          {/* Presence */}
          <circle cx="45" cy="455" r="2" fill={colors.leaderLine} />
          <line x1="45" y1="455" x2="60" y2="455" stroke={colors.leaderLine} strokeWidth="0.8" />
          
          {/* Connection */}
          <circle cx="555" cy="395" r="2" fill={colors.leaderLine} />
          <line x1="540" y1="395" x2="555" y2="395" stroke={colors.leaderLine} strokeWidth="0.8" />
          
          {/* Empathy */}
          <circle cx="45" cy="295" r="2" fill={colors.leaderLine} />
          <line x1="45" y1="295" x2="60" y2="295" stroke={colors.leaderLine} strokeWidth="0.8" />
          
          {/* Boundaries */}
          <circle cx="555" cy="235" r="2" fill={colors.leaderLine} />
          <line x1="540" y1="235" x2="555" y2="235" stroke={colors.leaderLine} strokeWidth="0.8" />
          
          {/* Growth */}
          <circle cx="90" cy="95" r="2" fill={colors.leaderLine} />
          <line x1="90" y1="95" x2="105" y2="95" stroke={colors.leaderLine} strokeWidth="0.8" />
          
          {/* Roots */}
          <circle cx="60" cy="750" r="2" fill={colors.leaderLine} />
          <line x1="60" y1="750" x2="75" y2="750" stroke={colors.leaderLine} strokeWidth="0.8" />

          {/* Label Texts */}
          {/* Branch I (Presence) - Left margin */}
          <text x="45" y="443" fill={colors.labelDark} fontFamily="var(--font-sans), sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="start">
            I. PRESENCE BEFORE
          </text>
          <text x="45" y="452" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="start">
            PERFECTION
          </text>

          {/* Branch II (Connection) - Right margin */}
          <text x="555" y="383" fill={colors.labelDark} fontFamily="var(--font-sans), sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="end">
            II. CONNECTION BEFORE
          </text>
          <text x="555" y="392" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="end">
            CORRECTION
          </text>

          {/* Branch III (Empathy) - Left margin */}
          <text x="45" y="283" fill={colors.labelDark} fontFamily="var(--font-sans), sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="start">
            III. EMPATHY CREATES
          </text>
          <text x="45" y="292" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="start">
            RESILIENCE
          </text>

          {/* Branch IV (Boundaries) - Right margin (Safe below ribbon navigation) */}
          <text x="555" y="223" fill={colors.labelDark} fontFamily="var(--font-sans), sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="end">
            IV. BOUNDARIES
          </text>
          <text x="555" y="232" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="end">
            WITH LOVE
          </text>

          {/* Branch V (Growth) - Top-left margin */}
          <text x="90" y="83" fill={colors.labelDark} fontFamily="var(--font-sans), sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="start">
            V. GROWTH IS
          </text>
          <text x="90" y="92" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="start">
            LIFELONG
          </text>

          {/* Foundational Roots Label */}
          <text x="60" y="730" fill={colors.labelDark} fontFamily="var(--font-sans), sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.08em" textAnchor="start">
            FOUNDATIONAL BELIEF:
          </text>
          <text x="60" y="740" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="start">
            SEEING THE CHILD AS
          </text>
          <text x="60" y="750" fill={colors.labelMuted} fontFamily="var(--font-sans), sans-serif" fontSize="9.5" fontWeight="500" letterSpacing="0.08em" textAnchor="start">
            A WHOLE PERSON
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
