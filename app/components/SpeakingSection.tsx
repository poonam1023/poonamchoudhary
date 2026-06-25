"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Mic2, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import BotanicalCorner from "./BotanicalCorner";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const upcomingEvents = [
  {
    id: "event-1",
    title: "The Heart of Parenting",
    subtitle: "Annual Parenting Summit",
    date: "Aug 14, 2026",
    location: "Mumbai, India",
    format: "Keynote",
    seats: "Limited",
  },
  {
    id: "event-2",
    title: "Raising Resilient Children",
    subtitle: "School Leadership Forum",
    date: "Sep 3, 2026",
    location: "Delhi, India",
    format: "Workshop",
    seats: "Open",
  },
  {
    id: "event-3",
    title: "Conscious Parenting in the Digital Age",
    subtitle: "Global Webinar",
    date: "Sep 20, 2026",
    location: "Online",
    format: "Webinar",
    seats: "Open",
  },
];

const topics = [
  "Emotional Intelligence in Children",
  "Screen Time & Boundaries",
  "Building Parent-Child Trust",
  "Mindful Discipline",
  "Nurturing Resilience",
  "The Teenage Transition",
  "Conscious Communication",
  "Parenting with Presence",
];

export default function SpeakingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="speaking"
      ref={ref}
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EFE6D4 0%, #F7F1E8 100%)" }}
      aria-labelledby="speaking-heading"
    >
      <BotanicalCorner position="tr" opacity={0.07} size={180} />
      <BotanicalCorner position="bl" opacity={0.07} size={160} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="section-label">Speaking</span>
          <div className="section-rule w-full max-w-xs" />
          <h2
            id="speaking-heading"
            className="font-display text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-light leading-tight text-[#2B2B2B] text-balance"
          >
            Conversations That{" "}
            <em className="italic font-light text-[#6E5A4E]">Move Rooms</em>
          </h2>
          <p className="font-body text-[1rem] text-[#9E8A7E] mt-4 max-w-[520px] leading-relaxed">
            Poonam speaks at schools, corporates, summits, and intimate
            workshops — every talk crafted to leave the audience changed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left — Upcoming events */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <motion.h3
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              variants={fadeUp}
              className="font-display text-[1.5rem] font-medium text-[#2B2B2B] flex items-center gap-3"
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(168,178,154,0.2)", border: "1px solid rgba(168,178,154,0.4)" }}
              >
                <Calendar size={14} className="text-[#6E5A4E]" />
              </span>
              Upcoming Events
            </motion.h3>

            {upcomingEvents.map((event, i) => (
              <motion.article
                key={event.id}
                id={event.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.12 + i * 0.08}
                variants={fadeUp}
                className="group flex flex-col sm:flex-row sm:items-center gap-5 p-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, rgba(247,241,232,0.8) 0%, rgba(232,220,203,0.5) 100%)",
                  border: "1px solid rgba(196,204,184,0.5)",
                  boxShadow: "0 2px 12px rgba(43,43,43,0.04)",
                }}
                aria-label={`Event: ${event.title}`}
              >
                {/* Date badge */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center"
                  style={{ background: "rgba(168,178,154,0.15)", border: "1px solid rgba(168,178,154,0.3)" }}
                >
                  <span className="font-body text-[0.6rem] text-[#A8B29A] tracking-wider uppercase">
                    {event.date.split(" ")[0]}
                  </span>
                  <span className="font-display text-[1.6rem] font-semibold text-[#2B2B2B] leading-none">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-body text-[0.65rem] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
                      style={{
                        background:
                          event.format === "Keynote"
                            ? "rgba(201,169,110,0.2)"
                            : event.format === "Workshop"
                            ? "rgba(168,178,154,0.25)"
                            : "rgba(196,204,184,0.3)",
                        color: "#6E5A4E",
                      }}
                    >
                      {event.format}
                    </span>
                    <span
                      className={`font-body text-[0.62rem] font-medium tracking-wide px-2 py-0.5 rounded-full ${
                        event.seats === "Limited"
                          ? "bg-[rgba(201,169,110,0.15)] text-[#9E6B2E]"
                          : "bg-[rgba(168,178,154,0.15)] text-[#5E7A52]"
                      }`}
                    >
                      {event.seats === "Limited" ? "⚠ Limited Seats" : "✓ Open Registration"}
                    </span>
                  </div>
                  <h4 className="font-display text-[1.15rem] font-medium text-[#2B2B2B] truncate">
                    {event.title}
                  </h4>
                  <p className="font-body text-[0.82rem] text-[#9E8A7E]">{event.subtitle}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 font-body text-[0.78rem] text-[#9E8A7E]">
                      <MapPin size={11} className="text-[#A8B29A]" />
                      {event.location}
                    </span>
                  </div>
                </div>

                {/* Register button */}
                <button
                  id={`btn-register-${event.id}`}
                  className="btn-secondary text-sm self-start sm:self-center whitespace-nowrap"
                  aria-label={`Register for ${event.title}`}
                >
                  Register
                  <ArrowRight size={13} />
                </button>
              </motion.article>
            ))}
          </div>

          {/* Right — Speaking topics + booking */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Topics */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUp}
              className="rounded-xl p-8"
              style={{
                background: "linear-gradient(135deg, #E8DCCB 0%, #DDD0BC 100%)",
                border: "1px solid rgba(196,204,184,0.4)",
              }}
            >
              <h3 className="font-display text-[1.3rem] font-medium text-[#2B2B2B] flex items-center gap-2 mb-5">
                <Mic2 size={16} className="text-[#6E5A4E]" strokeWidth={1.5} />
                Speaking Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="font-body text-[0.78rem] text-[#6E5A4E] px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(247,241,232,0.7)", border: "1px solid rgba(196,204,184,0.4)" }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "200+", label: "Events" },
                { number: "50K+", label: "Audience Reached" },
                { number: "12", label: "Countries" },
                { number: "98%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-5 text-center"
                  style={{ background: "rgba(247,241,232,0.8)", border: "1px solid rgba(196,204,184,0.4)" }}
                >
                  <span className="font-display text-[1.8rem] font-semibold text-[#2B2B2B]">
                    {stat.number}
                  </span>
                  <p className="font-body text-[0.72rem] text-[#9E8A7E] tracking-wide uppercase mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Booking CTA */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
              variants={fadeUp}
              className="rounded-xl p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #A8B29A 0%, #8FA083 100%)",
              }}
            >
              <BotanicalCorner position="br" opacity={0.15} size={120} />
              <Users size={20} className="text-white/80 mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-[1.4rem] font-medium text-white mb-2">
                Book Poonam for Your Event
              </h3>
              <p className="font-body text-[0.85rem] text-white/80 leading-relaxed mb-5">
                Keynotes, workshops, panel discussions, and intimate gatherings.
                Every format, every audience.
              </p>
              <button
                id="btn-book-speaking"
                className="w-full bg-[#F7F1E8] text-[#2B2B2B] font-body font-semibold text-[0.85rem] tracking-wide uppercase py-3 rounded-md hover:bg-white transition-colors flex items-center justify-center gap-2"
                aria-label="Book Poonam Choudhary for speaking"
              >
                Send a Speaking Enquiry
                <ArrowRight size={14} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
