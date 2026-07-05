"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import LinenCoverBackground from "./LinenCoverBackground";
import EndpaperPattern from "./EndpaperPattern";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
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
      style={{ background: "#150E0B" }}
    >
      {/* Layer 0: Initial black screen (fades to reveal) */}
      <motion.div
        className="absolute inset-0 bg-[#060403] z-50 pointer-events-none"
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
          opacity: ["black", "windowLight"].includes(mountPhase) ? 0 : 0.10,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <div
          className="absolute w-[70%] h-[120%]"
          style={{
            top: "-10%",
            left: "15%",
            background:
              "linear-gradient(135deg, rgba(255,248,230,0.14) 0%, rgba(255,240,215,0.06) 50%, transparent 80%)",
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
            rotate: isOpened ? 0 : isHovered ? -0.2 : -0.7,
            scale: isOpened ? 1 : isPressing ? 0.985 : isHovered ? 1.015 : 1,
            y: isOpened ? 0 : isHovered ? -10 : 0,
          }}
          transition={{
            duration: isPressing ? 0.35 : 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
        >

          {/* ── BACK COVER BOARD (Walnut Brown linen) ── */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full rounded-none pointer-events-none"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(4px, 4px, -10px) rotate(-0.7deg)",
                background: "linear-gradient(160deg, #5E3D2B 0%, #4B2E20 35%, #2D1A12 100%)",
                boxShadow: "0 42px 96px rgba(10,5,3,0.38)",
                borderLeft: "1px solid rgba(45,26,18,0.35)",
              }}
            >
              {/* Linen weave */}
              <div
                className="absolute inset-0 opacity-55"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(45,26,18,0.18) 1.5px, rgba(45,26,18,0.18) 2px),
                    repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(45,26,18,0.14) 1.5px, rgba(45,26,18,0.14) 2px)
                  `,
                  backgroundSize: "2px 2px",
                }}
              />
            </div>
          )}

          {/* ── GILT PAGE STACK EDGE (Soft golden foil page block) ── */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full rounded-none pointer-events-none overflow-hidden"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(2px, 2px, -5px) rotate(-0.7deg)",
                backgroundImage: `
                  repeating-linear-gradient(
                    to bottom,
                    #FAF5E8 0px,
                    #FAF5E8 2px,
                    #E5C38C 2.5px,
                    #D2AD73 3.5px,
                    #FAF5E8 5px
                  )
                `,
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
                FRONT: Premium Heirloom Hardcover Cover (Walnut Brown)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <div
              onClick={!isOpened ? openBook : undefined}
              onMouseEnter={!isOpened ? handleHoverStart : undefined}
              onMouseLeave={!isOpened ? handleHoverEnd : undefined}
              className={`absolute inset-0 w-full h-full backface-hidden rounded-none flex flex-col justify-between overflow-hidden ${
                !isOpened ? "cursor-pointer" : ""
              }`}
              style={{
                transform: "rotateY(0deg)",
                pointerEvents: isOpened ? "none" : "auto",
                boxShadow:
                  "0 36px 84px rgba(14,8,4,0.38), 0 14px 32px rgba(14,8,4,0.20)",
                borderLeft: "1px solid rgba(45,26,18,0.30)",
                borderRight: "1px solid rgba(45,26,18,0.30)",
              }}
            >
              {/* ── LINEN BACKGROUND ── */}
              <LinenCoverBackground isHovered={isHovered} />

              {/* ── Spine wrap on mobile or inside cover? 
                   We render spine on the left side of front cover only on desktop ── */}
              {!isMobile && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col items-center justify-between py-10 z-20 pointer-events-none select-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(30,16,10,0.65) 0%, rgba(75,46,32,0.22) 30%, rgba(75,46,32,0.08) 100%)",
                    borderRight: "1px solid rgba(30,16,10,0.40)",
                    boxShadow: "inset -2px 0 6px rgba(20,12,7,0.30), 1px 0 2px rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Spine linen weave */}
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(0deg, transparent, transparent 1.5px, rgba(45,26,18,0.22) 1.5px, rgba(45,26,18,0.22) 2px),
                        repeating-linear-gradient(90deg, transparent, transparent 1.5px, rgba(45,26,18,0.18) 1.5px, rgba(45,26,18,0.18) 2px)
                      `,
                      backgroundSize: "2px 2px",
                    }}
                  />

                  {/* Spine Stitching crease simulation line */}
                  <div
                    className="absolute right-[2px] top-0 bottom-0 w-[1px]"
                    style={{
                      borderRight: "1px dashed rgba(200, 165, 106, 0.12)",
                    }}
                  />

                  {/* Spine title */}
                  <div
                    className="relative z-10"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "6.5px",
                      letterSpacing: "0.24em",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "rgba(200,165,106,0.72)",
                      textShadow:
                        "0.3px 0.3px 0px rgba(250,230,190,0.40), " +
                        "-0.3px -0.3px 0px rgba(30,16,10,0.45)",
                      textTransform: "uppercase",
                      lineHeight: 1.5,
                    }}
                  >
                    Raising Ourselves Before We Raise Our Children
                  </div>

                  {/* Spine leaf spray ornament */}
                  <div className="relative z-10" style={{ opacity: 0.55 }}>
                    <svg width="18" height="22" viewBox="0 0 20 26" fill="none">
                      <path d="M10 24 C10 18 8 12 10 6 C11 2 10 0 10 0" stroke="#C8A56A" strokeWidth="0.7" strokeLinecap="round"/>
                      <ellipse cx="6" cy="16" rx="5" ry="2.5" transform="rotate(-25 6 16)" fill="rgba(200,165,106,0.25)" stroke="#C8A56A" strokeWidth="0.4"/>
                      <ellipse cx="14" cy="13" rx="5" ry="2.5" transform="rotate(25 14 13)" fill="rgba(200,165,106,0.20)" stroke="#C8A56A" strokeWidth="0.4"/>
                      <circle cx="10" cy="0.5" r="1" fill="#C8A56A"/>
                    </svg>
                  </div>

                  {/* Author at bottom of spine */}
                  <div
                    className="relative z-10"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      fontSize: "7.5px",
                      letterSpacing: "0.18em",
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      color: "rgba(200,165,106,0.75)",
                      textShadow:
                        "0.3px 0.3px 0px rgba(250,230,190,0.40), " +
                        "-0.3px -0.3px 0px rgba(30,16,10,0.45)",
                    }}
                  >
                    Poonam Choudhary
                  </div>
                </div>
              )}

              {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                  EDITORIAL COVER — Centered typographic layout
                  Restrained, Luxurious, Balanced Margins
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
              <CoverSection>
                <div
                  className="w-full h-full flex flex-col items-center justify-between"
                  style={{
                    paddingLeft: isMobile ? "clamp(20px,4vw,44px)" : "calc(44px + clamp(20px,4vw,52px))",
                    paddingRight: "clamp(20px,4vw,52px)",
                    paddingTop: "clamp(48px,9vh,80px)",
                    paddingBottom: "clamp(48px,9vh,80px)",
                  }}
                >

                  {/* ── TOP: Book Subtitle (Raising Ourselves...) ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1], delay: 2.0 }}
                    className="text-center"
                  >
                    <BookSubtitle />
                  </motion.div>

                  {/* ── CENTER: Title (POONAM CHOUDHARY) ── */}
                  <div className="flex flex-col items-center gap-6 my-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1], delay: 2.3 }}
                      className="flex flex-col items-center"
                    >
                      <BookTitle />
                    </motion.div>

                    {/* ── Centered Gold Foil Sprig Motif ( Oak / laurel leaf branch ) ── */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 2.6 }}
                      style={{ color: "#C8A56A" }}
                    >
                      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Elegant gold foil branch sprig */}
                        <path
                          d="M16 28 C16 20 13 14 16 6 C17.5 2 16 0 16 0"
                          stroke="#C8A56A"
                          strokeWidth="1"
                          strokeLinecap="round"
                          style={{ filter: "drop-shadow(0.5px 0.5px 0px rgba(255,235,190,0.5))" }}
                        />
                        {/* Gold leaves */}
                        <path d="M16 24 C10 22 7 18 6 14 C12 15 15 19 16 24Z" fill="#C8A56A" stroke="#B39257" strokeWidth="0.3"/>
                        <path d="M16 24 C22 22 25 18 26 14 C20 15 17 19 16 24Z" fill="#C8A56A" stroke="#B39257" strokeWidth="0.3"/>
                        <path d="M16 17 C11 15 9 12 8 8 C13 9 15 13 16 17Z" fill="#C8A56A" stroke="#B39257" strokeWidth="0.3"/>
                        <path d="M16 17 C21 15 23 12 24 8 C19 9 17 13 16 17Z" fill="#C8A56A" stroke="#B39257" strokeWidth="0.3"/>
                        <circle cx="16" cy="1" r="1.5" fill="#C8A56A"/>
                      </svg>
                    </motion.div>
                  </div>

                  {/* ── BOTTOM: AuthorName (Author • Speaker • Parenting Guide) ── */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.8 }}
                    className="flex justify-center"
                  >
                    <AuthorName />
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
