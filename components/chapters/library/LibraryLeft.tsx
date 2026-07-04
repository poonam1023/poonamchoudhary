"use client";

import React from "react";
import Image from "next/image";
import {
  EditorialLabel,
  DecorativeDivider,
  BotanicalIllustration,
} from "@/components/decorations";

export default function LibraryLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* LARGE BACKDROP ART */}
      <BotanicalIllustration
        variant="olive"
        scale={1.35}
        opacity={0.45}
        position={{ top: "16%", left: "-8%" }}
        rotation={-15}
        style={{ zIndex: 1 }}
      />

      {/* HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "5%", left: "10%", right: "10%", zIndex: 10 }}>
        {/* TODO: confirm final header copy */}
        <EditorialLabel text="THE FLAGSHIP EDITION" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(22px, 3.4vh, 30px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          Conscious Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-14" />
      </div>

      {/* COLUMN A — BOOK COVER ONLY (Exclusion zone: left 6% to 45%, top 14% to 82%) */}
      <div className="absolute flex items-center justify-center" style={{ top: "15%", bottom: "18%", left: "6%", width: "39%", zIndex: 10 }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", boxShadow: "0 20px 48px rgba(58, 44, 30, 0.22), 0 8px 16px rgba(58, 44, 30, 0.12)", transform: "rotate(-2.5deg)" }}>
          {/* Cover image wrapper */}
          <div style={{ position: "absolute", inset: 0, right: "5px", overflow: "hidden", zIndex: 2 }}>
            <Image src="/book-cover.png" alt="Conscious Parenting book cover" fill className="object-cover" priority />
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(58,44,30,0.15)" }} />
          </div>
          {/* Page stack edge simulation */}
          <div
            className="absolute top-[1px] bottom-[1px] right-0 w-[6px] bg-[#FAF7F2] border-y border-r border-[#6E5A4E]/12 z-1"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FAF7F2, #FAF7F2 1.5px, #F1ECE2 1.5px, #F1ECE2 2.5px)",
            }}
          />
        </div>
      </div>

      {/* COLUMN B — ALL METADATA (Exclusion zone: left 50% to 92%, top 15% to 90%) */}
      <div className="absolute select-text flex flex-col justify-start text-left gap-5" style={{ top: "15%", left: "50%", right: "8%", bottom: "10%", zIndex: 10 }}>
        {/* 1. Synopsis paragraph */}
        <div>
          <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "6px", marginBottom: "8px" }}>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#9EA88A", textTransform: "uppercase" }}>
              About the Book
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(13.5px, 1.8vh, 15px)", lineHeight: 1.55, color: "#4A3728" }}>
            A beautifully illustrated flagship guide for parents seeking to raise children with intention, empathy, and joy. Blending timeless wisdom with modern insights, this volume offers a path toward deeper parent-child connection.
          </p>
        </div>

        {/* 2. Edition Specs */}
        <div>
          <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "6px", marginBottom: "8px" }}>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#9EA88A", textTransform: "uppercase" }}>
              Edition Specs
            </span>
          </div>
          <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(12.5px, 1.7vh, 14px)", color: "#5A4A38", lineHeight: 1.6 }}>
            <p>Hardcover &middot; Cloth spine &middot; Quarter-bound</p>
            <p>Cotton-cream pages &middot; 228 leaves &middot; Gilded top</p>
          </div>
        </div>

        {/* 3. Key Themes */}
        <div>
          <div style={{ borderBottom: "0.5px solid rgba(110,90,78,0.15)", paddingBottom: "6px", marginBottom: "8px" }}>
            <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "#9EA88A", textTransform: "uppercase" }}>
              Key Themes
            </span>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["Mindful Living", "Empathy", "Connection", "Growth"].map((t) => (
              <span key={t} style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9.5px", fontWeight: 500, color: "#6E5A4E", background: "rgba(168,178,154,0.14)", padding: "3.5px 9px", borderRadius: "10px", letterSpacing: "0.02em" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>iii</span>
      </div>
    </div>
  );
}
