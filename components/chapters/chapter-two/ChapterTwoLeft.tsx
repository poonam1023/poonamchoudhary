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
      {/* LARGE BACKGROUND ILLUSTRATION — grows from spine/right edge */}
      <BotanicalIllustration
        variant="branch"
        scale={1.6}
        opacity={0.45}
        position={{ top: "15%", right: "-25%" }}
        rotation={35}
      />

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
        rotation={-3}
        paperColor="cream"
        tape={true}
        width="82%"
        position={{ top: "25%", left: "9%" }}
        style={{ zIndex: 15 }}
      >
        <p
          className="italic text-center leading-relaxed text-[#5A4A38]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(20px, 3vh, 26px)",
            padding: "8px 12px",
          }}
        >
          &ldquo;Parenting is not about shaping a child into who we think they should be. It is about creating the conditions for them to become who they already are.&rdquo;
        </p>
      </PaperNote>

      {/* COLLAGE NOTE 1 (ESSAY PART 1) */}
      <PaperNote
        rotation={2.5}
        paperColor="tan"
        tape={false}
        pin={true}
        width={250}
        position={{ top: "51%", left: "6%" }}
        style={{ zIndex: 12 }}
      >
        <p
          className="leading-relaxed text-[#4A3728]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(13.5px, 1.9vh, 15px)",
            textAlign: "left",
          }}
        >
          <span className="text-2xl font-bold font-display mr-1 float-left text-[#8A9A78]" style={{ lineHeight: "0.8" }}>C</span>
          onscious parenting begins with a simple but profound shift: seeing the child as a whole person, not a project to be managed. It asks us to set aside our timelines, and instead meet our children where they are.
        </p>
      </PaperNote>

      {/* COLLAGE NOTE 2 (ESSAY PART 2) */}
      <PaperNote
        rotation={-1.8}
        paperColor="cream"
        tape={true}
        pin={false}
        width={230}
        position={{ top: "54%", right: "8%" }}
        style={{ zIndex: 14 }}
      >
        <p
          className="leading-relaxed text-[#4A3728]"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(13.5px, 1.9vh, 15px)",
            textAlign: "left",
          }}
        >
          This philosophy does not offer a checklist; it offers a way of being. Presence before agenda. Connection before correction. When we parent from this place, we parent for real relationship.
        </p>
      </PaperNote>

      {/* ENLARGED WAX SEAL */}
      <WaxSeal
        variant="terracotta"
        scale={1.2}
        rotation={8}
        position={{ top: "71%", left: "4%" }}
        style={{ zIndex: 18 }}
      />

      {/* ENLARGED HANDWRITTEN NOTE */}
      <HandwrittenNote
        text="The pause between reaction and response is where freedom lives."
        rotation={-3.2}
        width={260}
        fontSize="14px"
        position={{ bottom: "9%", right: "12%" }}
        style={{ zIndex: 16 }}
      />

      {/* PAGE FOOTER */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>ii</span>
      </div>
    </div>
  );
}
