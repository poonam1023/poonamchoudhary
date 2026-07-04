"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WatercolorSplash,
  PaperNote,
  PressedFlower,
  WaxSeal,
} from "@/components/decorations";

export default function GalleryLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* Notebook ruled-line background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(110,90,78,0.12) 22px, rgba(110,90,78,0.12) 23px)",
      }} />

      {/* WARM BACKGROUND WASH */}
      <WatercolorSplash
        variant="rose"
        opacity={0.35}
        position={{ top: "25%", left: "10%" }}
        width={300}
        height={250}
        style={{ zIndex: 1 }}
      />

      {/* HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "6%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="Stories from Everyday Life" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px, 3.2vh, 28px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          Author&rsquo;s Personal Journal
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-14" />
      </div>

      {/* TUCKED CURRENT READING DETAIL */}
      <div className="absolute pointer-events-none select-none" style={{ top: "18%", right: "10%", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(12px, 1.6vh, 14px)", color: "#8A7E72" }}>
          Currently reading: <strong style={{ fontWeight: 600, color: "#5A4C3E" }}>The Prophet</strong> by Kahlil Gibran
        </span>
      </div>

      {/* DIARY ENTRY CENTERPIECE (Exclusion zone: top 28% to 72%, left 12% to 88%) */}
      <div className="absolute select-text flex flex-col justify-center" style={{ top: "28%", bottom: "28%", left: "12%", right: "12%", zIndex: 10 }}>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(18px, 2.6vh, 22px)", lineHeight: 1.95, color: "#4A3728", textAlign: "left" }}>
          <span style={{ fontWeight: 700, color: "#9EA88A", marginRight: "10px", fontStyle: "normal" }}>March 15.</span>
          She asked me today why the sky changes color at sunset. I could have explained wavelengths and atmospheric scattering. Instead I said, &ldquo;The sky is telling you a story before you sleep.&rdquo; Her eyes widened. That is what parenting is. Choosing wonder over data, in the moments that matter.
        </p>
      </div>

      {/* ENLARGED FLOWER ACCENT */}
      <PressedFlower
        variant="wildflower"
        scale={1.0}
        opacity={0.50}
        position={{ bottom: "6%", right: "6%" }}
        style={{ zIndex: 12 }}
      />

      {/* ENLARGED WAX SEAL */}
      <WaxSeal
        variant="terracotta"
        scale={0.9}
        rotation={-6}
        position={{ top: "25%", right: "6%" }}
        style={{ zIndex: 15 }}
      />

      {/* RE-POSITIONED PRIVACY NOTE (Guarantees zero overlap with centerpiece) */}
      <PaperNote
        text="Journal entries are private. These glimpses are shared with love."
        paperColor="cream"
        rotation={-2.5}
        width={180}
        fontSize="13px"
        position={{ bottom: "7%", left: "6%" }}
        tape={true}
        style={{ zIndex: 20 }}
      />

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>iv</span>
      </div>
    </div>
  );
}
