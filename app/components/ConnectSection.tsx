"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, AtSign, MessageCircle, Play, Globe, Send } from "lucide-react";
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

const socialLinks = [
  { id: "social-instagram", icon: AtSign, label: "Instagram", href: "#" },
  { id: "social-twitter", icon: MessageCircle, label: "Twitter / X", href: "#" },
  { id: "social-youtube", icon: Play, label: "YouTube", href: "#" },
  { id: "social-facebook", icon: Globe, label: "Facebook", href: "#" },
];

export default function ConnectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "General Inquiry" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <BookChapter
      id="letter"
      number="06"
      label="Final Letter"
      title="Begin the conversation"
      subtitle="The book closes with a personal invitation: write, ask, invite, or simply tell Poonam where this found you."
      tone="paper"
    >
      <div ref={ref} className="relative">
      <BotanicalCorner position="tr" opacity={0.07} size={200} />
      <BotanicalCorner position="bl" opacity={0.07} size={180} />

        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="hidden"
        >
          <span className="section-label">Connect</span>
          <div className="section-rule w-full max-w-xs" />
          <h2
            id="connect-heading"
            className="font-display text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] font-light leading-tight text-[#2B2B2B] text-balance"
          >
            Start a{" "}
            <em className="italic font-light text-[#6E5A4E]">Conversation</em>
          </h2>
          <p className="font-body text-[1rem] text-[#9E8A7E] mt-4 max-w-[520px] leading-relaxed">
            Whether you&apos;d like to book a speaking engagement, discuss a
            collaboration, or simply share how her work has touched your
            family — Poonam would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Contact form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-8 lg:p-10"
              style={{
                background: "linear-gradient(135deg, rgba(247,241,232,0.9) 0%, rgba(232,220,203,0.6) 100%)",
                border: "1px solid rgba(196,204,184,0.5)",
                boxShadow: "0 4px 24px rgba(43,43,43,0.06)",
              }}
            >
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                  aria-label="Contact form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block font-body text-[0.78rem] font-medium text-[#6E5A4E] mb-1.5 tracking-wide"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Priya Sharma"
                        className="newsletter-input"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block font-body text-[0.78rem] font-medium text-[#6E5A4E] mb-1.5 tracking-wide"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="priya@example.com"
                        className="newsletter-input"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block font-body text-[0.78rem] font-medium text-[#6E5A4E] mb-1.5 tracking-wide"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="newsletter-input"
                    >
                      <option>General Inquiry</option>
                      <option>Speaking Engagement</option>
                      <option>Media & Press</option>
                      <option>Book Discussion</option>
                      <option>Workshop Collaboration</option>
                      <option>Personal Message</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block font-body text-[0.78rem] font-medium text-[#6E5A4E] mb-1.5 tracking-wide"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="newsletter-input resize-none"
                      aria-required="true"
                    />
                  </div>

                  <button
                    id="btn-send-message"
                    type="submit"
                    disabled={loading}
                    className="btn-primary self-start justify-center min-w-[180px]"
                    aria-label="Send your message to Poonam Choudhary"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="block w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-4 py-12"
                  role="status"
                  aria-live="polite"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(168,178,154,0.2)", border: "1.5px solid rgba(168,178,154,0.5)" }}
                  >
                    <Send size={24} className="text-[#A8B29A]" />
                  </div>
                  <h3 className="font-display text-[1.8rem] font-light text-[#2B2B2B]">
                    Message Received
                  </h3>
                  <p className="font-body text-[0.95rem] text-[#6E5A4E] max-w-[320px] leading-relaxed">
                    Poonam personally reads every message. She&apos;ll be in touch with you shortly.
                  </p>
                  <span className="font-script text-[#A8B29A] text-[1.1rem]">— With warmth</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Contact info */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              variants={fadeUp}
              className="rounded-xl p-7 flex flex-col gap-5"
              style={{
                background: "rgba(247,241,232,0.8)",
                border: "1px solid rgba(196,204,184,0.4)",
              }}
            >
              <h3 className="font-display text-[1.25rem] font-medium text-[#2B2B2B]">
                Get in Touch
              </h3>
              {[
                { icon: Mail, label: "Email", value: "hello@poonamchoudhary.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Based in", value: "Mumbai, India" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(168,178,154,0.2)" }}
                    >
                      <Icon size={14} className="text-[#6E5A4E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-body text-[0.7rem] text-[#9E8A7E] uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="font-body text-[0.88rem] text-[#2B2B2B]">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              variants={fadeUp}
              className="rounded-xl p-7"
              style={{
                background: "rgba(247,241,232,0.8)",
                border: "1px solid rgba(196,204,184,0.4)",
              }}
            >
              <h3 className="font-display text-[1.25rem] font-medium text-[#2B2B2B] mb-5">
                Follow Along
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map(({ id, icon: Icon, label, href }) => (
                  <a
                    key={id}
                    id={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(168,178,154,0.1)",
                      border: "1px solid rgba(168,178,154,0.25)",
                    }}
                    aria-label={`Follow Poonam on ${label}`}
                  >
                    <Icon size={16} className="text-[#6E5A4E]" strokeWidth={1.5} />
                    <span className="font-body text-[0.82rem] text-[#6E5A4E]">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Manager note */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              variants={fadeUp}
              className="rounded-xl p-6 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #A8B29A 0%, #8FA083 100%)",
              }}
            >
              <BotanicalCorner position="br" opacity={0.15} size={120} />
              <p className="font-display text-[1.1rem] font-light italic text-white leading-[1.6] mb-3">
                &ldquo;For speaking enquiries, media requests, and book club visits,
                Poonam responds personally.&rdquo;
              </p>
              <span className="font-body text-[0.78rem] text-white/70 tracking-wide">
                Average response: 2–3 business days
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <p className="chapter-transition-note">
        The final page should feel less like conversion and more like permission to reach out.
      </p>
    </BookChapter>
  );
}
