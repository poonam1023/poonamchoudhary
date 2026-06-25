"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(Flip, ScrollTrigger);

const BOOKS = [
  {
    id: "raising-with-heart",
    title: "Raising with Heart",
    subtitle: "Conscious Parenting for a Changing World",
    year: "2020",
    tag: "Award Nominated",
    description:
      "A deeply personal and practical exploration of how parents can raise emotionally intelligent, resilient, and compassionate children — one honest conversation at a time.",
    color: "#5a4028",
    light: "#e8d5b0",
    image: "/book-cover.png",
    featured: true,
  },
  {
    id: "the-present-parent",
    title: "The Present Parent",
    subtitle: "Being Here When It Matters Most",
    year: "2022",
    tag: "Presence",
    description:
      "An intimate guide to mindful parenting — teaching parents how to step away from distraction and fully inhabit the moments their children need them.",
    color: "#3a3228",
    light: "#ddd0bc",
    image: "/book-cover.png",
    featured: false,
  },
  {
    id: "letters-to-tomorrow",
    title: "Letters to Tomorrow",
    subtitle: "Words for the Children We Are Raising",
    year: "2024",
    tag: "Reflection",
    description:
      "A collection of open letters from parent to child — written with honesty, hope, and a deep understanding of how imperfect love can still be transformative.",
    color: "#2b3d2e",
    light: "#d4e0d0",
    image: "/book-cover.png",
    featured: false,
  },
];

export default function KineticBookshelf() {
  const shelfRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  useGSAP(
    () => {
      // Reveal cards on scroll
      gsap.fromTo(
        ".shelf-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: shelfRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: shelfRef }
  );

  const handleActivate = useCallback(
    (id: string) => {
      if (!cardsRef.current) return;

      // Capture layout state BEFORE state change
      const state = Flip.getState(cardsRef.current.querySelectorAll(".shelf-card"));

      setActiveId((prev) => (prev === id ? null : id));

      // Animate FROM old positions TO new positions
      Flip.from(state, {
        duration: 0.55,
        ease: "power2.inOut",
        absolute: false,
        nested: true,
      });
    },
    []
  );

  const activeBook = BOOKS.find((b) => b.id === activeId);

  return (
    <section
      id="books"
      ref={shelfRef}
      style={{
        minHeight: "100vh",
        background: "#f7eddd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "clamp(4rem, 8vh, 6rem) clamp(2rem, 6vw, 6rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "clamp(2.5rem, 5vh, 4rem)" }}>
        <p
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(0.58rem, 0.7vw, 0.7rem)",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#879570",
            marginBottom: "0.75rem",
          }}
        >
          Chapter Three · The Bookshelf
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.2rem, 4vw, 4rem)",
            fontWeight: 400,
            lineHeight: 0.95,
            color: "#2b251d",
            margin: 0,
          }}
        >
          Works that have<br />
          <em style={{ color: "#8b6038" }}>changed families.</em>
        </h2>
      </div>

      {/* Cards row + detail panel */}
      <div
        style={{
          display: "flex",
          gap: "clamp(1rem, 2.5vw, 2rem)",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Cards */}
        <div
          ref={cardsRef}
          style={{
            display: "flex",
            gap: "clamp(0.75rem, 1.5vw, 1.5rem)",
            flexShrink: 0,
            flex: "0 0 auto",
          }}
        >
          {BOOKS.map((book) => {
            const isActive = activeId === book.id;
            return (
              <button
                key={book.id}
                className="shelf-card"
                type="button"
                data-cursor="OPEN"
                onClick={() => handleActivate(book.id)}
                style={{
                  position: "relative",
                  width: isActive ? "clamp(160px, 18vw, 210px)" : "clamp(120px, 12vw, 160px)",
                  height: isActive ? "clamp(230px, 28vw, 310px)" : "clamp(175px, 20vw, 235px)",
                  borderRadius: "4px 14px 14px 4px",
                  overflow: "hidden",
                  cursor: "none",
                  border: "none",
                  padding: 0,
                  boxShadow: isActive
                    ? "0 24px 60px rgba(42,30,18,0.35), 0 8px 20px rgba(42,30,18,0.2)"
                    : "0 12px 32px rgba(42,30,18,0.22), 0 4px 10px rgba(42,30,18,0.12)",
                  transform: isActive ? "translateY(-12px)" : "translateY(0)",
                  transition: "box-shadow 400ms ease, transform 400ms ease, width 500ms cubic-bezier(0.22,1,0.36,1), height 500ms cubic-bezier(0.22,1,0.36,1)",
                  flexShrink: 0,
                }}
              >
                {/* Spine */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, bottom: 0, left: 0,
                    width: 12,
                    background: book.color,
                    zIndex: 2,
                  }}
                />
                {/* Cover image */}
                <div style={{ position: "absolute", inset: 0, left: 12 }}>
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="210px"
                    style={{
                      objectFit: "cover",
                      filter: isActive ? "saturate(1.05)" : "saturate(0.9) brightness(0.95)",
                      transition: "filter 400ms ease",
                    }}
                  />
                </div>
                {/* Hover gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(to top, ${book.color}ee 0%, transparent 55%)`,
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 400ms ease",
                    zIndex: 3,
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1rem",
                  }}
                >
                  {isActive && (
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "clamp(0.85rem, 1.2vw, 1.1rem)",
                        color: book.light,
                        lineHeight: 1.2,
                        margin: 0,
                        textAlign: "left",
                      }}
                    >
                      {book.title}
                    </p>
                  )}
                </div>

                {/* Tag badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.6rem",
                    right: "0.5rem",
                    zIndex: 4,
                    background: "rgba(255,250,237,0.9)",
                    borderRadius: "2px",
                    padding: "0.2rem 0.4rem",
                    fontSize: "0.5rem",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6c5c48",
                  }}
                >
                  {book.tag}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail panel — appears when a book is active */}
        <div
          style={{
            flex: 1,
            minWidth: "min(280px, 100%)",
            opacity: activeId ? 1 : 0,
            transform: activeId ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 400ms ease, transform 400ms ease",
            pointerEvents: activeId ? "auto" : "none",
          }}
        >
          {activeBook && (
            <div style={{ padding: "0.5rem 0 0 clamp(0.5rem, 2vw, 2rem)" }}>
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#879570",
                  margin: "0 0 0.75rem",
                }}
              >
                {activeBook.tag} · {activeBook.year}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  color: "#2b251d",
                  margin: "0 0 0.3rem",
                }}
              >
                {activeBook.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
                  fontStyle: "italic",
                  color: "#9e8a7e",
                  margin: "0 0 1.25rem",
                }}
              >
                {activeBook.subtitle}
              </p>
              <div
                style={{
                  width: "3.5rem",
                  height: 1,
                  background: "linear-gradient(90deg, #879570, transparent)",
                  marginBottom: "1.25rem",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)",
                  lineHeight: 1.8,
                  color: "#4f4236",
                  maxWidth: "38ch",
                  margin: "0 0 1.75rem",
                }}
              >
                {activeBook.description}
              </p>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <button
                  type="button"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.7rem 1.4rem",
                    background: "#879570",
                    color: "#fffaf0",
                    border: "1px solid rgba(73,88,59,0.2)",
                    borderRadius: "4px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "none",
                  }}
                >
                  Order Now <ArrowRight size={13} />
                </button>
                <button
                  type="button"
                  style={{
                    background: "transparent",
                    border: "none",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6c5c48",
                    cursor: "none",
                  }}
                >
                  Read a Sample
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
