"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Phase = "letter" | "folding" | "sealing" | "floating" | "thanks";

/* ═══════════════════════════════════════════════════
   DECORATIVE PROPS (All set to pointer-events-none)
═══════════════════════════════════════════════════ */

/** Fountain Pen resting beside paper */
function DeskFountainPen({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="pointer-events-none select-none absolute z-5" style={{ ...style }}>
      <svg viewBox="0 0 160 28" fill="none" style={{ width: 125, height: 22 }}>
        <defs>
          <linearGradient id="penBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1C1410" />
            <stop offset="50%" stopColor="#3A2A1E" />
            <stop offset="100%" stopColor="#1C1410" />
          </linearGradient>
          <linearGradient id="penGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9A7820" />
            <stop offset="50%" stopColor="#D4B040" />
            <stop offset="100%" stopColor="#A88020" />
          </linearGradient>
        </defs>
        <rect x="14" y="6" width="110" height="16" rx="8" fill="url(#penBodyGrad)" />
        <rect x="18" y="6" width="12" height="16" fill="url(#penGoldGrad)" />
        <rect x="98" y="8" width="4" height="12" fill="url(#penGoldGrad)" />
        <rect x="4" y="7" width="14" height="14" rx="6" fill="#140D08" />
        <path d="M120 14 L148 11 L154 14 L148 17 Z" fill="url(#penGoldGrad)" />
        <line x1="130" y1="14" x2="154" y2="14" stroke="#8C6E54" strokeWidth="0.6" />
        <rect x="8" y="5.5" width="2" height="16" rx="1" fill="#C8A030" opacity="0.6" />
      </svg>
    </div>
  );
}

/** Glass Ink Bottle */
function DeskInkBottle({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="pointer-events-none select-none absolute z-5" style={{ ...style }}>
      <svg viewBox="0 0 44 64" fill="none" style={{ width: 34, height: 50 }}>
        <rect x="5" y="22" width="34" height="38" rx="4" fill="#1F1610" opacity="0.9" />
        <rect x="7" y="34" width="30" height="24" rx="2" fill="#0A0604" />
        <rect x="6" y="30" width="32" height="18" rx="1" fill="#FAF5E8" opacity="0.75" stroke="rgba(110,90,70,0.3)" strokeWidth="0.5" />
        <text x="22" y="42" textAnchor="middle" fontFamily="serif" fontSize="6" fill="#3A2C1E" fontStyle="italic">ink</text>
        <rect x="15" y="4" width="14" height="10" rx="2" fill="#755638" />
        <rect x="13" y="12" width="18" height="4" fill="#5C4228" />
      </svg>
    </div>
  );
}

