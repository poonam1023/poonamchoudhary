"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import LinenCoverBackground from "./LinenCoverBackground";
import EndpaperPattern from "./EndpaperPattern";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
import OpenBookButton from "./OpenBookButton";
import ChapterOne from "./ChapterOne";
import CoverSection from "./CoverSection";
import WritingDeskBackground from "./WritingDeskBackground";

import LeftPage from "@/components/book/LeftPage";
import { NavigationProvider, useNavigation } from "@/hooks/useNavigation";

function BookOpeningAnimationInner() {
  const [isHovered, setIsHovered] = useState(false);
  const {
    state,
    openingPhase,
    isMobile,
    openBook,
    closeBook,
  } = useNavigation();
  const [mountPhase, setMountPhase] = useState<"black" | "windowLight" | "desk" | "book" | "details" | "cta">("black");

  const isAnimating = ["opening", "closing", "transitioning"].includes(state);
  const handleHoverStart = useCallback(() => setIsHovered(true), []);
  const handleHoverEnd = useCallback(() => setIsHovered(false), []);

  // Cinematic mount sequence
  useEffect(() => {
    const phases = [
      { name: "windowLight" as const, delay: 400 },
      { name: "desk" as const, delay: 1200 },
      { name: "book" as const, delay: 2200 },
      { name: "details" as const, delay: 3200 },
      { name: "cta" as const, delay: 4200 },
    ];
    const timers = phases.map(({ name, delay }) =>
      setTimeout(() => setMountPhase(name), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const isOpened =
    state === "open" ||
    state === "transitioning" ||
    (state === "opening" && openingPhase === "flipping");
  const isFlipped =
    state === "open" ||
    state === "transitioning" ||
    (state === "opening" && openingPhase === "flipping");
  const isPressing = state === "opening" && openingPhase === "pressing";

  return (
    <div
      className={`relative w-screen h-screen flex items-center justify-center overflow-hidden ${
        isAnimating ? "book-animating" : ""
      }`}
      style={{ background: "#1A1410" }}
    >
      {/* Layer 0: Initial black screen (fades to reveal) */}
      <motion.div
        className="absolute inset-0 bg-[#0A0806] z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Layer 1: Writing Desk Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: mountPhase === "black" ? 0 : 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
      >
        <WritingDeskBackground />
      </motion.div>

      {/* Layer 2: Window light beam */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: ["black", "windowLight"].includes(mountPhase) ? 0 : 0.08,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <div
          className="absolute w-[70%] h-[120%]"
          style={{
            top: "-10%",
            left: "15%",
            background:
              "linear-gradient(135deg, rgba(255,248,230,0.12) 0%, rgba(255,240,215,0.06) 50%, transparent 80%)",
            clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 20% 100%)",
          }}
        />
      </motion.div>

      {/* Layer 4: 3D Book Perspective Wrapper */}
      <motion.div
        className="relative z-20"
        style={
          isMobile
            ? { width: "90vw", height: "80vh" }
            : {
                width: "min(96vw, 1800px)",
                height: "90vh",
                perspective: "1500px",
                willChange: "transform",
              }
        }
      >
        {/* Book Spread Container */}
        <motion.div
          className="relative flex items-center justify-center w-full h-full"
          style={
            isMobile
              ? {}
              : {
                  willChange: isAnimating ? "transform" : "auto",
                }
          }
          animate={{
            x: isMobile ? 0 : isOpened ? 0 : "-25%",
            rotate: isOpened ? 0 : -0.7,
            scale: isPressing ? 0.985 : 1,
          }}
          transition={{
            duration: isPressing ? 0.35 : 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
        >

          {/* ── BACK COVER BOARD (sage linen) ── */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full rounded-none pointer-events-none"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(4px, 4px, -10px) rotate(-0.7deg)",
                background: "linear-gradient(160deg, #9FADA0 0%, #8E9B84 35%, #7F8E76 100%)",
                boxShadow: "0 42px 96px rgba(20,30,15,0.28)",
                borderLeft: "1px solid rgba(62,76,56,0.25)",
              }}
            >
              {/* Linen weave */}
              <div
                className="absolute inset-0 opacity-55"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(80,95,72,0.12) 1.5px, rgba(80,95,72,0.12) 2px),
                    repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(80,95,72,0.08) 1.5px, rgba(80,95,72,0.08) 2px)
                  `,
                  backgroundSize: "2px 2px",
                }}
              />
            </div>
          )}

          {/* ── PAGE STACK EDGE (warm gold-tinted ivory) ── */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full rounded-none pointer-events-none overflow-hidden"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(2px, 2px, -5px) rotate(-0.7deg)",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #F5EED8, #F5EED8 2px, #EDE5C8 2px, #EDE5C8 3px)",
              }}
            />
          )}

          {/* ── RIGHT PAGE / CHAPTER ONE ── */}
          <div
            className={`absolute right-0 top-0 h-full bg-[#F7F1E8] transition-opacity duration-500 rounded-none ${
              isMobile ? "left-0 w-full" : "w-1/2"
            } ${isOpened ? "opacity-100 z-20" : "opacity-0 z-0"}`}
            style={{
              boxShadow:
                "0 46px 115px rgba(16, 9, 5, 0.48), 0 18px 40px rgba(16, 9, 5, 0.28)",
            }}
          >
            {!isMobile && (
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-[#3A2C1E]/8 to-transparent z-30" />
            )}
            <div className="book-board-edge" />
            {(state === "open" || state === "transitioning") && (
              <ChapterOne onClose={closeBook} />
            )}
          </div>

          {/* ── FLIP CARD: COVER (front) + ENDPAPER (back) ── */}
          <motion.div
            className="absolute right-0 top-0 h-full preserve-3d origin-left"
            style={{
              width: isMobile ? "100%" : "50%",
              willChange: isAnimating ? "transform, opacity" : "auto",
            }}
            animate={{
              rotateY: isFlipped ? -180 : 0,
              opacity:
                isMobile && (state === "open" || state === "transitioning") ? 0 : 1,
              zIndex:
                state === "open" || state === "transitioning" ? 10 : 30,
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                FRONT: Sage Linen Clothbound Cover
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-none flex flex-col justify-between overflow-hidden"
              style={{
                transform: "rotateY(0deg)",
                pointerEvents: isOpened ? "none" : "auto",
                boxShadow:
                  "0 36px 84px rgba(20,30,15,0.28), 0 14px 32px rgba(20,30,15,0.14)",
                borderLeft: "1px solid rgba(62,76,56,0.20)",
                borderRight: "1px solid rgba(62,76,56,0.20)",
              }}
            >
              {/* ── LINEN BACKGROUND ── */}
              <LinenCoverBackground />

              {/* ── SPINE (left panel, 44px) ── */}
              {!isMobile && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col items-center justify-between py-10 z-20 pointer-events-none select-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(55,68,50,0.55) 0%, rgba(80,95,72,0.20) 30%, rgba(80,95,72,0.08) 100%)",
                    borderRight: "1px solid rgba(55,68,50,0.30)",
                    boxShadow: "inset -2px 0 6px rgba(30,40,25,0.20), 1px 0 2px rgba(174,184,161,0.08)",
                  }}
                >
                  {/* Spine linen weave */}
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(55,68,50,0.18) 1.5px, rgba(55,68,50,0.18) 2px),
                        repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(55,68,50,0.12) 1.5px, rgba(55,68,50,0.12) 2px)
                      `,
                      backgroundSize: "2px 2px",
                    }}
                  />
                  {/* Spine title */}
                  <div
                    className="relative z-10"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "6px",
                      letterSpacing: "0.22em",
                      fontFamily: "var(--font-sans), sans-serif",
                      color: "rgba(200,165,106,0.70)",
                      textShadow:
                        "0.3px 0.3px 0px rgba(240,215,160,0.40), " +
                        "-0.3px -0.3px 0px rgba(40,30,10,0.35)",
                      textTransform: "uppercase",
                      lineHeight: 1.5,
                    }}
                  >
                    Raising Ourselves Before We Raise Our Children
                  </div>

                  {/* Spine botanical ornament */}
                  <div className="relative z-10" style={{ opacity: 0.55 }}>
                    <svg width="18" height="22" viewBox="0 0 20 26" fill="none">
                      <path d="M10 24 C10 18 8 12 10 6 C11 2 10 0 10 0" stroke="rgba(200,165,106,0.65)" strokeWidth="0.7" strokeLinecap="round"/>
                      <ellipse cx="6" cy="16" rx="5" ry="2.5" transform="rotate(-25 6 16)" fill="rgba(200,165,106,0.25)" stroke="rgba(200,165,106,0.40)" strokeWidth="0.4"/>
                      <ellipse cx="14" cy="13" rx="5" ry="2.5" transform="rotate(25 14 13)" fill="rgba(200,165,106,0.20)" stroke="rgba(200,165,106,0.35)" strokeWidth="0.4"/>
                      <circle cx="10" cy="0.5" r="1" fill="rgba(200,165,106,0.45)"/>
                    </svg>
                  </div>

                  {/* Author at bottom of spine */}
                  <div
                    className="relative z-10"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "7px",
                      letterSpacing: "0.16em",
                      fontFamily: "var(--font-display), serif",
                      color: "rgba(200,165,106,0.75)",
                      textShadow:
                        "0.3px 0.3px 0px rgba(240,215,160,0.40), " +
                        "-0.3px -0.3px 0px rgba(40,30,10,0.35)",
                    }}
                  >
                    Poonam Choudhary
                  </div>
                </div>
              )}

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  EDITORIAL COVER — Centered typographic layout
                  Inspired by Penguin Clothbound / Assouline
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <CoverSection>
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-0"
                  style={{
                    paddingLeft: isMobile ? "clamp(20px,3vw,44px)" : "calc(44px + clamp(20px,3vw,44px))",
                    paddingRight: "clamp(20px,3vw,44px)",
                    paddingTop: "clamp(28px,4vh,52px)",
                    paddingBottom: "clamp(28px,4vh,52px)",
                  }}
                >

                  {/* ── TOP: Book Title ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 2.0 }}
                    className="text-center mb-[clamp(16px,3vh,28px)]"
                  >
                    <BookSubtitle />
                  </motion.div>

                  {/* ── Thin gold rule ── */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 2.3 }}
                    style={{
                      width: "clamp(40px,5vw,60px)",
                      height: "0.5px",
                      background: "rgba(200,165,106,0.40)",
                      marginBottom: "clamp(16px,3vh,28px)",
                    }}
                  />

                  {/* ── CENTER: Author Name (hero) ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 2.5 }}
                    className="flex flex-col items-center mb-[clamp(16px,3vh,28px)]"
                  >
                    <BookTitle />
                  </motion.div>

                  {/* ── Small botanical fleuron ── */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1], delay: 2.8 }}
                    className="mb-[clamp(12px,2vh,20px)]"
                    style={{ color: "#C8A56A" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      {/* 4-petal fleuron */}
                      <path d="M12 2 Q14 7 12 12 Q10 7 12 2Z" fill="rgba(200,165,106,0.70)"/>
                      <path d="M22 12 Q17 14 12 12 Q17 10 22 12Z" fill="rgba(200,165,106,0.70)"/>
                      <path d="M12 22 Q10 17 12 12 Q14 17 12 22Z" fill="rgba(200,165,106,0.70)"/>
                      <path d="M2 12 Q7 10 12 12 Q7 14 2 12Z" fill="rgba(200,165,106,0.70)"/>
                      <circle cx="12" cy="12" r="1.8" fill="rgba(200,165,106,0.55)"/>
                    </svg>
                  </motion.div>

                  {/* ── IDENTITY: Author · Speaker · Parenting Guide ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.0 }}
                    className="flex justify-center mb-[clamp(24px,4vh,40px)]"
                  >
                    <AuthorName />
                  </motion.div>

                  {/* ── CTA: Begin Reading ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 3.5 }}
                    className="flex justify-center"
                  >
                    <OpenBookButton
                      onHoverStart={handleHoverStart}
                      onHoverEnd={handleHoverEnd}
                      onClick={openBook}
                    />
                  </motion.div>

                </div>
              </CoverSection>
            </div>

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                BACK: Inside Front Cover — Endpaper
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {!isMobile && (
              <div
                className="absolute inset-0 w-full h-full backface-hidden rounded-none"
                style={{
                  transform: "rotateY(180deg)",
                  boxShadow:
                    "0 36px 84px rgba(58, 44, 30, 0.18), 0 14px 32px rgba(58, 44, 30, 0.09)",
                }}
              >
                <EndpaperPattern />
                <LeftPage>
                  <></>
                </LeftPage>
                <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-[#3A2C1E]/8 to-transparent z-30" />
                <div className="book-board-edge" />
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function BookOpeningAnimation() {
  return (
    <NavigationProvider>
      <BookOpeningAnimationInner />
    </NavigationProvider>
  );
}
