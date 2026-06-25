"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";
import BookChapter from "./BookChapter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const books = [
  {
    id: "book-1",
    title: "The Present Parent",
    subtitle: "Showing Up in a Distracted World",
    description:
      "A gentle guide for modern parents navigating the noise of technology, pressure, and perfectionism — and finding their way back to what truly matters.",
    badge: "Bestseller",
    year: "2022",
    pages: "248",
    tag: "Presence & Attention",
    bgClass: "from-[#E8DCCB] to-[#D5CABC]",
    accentColor: "#A8B29A",
  },
  {
    id: "book-2",
    title: "Raising with Heart",
    subtitle: "Conscious Parenting for a Changing World",
    description:
      "Poonam's most celebrated work — a deeply personal and practical exploration of how parents can raise emotionally intelligent, resilient, and compassionate children.",
    badge: "Award Nominated",
    year: "2020",
    pages: "312",
    tag: "Emotional Intelligence",
    bgClass: "from-[#DDD0BC] to-[#C9B8A0]",
    accentColor: "#C9A96E",
  },
  {
    id: "book-3",
    title: "Letters to Tomorrow",
    subtitle: "A Parent's Journal of Reflection",
    description:
      "Part memoir, part guided journal — this is an invitation to slow down, to remember why you became a parent, and to write your own story of love.",
    badge: "Journaling",
    year: "2024",
    pages: "196",
    tag: "Reflection & Growth",
    bgClass: "from-[#E5EAE0] to-[#D4DBC8]",
    accentColor: "#8FA083",
  },
];

export default function BooksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <BookChapter
      id="books"
      number="03"
      label="Chapter Three — The Bookshelf"
      title="Books to return to slowly"
      subtitle="Each book becomes a practical place to continue the conversation: warm, structured, and meant to be lived with."
      tone="cream"
    >
      <div ref={ref} className="relative">
      {/* Subtle paper tone stripes */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(196,204,184,0.08) 80px, rgba(196,204,184,0.08) 81px)",
        }}
      />
      <BotanicalCorner position="tl" opacity={0.07} size={160} />

        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="hidden"
        >
          <span className="section-label">The Books</span>
          <div className="section-rule w-full max-w-xs" />
          <h2
            id="books-heading"
            className="font-display text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-light leading-tight text-[#2B2B2B] text-balance"
          >
            Words That{" "}
            <em className="italic font-light text-[#6E5A4E]">Stay With You</em>
          </h2>
          <p className="font-body text-[1rem] text-[#9E8A7E] mt-4 max-w-[520px] leading-relaxed">
            Each book is written as a letter to parents — warm, honest, and
            unhurried. A conversation across pages.
          </p>
        </motion.div>

        {/* Featured book (large) */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
          variants={fadeUp}
          className="book-card mb-8 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Book image area */}
            <div
              className={`lg:col-span-2 bg-gradient-to-br ${books[1].bgClass} p-12 flex items-center justify-center relative overflow-hidden`}
              style={{ minHeight: "360px" }}
            >
              <BotanicalCorner position="br" opacity={0.12} size={160} />
              <div className="img-zoom">
                <Image
                  src="/book-cover.png"
                  alt={`${books[1].title} by Poonam Choudhary`}
                  width={200}
                  height={280}
                  className="object-contain drop-shadow-2xl"
                  style={{ maxHeight: "260px", width: "auto" }}
                />
              </div>
              <div
                className="absolute top-5 left-5 rounded-full px-3 py-1"
                style={{ background: "rgba(201,169,110,0.25)", border: "1px solid rgba(201,169,110,0.4)" }}
              >
                <span className="font-body text-[0.68rem] font-semibold text-[#6E5A4E] tracking-widest uppercase">
                  {books[1].badge}
                </span>
              </div>
            </div>

            {/* Book details */}
            <div className="lg:col-span-3 p-10 lg:p-14 flex flex-col justify-center gap-5">
              <div className="flex items-center gap-3">
                <span className="font-body text-[0.72rem] text-[#A8B29A] tracking-widest uppercase">
                  {books[1].tag}
                </span>
                <span className="h-px flex-1 bg-[#D5CABC]" />
                <span className="font-body text-[0.72rem] text-[#9E8A7E]">{books[1].year}</span>
              </div>
              <h3 className="font-display text-[2.2rem] sm:text-[2.8rem] font-medium leading-tight text-[#2B2B2B]">
                {books[1].title}
              </h3>
              <p className="font-display text-[1.1rem] font-light italic text-[#9E8A7E]">
                {books[1].subtitle}
              </p>
              <p className="font-body text-[0.95rem] text-[#6E5A4E] leading-[1.9] max-w-[440px]">
                {books[1].description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  id={`btn-order-${books[1].id}`}
                  className="btn-primary"
                  aria-label={`Order ${books[1].title}`}
                >
                  Order Now
                  <ArrowRight size={14} />
                </button>
                <button
                  id={`btn-preview-${books[1].id}`}
                  className="btn-secondary"
                  aria-label={`Preview ${books[1].title}`}
                >
                  Read a Sample
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other books grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[books[0], books[2]].map((book, i) => (
            <motion.article
              key={book.id}
              id={book.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.15 + i * 0.1}
              variants={fadeUp}
              className="book-card group flex flex-col"
              aria-label={`${book.title} book card`}
            >
              {/* Book cover area */}
              <div
                className={`bg-gradient-to-br ${book.bgClass} p-10 flex items-center justify-center relative overflow-hidden`}
                style={{ minHeight: "200px" }}
              >
                <BotanicalCorner position="br" opacity={0.1} size={120} />
                <div className="img-zoom">
                  <Image
                    src="/book-cover.png"
                    alt={`${book.title} by Poonam Choudhary`}
                    width={120}
                    height={170}
                    className="object-contain drop-shadow-xl"
                    style={{ maxHeight: "160px", width: "auto" }}
                  />
                </div>
                <div
                  className="absolute top-4 left-4 rounded-full px-2.5 py-0.5"
                  style={{ background: "rgba(247,241,232,0.7)", border: "1px solid rgba(196,204,184,0.5)" }}
                >
                  <span className="font-body text-[0.65rem] font-semibold text-[#6E5A4E] tracking-widest uppercase">
                    {book.badge}
                  </span>
                </div>
              </div>

              {/* Book info */}
              <div className="p-7 flex flex-col gap-3 flex-1">
                <span className="font-body text-[0.7rem] text-[#A8B29A] tracking-widest uppercase">
                  {book.tag}
                </span>
                <h3 className="font-display text-[1.6rem] font-medium leading-tight text-[#2B2B2B]">
                  {book.title}
                </h3>
                <p className="font-display text-[0.95rem] font-light italic text-[#9E8A7E]">
                  {book.subtitle}
                </p>
                <p className="font-body text-[0.88rem] text-[#6E5A4E] leading-[1.8]">
                  {book.description}
                </p>
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-[#E8DCCB]">
                  <span className="font-body text-[0.78rem] text-[#9E8A7E]">
                    {book.pages} pages · {book.year}
                  </span>
                  <button
                    id={`btn-learn-${book.id}`}
                    className="flex items-center gap-1.5 font-body text-[0.82rem] font-medium text-[#6E5A4E] hover:text-[#2B2B2B] transition-colors group"
                    aria-label={`Learn more about ${book.title}`}
                  >
                    Learn More
                    <ArrowRight
                      size={13}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <p className="chapter-transition-note">
        After the work is tangible, the reader turns the page toward the families it has touched.
      </p>
    </BookChapter>
  );
}