/** Folded Envelope (waiting beside paper) */
function DeskWaitingEnvelope({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="pointer-events-none select-none absolute z-5" style={{ ...style }}>
      <svg viewBox="0 0 100 70" fill="none" style={{ width: 90, height: 63 }}>
        <rect x="1" y="1" width="98" height="68" rx="2" fill="#EFE8DA" stroke="rgba(130,100,70,0.25)" strokeWidth="0.8" />
        <path d="M1 1 L50 35 L99 1 Z" fill="#E2D7C3" />
        <path d="M1 69 L38 38" stroke="rgba(130,100,70,0.15)" strokeWidth="0.8" />
        <path d="M99 69 L62 38" stroke="rgba(130,100,70,0.15)" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/** Folded Envelope Sealed (for animation) */
function SealedEnvelope({ scale = 1, style }: { scale?: number; style?: React.CSSProperties }) {
  const w = 100 * scale, h = 70 * scale;
  return (
    <svg viewBox="0 0 100 70" fill="none" style={{ width: w, height: h, ...style }}>
      <rect x="1" y="1" width="98" height="68" rx="2" fill="#EFE8DA" stroke="rgba(130,100,70,0.3)" strokeWidth="0.8" />
      <path d="M1 1 L50 36 L99 1 Z" fill="#D8D0C0" opacity="0.75" />
      <circle cx="50" cy="26" r="10" fill="#BA664A" />
      <circle cx="50" cy="26" r="7.5" fill="#C47A5E" />
      <text x="50" y="29.5" textAnchor="middle" fill="rgba(255,235,200,0.85)" fontSize="7" fontFamily="serif" fontWeight="bold">PC</text>
    </svg>
  );
}

/** Paper clip */
function DeskPaperClip({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="pointer-events-none select-none absolute z-5" style={{ ...style }}>
      <svg viewBox="0 0 14 38" fill="none" style={{ width: 12, height: 32 }}>
        <path d="M4 34 C1 34 1 24 1 16 L1 8 C1 4 4 1 7 1 C10 1 13 4 13 8 L13 26 C13 30 11 32 7 32 C3 32 3 28 3 24 L3 12" stroke="#C4A882" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** Pressed flower petal */
function DeskFlowerPetal({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="pointer-events-none select-none absolute z-5" style={{ ...style }}>
      <svg viewBox="0 0 45 45" fill="none" style={{ width: 34, height: 34 }}>
        {[0, 72, 144, 216, 288].map((a, i) => (
          <ellipse
            key={i}
            cx={22.5 + 10 * Math.cos(a * Math.PI / 180)}
            cy={22.5 + 10 * Math.sin(a * Math.PI / 180)}
            rx="6" ry="9"
            transform={`rotate(${a} ${22.5 + 10 * Math.cos(a * Math.PI / 180)} ${22.5 + 10 * Math.sin(a * Math.PI / 180)})`}
            fill="#C8B8D8"
            opacity={0.5}
          />
        ))}
        <circle cx="22.5" cy="22.5" r="4" fill="#E8C870" opacity="0.6" />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN CONNECT RIGHT COMPONENT
   (100% Real Interactive HTML Contact Form)
═══════════════════════════════════════════════════ */
export default function ConnectRight() {
  const [phase, setPhase] = useState<Phase>("letter");
  const [name, setName]     = useState("");
  const [email, setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending]   = useState(false);
  const [emailError, setEmailError] = useState("");

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setSending(true);

    // 1. Start folding animation sequence immediately
    setPhase("folding");

    // 2. Deliver email via backend POST API to Purechimes@gmail.com
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    }).catch(() => {});

    setTimeout(() => setPhase("sealing"), 1300);
    setTimeout(() => setPhase("floating"), 2600);
    setTimeout(() => {
      setPhase("thanks");
      setSending(false);
    }, 4400);
  }, [email, message, name, sending]);

  const handleReset = useCallback(() => {
    setPhase("letter");
    setName("");
    setEmail("");
    setMessage("");
    setEmailError("");
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-auto select-text"
      style={{ background: "linear-gradient(198deg, #FFFDF8 0%, #FAF7F2 44%, #F5EFE5 100%)" }}
    >
      {/* ── Background Soft Desk Shadows & Lighting (pointer-events-none) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 select-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(110,90,78,0.02) 32px, rgba(110,90,78,0.02) 33px)",
          zIndex: 1,
        }}
      />

      {/* ── WRITING DESK SCENE PROPS (All pointer-events-none) ── */}
      <DeskInkBottle style={{ top: "4%", left: "4%" }} />
      <DeskFountainPen style={{ top: "14%", right: "3%", transform: "rotate(-28deg)" }} />
      <DeskWaitingEnvelope style={{ bottom: "5%", left: "3%", transform: "rotate(6deg)" }} />
      <DeskPaperClip style={{ top: "22%", left: "5%", transform: "rotate(35deg)" }} />
      <DeskFlowerPetal style={{ bottom: "5%", right: "4%" }} />

      {/* ═══════════════════════════════════════════
          LARGE STATIONERY WRITING PAPER
          (Fully Interactive Real HTML Form Container)
      ═══════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        {phase === "letter" && (
          <motion.div
            key="letter-stationery"
            className="absolute z-20 pointer-events-auto select-text"
            style={{
              top: "5%",
              bottom: "5%",
              left: "7%",
              right: "7%",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              scaleY: [1, 0.05],
              scaleX: [1, 0.75],
              opacity: [1, 1, 0],
              y: "35%",
              transformOrigin: "bottom center",
              transition: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Stationery Paper Card */}
            <div
              className="relative w-full h-full rounded-sm p-6 sm:p-8 flex flex-col justify-between pointer-events-auto select-text"
              style={{
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 50%, #F7F2E8 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.8), inset -1px 0 0 rgba(110,90,70,0.06), 4px 12px 32px rgba(58,44,30,0.11)",
                border: "1px solid rgba(140, 110, 80, 0.20)",
              }}
            >
              {/* Deckled Edge Top Effect */}
              <div
                className="absolute -top-1 left-0 right-0 h-2 pointer-events-none opacity-50 select-none"
                style={{
                  background: "linear-gradient(90deg, #FAF7EE 0%, #F7F2E8 50%, #FEFCF5 100%)",
                  clipPath:
                    "polygon(0% 100%, 5% 20%, 10% 80%, 15% 10%, 20% 90%, 25% 30%, 30% 70%, 35% 0%, 40% 80%, 45% 20%, 50% 100%, 55% 10%, 60% 80%, 65% 20%, 70% 90%, 75% 10%, 80% 80%, 85% 30%, 90% 70%, 95% 20%, 100% 100%)",
                }}
              />

              {/* Notebook Lines Guide Background */}
              <div
                className="absolute inset-0 pointer-events-none select-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(110,90,70,0.038) 28px, rgba(110,90,70,0.038) 29px)",
                  borderRadius: "1px",
                }}
              />

              {/* ── REAL NATIVE HTML FORM ── */}
              <form
                onSubmit={handleSubmit}
                className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-auto select-text"
              >
                <div>
                  {/* Salutation */}
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontStyle: "italic",
                      fontSize: "clamp(18px, 2.6vh, 23px)",
                      fontWeight: 700,
                      color: "#2A1E16",
                      marginBottom: "12px",
                    }}
                  >
                    Dear Poonam,
                  </h3>

                  {/* Input 1: My name is... */}
                  <div
                    className="mb-3 cursor-text"
                    onClick={() => document.getElementById("author-letter-name")?.focus()}
                  >
                    <label htmlFor="author-letter-name" className="sr-only">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      id="author-letter-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="My name is..."
                      className="w-full bg-transparent border-b border-[#6E5A4E]/30 focus:border-[#BA664A] text-[#2A1E16] placeholder:text-[#6E5A4E]/45 font-serif italic text-base sm:text-lg pb-1 outline-none transition-colors pointer-events-auto select-text cursor-text"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        lineHeight: 1.6,
                        WebkitUserSelect: "text",
                        userSelect: "text",
                      }}
                    />
                  </div>

                  {/* Input 2: My email is... */}
                  <div
                    className="mb-4 cursor-text"
                    onClick={() => document.getElementById("author-letter-email")?.focus()}
                  >
                    <label htmlFor="author-letter-email" className="sr-only">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      id="author-letter-email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      placeholder="My email is..."
                      className="w-full bg-transparent border-b border-[#6E5A4E]/30 focus:border-[#BA664A] text-[#2A1E16] placeholder:text-[#6E5A4E]/45 font-serif italic text-base sm:text-lg pb-1 outline-none transition-colors pointer-events-auto select-text cursor-text"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        lineHeight: 1.6,
                        WebkitUserSelect: "text",
                        userSelect: "text",
                      }}
                    />
                    {emailError && (
                      <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "11px", color: "#B05040", marginTop: "2px" }}>
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Prompt & Textarea: Message */}
                  <div
                    className="flex-1 flex flex-col mb-2 cursor-text"
                    onClick={(e) => {
                      if ((e.target as HTMLElement).tagName !== "TEXTAREA") {
                        document.getElementById("author-letter-message")?.focus();
                      }
                    }}
                  >
                    <label
                      htmlFor="author-letter-message"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "clamp(14px, 2vh, 17px)",
                        color: "#4A3728",
                        marginBottom: "4px",
                        display: "block",
                      }}
                      className="cursor-pointer"
                    >
                      I wanted to write because...
                    </label>
                    <textarea
                      name="message"
                      id="author-letter-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me what touched your heart..."
                      className="w-full bg-transparent border-b border-[#6E5A4E]/20 focus:border-[#BA664A] text-[#2A1E16] placeholder:text-[#6E5A4E]/40 font-serif italic text-sm sm:text-base outline-none resize-none transition-colors pointer-events-auto select-text cursor-text"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        lineHeight: "2.1",
                        WebkitUserSelect: "text",
                        userSelect: "text",
                      }}
                    />
                  </div>
                </div>

                {/* Sign-off & Wax Seal Submit Button */}
                <div className="flex items-end justify-between border-t border-[#6E5A4E]/10 pt-3 mt-2 pointer-events-auto">
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontStyle: "italic",
                        fontSize: "13px",
                        color: "#6E5A4E",
                        marginBottom: "4px",
                      }}
                    >
                      With gratitude,
                    </p>
                    <div style={{ width: 110, height: "1px", background: "rgba(110,90,78,0.25)" }} />
                  </div>

                  {/* REAL HTML SUBMIT BUTTON (Wax Seal) */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="group relative flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer focus:outline-none disabled:opacity-50 pointer-events-auto"
                    aria-label="Seal and Send Letter"
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center relative shadow-md group-hover:scale-105 group-active:scale-95 transition-transform"
                      style={{
                        background: "radial-gradient(circle at 35% 35%, #D4785A 0%, #BA664A 60%, #8C4830 100%)",
                      }}
                    >
                      <div className="w-8 h-8 rounded-full border border-dashed border-[#FAF7F2]/40 flex items-center justify-center">
                        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "11px", fontWeight: 700, color: "#FAF7F2" }}>
                          PC
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontStyle: "italic",
                        fontSize: "11px",
                        color: "#BA664A",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                      className="group-hover:underline underline-offset-2"
                    >
                      {sending ? "Sending..." : "Seal & Send"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

        {/* ── PHASE 2: FOLDING ANIMATION ── */}
        {phase === "folding" && (
          <motion.div
            key="folding"
            className="absolute"
            style={{ bottom: "10%", left: "15%", right: "15%", zIndex: 25 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              style={{
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 100%)",
                border: "1px solid rgba(110,90,60,0.15)",
                padding: "20px",
                boxShadow: "2px 8px 24px rgba(58,44,30,0.10)",
                transformOrigin: "center bottom",
              }}
              animate={{ scaleY: [1, 0.4, 0.1], scaleX: [1, 0.85, 0.65], rotate: [0, -2, 1] }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <p style={{ fontFamily: "var(--font-cormorant), serif", fontStyle: "italic", fontSize: "14px", color: "#3A2C1E" }}>
                Dear Poonam, my name is {name}...
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ── PHASE 3: SEALING ENVELOPE ── */}
        {phase === "sealing" && (
          <motion.div
            key="sealing"
            className="absolute"
            style={{ bottom: "15%", left: "50%", transform: "translateX(-50%)", zIndex: 25 }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SealedEnvelope scale={1.2} />
          </motion.div>
        )}

        {/* ── PHASE 4: FLOATING ENVELOPE UPWARD ── */}
        {phase === "floating" && (
          <motion.div
            key="floating"
            className="absolute pointer-events-none"
            style={{ bottom: "15%", left: "50%", x: "-50%", zIndex: 25 }}
            initial={{ y: 0, opacity: 1, scale: 1.1 }}
            animate={{ y: -340, rotate: [0, -3, 3, -1, 0], opacity: [1, 1, 0.8, 0.3, 0], scale: [1.1, 1.15, 1.05, 0.95] }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <SealedEnvelope scale={1.2} />
          </motion.div>
        )}

        {/* ── PHASE 5: SUCCESS STATE ── */}
        {phase === "thanks" && (
          <motion.div
            key="thanks"
            className="absolute"
            style={{ bottom: "10%", left: "10%", right: "10%", zIndex: 30 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div
              style={{
                background: "linear-gradient(175deg, #FEFCF5 0%, #FAF7EE 100%)",
                border: "1px solid rgba(140,110,80,0.20)",
                padding: "28px 24px",
                boxShadow: "0 4px 20px rgba(58,44,30,0.08)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 8,
              }}
            >
              {/* Wax Seal Stamp Icon */}
              <div className="w-12 h-12 rounded-full bg-[#BA664A] flex items-center justify-center shadow-md mb-1">
                <span style={{ color: "#FAF7F2", fontSize: "16px", fontWeight: 700, fontFamily: "serif" }}>PC</span>
              </div>

              <h4
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 2.5vh, 22px)",
                  color: "#2A1E16",
                  fontWeight: 700,
                }}
              >
                Your letter is on its way.
              </h4>

              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(13px, 1.8vh, 15px)",
                  color: "#4A3728",
                  lineHeight: 1.6,
                  maxWidth: 320,
                }}
              >
                Thank you for reaching out, {name}. Your letter has been delivered to Poonam&apos;s writing desk.
              </p>

              <button
                type="button"
                onClick={handleReset}
                style={{
                  marginTop: 10,
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "12px",
                  color: "#BA664A",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                ← Write another letter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Page Footer Number ── */}
      <div className="absolute pointer-events-none select-none" style={{ bottom: "2%", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <span style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "8px", letterSpacing: "0.3em", color: "#6E5A4E", opacity: 0.2 }}>5</span>
      </div>
    </div>
  );
}
