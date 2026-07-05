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
      <div className="absolute pointer-events-none select-none" style={{ top: "16%", right: "8%", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(12px, 1.6vh, 14px)", color: "#8A7E72" }}>
          Currently reading: <strong style={{ fontWeight: 600, color: "#5A4C3E" }}>The Prophet</strong> by Kahlil Gibran
        </span>
      </div>

      {/* STAGGERED DIARY ENTRIES CONTAINER */}
      <div className="absolute flex gap-6 select-text" style={{ top: "22%", left: "8%", right: "8%", bottom: "16%", zIndex: 10 }}>
        
        {/* LEFT COLUMN: Feb 28 & Mar 4 */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {/* Feb 28 */}
          <div style={{ background: "rgba(250,247,242,0.65)", borderLeft: "2.5px solid rgba(168,178,154,0.45)", padding: "12px 14px", transform: "rotate(-1.2deg)", borderRadius: "1px", boxShadow: "0 4px 10px rgba(58,44,30,0.03)" }}>
            <div className="flex items-center gap-1.5 mb-1">
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, color: "#6E5A4E", opacity: 0.7, letterSpacing: "0.05em" }}>Feb 28</span>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "14px", lineHeight: 1.55, color: "#4A3728" }}>
              &ldquo;Today we planted seeds in tiny pots on the windowsill. She named each one. I hope she always names her dreams before she plants them.&rdquo;
            </p>
          </div>

          {/* Mar 4 */}
          <div style={{ background: "rgba(247,241,232,0.8)", borderLeft: "2.5px solid rgba(196,168,130,0.45)", padding: "12px 14px", transform: "rotate(1deg)", borderRadius: "1px", boxShadow: "0 4px 10px rgba(58,44,30,0.03)" }}>
            <div className="flex items-center gap-1.5 mb-1">
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, color: "#6E5A4E", opacity: 0.7, letterSpacing: "0.05em" }}>Mar 4</span>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "14px", lineHeight: 1.55, color: "#4A3728" }}>
              &ldquo;He fell and scraped his knee. Before I could say anything, he looked up and said, &lsquo;It&rsquo;s OK, Mama. Falling is how we learn.&rsquo; Out of the mouth of my teacher.&rdquo;
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Mar 11 & Mar 15 */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          {/* Mar 11 */}
          <div style={{ background: "rgba(250,247,242,0.65)", borderLeft: "2.5px solid rgba(110,90,78,0.22)", padding: "12px 14px", transform: "rotate(-0.8deg)", borderRadius: "1px", boxShadow: "0 4px 10px rgba(58,44,30,0.03)" }}>
            <div className="flex items-center gap-1.5 mb-1">
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, color: "#6E5A4E", opacity: 0.7, letterSpacing: "0.05em" }}>Mar 11</span>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "14px", lineHeight: 1.55, color: "#4A3728" }}>
              &ldquo;The rain came suddenly. We danced in it. No agenda, no schedule. Just wet hair and laughter. These are the pages I want to remember.&rdquo;
            </p>
          </div>

          {/* Mar 15 */}
          <div style={{ background: "rgba(247,241,232,0.8)", borderLeft: "2.5px solid rgba(168,178,154,0.45)", padding: "12px 14px", transform: "rotate(1.2deg)", borderRadius: "1px", boxShadow: "0 4px 10px rgba(58,44,30,0.03)" }}>
            <div className="flex items-center gap-1.5 mb-1">
              <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, color: "#9EA88A", letterSpacing: "0.05em" }}>Mar 15</span>
            </div>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "14px", lineHeight: 1.55, color: "#4A3728" }}>
              She asked me today why the sky changes color at sunset. I could have explained wavelengths. Instead I said, &ldquo;The sky is telling you a story before you sleep.&rdquo; Choosing wonder over data.
            </p>
          </div>
        </div>

      </div>

      {/* ENLARGED FLOWER ACCENT */}
      <PressedFlower
        variant="wildflower"
        scale={0.9}
        opacity={0.45}
        position={{ bottom: "4%", right: "18%" }}
        style={{ zIndex: 12 }}
      />

      {/* ENLARGED WAX SEAL */}
      <WaxSeal
        variant="terracotta"
        scale={0.8}
        rotation={-6}
        position={{ bottom: "5%", right: "8%" }}
        style={{ zIndex: 15 }}
      />

      {/* RE-POSITIONED PRIVACY NOTE */}
      <PaperNote
        text="Journal entries are private. These glimpses are shared with love."
        paperColor="cream"
        rotation={-2.5}
        width={200}
        fontSize="12.5px"
        position={{ bottom: "4%", left: "6%" }}
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
