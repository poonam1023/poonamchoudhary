import React from "react";
import Image from "next/image";
import {
  PaperNote,
  BotanicalIllustration,
  InkSplash,
} from "@/components/decorations";

export default function LibraryRight() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>
      {/* LARGE BACKDROP ART */}
      <BotanicalIllustration
        variant="olive"
        scale={1.35}
        opacity={0.35}
        position={{ top: "16%", left: "-8%" }}
        rotation={-15}
        style={{ zIndex: 1 }}
      />

      {/* ── HERO BOOK COVER (Sole Visual Hero) ── */}
      <div className="absolute flex items-center justify-center" style={{ top: "12%", bottom: "20%", left: "25%", width: "50%", zIndex: 10 }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", boxShadow: "0 22px 52px rgba(58, 44, 30, 0.22), 0 10px 18px rgba(58, 44, 30, 0.14)", transform: "rotate(-1.5deg)", height: "92%" }}>
          {/* Cover image wrapper */}
          <div style={{ position: "absolute", inset: 0, right: "6px", overflow: "hidden", zIndex: 2 }}>
            <Image src="/book-cover.png" alt="Conscious Parenting book cover" fill className="object-cover" priority />
            <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 2px rgba(58,44,30,0.15)" }} />
          </div>
          {/* Page stack edge simulation */}
          <div
            className="absolute top-[1px] bottom-[1px] right-0 w-[7px] bg-[#FAF7F2] border-y border-r border-[#6E5A4E]/12 z-1"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, #FAF7F2, #FAF7F2 1.5px, #F1ECE2 1.5px, #F1ECE2 2.5px)",
            }}
          />
        </div>
      </div>

      {/* FLOATING REVIEW CARD (David L. - Left Side) */}
      <PaperNote
        paperColor="cream"
        rotation={2.5}
        pin={false}
        tape={true}
        width={200}
        position={{ bottom: "10%", left: "5%" }}
        style={{ zIndex: 15 }}
      >
        <div className="flex flex-col text-left gap-1">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg key={s} width="8" height="8" viewBox="0 0 24 24" fill="#C4A882" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "13px", lineHeight: 1.35, color: "#4A3728" }}>
            &ldquo;This book changed how I see my relationship with my daughter. Every parent should read it.&rdquo;
          </p>
          <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "7.5px", color: "#6E5A4E", opacity: 0.75 }}>— David L.</span>
        </div>
      </PaperNote>

      {/* FLOATING EDITION SPECS NOTE (Right Side) */}
      <PaperNote
        text="First edition. Printed on archival cotton paper."
        paperColor="tan"
        rotation={-1.2}
        width={180}
        fontSize="12.5px"
        position={{ bottom: "10%", right: "5%" }}
        style={{ zIndex: 12, padding: "8px 12px" }}
      />

      {/* Fountain pen decoration */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "10%", left: "4%", zIndex: 8, opacity: 0.08, transform: "rotate(-25deg)" }}>
        <svg width="50" height="100" viewBox="0 0 30 80" fill="none">
          <path d="M15 78 L15 20 M15 20 L5 10 M15 20 L25 10" stroke="#3A2C1E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 18 L15 22 L18 18" fill="#3A2C1E" opacity="0.6" />
          <circle cx="15" cy="78" r="1.5" fill="#3A2C1E" />
        </svg>
      </div>

      <InkSplash variant="droplet" scale={0.5} opacity={0.10} position={{ top: "24%", right: "20%" }} style={{ zIndex: 6 }} />

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>3</span>
      </div>
    </div>
  );
}
