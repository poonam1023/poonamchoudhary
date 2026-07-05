"use client";

import React from "react";
import {
  EditorialLabel,
  DecorativeDivider,
  WaxSeal,
  HandwrittenNote,
  BotanicalIllustration,
  PaperNote,
} from "@/components/decorations";

export default function ChapterTwoLeft() {
  return (
    <div className="absolute inset-0 overflow-hidden select-none" style={{ background: "transparent" }}>


      {/* CHAPTER HEADER */}
      <div className="absolute flex flex-col items-center pointer-events-none select-none" style={{ top: "6%", left: "10%", right: "10%", zIndex: 10 }}>
        <EditorialLabel text="CHAPTER II / My Philosophy" />
        <h3 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(20px, 3.2vh, 28px)", fontWeight: 700, color: "#2A1E16", letterSpacing: "0.02em", textAlign: "center", marginTop: "8px" }}>
          The Philosophy of Conscious Parenting
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.22} className="my-2.5 w-16" />
      </div>

      {/* HERO PULL-QUOTE CARD */}
      <PaperNote
        rotation={-1.5}
        paperColor="cream"
        tape={true}
        width="80%"
        position={{ top: "23%", left: "10%" }}
        style={{ zIndex: 15 }}
      >
        <p
          className="italic text-center leading-relaxed text-[#5A4A38]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(18px, 2.7vh, 24px)",
            padding: "6px 10px",
          }}
        >
          &ldquo;Parenting is not about shaping a child into who we think they should be. It is about creating the conditions for them to become who they already are.&rdquo;
        </p>
      </PaperNote>

      {/* DUAL COLUMN SECTION */}
      <div className="absolute flex gap-6" style={{ top: "48%", left: "8%", right: "8%", bottom: "16%", zIndex: 12 }}>
        {/* COLUMN 1: ESSAY */}
        <div className="flex-1 flex">
          <PaperNote
            paperColor="tan"
            rotation={1.2}
            pin={true}
            tape={false}
            inline={true}
            width="100%"
            style={{ height: "100%", padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "16px", fontWeight: 700, color: "#3A2C1E", borderBottom: "0.5px solid rgba(110,90,78,0.18)", paddingBottom: "5px", marginBottom: "8px" }}>
              The Way of Being
            </h4>
            <p
              className="leading-relaxed text-[#4A3728]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "14px",
                textAlign: "left",
                marginBottom: "8px",
              }}
            >
              <span className="text-2xl font-bold font-display mr-1 float-left text-[#8A9A78]" style={{ lineHeight: "0.8" }}>C</span>
              onscious parenting begins with a simple but profound shift: seeing the child as a whole person, not a project to be managed. It asks us to set aside our timelines, and instead meet our children where they are.
            </p>
            <p
              className="leading-relaxed text-[#4A3728]"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              This philosophy does not offer a checklist; it offers a way of being. Presence before agenda. Connection before correction. When we parent from this place, we parent for real relationship.
            </p>
          </PaperNote>
        </div>

        {/* COLUMN 2: FIVE PILLARS */}
        <div className="flex-1 flex">
          <PaperNote
            paperColor="cream"
            rotation={-1.5}
            pin={false}
            tape={true}
            inline={true}
            width="100%"
            style={{ height: "100%", padding: "14px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}
          >
            <h4 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "16px", fontWeight: 700, color: "#3A2C1E", borderBottom: "0.5px solid rgba(110,90,78,0.18)", paddingBottom: "5px", marginBottom: "8px" }}>
              Five Pillars of Mindful Parenting
            </h4>
            <div className="flex flex-col gap-2 flex-1 justify-around">
              {[
                { num: "I", title: "Presence before perfection", desc: "Presence is the gift, not perfection." },
                { num: "II", title: "Connection before correction", desc: "Guidance through warm relationship." },
                { num: "III", title: "Empathy creates resilience", desc: "Understanding builds inner strength." },
                { num: "IV", title: "Boundaries with love", desc: "Clear, kind limits build trust." },
                { num: "V", title: "Growth is lifelong", desc: "Both parent and child grow together." },
              ].map((pillar) => (
                <div key={pillar.num} className="flex gap-2 items-start text-left">
                  <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "13px", fontWeight: 700, color: "#8A9A78", width: "14px", flexShrink: 0 }}>{pillar.num}</span>
                  <div className="flex flex-col">
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "13px", fontWeight: 700, color: "#3A2C1E", lineHeight: 1.1 }}>
                      {pillar.title}
                    </span>
                    <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "11.5px", color: "#5A4A38", marginTop: "0.5px" }}>
                      {pillar.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </PaperNote>
        </div>
      </div>

      {/* ENLARGED WAX SEAL */}
      <WaxSeal
        variant="terracotta"
        scale={1.0}
        rotation={8}
        position={{ bottom: "4%", left: "10%" }}
        style={{ zIndex: 18 }}
      />

      {/* ENLARGED HANDWRITTEN NOTE */}
      <HandwrittenNote
        text="The pause between reaction and response is where freedom lives."
        rotation={-2}
        width={260}
        fontSize="13px"
        position={{ bottom: "4%", right: "12%" }}
        style={{ zIndex: 16 }}
      />

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>ii</span>
      </div>
    </div>
  );
}
