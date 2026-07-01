"use client";

import React from "react";
import Image from "next/image";
import {
  BotanicalIllustration,
  PressedFlower,
  WatercolorSplash,
} from "@/components/decorations";

/**
 * ChapterOneRight — The Visual Hero Page
 *
 * Right page of the luxury coffee-table book spread.
 * Features:
 *   - Multiple layered WatercolorSplash blobs creating a massive organic sage-green wash
 *   - Large borderless author portrait sitting on the page
 *   - Botanical branches behind & overlapping the portrait
 *   - Tilted floating quote paper card pinned with washi tape
 *   - Bottom-right matted bestseller badge card with stars
 */
export default function ChapterOneRight() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>

      {/* ── 1. MASSIVE ORGANIC WATERCOLOR WASH ──
          Multiple overlapping blobs simulate a real, hand-painted green wash behind the portrait.
          60-70% page coverage with irregular edges fading into cream. */}
      <WatercolorSplash
        variant="sage"
        position={{ top: "5%", left: "-8%" }}
        width="75%"
        height="68%"
        opacity={0.55}
        style={{ zIndex: 1, filter: "blur(22px)" }}
      />
      <WatercolorSplash
        variant="olive"
        position={{ top: "20%", left: "8%" }}
        width="58%"
        height="50%"
        opacity={0.32}
        style={{ zIndex: 2, filter: "blur(16px)" }}
      />
      <WatercolorSplash
        variant="sage"
        position={{ top: "38%", left: "-5%" }}
        width="50%"
        height="44%"
        opacity={0.28}
        style={{ zIndex: 2, filter: "blur(28px)" }}
      />
      {/* Feathered edge bleed to the right */}
      <WatercolorSplash
        variant="olive"
        position={{ top: "8%", left: "30%" }}
        width="40%"
        height="55%"
        opacity={0.16}
        style={{ zIndex: 2, filter: "blur(32px)" }}
      />

      {/* ── 2. BOTANICALS BEHIND PORTRAIT ── */}
      <BotanicalIllustration
        variant="branch"
        scale={1.4}
        opacity={0.28}
        position={{ top: "6%", right: "6%" }}
        rotation={12}
        animation={true}
        style={{ zIndex: 3 }}
        className="pointer-events-none"
      />
      <BotanicalIllustration
        variant="olive"
        scale={1.2}
        opacity={0.22}
        position={{ bottom: "20%", left: "-4%" }}
        rotation={55}
        animation={true}
        style={{ zIndex: 3 }}
        className="pointer-events-none"
      />
      <BotanicalIllustration
        variant="fern"
        scale={1.0}
        opacity={0.18}
        position={{ top: "55%", right: "2%" }}
        rotation={-20}
        animation={true}
        style={{ zIndex: 3 }}
        className="pointer-events-none"
      />

      {/* ── 3. HERO PORTRAIT ──
          Large scale, borderless — portrait sits directly on the page like a printed photo. */}
      <div
        className="absolute"
        style={{
          left: "4%",
          right: "20%",
          bottom: "2%",
          height: "84%",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/author-portrait.png"
            alt="Poonam Choudhary"
            fill
            className="object-contain object-bottom"
            style={{
              filter: "contrast(1.02) brightness(1.03) saturate(0.92)",
            }}
            priority
          />
        </div>
      </div>

      {/* ── 4. BOTANICALS OVERLAPPING PORTRAIT (zIndex > portrait) ── */}
      <BotanicalIllustration
        variant="lavender"
        scale={0.95}
        opacity={0.32}
        position={{ bottom: "6%", left: "38%" }}
        rotation={-10}
        animation={true}
        style={{ zIndex: 14 }}
        className="pointer-events-none"
      />
      <PressedFlower
        variant="fern-leaf"
        scale={0.85}
        opacity={0.46}
        position={{ top: "30%", left: "0%" }}
        rotation={22}
        animation={true}
        style={{ zIndex: 14 }}
      />
      <PressedFlower
        variant="wildflower"
        scale={0.65}
        opacity={0.38}
        position={{ top: "12%", right: "18%" }}
        rotation={-8}
        animation={true}
        style={{ zIndex: 14 }}
      />

      {/* ── 5. FLOATING TILTED QUOTE CARD ──
          Torn paper note pinned with washi tape, tilted naturally. */}
      <div
        className="absolute"
        style={{
          top: "18%",
          right: "3%",
          width: "42%",
          zIndex: 22,
          transform: "rotate(-3.5deg)",
          filter: "drop-shadow(2px 6px 18px rgba(26,20,18,0.14))",
          position: "absolute",
        }}
      >
        {/* Washi Tape — positioned relative to this container */}
        <div
          className="absolute pointer-events-none select-none"
          style={{
            top: "-7px",
            left: "50%",
            transform: "translateX(-50%) rotate(2.5deg)",
            width: "62px",
            height: "14px",
            background: "rgba(210,196,165,0.62)",
            clipPath: "polygon(1% 0%, 99% 1%, 100% 30%, 99% 70%, 100% 100%, 98% 99%, 2% 100%, 0% 85%, 2% 50%, 0% 15%)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
            zIndex: 26,
          }}
        >
          {/* Tape weave texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, rgba(140,118,85,0.15) 0px, rgba(140,118,85,0.15) 1px, transparent 1px, transparent 4px),
                repeating-linear-gradient(-45deg, rgba(140,118,85,0.15) 0px, rgba(140,118,85,0.15) 1px, transparent 1px, transparent 4px)
              `,
            }}
          />
        </div>

        {/* Quote Card Body — torn paper look */}
        <div
          style={{
            background: "#FEFBF5",
            border: "0.5px solid rgba(142,120,95,0.16)",
            padding: "18px 16px 22px",
            clipPath: "polygon(0.5% 1.5%, 98.8% 0%, 100% 98%, 1.5% 99.5%)",
            boxShadow: "inset 0 1px 8px rgba(110,90,78,0.03), 0 4px 14px rgba(26,20,18,0.07)",
            position: "relative",
          }}
        >
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(110,90,78,0.025) 22px, rgba(110,90,78,0.025) 23px)
              `,
              borderRadius: "inherit",
            }}
          />

          {/* Large curled open-quote mark */}
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "38px",
              fontWeight: 700,
              lineHeight: 0.5,
              color: "#B48C58",
              display: "block",
              marginBottom: "10px",
              opacity: 0.9,
            }}
          >
            "
          </span>

          {/* Quote body text — italic Cormorant for handwritten editorial feel */}
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: "clamp(12px, 1.9vh, 14px)",
              lineHeight: 1.72,
              color: "#3C2E25",
              paddingLeft: "4px",
              paddingRight: "4px",
              position: "relative",
              zIndex: 1,
            }}
          >
            There is no perfect parent,<br />
            only a present one.
          </p>

          {/* Attribution line + Heart sketch */}
          <div className="flex items-center justify-between mt-3 px-1" style={{ position: "relative", zIndex: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "8.5px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#8E7A6C",
              }}
            >
              — Poonam Choudhary
            </span>

            {/* Hand-drawn-look heart */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B48C58" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}>
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── 6. MATTED BESTSELLER BADGE (Bottom-Right Corner) ── */}
      <div
        className="absolute"
        style={{
          bottom: "5%",
          right: "3%",
          width: "38%",
          zIndex: 22,
          transform: "rotate(0.8deg)",
        }}
      >
        {/* Outer mat border */}
        <div
          style={{
            background: "#FAF7F2",
            border: "1px solid rgba(142,120,95,0.18)",
            borderRadius: "3px",
            padding: "3px",
            boxShadow: "1px 3px 10px rgba(26,20,18,0.08)",
          }}
        >
          {/* Inner content area */}
          <div
            style={{
              background: "#FDFAF5",
              border: "0.5px solid rgba(142,120,95,0.1)",
              borderRadius: "2px",
              padding: "10px 12px 10px",
            }}
          >
            {/* Top row: leaf logo + "Bestselling Author" */}
            <div className="flex items-center gap-2">
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: "18px",
                  height: "18px",
                  background: "rgba(110,122,102,0.12)",
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6E7A66" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 2C12 10 6 14 6 18c0 2 2 3 6 3s6-1 6-3c0-4-6-8-6-16z" />
                  <path d="M12 9c-1 1.5-1.5 3-1.5 4" strokeDasharray="1.5 1.5" />
                  <path d="M12 9c1 1.5 1.5 3 1.5 4" strokeDasharray="1.5 1.5" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "8px",
                    fontWeight: 700,
                    color: "#2E2318",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Bestselling Author
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "9px",
                    color: "#7A6355",
                    marginTop: "0.5px",
                  }}
                >
                  of Conscious Parenting
                </div>
              </div>
            </div>

            {/* Star rating */}
            <div className="flex items-center gap-0.5 mt-2 ml-[22px]">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill="#B48C58" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "6px",
                  color: "#8E7A6C",
                  marginLeft: "4px",
                  letterSpacing: "0.04em",
                }}
              >
                4.9 / 5.0
              </span>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "0.5px",
                background: "rgba(142,120,95,0.14)",
                margin: "8px 0",
              }}
            />

            {/* Impact stat */}
            <div
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "7px",
                fontWeight: 700,
                color: "#6E7A66",
                letterSpacing: "0.1em",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              50,000+ Families Impacted
            </div>
          </div>
        </div>
      </div>

      {/* Page number */}
      <div
        className="absolute select-none pointer-events-none"
        style={{ bottom: "2%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "#6E5A4E",
            opacity: 0.2,
          }}
        >
          1
        </span>
      </div>
    </div>
  );
}
