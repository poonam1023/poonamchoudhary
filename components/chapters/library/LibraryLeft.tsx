"use client";

import React from "react";
import {
  WatercolorSplash,
  EditorialLabel,
  DecorativeDivider,
  PaperClip,
  PaperNote,
  LibrarySeal,
} from "@/components/decorations";

export default function LibraryLeft() {
  const registryItems = [
    { date: "03.24", title: "The Mindful Parent's Guide", status: "Circulating" },
    { date: "08.24", title: "Whispers of the Forest", status: "On Loan" },
    { date: "11.25", title: "Bridges of Code", status: "In Bindery" },
    { date: "02.26", title: "The Book Cover Project", status: "Registered" },
  ];

  return (
    <div className="relative w-full h-full overflow-hidden p-8 flex flex-col justify-between">
      {/* ── 1. BACKGROUND WASHS ── */}
      <WatercolorSplash
        variant="cream"
        opacity={0.16}
        position={{ top: "5%", left: "5%" }}
        width={230}
        height={180}
      />
      <WatercolorSplash
        variant="sage"
        opacity={0.08}
        position={{ bottom: "10%", right: "10%" }}
        width={180}
        height={140}
      />

      {/* ── 2. EDITORIAL TOP HEADER ── */}
      <div className="relative z-10 flex flex-col items-center mt-6">
        <EditorialLabel text="Archival Registry" />
        <h3 className="font-display text-[15px] font-bold text-[#3A2C1E] mt-2 tracking-wide text-center">
          The Literary Ledger
        </h3>
        <DecorativeDivider variant="fleuron" opacity={0.3} className="my-2 w-16" />
      </div>

      {/* ── 3. LEDGER CARD TABLE ── */}
      <div className="relative z-10 px-6 flex-1 flex flex-col justify-center my-2">
        <div 
          className="border border-[#6E5A4E]/20 bg-[#FAF7EE]/60 p-4 rounded-[1px] relative"
          style={{
            boxShadow: "inset 0 0 10px rgba(110,90,78,0.06), 1px 2px 5px rgba(0,0,0,0.04)"
          }}
        >
          {/* Paper Clip holding a scrap memo note */}
          <PaperClip position={{ top: "-18px", left: "20px" }} rotation={-10} scale={0.7} />
          
          <table className="w-full text-left font-display border-collapse">
            <thead>
              <tr className="border-b border-[#6E5A4E]/30 pb-1.5">
                <th className="font-sans uppercase text-[6px] tracking-widest text-[#6E5A4E]/50 font-bold pb-1 w-[20%]">Date</th>
                <th className="font-sans uppercase text-[6px] tracking-widest text-[#6E5A4E]/50 font-bold pb-1 w-[55%]">Creation Registered</th>
                <th className="font-sans uppercase text-[6px] tracking-widest text-[#6E5A4E]/50 font-bold pb-1 w-[25%] text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {registryItems.map((item, idx) => (
                <tr key={idx} className="border-b border-[#6E5A4E]/10 last:border-b-0 font-display text-[#4A3728]">
                  <td className="py-2 text-[10px] opacity-60 tabular-nums">{item.date}</td>
                  <td className="py-2 text-[11px] font-medium leading-tight">{item.title}</td>
                  <td className="py-2 text-[9px] italic text-[#6A7A60] text-right font-sans tracking-wide">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── 4. TACTILE LAYERED CARD ── */}
      <PaperNote
        text="LIBRARY CATALOGUE: Section III. All works bound in visual storytelling and guides."
        paperColor="tan"
        rotation={-2}
        width={130}
        position={{ bottom: "10%", left: "15%" }}
        tape={true}
      />

      <LibrarySeal variant="ink" scale={0.8} rotation={-8} position={{ bottom: "14%", right: "8%" }} />

      {/* ── 5. PAGE NUMBER ── */}
      <div className="relative z-10 flex justify-center pb-2">
        <span className="font-display tracking-[0.3em] text-[#6E5A4E] text-[8px] opacity-25 select-none">
          iii
        </span>
      </div>
    </div>
  );
}
