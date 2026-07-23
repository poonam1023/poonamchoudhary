"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "@/src/shared/hooks/useInView";
import { footerContent } from "@/src/shared/data/content";

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function FooterSection() {
  const [ref, inView] = useInView(0.08);

  return (
    <footer
      id="footer"
      aria-labelledby="footer-heading"
      ref={ref}
      style={{
        padding: "56px 24px calc(80px + env(safe-area-inset-bottom, 0px))",
        background: "#3A2C1E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Brand */}
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ marginBottom: "28px" }}
      >
        <h2
          id="footer-heading"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "28px",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#FAF8F4",
            marginBottom: "4px",
          }}
        >
          {footerContent.name}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.18em",
            color: "rgba(250,248,244,0.45)",
            textTransform: "uppercase",
          }}
        >
          {footerContent.role}
        </p>
      </motion.div>

      {/* Chapter Table of Contents in Footer */}
      <motion.nav
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        aria-label="Footer chapter navigation"
        style={{
          marginBottom: "32px",
          paddingBottom: "24px",
          borderBottom: "1px solid rgba(250,248,244,0.08)",
        }}
      >
        <p className="text-[9px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase mb-3">
          TABLE OF CONTENTS
        </p>
        <ul className="grid grid-cols-2 gap-2 text-xs font-sans">
          {footerContent.chapters.map((ch) => (
            <li key={ch.label}>
              <a
                href={ch.href}
                className="text-white/60 hover:text-[#A8B29A] transition-colors"
              >
                {ch.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Contact details */}
      <motion.div
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(250,248,244,0.65)" }}>
          <LocationIcon />
          <span style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "13px" }}>
            {footerContent.location}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(250,248,244,0.65)" }}>
          <MailIcon />
          <a
            href={`mailto:${footerContent.email}`}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "13px",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {footerContent.email}
          </a>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          paddingTop: "20px",
          borderTop: "1px solid rgba(250,248,244,0.08)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "10px",
            color: "rgba(250,248,244,0.3)",
            margin: 0,
          }}
        >
          {footerContent.copyright}
        </p>
      </motion.div>
    </footer>
  );
}
