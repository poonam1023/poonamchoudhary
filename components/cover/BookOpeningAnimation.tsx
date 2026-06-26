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
    <div className="relative w-screen h-screen flex items-center justify-center bg-[#1A1412] overflow-hidden">
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

      {/* Book Spread Container */}
      <motion.div
        className="relative flex items-center justify-center perspective-1500"
        style={{
          width: isMobile ? "90vw" : "920px",
          height: isMobile ? "80vh" : "620px",
        }}
        animate={{
          // Center-offset shifting & subtle V4 rotation for asymmetric imperfection when closed
          x: isMobile ? 0 : isOpened ? 0 : -230,
          rotate: isOpened ? 0 : -0.7, 
          scale: bookState === "pressing" ? 0.985 : 1,
        }}
        transition={{
          duration: bookState === "pressing" ? 0.3 : 0.9,
          ease: [0.25, 1, 0.5, 1],
        }}
      >
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
    </div>
  );
}
