"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChapterIndexPanelProps {
  isOpen: boolean;
  currentPage: number;
  onNavigate: (page: number) => void;
  onClose: () => void;
}

const CHAPTERS = [
  { id: "cover",     label: "Cover",      sub: "",            page: 0 },
  { id: "chapter-1", label: "Chapter I",  sub: "Meet Poonam", page: 1 },
];

/**
 * ChapterIndexPanel — V4
 *
 * A printed chapter index card that slides in from the ribbon.
 * Looks like a typeset insert slipped between pages — not a sidebar.
 *
 * Design:
 *  - Warm cream background, paper texture
 *  - Cormorant italic "Contents" header
 *  - Thin rules above/below entries
 *  - Active chapter marked with sage dot
 *  - Future chapters shown in very faint ink
 *  - Slides in from top-right with ease
 */
export default function ChapterIndexPanel({
  isOpen,
  currentPage,
  onNavigate,
  onClose,
}: ChapterIndexPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Invisible click-away backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ cursor: "default" }}
          />

          {/* The printed index card */}
          <motion.div
            className="absolute z-50 select-none"
            style={{
              top: "40px",
              left: "32px",
              width: "152px",
              background: "linear-gradient(160deg, #F6EDD2 0%, #F1E8C8 100%)",
              border: "0.5px solid rgba(110,90,78,0.20)",
              boxShadow: "2px 6px 28px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.10)",
            }}
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Paper grain on panel */}
            <div
              className="absolute inset-0 paper-grain-overlay pointer-events-none"
              style={{ opacity: 0.15, borderRadius: "0" }}
            />

            {/* Panel content */}
            <div className="relative z-10 px-5 py-5">

              {/* "Contents" header */}
              <p
                className="font-display italic text-center"
                style={{
                  fontSize: "12px",
                  color: "rgba(110,90,78,0.62)",
                  letterSpacing: "0.04em",
                  marginBottom: "10px",
                }}
              >
                Contents
              </p>

              {/* Top rule */}
              <div
                style={{
                  width: "100%",
                  height: "0.5px",
                  background: "rgba(110,90,78,0.16)",
                  marginBottom: "10px",
                }}
              />

              {/* Chapter entries */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {CHAPTERS.map((ch) => {
                  const isActive = currentPage === ch.page;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => { onNavigate(ch.page); onClose(); }}
                      className="text-left w-full"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      <div className="flex items-start gap-[6px]">
                        {/* Active dot */}
                        <span
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: isActive ? "#A8B29A" : "transparent",
                            border: isActive ? "none" : "0.5px solid rgba(110,90,78,0.20)",
                            marginTop: "5px",
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <p
                            className="font-sans uppercase"
                            style={{
                              fontSize: "7.5px",
                              letterSpacing: "0.22em",
                              color: isActive
                                ? "rgba(110,90,78,0.72)"
                                : "rgba(110,90,78,0.40)",
                              lineHeight: 1.4,
                              transition: "color 0.2s ease",
                            }}
                          >
                            {ch.label}
                          </p>
                          {ch.sub && (
                            <p
                              className="font-display italic"
                              style={{
                                fontSize: "9px",
                                color: isActive
                                  ? "rgba(110,90,78,0.48)"
                                  : "rgba(110,90,78,0.25)",
                                lineHeight: 1.3,
                              }}
                            >
                              {ch.sub}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}

                {/* Future chapters — placeholder, very faint */}
                {["Library", "Gallery", "Contact"].map((name) => (
                  <div key={name} className="flex items-start gap-[6px]">
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        border: "0.5px solid rgba(110,90,78,0.12)",
                        marginTop: "5px",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      className="font-sans uppercase"
                      style={{
                        fontSize: "7px",
                        letterSpacing: "0.22em",
                        color: "rgba(110,90,78,0.18)",
                        lineHeight: 1.4,
                      }}
                    >
                      {name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom rule */}
              <div
                style={{
                  width: "100%",
                  height: "0.5px",
                  background: "rgba(110,90,78,0.14)",
                  marginTop: "10px",
                }}
              />

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
