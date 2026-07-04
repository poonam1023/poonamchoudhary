"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import PaperBackground from "./PaperBackground";
import DustParticles from "./DustParticles";
import VintageIllustration from "./VintageIllustration";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
import OpenBookButton from "./OpenBookButton";
import PageCurl from "./PageCurl";
import ChapterOne from "./ChapterOne";
import CoverSection from "./CoverSection";
import WritingDeskBackground from "./WritingDeskBackground";
import LeftPage from "@/components/book/LeftPage";
import ChapterOneLeft from "@/components/chapters/chapter-one/ChapterOneLeft";
import Book3D from "@/components/book/Book3D";
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

  // Mouse position for 3D parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // 3D transforms
  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-6, 6]);
  const translateZ = useTransform(mouseX, [0, 1], [20, 40]);

  // Breathing animation value
  const breatheScale = useMotionValue(1);

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
    phases.forEach(({ name, delay }) => {
      const timer = setTimeout(() => setMountPhase(name), delay);
      return () => clearTimeout(timer);
    });
    // Cleanup — set to cta after all timeouts resolve
    const cleanup = setTimeout(() => {
      // nothing extra needed
    }, 5000);
    return () => clearTimeout(cleanup);
  }, []);

  // Breathing loop
  useEffect(() => {
    let running = true;
    let controls: { stop: () => void } | null = null;
    const breathe = async () => {
      while (running) {
        controls = animate(breatheScale, 1.003, { duration: 4, ease: "easeInOut" });
        await controls;
        if (!running) break;
        controls = animate(breatheScale, 1, { duration: 4, ease: "easeInOut" });
        await controls;
      }
    };
    breathe();
    return () => {
      running = false;
      controls?.stop();
    };
  }, [breatheScale]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [isMobile, mouseX, mouseY]
  );

  const isOpened = state === "open" || state === "transitioning" || (state === "opening" && openingPhase === "flipping");
  const isFlipped = state === "open" || state === "transitioning" || (state === "opening" && openingPhase === "flipping");
  const isPressing = state === "opening" && openingPhase === "pressing";

  return (
    <div
      className={`relative w-screen h-screen flex items-center justify-center overflow-hidden ${
        isAnimating ? "book-animating" : ""
      }`}
      onMouseMove={handleMouseMove}
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

      {/* Layer 2: Window light beam (trapezoid parallelogram, warm, slow rotation) */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: ["black", "windowLight"].includes(mountPhase) ? 0 : 0.08,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <motion.div
          className="absolute w-[70%] h-[120%]"
          style={{
            top: "-10%",
            left: "15%",
            background:
              "linear-gradient(135deg, rgba(255,248,230,0.12) 0%, rgba(255,240,215,0.06) 50%, transparent 80%)",
            clipPath: "polygon(10% 0%, 90% 0%, 70% 100%, 20% 100%)",
            transformOrigin: "center center",
          }}
          animate={{ rotate: [0, 2, 0, -1, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Layer 3: Dust particles (inside light beam area) */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: ["black", "windowLight", "desk"].includes(mountPhase) ? 0 : 1,
        }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      >
        <DustParticles />
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
                rotateX: rotateX,
                rotateY: rotateY,
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
                  translateZ: translateZ,
                  scale: breatheScale,
                  willChange: isAnimating ? "transform" : "auto",
                }
          }
          animate={{
            x: isMobile ? 0 : isOpened ? 0 : "-25%",
            rotate: isOpened ? 0 : -0.7,
            scale: isPressing ? 0.985 : isMobile ? 1 : 1,
          }}
          transition={{
            duration: isPressing ? 0.35 : 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          {/* Book3D wrapper */}
          {isOpened && (
            <div className="absolute inset-0 pointer-events-none z-0">
              <Book3D><></></Book3D>
            </div>
          )}

          {/* Back cover board */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full bg-[#FAF7F2] border border-[#6E5A4E]/6 rounded-md pointer-events-none"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(4px, 4px, -10px) rotate(-0.7deg)",
                boxShadow: "0 35px 80px rgba(58, 44, 30, 0.18)",
              }}
            />
          )}

          {/* Page stack edge */}
          {!isOpened && (
            <div
              className="absolute right-0 top-0 h-full bg-[#FAF7F2] border-y border-r border-[#6E5A4E]/6 rounded-r-sm pointer-events-none overflow-hidden"
              style={{
                width: isMobile ? "100%" : "50%",
                transform: "translate3d(2px, 2px, -5px) rotate(-0.7deg)",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, #FAF7F2, #FAF7F2 2px, #F7F1E8 2px, #F7F1E8 3px)",
              }}
            />
          )}

          {/* Right page / Chapter One */}
          <div
            className={`absolute right-0 top-0 h-full bg-[#F7F1E8] transition-opacity duration-500 rounded-r-md ${
              isMobile ? "left-0 w-full" : "w-1/2"
            } ${isOpened ? "opacity-100 z-20" : "opacity-0 z-0"}`}
            style={{
              boxShadow:
                "0 38px 95px rgba(16, 9, 5, 0.40), 0 14px 32px rgba(16, 9, 5, 0.24)",
            }}
          >
            {!isMobile && (
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-[#3A2C1E]/8 to-transparent z-30" />
            )}
            <div className="book-board-edge" />
            {(state === "open" || state === "transitioning") && <ChapterOne onClose={closeBook} />}
          </div>

          {/* Flip card: Cover Page */}
          <motion.div
            className="absolute right-0 top-0 h-full preserve-3d origin-left"
            style={{
              width: isMobile ? "100%" : "50%",
              willChange: isAnimating ? "transform, opacity" : "auto",
            }}
            animate={{
              rotateY: isFlipped ? -180 : 0,
              opacity: isMobile && (state === "open" || state === "transitioning") ? 0 : 1,
              zIndex: (state === "open" || state === "transitioning") ? 10 : 30,
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 1, 0.5, 1],
            }}
          >
            {/* FRONT: Book Cover */}
            <div
              className="absolute inset-0 w-full h-full backface-hidden rounded-md flex flex-col justify-between overflow-hidden border border-[#6E5A4E]/10"
              style={{
                transform: "rotateY(0deg)",
                pointerEvents: isOpened ? "none" : "auto",
                boxShadow:
                  "0 30px 70px rgba(58, 44, 30, 0.14), 0 10px 25px rgba(58, 44, 30, 0.07)",
              }}
            >
              <PaperBackground />
              <div className="book-spine-crease" />
              <div className="book-board-edge" />

              {/* Spine graphics */}
              {!isMobile && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col items-center justify-between py-12 z-20 pointer-events-none select-none"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(110, 90, 78, 0.02), rgba(110, 90, 78, 0.005) 85%, rgba(110, 90, 78, 0.06) 100%)",
                  }}
                >
                  <div
                    className="font-display font-bold text-[8px] tracking-[0.24em] text-ink/55 uppercase"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    PROJECT POONAM
                  </div>
                  <span className="text-[10px] text-ink/35 my-auto">❦</span>
                  <div className="font-sans text-[7px] tracking-widest text-ink/45 uppercase">
                    2026
                  </div>
                </div>
              )}

              <VintageIllustration />

              <CoverSection>
                <div className="w-full flex flex-col items-center justify-center text-center pl-0 md:pl-[44px]">
                  {/* Book title — animated in */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 2.2,
                    }}
                  >
                    <BookTitle />
                  </motion.div>

                  {/* Subtitle */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 2.6,
                    }}
                    className="mt-6"
                  >
                    <BookSubtitle />
                  </motion.div>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 3.0,
                    }}
                    className="mt-8"
                  >
                    <AuthorName />
                  </motion.div>

                  {/* CTA Button — invitation card, fades in last */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.25, 1, 0.5, 1],
                      delay: 0.4,
                    }}
                    className="mt-12"
                  >
                    <OpenBookButton
                      onHoverStart={handleHoverStart}
                      onHoverEnd={handleHoverEnd}
                      onClick={openBook}
                    />
                  </motion.div>
                </div>
              </CoverSection>

              <PageCurl
                isHovered={isHovered}
                isOpening={state === "opening"}
              />
            </div>

            {/* BACK: Inside Left Cover */}
            {!isMobile && (
              <div
                className="absolute inset-0 w-full h-full backface-hidden rounded-md border border-[#6E5A4E]/10"
                style={{
                  transform: "rotateY(180deg)",
                  boxShadow:
                    "0 30px 70px rgba(58, 44, 30, 0.14), 0 10px 25px rgba(58, 44, 30, 0.07)",
                }}
              >
                <LeftPage>
                  <ChapterOneLeft />
                </LeftPage>
                <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-[#3A2C1E]/8 to-transparent z-30" />
                <div className="book-board-edge" />
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Desk footer storytelling section */}
      {isOpened && !isMobile && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[18vh] z-30 pointer-events-none select-none overflow-visible flex items-end justify-center"
          style={{
            background:
              "linear-gradient(to top, rgba(40,24,15,0.58) 0%, rgba(72,48,32,0.18) 58%, rgba(72,48,32,0) 100%)",
          }}
        >
          {/* Vase with leaves */}
          <div
            className="absolute bottom-[-10px] left-[4%] w-32 h-56 z-40 pointer-events-auto"
            style={{
              filter: "drop-shadow(4px 12px 20px rgba(58,44,30,0.12))",
            }}
          >
            <svg
              viewBox="0 0 100 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M 50 190 Q 25 185 22 140 Q 20 100 35 85 Q 40 80 40 70 L 40 50 L 60 50 L 60 70 Q 60 80 65 85 Q 80 100 78 140 Q 75 185 50 190 Z"
                fill="#F5F0E8"
                stroke="#6E5A4E"
                strokeWidth="0.5"
              />
              <path
                d="M 32 120 Q 30 145 42 170"
                stroke="#FAF7F2"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.25"
              />
              <g
                stroke="#A8B29A"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              >
                <path d="M 50 50 Q 42 20 28 -20" />
                <path d="M 45 35 Q 22 28 15 32" fill="#B8C4A8" />
                <path d="M 40 18 Q 20 5 12 12" fill="#B8C4A8" />
                <path d="M 35 0 Q 15 -15 8 -5" fill="#B8C4A8" />
                <path d="M 50 50 Q 58 10 74 -30" />
                <path d="M 54 38 Q 78 35 85 40" fill="#B8C4A8" />
                <path d="M 58 22 Q 82 15 88 22" fill="#B8C4A8" />
                <path d="M 64 2 Q 88 -8 92 0" fill="#B8C4A8" />
              </g>
            </svg>
          </div>

          {/* "As Featured In" strip */}
          <div
            className="absolute bottom-[2%] mx-auto z-45 pointer-events-auto"
            style={{
              width: "480px",
              transform: "rotate(-0.8deg)",
              filter: "drop-shadow(2px 6px 12px rgba(58,44,30,0.10))",
            }}
          >
            <div
              className="relative"
              style={{
                background: "#FAF7F2",
                border: "0.5px solid rgba(110,90,78,0.10)",
                padding: "8px 16px 10px",
                clipPath:
                  "polygon(0% 10%, 15% 0%, 35% 8%, 55% 2%, 75% 9%, 100% 0%, 98% 90%, 80% 100%, 50% 92%, 20% 98%, 0% 90%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.1] pointer-events-none"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 4px),
                    repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 4px)
                  `,
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "6.5px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#6E5A4E",
                  textTransform: "uppercase",
                }}
              >
                As Featured In
              </span>
              <div className="flex items-center justify-between w-full px-4 mt-1 opacity-75">
                <span style={{ fontFamily: "Georgia, serif", fontSize: "11px", fontWeight: "bold", color: "#3A2C1E" }}>THE HINDU</span>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11.5px", fontWeight: "black", letterSpacing: "-0.04em", color: "#3A2C1E" }}>Forbes</span>
                <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 700, color: "#3A2C1E" }}>YOURSTORY</span>
                <span style={{ fontFamily: "serif", fontStyle: "italic", fontSize: "12px", fontWeight: "bold", color: "#3A2C1E" }}>FEMINA</span>
                <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 800, color: "#3A2C1E" }}>INDIA TODAY</span>
              </div>
            </div>
          </div>

          {/* Coffee cup */}
          <div
            className="absolute bottom-[10px] right-[4%] w-24 h-24 z-40 pointer-events-auto"
            style={{
              filter: "drop-shadow(3px 8px 14px rgba(58,44,30,0.10))",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M 68 38 C 82 38 88 58 68 58"
                stroke="#FAF7F2"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 22 25 L 72 25 L 67 65 C 65 78 29 78 27 65 Z"
                fill="#F5F0E8"
                stroke="#DCCBB3"
                strokeWidth="1"
              />
              <ellipse cx="47" cy="27" rx="22" ry="4" fill="#C4A882" />
              <path
                d="M 40 27 Q 45 29 48 26 T 54 28"
                stroke="#FAF7F2"
                strokeWidth="0.6"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Book stack under coffee */}
          <div
            className="absolute bottom-[-12px] right-[2%] w-32 h-14 rounded-sm z-30"
            style={{
              background: "linear-gradient(135deg, #C4A882, #B89A70)",
              transform: "rotate(-1deg)",
              border: "0.5px solid rgba(58,44,30,0.15)",
              boxShadow:
                "inset 0 1px 2px rgba(255,248,240,0.08), 2px 4px 12px rgba(58,44,30,0.08)",
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-sans uppercase text-[6px] tracking-widest text-[#FAF7F2]/70 font-bold">
              Parenting Guide
            </span>
          </div>

          {/* Book stack under vase */}
          <div
            className="absolute bottom-[-25px] left-[1%] w-36 h-12 rounded-sm z-30"
            style={{
              background: "linear-gradient(135deg, #A8B29A, #8FA088)",
              transform: "rotate(1.5deg)",
              border: "0.5px solid rgba(58,44,30,0.12)",
              boxShadow:
                "inset 0 1px 2px rgba(255,248,240,0.08), -2px 4px 12px rgba(58,44,30,0.08)",
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-sans uppercase text-[6px] tracking-widest text-[#FAF7F2]/70 font-bold">
              Conscious Parenting
            </span>
          </div>
        </div>
      )}
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
