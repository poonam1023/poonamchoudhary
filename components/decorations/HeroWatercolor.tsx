"use client";

import React from "react";

interface HeroWatercolorProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroWatercolor({ className = "", style = {} }: HeroWatercolorProps) {
  // Muted botanical watercolor color values:
  const colors = {
    wash1: "#F7F1E8", // Faint warm base bleed
    wash2: "#E7EFE2", // Outer light bleed
    wash3: "#D6DED2", // Soft mid-tone sage green
    wash4: "#B8C2AA", // Richer sage green
    wash5: "#A8B29A", // Darkest botanical green (hotspot)
  };

  return (
    <div
      className={`absolute pointer-events-none select-none overflow-visible ${className}`}
      style={{
        left: "-16%",   // Positioned to bleed towards the spine (left)
        top: "-8%",     // Shifted higher to sit behind her head and under navigation ribbons
        width: "122%",  // Spans across the page
        height: "98%",  // Covers 80-85% of the page
        zIndex: 1,      // Sits behind the portrait
        mixBlendMode: "multiply", // Blends with the underlying paper texture
        ...style,
      }}
    >
      <svg
        viewBox="0 0 650 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* 
            REAL WATERCOLOR FILTER:
            - feTurbulence & feDisplacementMap create organic, bleeding, irregular paint edges.
            - feMorphology (erode) & feComposite isolate the outer "drying ring" / "fringe".
            - feColorMatrix colors the fringe to a richer, darker botanical green.
            - feMerge layers the base bleed and the detailed drying ring together.
          */}
          <filter id="premium-watercolor-filter" x="-20%" y="-20%" width="140%" height="140%">
            {/* Edge displacement noise */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025"
              numOctaves="5"
              result="edgeNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="edgeNoise"
              scale="24"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displacedWash"
            />
            
            {/* Paper granulation noise inside the wash */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.085"
              numOctaves="3"
              result="granulation"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.16 0"
              in="granulation"
              result="softGranulation"
            />
            <feComposite
              operator="arithmetic"
              k1="0.25"
              k2="0.88"
              k3="0"
              k4="0"
              in="displacedWash"
              in2="softGranulation"
              result="texturedWash"
            />

            {/* Isolate the edge for the drying ring (fringe) */}
            <feMorphology
              operator="erode"
              radius="2.2"
              in="texturedWash"
              result="erodedWash"
            />
            <feComposite
              operator="out"
              in="texturedWash"
              in2="erodedWash"
              result="edgeOutline"
            />
            
            {/* Color and blur the edge outline to simulate drying rings */}
            <feGaussianBlur
              stdDeviation="1.0"
              in="edgeOutline"
              result="blurredEdge"
            />
            <feColorMatrix
              type="matrix"
              values="0.32 0 0 0 0
                      0 0.38 0 0 0
                      0 0 0.28 0 0
                      0 0 0 1.5 0"
              in="blurredEdge"
              result="coloredEdge"
            />

            {/* Merge the textured base wash with the detailed edge ring */}
            <feMerge>
              <feMergeNode in="texturedWash" />
              <feMergeNode in="coloredEdge" />
            </feMerge>
          </filter>
        </defs>

        {/* Apply the watercolor filter to all layers */}
        <g filter="url(#premium-watercolor-filter)">
          {/* 
            ──── LAYER 1: Largest Base Wash (10% Opacity) ────
            Sweeps high, wide, and fades softly towards the spine crease.
            y-coordinates shifted up by 50px to align vertical center at ~200px.
          */}
          <path
            d="M 50,170 
               C 30,70 180,0 320,10 
               C 460,30 560,0 580,130 
               C 600,240 560,350 440,380 
               C 320,410 150,420 90,360 
               C 40,310 70,270 50,170 Z"
            fill={colors.wash1}
            opacity="0.10"
          />

          {/* ──── LAYER 2: Broad Outer Bleed (13% Opacity) ────
              Organic, sprawling shape linking spine margin to the central hero area. */}
          <path
            d="M 80,190 
               C 70,110 160,40 280,60 
               C 400,80 500,50 530,150 
               C 560,250 510,340 410,360 
               C 310,380 180,380 120,330 
               C 80,280 90,250 80,190 Z"
            fill={colors.wash2}
            opacity="0.13"
          />

          {/* ──── LAYER 3: Medium Bleed (19% Opacity) ────
              Forms the main backdrop of the paint cloud. */}
          <path
            d="M 120,200 
               C 110,130 190,80 290,100 
               C 390,120 450,100 480,170 
               C 510,240 460,310 380,320 
               C 300,330 200,340 150,290 
               C 110,250 130,230 120,200 Z"
            fill={colors.wash3}
            opacity="0.19"
          />

          {/* ──── LAYER 4: Main Paint Shape (23% Opacity) ────
              Concentrates behind her body and shoulders. */}
          <path
            d="M 160,210 
               C 150,150 220,110 300,130 
               C 380,150 410,130 430,190 
               C 450,250 420,290 350,300 
               C 290,310 230,300 190,260 
               C 160,230 170,240 160,210 Z"
            fill={colors.wash4}
            opacity="0.23"
          />

          {/* ──── LAYER 5: Visual Hotspot Behind Face (30% Opacity) ────
              Concentrated pigment sitting directly behind her face/shoulders.
              Perfectly centered around x=360, y=190. */}
          <path
            d="M 280,200 
               C 260,160 300,130 350,140 
               C 400,150 420,130 430,180 
               C 440,230 410,250 360,260 
               C 320,270 290,250 280,230 
               C 270,210 290,210 280,200 Z"
            fill={colors.wash5}
            opacity="0.30"
          />
        </g>

        {/* ──── LAYER 6: Hand-Painted Splatters ──── */}
        <g fill="#A8B29A" opacity="0.25">
          {/* Top-left splatters */}
          <circle cx="110" cy="60" r="3.2" className="filter blur-[0.4px]" />
          <circle cx="122" cy="54" r="1.5" className="filter blur-[0.2px]" />
          
          {/* Bottom-right splatters */}
          <circle cx="530" cy="360" r="2.8" className="filter blur-[0.3px]" />
          <circle cx="545" cy="372" r="1.8" className="filter blur-[0.2px]" />
          
          {/* Faint splatters on the left spine crease boundary */}
          <circle cx="48" cy="220" r="2.0" className="filter blur-[0.4px]" opacity="0.6" />
          <circle cx="60" cy="245" r="1.4" className="filter blur-[0.3px]" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
