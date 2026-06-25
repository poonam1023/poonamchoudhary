"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, #E8DCCB 0%, #F7F1E8 55%, #F0E8D6 100%)",
      }}
      aria-label="Hero section"
    >
      {/* Paper texture warm gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(201,169,110,0.05) 0%, transparent 50%, rgba(168,178,154,0.08) 100%)",
        }}
      />

      {/* Botanical corners */}
      <BotanicalCorner position="tl" opacity={0.1} size={220} />
      <BotanicalCorner position="br" opacity={0.08} size={200} />

      {/* Faint ruled lines (like a book page) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 35px, #6E5A4E 35px, #6E5A4E 36px)",
          backgroundSize: "100% 36px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left Column ─────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow / label */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
            >
              <span className="section-label">Parenting Author & Speaker</span>
              <div className="h-px w-12 bg-[#A8B29A] mt-1" />
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
            >
              <h1 className="font-display text-[3.4rem] sm:text-[4rem] lg:text-[5rem] xl:text-[5.5rem] font-light leading-[1.08] text-balance text-[#2B2B2B]">
                Raising Children{" "}
                <em className="italic font-light text-[#6E5A4E]">
                  with
                </em>
                <br />
                <span className="font-semibold">Heart &</span>{" "}
                <span className="font-light italic">Intention</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.35}
              variants={fadeUp}
              className="font-body text-[1.05rem] text-[#6E5A4E] leading-[1.8] max-w-[480px]"
            >
              Poonam Choudhary is a celebrated parenting author, speaker, and
              guide helping families across India and the world build deeper
              connections through warmth, wisdom, and presence.
            </motion.p>

            {/* In-margin quote */}
            <motion.blockquote
              initial="hidden"
              animate="visible"
              custom={0.45}
              variants={fadeUp}
              className="quote-margin max-w-[420px]"
            >
              <p className="font-display text-[1.15rem] font-light italic text-[#2B2B2B] leading-[1.7]">
                "Children do not need perfect parents. They need present ones."
              </p>
              <footer className="mt-3 font-script text-[1.05rem] text-[#A8B29A]">
                — Poonam Choudhary
              </footer>
            </motion.blockquote>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.55}
              variants={fadeUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <button
                id="hero-cta-primary"
                className="btn-primary"
                onClick={() => handleScroll("books")}
                aria-label="Explore Poonam's books"
              >
                Explore Books
                <ArrowRight size={15} />
              </button>
              <button
                id="hero-cta-secondary"
                className="btn-secondary"
                onClick={() => handleScroll("speaking")}
                aria-label="Book Poonam for speaking"
              >
                <BookOpen size={14} />
                Book a Session
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.65}
              variants={fadeUp}
              className="flex items-center gap-6 pt-2"
            >
              {[
                { number: "3", label: "Books Published" },
                { number: "50K+", label: "Families Reached" },
                { number: "200+", label: "Speaking Events" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-[1.6rem] font-semibold text-[#2B2B2B]">
                    {stat.number}
                  </span>
                  <span className="font-body text-[0.72rem] text-[#9E8A7E] tracking-wide uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right Column ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative background circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: "min(480px, 90vw)",
                height: "min(480px, 90vw)",
                background:
                  "radial-gradient(ellipse, rgba(168,178,154,0.18) 0%, rgba(201,169,110,0.08) 50%, transparent 75%)",
              }}
            />

            {/* Portrait Frame */}
            <div className="relative img-zoom">
              {/* Outer warm ring */}
              <div
                className="relative rounded-[28px] overflow-hidden"
                style={{
                  width: "min(420px, 85vw)",
                  aspectRatio: "3 / 4",
                  boxShadow:
                    "0 4px 40px rgba(110, 90, 78, 0.18), 0 1px 6px rgba(43,43,43,0.1), inset 0 0 0 1px rgba(196,204,184,0.4)",
                }}
              >
                <Image
                  src="/author-portrait.png"
                  alt="Poonam Choudhary — Parenting Author and Speaker"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 85vw, 420px"
                />
                {/* Warm overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 60%, rgba(43, 43, 43, 0.15) 100%)",
                  }}
                />
              </div>

              {/* Floating credential card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-8 bottom-16 bg-[#F7F1E8] rounded-xl px-5 py-4 paper-shadow"
                style={{ maxWidth: "180px" }}
                aria-label="Author credential"
              >
                <p className="font-body text-[0.7rem] text-[#9E8A7E] uppercase tracking-widest mb-1">
                  Bestselling Author
                </p>
                <p className="font-display text-[1.05rem] font-medium text-[#2B2B2B] leading-tight">
                  3 Books on Conscious Parenting
                </p>
                <div className="flex gap-0.5 mt-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                    >
                      <polygon
                        points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.2 3,11 3.5,7.5 1,5 4.5,4.5"
                        fill="#C9A96E"
                      />
                    </svg>
                  ))}
                </div>
              </motion.div>

              {/* Floating quote pill */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-6 top-12 bg-[#A8B29A] rounded-full px-4 py-2 shadow-md"
                aria-hidden="true"
              >
                <span className="font-body text-[0.7rem] font-semibold text-white tracking-wide">
                  ✦ Heart-Centred Parenting
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle page-turn bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(247, 241, 232, 0.8))",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-[0.65rem] text-[#9E8A7E] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#A8B29A] to-transparent"
        />
      </motion.div>
    </section>
  );
}
