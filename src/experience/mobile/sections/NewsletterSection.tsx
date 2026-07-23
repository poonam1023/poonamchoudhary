"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ChapterHeader from "../components/ChapterHeader";
import { contactContent } from "@/src/shared/data/content";

/**
 * NewsletterSection — Chapter 08: Contact (Stationery Letter Concept)
 *
 * Architecture:
 *  - Chapter Header (CHAPTER 08 — CONTACT)
 *  - Slight Sage Tint Background (#F0F3ED)
 *  - Friendly letter writing concept ("Dear Poonam...")
 *  - Premium stationery paper form with soft border and letterpress input lines
 *  - Smooth filling submit button ("SEND MESSAGE")
 */
export default function NewsletterSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden px-5 py-16 select-none"
      style={{
        background: "#F0F3ED", // Slight sage tint background for Chapter 08
      }}
    >
      {/* Background glow accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,178,154,0.22) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full mb-4">
        <ChapterHeader
          chapterNum={contactContent.chapterNum}
          title={contactContent.chapterLabel}
        />
      </div>

      <div className="relative z-10 max-w-sm mx-auto w-full flex flex-col items-center">
        {/* Section Intro */}
        <div className="text-center mb-6">
          <h3
            id="contact-heading"
            className="text-2xl xs:text-3xl font-serif text-[#3A2C1E] mb-2"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {contactContent.headline}
          </h3>
          <p className="text-xs font-sans text-[#6E5A4E] leading-relaxed max-w-xs mx-auto">
            {contactContent.subline}
          </p>
        </div>

        {/* ── Luxury Stationery Letter Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full p-6 rounded-3xl bg-[#FAF8F4] border border-[#A8B29A]/30 shadow-xl"
        >
          {/* Top Stationery Stamp Seal */}
          <div className="absolute top-4 right-5 w-10 h-10 rounded-full border border-[#A8B29A]/40 flex items-center justify-center pointer-events-none opacity-40">
            <span className="text-[7px] font-serif tracking-widest text-[#6E5A4E] uppercase">
              LETTER
            </span>
          </div>

          <p
            className="text-sm font-serif italic text-[#C97C5D] mb-4"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {contactContent.formIntro}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#A8B29A] text-[#FAF8F4] mx-auto flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4
                className="text-xl font-serif text-[#3A2C1E]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Letter Received
              </h4>
              <p className="text-xs font-sans text-[#6E5A4E] leading-relaxed max-w-xs mx-auto">
                Thank you for reaching out. Poonam will read your note and respond as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Name */}
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase mb-1">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder={contactContent.placeholderName}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6]/60 border border-[#6E5A4E]/12 text-xs font-sans text-[#3A2C1E] placeholder-[#6E5A4E]/40 focus:outline-none focus:border-[#A8B29A] transition-colors"
                />
              </div>

              {/* Field 2: Email */}
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase mb-1">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder={contactContent.placeholderEmail}
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6]/60 border border-[#6E5A4E]/12 text-xs font-sans text-[#3A2C1E] placeholder-[#6E5A4E]/40 focus:outline-none focus:border-[#A8B29A] transition-colors"
                />
              </div>

              {/* Field 3: Message / Note */}
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-[#A8B29A] font-semibold uppercase mb-1">
                  YOUR NOTE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={contactContent.placeholderMessage}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F4EFE6]/60 border border-[#6E5A4E]/12 text-xs font-sans text-[#3A2C1E] placeholder-[#6E5A4E]/40 focus:outline-none focus:border-[#A8B29A] transition-colors resize-none"
                />
              </div>

              {/* Submit Button with Smooth Filling Interaction */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full min-h-[52px] mt-2 rounded-2xl bg-[#A8B29A] text-[#FAF8F4] font-sans text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-300 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>SENDING LETTER...</span>
                ) : (
                  <>
                    <span>{contactContent.submitCta}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Section Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] uppercase tracking-widest text-[#6E5A4E]/40 font-sans pt-10 border-t border-[#6E5A4E]/10 mt-8">
        <span>LET&apos;S CONNECT</span>
        <span>CHAPTER 08</span>
      </div>
    </section>
  );
}
