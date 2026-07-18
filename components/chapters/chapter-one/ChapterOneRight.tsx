"use client";

import React from "react";
import Image from "next/image";
import {
  BotanicalIllustration,
  HeroWatercolor,
} from "@/components/decorations";

function EditorialMarks() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 4 }}>
      <svg className="absolute" style={{ top: "9%", left: "7%", width: 96, height: 62, opacity: 0.12, transform: "rotate(-7deg)" }} viewBox="0 0 150 95" fill="none">
        <path d="M14 15 C30 10 49 16 66 12 C91 7 111 14 135 11 L130 78 C107 75 91 82 68 77 C49 73 31 79 17 74 Z" fill="#6E5A4E" opacity="0.08" />
        <path d="M30 34 H111 M29 48 H104 M32 62 H88" stroke="#6E5A4E" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M124 25 L135 16 M126 34 L140 31" stroke="#C4A882" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <svg className="absolute" style={{ bottom: "18%", left: "5%", width: 82, height: 58, opacity: 0.10, transform: "rotate(5deg)" }} viewBox="0 0 120 84" fill="none">
        <path d="M18 62 C30 44 44 44 55 60 C66 42 82 43 94 61" stroke="#6E5A4E" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="39" cy="31" r="9" stroke="#6E5A4E" strokeWidth="1.2" />
        <circle cx="72" cy="29" r="10" stroke="#6E5A4E" strokeWidth="1.2" />
        <path d="M12 18 C24 7 37 9 49 18" stroke="#6E5A4E" strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
      </svg>
    </div>
  );
}

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

      {/* ── 1. ENVIRONMENT HERO WATERCOLOR ──
          Irregular, hand-painted watercolor composition that frames and supports the portrait.
          It extends leftward towards the spine and has its visual hotspot behind her face. */}
      <HeroWatercolor />

      {/* ── 2. BOTANICALS BEHIND PORTRAIT ── */}
      <BotanicalIllustration
        variant="branch"
        scale={0.92}
        opacity={0.11}
        position={{ top: "7%", right: "4%" }}
        rotation={12}
        animation={false}
        style={{ zIndex: 3 }}
        className="pointer-events-none"
      />
      <BotanicalIllustration
        variant="olive"
        scale={0.72}
        opacity={0.09}
        position={{ bottom: "24%", left: "-5%" }}
        rotation={55}
        animation={false}
        style={{ zIndex: 3 }}
        className="pointer-events-none"
      />
      <EditorialMarks />

      {/* ── 3. HERO PORTRAIT ──
          Portrait sits on the page at full strength, cropped to frame her face and shoulders.
          Container is positioned to align her face with the watercolor hotspot. */}
      <div
        className="absolute animate-fade-in"
        style={{
          left: "10%",
          right: "11%",
          bottom: "-1%",
          height: "86%",
          zIndex: 10,
          pointerEvents: "none",
          filter: "drop-shadow(0 18px 32px rgba(58,44,30,0.13))",
        }}
      >
        <div
          className="relative w-full h-full"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 98% 96% at 50% 48%, black 99%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 98% 96% at 50% 48%, black 99%, transparent 100%)",
          }}
        >
          <img
            src="/author-portrait.png?v=3"
            alt="Poonam Choudhary"
            className="object-cover"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 20%",
              filter: "contrast(1.02) brightness(1.02) saturate(0.92) sepia(0.03)",
            }}
          />
        </div>
      </div>

      {/* ── 4. BOTANICALS OVERLAPPING PORTRAIT (zIndex > portrait) ── */}
      <svg
        className="absolute pointer-events-none select-none"
        style={{ bottom: "15%", left: "8%", width: 58, height: 22, opacity: 0.16, zIndex: 15, transform: "rotate(-8deg)" }}
        viewBox="0 0 92 32"
        fill="none"
      >
        <path d="M7 22 C26 10 44 27 64 16 C74 11 82 12 88 15" stroke="#C4A882" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 24 L6 28 M84 16 L90 12" stroke="#6E5A4E" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
      
      {/* Tiny sage sprig crossing lower right shoulder — creates depth */}
      
      {/* Pressed fern tip overlapping left side — soft edge integration */}
      

      {/* ── 5. FLOATING TILTED QUOTE CARD ──
          Torn paper note pinned with washi tape, tilted naturally. */}
      <div
        className="absolute"
        style={{
          top: "12%",
          right: "4.5%",
          width: "34%",
          zIndex: 22,
          transform: "rotate(-2.2deg)",
          filter: "drop-shadow(2px 7px 18px rgba(58,44,30,0.10))",
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
            background: "rgba(200,185,165,0.50)",
            clipPath: "polygon(1% 0%, 99% 1%, 100% 30%, 99% 70%, 100% 100%, 98% 99%, 2% 100%, 0% 85%, 2% 50%, 0% 15%)",
            boxShadow: "0 1px 3px rgba(58,44,30,0.05)",
            zIndex: 26,
          }}
        >
          {/* Tape weave texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, rgba(140,118,85,0.08) 0px, rgba(140,118,85,0.08) 1px, transparent 1px, transparent 4px),
                repeating-linear-gradient(-45deg, rgba(140,118,85,0.08) 0px, rgba(140,118,85,0.08) 1px, transparent 1px, transparent 4px)
              `,
            }}
          />
        </div>

        {/* Quote Card Body — torn paper look */}
        <div
          style={{
            background: "#FAF7F2",
            border: "0.5px solid rgba(110,90,78,0.10)",
            padding: "15px 14px 18px",
            clipPath: "polygon(0.5% 1.5%, 98.8% 0%, 100% 98%, 1.5% 99.5%)",
            boxShadow: "inset 0 1px 8px rgba(58,44,30,0.02), 0 4px 14px rgba(58,44,30,0.04)",
            position: "relative",
          }}
        >
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(110,90,78,0.015) 22px, rgba(110,90,78,0.015) 23px)
              `,
              borderRadius: "inherit",
            }}
          />

          {/* Large curled open-quote mark */}
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: 0.5,
              color: "#C4A882",
              display: "block",
              marginBottom: "10px",
              opacity: 0.9,
            }}
          >
            &ldquo;
          </span>

          {/* Quote body text — italic Cormorant for handwritten editorial feel */}
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: "clamp(11.5px, 1.7vh, 13px)",
              lineHeight: 1.72,
              color: "#4A3728",
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
                  color: "#6E5A4E",
              }}
            >
              — Poonam Choudhary
            </span>

            {/* Hand-drawn-look heart */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── 6. MATTED BESTSELLER BADGE (Bottom-Right Corner) ── */}
      <div
        className="absolute"
        style={{
          bottom: "6%",
          right: "5%",
          width: "34%",
          zIndex: 23,
          transform: "rotate(0.8deg)",
          filter: "drop-shadow(0 8px 14px rgba(58,44,30,0.10))",
        }}
      >
        {/* Outer mat border */}
        <div
          style={{
            background: "#FAF7F2",
            border: "1px solid rgba(110,90,78,0.10)",
            borderRadius: "3px",
            padding: "3px",
            boxShadow: "1px 3px 10px rgba(58,44,30,0.05)",
          }}
        >
          {/* Inner content area */}
            <div
              style={{
                background: "#FAF7F2",
                border: "0.5px solid rgba(110,90,78,0.06)",
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
                  background: "rgba(168,178,154,0.15)",
                  flexShrink: 0,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#A8B29A" strokeWidth="2" strokeLinecap="round">
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
                    color: "#3A2C1E",
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
                    color: "#6E5A4E",
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
                <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill="#C4A882" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "6px",
                color: "#6E5A4E",
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
                background: "rgba(110,90,78,0.08)",
                margin: "8px 0",
              }}
            />

            {/* Impact stat */}
            <div
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "7px",
                fontWeight: 700,
                color: "#A8B29A",
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
