"use client";

import React, { useState, useEffect, useRef } from "react";
import MobileHeader from "@/components/mobile/MobileHeader";
import MobileMenu from "@/components/mobile/MobileMenu";
import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import AboutSection from "./sections/AboutSection";
import BookSection from "./sections/BookSection";
import HighlightsSection from "./sections/HighlightsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ArticlesSection from "./sections/ArticlesSection";
import NewsletterSection from "./sections/NewsletterSection";
import FooterSection from "./sections/FooterSection";

const CHAPTER_IDS = [
  "home",         // Chapter 01
  "mission",      // Chapter 02
  "about",        // Chapter 03
  "book",         // Chapter 04
  "highlights",   // Chapter 05
  "testimonials", // Chapter 06
  "articles",     // Chapter 07
  "contact",      // Chapter 08
];

/**
 * MobileExperience — Root shell for the luxury mobile editorial book experience.
 *
 * Architecture:
 *   - 8 Chapter continuous reading experience
 *   - IntersectionObserver tracks active chapter and updates global chapter progress
 *   - Fixed top header with logo, chapter progress counter, and book navigation morph toggle
 *   - Book table of contents drawer overlay
 */
export default function MobileExperience() {
  const [activeChapter, setActiveChapter] = useState("01");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track active chapter via IntersectionObserver
  useEffect(() => {
    const chapterEls = CHAPTER_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visibleChapters = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") || "";
          if (entry.isIntersecting) {
            visibleChapters.set(id, entry.intersectionRatio);
          } else {
            visibleChapters.delete(id);
          }
        });

        // Determine which chapter has the highest visibility ratio
        let topId = "home";
        let topRatio = 0;
        visibleChapters.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });

        const idx = CHAPTER_IDS.indexOf(topId);
        if (idx !== -1) {
          setActiveChapter(String(idx + 1).padStart(2, "0"));
        }
      },
      { threshold: [0.1, 0.3, 0.5, 0.7] }
    );

    chapterEls.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Fixed global mobile header with chapter progress */}
      <MobileHeader
        isOpen={isMenuOpen}
        toggle={() => setIsMenuOpen(!isMenuOpen)}
        activeChapter={activeChapter}
      />

      {/* Scrollable content — 8 Chapters */}
      <main
        id="mobile-main"
        style={{
          position: "relative",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <HeroSection />
        <MissionSection />
        <AboutSection />
        <BookSection />
        <HighlightsSection />
        <TestimonialsSection />
        <ArticlesSection />
        <NewsletterSection />
        <FooterSection />
      </main>

      {/* Premium Full-screen Book Navigation Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
