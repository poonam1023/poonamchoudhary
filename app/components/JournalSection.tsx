"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, ArrowRight } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const articles = [
  {
    id: "article-1",
    category: "Emotional Growth",
    title: "Why 'Good Job' Might Be Doing More Harm Than Good",
    excerpt:
      "We've been taught to praise our children endlessly. But research — and lived experience — suggests that how we praise matters more than whether we praise at all.",
    readTime: "6 min read",
    date: "June 10, 2026",
    featured: true,
  },
  {
    id: "article-2",
    category: "Presence",
    title: "The Extraordinary Power of Simply Being There",
    excerpt:
      "In our rush to give our children the best experiences, we sometimes forget the most nourishing one: our undivided attention.",
    readTime: "4 min read",
    date: "May 28, 2026",
    featured: false,
  },
  {
    id: "article-3",
    category: "Boundaries",
    title: "Saying No with Love: A Guide for Parents Who Hate Conflict",
    excerpt:
      "Setting boundaries isn't about being strict. It's about being honest. Here's how to hold the line without losing the warmth.",
    readTime: "7 min read",
    date: "May 14, 2026",
    featured: false,
  },
  {
    id: "article-4",
    category: "Teenage Years",
    title: "When Your Child Stops Talking to You — and What to Do",
    excerpt:
      "Adolescence is not a rejection of you. It's a conversation your child is having with themselves. Here's how to stay in the room.",
    readTime: "5 min read",
    date: "Apr 30, 2026",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Emotional Growth": "rgba(168,178,154,0.25)",
  "Presence": "rgba(201,169,110,0.2)",
  "Boundaries": "rgba(196,204,184,0.35)",
  "Teenage Years": "rgba(168,178,154,0.2)",
};

export default function JournalSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="journal"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F7F1E8 0%, #EFE6D4 100%)" }}
      aria-labelledby="journal-heading"
    >
      <BotanicalCorner position="tl" opacity={0.06} size={180} />
      <BotanicalCorner position="br" opacity={0.06} size={160} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="section-label">Journal</span>
          <div className="section-rule w-full max-w-xs" />
          <h2
            id="journal-heading"
            className="font-display text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-light leading-tight text-[#2B2B2B] text-balance"
          >
            Thoughts Written{" "}
            <em className="italic font-light text-[#6E5A4E]">in the Margins</em>
          </h2>
          <p className="font-body text-[1rem] text-[#9E8A7E] mt-4 max-w-[520px] leading-relaxed">
            Essays, reflections, and honest conversations about what it means to
            raise human beings in this complicated, beautiful world.
          </p>
        </motion.div>

        {/* Featured + sidebar layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Featured article */}
          <motion.article
            id={articles[0].id}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="lg:col-span-3 article-card group cursor-pointer"
            aria-label={`Featured article: ${articles[0].title}`}
          >
            {/* Image placeholder */}
            <div
              className="w-full relative overflow-hidden"
              style={{ height: "280px", background: "linear-gradient(135deg, #DDD0BC 0%, #C9B8A0 50%, #E8DCCB 100%)" }}
            >
              <BotanicalCorner position="br" opacity={0.15} size={200} />
              <BotanicalCorner position="tl" opacity={0.1} size={150} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-20">
                <div className="w-16 h-px bg-[#6E5A4E]" />
                <span className="font-display text-3xl italic text-[#6E5A4E]">Journal</span>
                <div className="w-16 h-px bg-[#6E5A4E]" />
              </div>
              <div
                className="absolute top-5 left-5 rounded-full px-3 py-1"
                style={{ background: categoryColors[articles[0].category] || "rgba(168,178,154,0.2)" }}
              >
                <span className="font-body text-[0.68rem] font-semibold text-[#6E5A4E] tracking-widest uppercase">
                  {articles[0].category}
                </span>
              </div>
              <div className="absolute top-5 right-5 font-body text-[0.68rem] text-[#9E8A7E]">
                {articles[0].date}
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={12} className="text-[#A8B29A]" />
                <span className="font-body text-[0.75rem] text-[#9E8A7E]">
                  {articles[0].readTime}
                </span>
              </div>
              <h3 className="font-display text-[1.7rem] sm:text-[2rem] font-medium leading-tight text-[#2B2B2B] mb-4 group-hover:text-[#6E5A4E] transition-colors">
                {articles[0].title}
              </h3>
              <p className="font-body text-[0.95rem] text-[#6E5A4E] leading-[1.85] mb-6">
                {articles[0].excerpt}
              </p>
              <span className="flex items-center gap-2 font-body text-[0.82rem] font-semibold text-[#6E5A4E] group-hover:text-[#2B2B2B] transition-colors">
                Continue Reading
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.article>

          {/* Other articles */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {articles.slice(1).map((article, i) => (
              <motion.article
                key={article.id}
                id={article.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.15 + i * 0.08}
                variants={fadeUp}
                className="article-card group cursor-pointer p-6 flex flex-col gap-3"
                aria-label={`Article: ${article.title}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-body text-[0.65rem] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ background: categoryColors[article.category] || "rgba(168,178,154,0.2)", color: "#6E5A4E" }}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#9E8A7E]">
                    <Clock size={11} />
                    <span className="font-body text-[0.72rem]">{article.readTime}</span>
                  </div>
                </div>
                <h3 className="font-display text-[1.15rem] font-medium leading-tight text-[#2B2B2B] group-hover:text-[#6E5A4E] transition-colors">
                  {article.title}
                </h3>
                <p className="font-body text-[0.85rem] text-[#9E8A7E] leading-[1.7] line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="flex items-center gap-1.5 font-body text-[0.78rem] font-medium text-[#A8B29A] group-hover:text-[#6E5A4E] transition-colors mt-auto pt-2 border-t border-[rgba(196,204,184,0.3)]">
                  Read Essay
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.article>
            ))}

            {/* View all */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.45}
              variants={fadeUp}
              className="text-center pt-2"
            >
              <button
                id="btn-view-all-journal"
                className="btn-secondary w-full justify-center"
                aria-label="View all journal articles"
              >
                View All Essays
                <ArrowRight size={13} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
