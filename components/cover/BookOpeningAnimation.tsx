"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PaperBackground from "./PaperBackground";
import AmbientLight from "./AmbientLight";
import DustParticles from "./DustParticles";
import VintageIllustration from "./VintageIllustration";
import BookTitle from "./BookTitle";
import BookSubtitle from "./BookSubtitle";
import AuthorName from "./AuthorName";
import OpenBookButton from "./OpenBookButton";
import PageCurl from "./PageCurl";
import ChapterOne from "./ChapterOne";
import CoverSection from "./CoverSection";
import LeftPage from "@/components/book/LeftPage";
import ChapterOneLeft from "@/components/chapters/chapter-one/ChapterOneLeft";
import Book3D from "@/components/book/Book3D";

export default function BookOpeningAnimation() {
  const [isHovered, setIsHovered] = useState(false);
  const [bookState, setBookState] = useState<"closed" | "pressing" | "flipping" | "open">("closed");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenBook = async () => {
    if (bookState !== "closed") return;
    
    // 1. Press effect: paper compresses
    setBookState("pressing");
    await new Promise((resolve) => setTimeout(resolve, 350));
    
    // 2. Start flipping the page
    setBookState("flipping");
    await new Promise((resolve) => setTimeout(resolve, 850));
    
    // 3. Page is fully open, show Chapter One
    setBookState("open");
  };

  const handleCloseBook = () => {
    setBookState("closed");
  };

  // 3D book open states
  const isOpened = bookState === "open" || bookState === "flipping";
  const isFlipped = bookState === "open" || bookState === "flipping";

  return (
    <div suppressHydrationWarning className="relative w-screen h-screen flex items-center justify-center overflow-hidden" style={{ background: "radial-gradient(ellipse 120% 100% at 50% 0%, #F5EFE4 0%, #E8DDD0 40%, #DDD0C0 80%, #D4C5B0 100%)" }}>
      {/* Warm ambient paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(160,140,115,0.022) 0px, rgba(160,140,115,0.022) 1px, transparent 1px, transparent 6px),
            repeating-linear-gradient(-45deg, rgba(160,140,115,0.018) 0px, rgba(160,140,115,0.018) 1px, transparent 1px, transparent 6px)
          `,
        }}
      />
      {/* Top ambient light cast (warm directional light from top-left) */}
      <div
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 20% 5%, rgba(255,242,215,0.30) 0%, transparent 65%)",
        }}
      />
      {/* Pressed Leaf SVG lying on the dark desk to the left of the book */}
      <svg 
        className="hidden md:block absolute left-[14%] bottom-[12%] w-28 h-28 text-accent-sage/12 select-none pointer-events-none rotate-[-45deg] filter desaturate-[50%] blur-[0.3px] z-0" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved stem */}
        <path d="M 15 90 Q 30 75 50 65 Q 70 55 85 45" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
        
        {/* Delicate pressed leaf veins */}
        <path d="M 50 65 Q 40 45 20 42 C 40 44 45 52 50 65 Z" fill="currentColor" opacity="0.4" />
        <path d="M 50 65 Q 60 45 80 42 C 60 44 55 52 50 65 Z" fill="currentColor" opacity="0.4" />
        
        <path d="M 62 57 Q 56 42 35 38 C 55 40 58 48 62 57 Z" fill="currentColor" opacity="0.4" />
        <path d="M 62 57 Q 68 42 85 38 C 68 40 64 48 62 57 Z" fill="currentColor" opacity="0.4" />
        
        <path d="M 74 49 Q 68 34 50 32 C 68 34 70 42 74 49 Z" fill="currentColor" opacity="0.4" />
        <path d="M 74 49 Q 80 34 92 32 C 80 34 76 42 74 49 Z" fill="currentColor" opacity="0.4" />
      </svg>

      {/* Cinematic Page Load: Screen starts almost black, fades out */}
      <motion.div
        className="absolute inset-0 bg-[#0c0807] z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Ambient lighting fades in (top-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, ease: "easeOut", delay: 1.0 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <AmbientLight />
      </motion.div>

      {/* Dust particles & curved paper fibers fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.0, ease: "easeOut", delay: 1.4 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <DustParticles />
      </motion.div>

      {/* Book Spread Container — wrapped by Book3D for physical depth */}
      <motion.div
        className="relative flex items-center justify-center perspective-1500"
        style={{
          width: isMobile ? "90vw" : "min(96vw, 1800px)",
          height: isMobile ? "80vh" : "90vh",
        }}
        animate={{
          // Center-offset shifting & subtle rotation for asymmetric imperfection when closed
          // "-25%" is exactly -W/4, which centers the cover page (the right 50% of the book)
          x: isMobile ? 0 : isOpened ? 0 : "-25%",
          rotate: isOpened ? 0 : -0.7, 
          scale: bookState === "pressing" ? 0.985 : 1,
        }}
        transition={{
          duration: bookState === "pressing" ? 0.3 : 0.9,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
        {/* ── Book3D Physical wrapper (only visible when open) ── */}
        {isOpened && (
          <div className="absolute inset-0 pointer-events-none z-0">
            <Book3D>{/* passthrough — decorative layer only */}<></></Book3D>
          </div>
        )}
        {/* ========================================================
            PHYSICAL LAYER 1: Back Cover Board (visible only when closed)
           ======================================================== */}
        {!isOpened && (
          <div 
            className="absolute right-0 top-0 h-full bg-[#E8DCCB] border border-[#6E5A4E]/10 rounded-md pointer-events-none transition-opacity duration-300"
            style={{
              width: isMobile ? "100%" : "50%",
              transform: "translate3d(4px, 4px, -10px) rotate(-0.7deg)",
              boxShadow: "0 35px 80px rgba(26, 20, 18, 0.45)",
            }}
          />
        )}

        {/* ========================================================
            PHYSICAL LAYER 2: Page Stack Edge (visible only when closed)
           ======================================================== */}
        {!isOpened && (
          <div 
            className="absolute right-0 top-0 h-full bg-[#F7F1E8] border-y border-r border-[#6E5A4E]/10 rounded-r-sm pointer-events-none overflow-hidden transition-opacity duration-300"
            style={{
              width: isMobile ? "100%" : "50%",
              transform: "translate3d(2px, 2px, -5px) rotate(-0.7deg)",
              backgroundImage: "repeating-linear-gradient(to bottom, #F7F1E8, #F7F1E8 2px, #E8DCCB 2px, #E8DCCB 3px)",
            }}
          />
        )}

        {/* ========================================================
            RIGHT PAGE / UNDERLAY: Chapter One
           ======================================================== */}
        <div 
          className={`absolute right-0 top-0 h-full bg-[#F7F1E8] transition-opacity duration-500 rounded-r-md ${
            isMobile 
              ? "left-0 w-full" 
              : "w-1/2"
          } ${isOpened ? "opacity-100 z-20" : "opacity-0 z-0"}`}
          style={{
            boxShadow: "0 25px 60px rgba(26, 20, 18, 0.45), 0 5px 20px rgba(26, 20, 18, 0.15)",
          }}
        >
          {/* Subtle inside cover spine crease */}
          {!isMobile && <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-r from-black/10 to-transparent z-30" />}
          <div className="book-board-edge" />
          
          {bookState === "open" && (
            <ChapterOne onClose={handleCloseBook} />
          )}
        </div>

        {/* ========================================================
            FLIP CARD: Cover Page (Front) & Inside Left Page (Back)
           ======================================================== */}
        <motion.div
          className="absolute right-0 top-0 h-full preserve-3d origin-left"
          style={{
            width: isMobile ? "100%" : "50%",
          }}
          animate={{
            rotateY: isFlipped ? -180 : 0,
            opacity: isMobile && bookState === "open" ? 0 : 1,
            zIndex: bookState === "open" ? 10 : 30,
          }}
          transition={{
            duration: 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
        >
          {/* A. FRONT FACE: The Book Cover */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden rounded-md flex flex-col justify-between overflow-hidden border border-[#6E5A4E]/10"
            style={{
              transform: "rotateY(0deg)",
              pointerEvents: isOpened ? "none" : "auto",
              boxShadow: "0 30px 70px rgba(26, 20, 18, 0.5), 0 10px 25px rgba(26, 20, 18, 0.2)",
            }}
          >
            <PaperBackground />

            {/* Book Spine Crease Shading */}
            <div className="book-spine-crease" />

            {/* Bevel highlight to simulate hardcover thickness */}
            <div className="book-board-edge" />

            {/* 1. Spine Printed Graphics (visible when closed) */}
            {!isMobile && (
              <div 
                className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col items-center justify-between py-12 z-20 pointer-events-none select-none"
                style={{
                  background: "linear-gradient(to right, rgba(110, 90, 78, 0.04), rgba(110, 90, 78, 0.01) 85%, rgba(110, 90, 78, 0.12) 100%)",
                }}
              >
                <div 
                  className="font-display font-bold text-[8px] tracking-[0.24em] text-ink/55 uppercase"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  PROJECT POONAM
                </div>
                <span className="text-[10px] text-ink/35 my-auto">❦</span>
                <div className="font-sans text-[7px] tracking-widest text-ink/45 uppercase">
                  2026
                </div>
              </div>
            )}

            {/* 2. Vintage Illustration Watermark (positioned absolutely behind text) */}
            <VintageIllustration />

            {/* 3. Layout Wrapper (horizontally shifted on desktop to center relative to cover wrap) */}
            <CoverSection>
              <div className="w-full flex flex-col items-center justify-center text-center pl-0 md:pl-[44px]">
                
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.2 }}
                >
                  <BookTitle />
                </motion.div>

                {/* Subtitle with Star Ornament Divider */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 2.6 }}
                  className="mt-6"
                >
                  <BookSubtitle />
                </motion.div>

                {/* Author Name Section with Ivy leaf Ornaments */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.0 }}
                  className="mt-8"
                >
                  <AuthorName />
                </motion.div>

                {/* Button Invitation */}
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1], delay: 3.4 }}
                  className="mt-12"
                >
                  <OpenBookButton
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onClick={handleOpenBook}
                  />
                </motion.div>
              </div>
            </CoverSection>

            {/* Page curl at bottom right */}
            <PageCurl isHovered={isHovered} isOpening={bookState === "pressing" || bookState === "flipping"} />
          </div>

          {/* B. BACK FACE: Inside Left Cover / Colophon (Hidden on mobile) */}
          {!isMobile && (
            <div 
              className="absolute inset-0 w-full h-full backface-hidden rounded-md border border-[#6E5A4E]/10"
              style={{
                transform: "rotateY(180deg)",
                boxShadow: "0 30px 70px rgba(26, 20, 18, 0.5), 0 10px 25px rgba(26, 20, 18, 0.2)",
              }}
            >
              <LeftPage>
                <ChapterOneLeft />
              </LeftPage>

              {/* Inside Left Cover Spine Crease (mirrored) */}
              <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-black/10 to-transparent z-30" />
              <div className="book-board-edge" />
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* ── DESK FOOTER STORYTELLING SECTION (visible when book is open on desktop) ── */}
      {isOpened && !isMobile && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[18vh] z-30 pointer-events-none select-none overflow-visible flex items-end justify-center"
          style={{
            background: "linear-gradient(to top, rgba(196,176,148,0.55) 0%, rgba(220,205,180,0) 100%)",
          }}
        >
          {/* Vase with leaves on the left, sitting on the desk */}
          <div
            className="absolute bottom-[-10px] left-[4%] w-32 h-56 z-40 pointer-events-auto"
            style={{
              filter: "drop-shadow(4px 12px 20px rgba(90,65,40,0.30))",
            }}
          >
            {/* Simple elegant SVG Vase */}
            <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Vase body */}
              <path
                d="M 50 190 Q 25 185 22 140 Q 20 100 35 85 Q 40 80 40 70 L 40 50 L 60 50 L 60 70 Q 60 80 65 85 Q 80 100 78 140 Q 75 185 50 190 Z"
                fill="#EADFC9"
                stroke="#6E5A4E"
                strokeWidth="0.5"
              />
              {/* Vase highlight */}
              <path
                d="M 32 120 Q 30 145 42 170"
                stroke="#FFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.35"
              />
              {/* Plant branches growing out of the vase */}
              <g stroke="#6E7A66" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none">
                {/* Branch 1 */}
                <path d="M 50 50 Q 42 20 28 -20" />
                <path d="M 45 35 Q 22 28 15 32" fill="#798A72" />
                <path d="M 40 18 Q 20 5 12 12" fill="#798A72" />
                <path d="M 35 0 Q 15 -15 8 -5" fill="#798A72" />

                {/* Branch 2 */}
                <path d="M 50 50 Q 58 10 74 -30" />
                <path d="M 54 38 Q 78 35 85 40" fill="#798A72" />
                <path d="M 58 22 Q 82 15 88 22" fill="#798A72" />
                <path d="M 64 2 Q 88 -8 92 0" fill="#798A72" />
              </g>
            </svg>
          </div>

          {/* Torn Paper "AS FEATURED IN" strip in the center */}
          <div
            className="absolute bottom-[2%] mx-auto z-45 pointer-events-auto"
            style={{
              width: "480px",
              transform: "rotate(-0.8deg)",
              filter: "drop-shadow(2px 6px 12px rgba(0,0,0,0.28))",
            }}
          >
            {/* Torn Paper effect */}
            <div
              className="relative"
              style={{
                background: "#FAF6ED",
                border: "0.5px solid rgba(110,90,78,0.2)",
                padding: "8px 16px 10px",
                clipPath: "polygon(0% 10%, 15% 0%, 35% 8%, 55% 2%, 75% 9%, 100% 0%, 98% 90%, 80% 100%, 50% 92%, 20% 98%, 0% 90%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              {/* Paper Texture overlay */}
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
                  color: "#8E7A6C",
                  textTransform: "uppercase",
                }}
              >
                As Featured In
              </span>
              {/* Logos list */}
              <div className="flex items-center justify-between w-full px-4 mt-1 opacity-75">
                <span style={{ fontFamily: "Georgia, serif", fontSize: "11px", fontWeight: "bold", color: "#3A2E26" }}>THE HINDU</span>
                <span style={{ fontFamily: "Arial, sans-serif", fontSize: "11.5px", fontWeight: "black", letterSpacing: "-0.04em", color: "#3A2E26" }}>Forbes</span>
                <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 700, color: "#3A2E26" }}>YOURSTORY</span>
                <span style={{ fontFamily: "serif", fontStyle: "italic", fontSize: "12px", fontWeight: "bold", color: "#3A2E26" }}>FEMINA</span>
                <span style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: "9px", fontWeight: 800, color: "#3A2E26" }}>INDIA TODAY</span>
              </div>
            </div>
          </div>

          {/* Coffee cup on the right */}
          <div
            className="absolute bottom-[-5px] right-[4%] w-24 h-24 z-40 pointer-events-auto"
            style={{
              filter: "drop-shadow(3px 8px 14px rgba(90,65,40,0.28))",
            }}
          >
            {/* Ceramic Coffee Cup SVG */}
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Cup handle */}
              <path
                d="M 68 38 C 82 38 88 58 68 58"
                stroke="#FAF7F2"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Cup body */}
              <path
                d="M 22 25 L 72 25 L 67 65 C 65 78 29 78 27 65 Z"
                fill="#EAE3D2"
                stroke="#C6BBA3"
                strokeWidth="1.5"
              />
              {/* Coffee inside */}
              <ellipse cx="47" cy="27" rx="22" ry="4" fill="#5C4230" />
              {/* Latte art or cream swirl */}
              <path d="M 40 27 Q 45 29 48 26 T 54 28" stroke="#FAF7F2" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
            </svg>
          </div>

          {/* Stacks of books under the coffee cup */}
          <div
            className="absolute bottom-[-30px] right-[2%] w-32 h-14 rounded-sm z-30"
            style={{
              background: "linear-gradient(135deg, #7A5C42, #5A3E2B)",
              transform: "rotate(-1deg)",
              border: "0.5px solid rgba(90,65,40,0.3)",
              boxShadow: "inset 0 1px 2px rgba(255,240,210,0.12), 2px 4px 12px rgba(90,65,40,0.22)",
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-sans uppercase text-[6px] tracking-widest text-[#FAF7F2]/50 font-bold">
              Parenting Guide
            </span>
          </div>

          {/* Book Stack on the left side under the vase */}
          <div
            className="absolute bottom-[-25px] left-[1%] w-36 h-12 rounded-sm z-30"
            style={{
              background: "linear-gradient(135deg, #4A5A40, #384530)",
              transform: "rotate(1.5deg)",
              border: "0.5px solid rgba(60,80,50,0.3)",
              boxShadow: "inset 0 1px 2px rgba(200,220,180,0.10), -2px 4px 12px rgba(60,80,50,0.20)",
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center font-sans uppercase text-[6px] tracking-widest text-[#FAF7F2]/45 font-bold">
              Conscious Parenting
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
