"use client";

import React, { useState, useEffect, useRef } from "react";
import MobileNav from "./components/MobileNav";
import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import AboutSection from "./sections/AboutSection";
import BookSection from "./sections/BookSection";
import HighlightsSection from "./sections/HighlightsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ArticlesSection from "./sections/ArticlesSection";
import NewsletterSection from "./sections/NewsletterSection";
import FooterSection from "./sections/FooterSection";

/** Map section IDs to nav tab IDs */
const SECTION_TO_NAV: Record<string, string> = {
  home:          "home",
  mission:       "home",
  testimonials:  "home",
  about:         "about",
  highlights:    "book",
  book:          "book",
  articles:      "articles",
  newsletter:    "contact",
  contact:       "contact",
};

const SECTION_IDS = [
  "home", "mission", "about", "book", "highlights",
  "testimonials", "articles", "newsletter", "contact",
];

/**
 * MobileExperience — Root shell for the mobile reading-app experience.
 *
 * Architecture:
 *   - Single-column scrollable layout
 *   - Observes section intersections to highlight active nav tab
 *   - Fixed bottom <MobileNav> sits above all content
 *   - All sections are completely independent; no shared layout with desktop
 */
export default function MobileExperience() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionEls = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const visibleSections = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") || "";
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }
        });
        // Pick the section with the largest visible ratio
        let topId = "home";
        let topRatio = 0;
        visibleSections.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        });
        const navId = SECTION_TO_NAV[topId] || "home";
        setActiveSection(navId);
      },
      { threshold: [0.1, 0.3, 0.5, 0.7] }
    );

    sectionEls.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      {/* Scrollable content */}
      <main
        id="mobile-main"
        style={{
          position: "relative",
          width: "100%",
          overflowX: "hidden",
          background: "#FAF8F4",
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

      {/* Fixed bottom navigation */}
      <MobileNav activeSection={activeSection} />
    </>
  );
}
