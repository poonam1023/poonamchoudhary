"use client";

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EditorialLabel, DecorativeDivider, InkSplash } from "@/components/decorations";

type Phase = "letter" | "folding" | "sealing" | "sliding" | "thanks";

export default function ConnectRight() {
  const [phase, setPhase] = useState<Phase>("letter");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameSpanRef = useRef<HTMLSpanElement>(null);
  const subjectSpanRef = useRef<HTMLSpanElement>(null);
  const [nameWidth, setNameWidth] = useState(80);
  const [subjectWidth, setSubjectWidth] = useState(80);

  const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useSafeLayoutEffect(() => {
    if (nameSpanRef.current) {
      setNameWidth(nameSpanRef.current.getBoundingClientRect().width + 4);
    }
  }, [name]);

  useSafeLayoutEffect(() => {
    if (subjectSpanRef.current) {
      setSubjectWidth(subjectSpanRef.current.getBoundingClientRect().width + 4);
    }
  }, [subject]);

  const handleSend = () => {
    if (!name.trim() || !message.trim()) return;
    setPhase("folding");
    setTimeout(() => setPhase("sealing"), 1200);
    setTimeout(() => setPhase("sliding"), 2400);
    setTimeout(() => setPhase("thanks"), 3600);
  };

  const handleBack = () => {
    setPhase("letter");
  };

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(198deg, #FFFDF8 0%, #FAF7F2 44%, #F6EFE5 100%)" }}>
      <InkSplash variant="splash" scale={0.6} opacity={0.08} position={{ top: "18%", right: "10%" }} style={{ zIndex: 1 }} />

      <AnimatePresence mode="wait">
        {/* ── LETTER WRITING PHASE ── */}
        {phase === "letter" && (
          <motion.div
            key="letter"
            className="absolute select-text"
            style={{ top: "20%", left: "10%", right: "8%", bottom: "10%", zIndex: 10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0.01, y: "50%", transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] } }}
            transition={{ duration: 0.5 }}
          >
            {/* Stationery paper */}
            <div style={{ background: "linear-gradient(180deg, #FAF7EE 0%, #F7F2EA 100%)", border: "0.5px solid rgba(110,90,78,0.12)", padding: "16px 14px 14px", borderRadius: "1px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 2px 4px 12px rgba(58,44,30,0.04)", height: "100%", display: "flex", flexDirection: "column" }}>
              {/* Stationery ruled line background */}
              <div className="absolute inset-0 pointer-events-none select-none opacity-[0.04]" style={{ borderRadius: "1px", backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(110,90,78,0.10) 24px, rgba(110,90,78,0.10) 25px)" }} />

              {/* Custom style for input placeholder styling */}
              <style>{`
                .inline-letter-input::placeholder {
                  color: rgba(110, 90, 78, 0.65) !important;
                  opacity: 1 !important;
                  font-style: italic;
                }
                .message-textarea::placeholder {
                  color: rgba(110, 90, 78, 0.65) !important;
                  opacity: 0.8 !important;
                  font-style: italic;
                  font-size: clamp(13px, 1.8vh, 15px) !important;
                }
              `}</style>

              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(13px, 1.8vh, 15px)",
                  color: "rgba(110, 90, 78, 0.65)",
                  lineHeight: 2.0,
                  marginBottom: "18px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Dear Poonam, my name is{" "}
                <span className="relative inline-block">
                  <span
                    ref={nameSpanRef}
                    className="absolute invisible whitespace-pre"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(13px, 1.8vh, 15px)",
                      fontStyle: "italic",
                      fontWeight: name ? 600 : 400,
                      padding: "0 2px",
                    }}
                  >
                    {name || "Your name"}
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="outline-none bg-transparent inline-letter-input"
                    style={{
                      width: `${nameWidth}px`,
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(13px, 1.8vh, 15px)",
                      fontStyle: "italic",
                      fontWeight: name ? 600 : 400,
                      color: name ? "#2A1E16" : "rgba(110, 90, 78, 0.65)",
                      border: "none",
                      borderBottom: "1px solid rgba(110, 90, 78, 0.35)",
                      paddingBottom: "1px",
                      verticalAlign: "baseline",
                      transition: "border-color 0.2s, color 0.2s, width 0.1s ease",
                    }}
                  />
                </span>
                {" "}and I&apos;m writing regarding{" "}
                <span className="relative inline-block">
                  <span
                    ref={subjectSpanRef}
                    className="absolute invisible whitespace-pre"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(13px, 1.8vh, 15px)",
                      fontStyle: "italic",
                      fontWeight: subject ? 600 : 400,
                      padding: "0 2px",
                    }}
                  >
                    {subject || "a topic"}
                  </span>
                  <input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="a topic"
                    className="outline-none bg-transparent inline-letter-input"
                    style={{
                      width: `${subjectWidth}px`,
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(13px, 1.8vh, 15px)",
                      fontStyle: "italic",
                      fontWeight: subject ? 600 : 400,
                      color: subject ? "#2A1E16" : "rgba(110, 90, 78, 0.65)",
                      border: "none",
                      borderBottom: "1px solid rgba(110, 90, 78, 0.35)",
                      paddingBottom: "1px",
                      verticalAlign: "baseline",
                      transition: "border-color 0.2s, color 0.2s, width 0.1s ease",
                    }}
                  />
                </span>
                .
              </p>

              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(13px, 1.8vh, 14.5px)", color: "#6E5A4E", opacity: 0.6, marginBottom: "8px", position: "relative", zIndex: 1 }}>
                Here is my message&hellip;
              </p>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                rows={5}
                className="outline-none bg-transparent w-full resize-none message-textarea"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(13px, 1.8vh, 15px)",
                  fontStyle: "italic",
                  color: "#2A1E16",
                  border: "none",
                  borderBottom: "1px solid rgba(110, 90, 78, 0.15)",
                  paddingBottom: "6px",
                  marginBottom: "16px",
                  lineHeight: 1.75,
                  position: "relative",
                  zIndex: 1,
                }}
              />

              {/* SEAL & SEND BUTTON */}
              <div className="flex justify-center mt-auto" style={{ position: "relative", zIndex: 2 }}>
                <button
                  onClick={handleSend}
                  disabled={!name.trim() || !message.trim()}
                  className="flex items-center gap-2.5 cursor-pointer"
                  style={{
                    background: name.trim() && message.trim() ? "#BA664A" : "rgba(186, 102, 74, 0.35)",
                    border: name.trim() && message.trim() ? "0.5px solid #A0523A" : "0.5px solid rgba(186, 102, 74, 0.45)",
                    padding: "8px 24px 9px",
                    borderRadius: "2px",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: name.trim() && message.trim() ? "#FAF7EE" : "rgba(250, 247, 238, 0.65)",
                    textTransform: "uppercase",
                    transition: "all 0.3s ease",
                    opacity: name.trim() && message.trim() ? 1 : 0.7,
                    boxShadow: name.trim() && message.trim() ? "0 2px 6px rgba(186, 102, 74, 0.15)" : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (name.trim() && message.trim()) {
                      e.currentTarget.style.background = "#A0523A";
                      e.currentTarget.style.boxShadow = "0 3px 8px rgba(160, 82, 58, 0.25)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (name.trim() && message.trim()) {
                      e.currentTarget.style.background = "#BA664A";
                      e.currentTarget.style.boxShadow = "0 2px 6px rgba(186, 102, 74, 0.15)";
                    }
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Seal &amp; Send My Letter
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── FOLDING / SEALING / SLIDING PHASE ── */}
        {(phase === "folding" || phase === "sealing" || phase === "sliding") && (
          <motion.div
            key="envelope"
            className="absolute"
            style={{ top: "24%", left: "15%", right: "15%", zIndex: 20 }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: phase === "sliding" ? 500 : 0,
              transition: { duration: phase === "sliding" ? 1.2 : 0.6, ease: phase === "sliding" ? "easeIn" : "easeOut" },
            }}
          >
            {/* ENVELOPE BACKING */}
            <div style={{ position: "relative", background: "#EDE8E0", border: "0.5px solid rgba(110,90,78,0.15)", borderRadius: "2px", padding: "20px 16px 16px", boxShadow: "2px 6px 20px rgba(58,44,30,0.06)" }}>
              {/* Envelope fold lines */}
              <div className="absolute inset-0 pointer-events-none" style={{ clipPath: "polygon(50% 0%, 100% 40%, 100% 100%, 0% 100%, 0% 40%)", background: "rgba(110,90,78,0.02)" }} />

              {/* Folded letter inside */}
              <motion.div
                className="relative"
                style={{ background: "#FAF7EE", border: "0.5px solid rgba(110,90,78,0.08)", padding: "12px 10px", marginBottom: "16px" }}
                animate={{
                  scaleY: phase === "folding" ? 0.3 : 1,
                  opacity: phase === "folding" ? 0.6 : 1,
                  transformOrigin: "bottom center",
                }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "8.5px", color: "#6E5A4E", opacity: 0.5, marginBottom: "6px" }}>
                  To Poonam Choudhary
                </p>
                <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "9px", lineHeight: 1.6, color: "#4A3728", opacity: 0.7 }}>
                  {message.length > 80 ? message.slice(0, 80) + "..." : message}
                </p>
              </motion.div>

              {/* ENVELOPE FLAP */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, #F0EBE3 0%, #EDE8E0 100%)", border: "0.5px solid rgba(110,90,78,0.12)", borderRadius: "2px", transformOrigin: "top center" }}
                initial={{ rotateX: 180 }}
                animate={{ rotateX: phase === "sealing" || phase === "sliding" ? 0 : 180 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Triangular flap shape */}
                <div style={{ position: "absolute", inset: 0, clipPath: "polygon(50% 100%, 100% 30%, 100% 0%, 0% 0%, 0% 30%)", background: "#F0EBE3" }} />

                {/* WAX SEAL */}
                {phase === "sealing" || phase === "sliding" ? (
                  <motion.div
                    className="absolute"
                    style={{ top: "58%", left: "50%", transform: "translate(-50%, -50%)" }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" fill="#BA664A" stroke="#A0523A" strokeWidth="1" />
                      <circle cx="20" cy="20" r="15" fill="#C47A5E" />
                      <path d="M20 10 C28 14 28 26 20 30 C12 26 12 14 20 10 Z" fill="#A0523A" opacity="0.4" />
                      <path d="M20 13 L20 27 M13 20 L27 20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                      <path d="M16 16 Q20 12 24 16 Q20 20 16 16 Z" fill="rgba(255,255,255,0.08)" />
                      <path d="M18 28 Q20 32 22 28 Q20 26 18 28 Z" fill="rgba(0,0,0,0.06)" />
                      <text x="20" y="23" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="serif" fontWeight="bold">P</text>
                    </svg>
                  </motion.div>
                ) : null}
              </motion.div>

              {/* ADDRESS ON ENVELOPE */}
              <div className="pointer-events-none" style={{ position: "relative", zIndex: 1 }}>
                <div style={{ borderTop: "0.5px solid rgba(110,90,78,0.06)", paddingTop: "8px" }}>
                  <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "7.5px", color: "#6E5A4E", opacity: 0.35, letterSpacing: "0.02em" }}>
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── THANK YOU CARD ── */}
        {phase === "thanks" && (
          <motion.div
            key="thanks"
            className="absolute flex flex-col items-center justify-center select-text"
            style={{ top: "22%", left: "12%", right: "12%", bottom: "12%", zIndex: 20 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center text-center" style={{ background: "#FAF7EE", border: "0.5px solid rgba(110,90,78,0.10)", padding: "28px 20px 24px", borderRadius: "1px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4), 2px 4px 14px rgba(58,44,30,0.04)" }}>
              {/* Decorative top */}
              <div style={{ width: "32px", height: "0.5px", background: "rgba(168,178,154,0.3)", marginBottom: "16px" }} />

              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "clamp(13px, 2vh, 16px)", lineHeight: 1.65, color: "#3A2C1E", marginBottom: "10px" }}>
                Your letter has been received.
              </p>
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(10px, 1.5vh, 11.5px)", lineHeight: 1.75, color: "#5A4A38", maxWidth: "240px" }}>
                Thank you, {name}. Every message is read with care. I will write back soon.
              </p>

              <div style={{ marginTop: "18px", marginBottom: "14px", opacity: 0.15 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9EA88A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13" /><path d="m22 2-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>

              <div style={{ width: "32px", height: "0.5px", background: "rgba(168,178,154,0.3)", marginBottom: "12px" }} />

              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "9px", color: "#6E5A4E", opacity: 0.55 }}>
                With warmth, Poonam
              </p>

              <button
                onClick={handleBack}
                className="mt-5 cursor-pointer"
                style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "7px", fontWeight: 600, letterSpacing: "0.16em", color: "#9EA88A", background: "none", border: "none", textTransform: "uppercase", opacity: 0.7 }}
              >
                &larr; Write Again
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute pointer-events-none select-none" style={{ bottom: "3%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.22 }}>5</span>
      </div>
    </div>
  );
}
