"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroContent } from "@/src/shared/data/content";

/**
 * Hero Section — Full-viewport warm opening.
 * Author portrait, headline, two CTAs, subtle floating quote card.
 */
export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      style={{
        position: "relative",
        minHeight: "100svh",
        overflow: "hidden",
        background: "linear-gradient(170deg, #FAF8F4 0%, #F4EFE6 55%, #EDE5D8 100%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Warm background wash ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-15%",
          width: "70%",
          height: "65%",
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(168,178,154,0.22) 0%, rgba(196,168,130,0.10) 45%, transparent 75%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-10%",
          width: "50%",
          height: "40%",
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(201,124,93,0.08) 0%, transparent 65%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top bar: brand identity ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px 0",
        }}
      >
        {/* Logo / Brand name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#3A2C1E",
            }}
          >
            Poonam
          </span>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#3A2C1E",
            }}
          >
            Choudhary
          </span>
        </div>

        {/* Hamburger / menu icon */}
        <button
          aria-label="Open menu"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "rgba(168,178,154,0.18)",
            border: "1px solid rgba(168,178,154,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
            <line x1="0" y1="1" x2="18" y2="1" stroke="#6E5A4E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="7" x2="18" y2="7" stroke="#6E5A4E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="0" y1="13" x2="18" y2="13" stroke="#6E5A4E" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>

      {/* ── Author portrait (full-bleed, bottom-anchored) ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-8%",
          top: "6%",
          width: "72%",
          height: "62%",
          zIndex: 5,
          filter: "drop-shadow(0 20px 40px rgba(58,44,30,0.12))",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 98% at 55% 42%, black 75%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 95% 98% at 55% 42%, black 75%, transparent 100%)",
          }}
        >
          <Image
            src="/author-portrait.png"
            alt="Poonam Choudhary"
            fill
            sizes="(max-width: 1023px) 72vw"
            className="object-cover"
            style={{
              objectPosition: "center 15%",
              filter: "contrast(1.01) brightness(1.02) saturate(0.95) sepia(0.03)",
            }}
            priority
          />
        </div>
      </div>

      {/* ── Publisher badge / seal ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          right: "6%",
          top: "52%",
          zIndex: 15,
          width: "80px",
          height: "80px",
        }}
      >
        <svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="45" cy="45" r="42" stroke="#A8B29A" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
          <circle cx="45" cy="45" r="36" stroke="#A8B29A" strokeWidth="0.5" opacity="0.3" />
          <text x="45" y="36" textAnchor="middle" style={{ fontFamily: "serif", fontSize: "6px", fill: "#6E5A4E", letterSpacing: "2px" }}>CONSCIOUS</text>
          <text x="45" y="46" textAnchor="middle" style={{ fontFamily: "serif", fontSize: "6px", fill: "#6E5A4E", letterSpacing: "2px" }}>PARENTING</text>
          <path d="M45 55 C42 50 40 47 40 44 C40 41 42 39 45 39 C48 39 50 41 50 44 C50 47 48 50 45 55Z" stroke="#A8B29A" strokeWidth="0.8" fill="none" />
          <text x="45" y="72" textAnchor="middle" style={{ fontFamily: "serif", fontSize: "5px", fill: "#6E5A4E", letterSpacing: "2px" }}>AUTHOR</text>
        </svg>
      </motion.div>

      {/* ── Main content block ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 24px",
          marginTop: "auto",
          paddingBottom: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        {/* Sub-label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#A8B29A",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          {heroContent.tagline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(38px, 10vw, 52px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#3A2C1E",
            marginBottom: "4px",
          }}
        >
          Guiding parents.
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "#C4A882",
              fontWeight: 500,
            }}
          >
            Inspiring change.
          </em>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "13px",
            lineHeight: 1.65,
            color: "#6E5A4E",
            maxWidth: "280px",
            marginTop: "14px",
            marginBottom: "28px",
          }}
        >
          {heroContent.subline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.55, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          <a
            href="#book"
            id="hero-explore-book"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              minHeight: "52px",
              padding: "0 28px",
              borderRadius: "14px",
              background: "#A8B29A",
              color: "#FAF8F4",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(168,178,154,0.35)",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            {heroContent.primaryCta}
          </a>

          <a
            href="#about"
            id="hero-watch-story"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              minHeight: "52px",
              padding: "0 28px",
              borderRadius: "14px",
              background: "transparent",
              color: "#4A3728",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(110,90,78,0.18)",
            }}
          >
            <span
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                border: "1px solid rgba(110,90,78,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "1px" }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </span>
            {heroContent.secondaryCta}
          </a>
        </motion.div>
      </div>

      {/* ── Floating quote card ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "34%",
          left: "16px",
          width: "52%",
          zIndex: 18,
          background: "rgba(250,248,244,0.88)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          border: "1px solid rgba(110,90,78,0.08)",
          boxShadow: "0 4px 20px rgba(58,44,30,0.08)",
          padding: "14px 16px",
          transform: "rotate(-1.5deg)",
        }}
      >
        {/* Tape */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-8px",
            left: "50%",
            transform: "translateX(-50%) rotate(2deg)",
            width: "52px",
            height: "14px",
            background: "rgba(196,168,130,0.45)",
            borderRadius: "2px",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "26px",
            lineHeight: 0.6,
            color: "#C4A882",
            display: "block",
            marginBottom: "6px",
          }}
        >
          &ldquo;
        </span>
        <p
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: "13px",
            lineHeight: 1.6,
            color: "#4A3728",
            margin: 0,
          }}
        >
          There is no perfect parent,
          <br />
          only a present one.
        </p>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            color: "#6E5A4E",
            marginTop: "8px",
            letterSpacing: "0.05em",
          }}
        >
          — Poonam Choudhary
        </p>
      </motion.div>
    </section>
  );
}
