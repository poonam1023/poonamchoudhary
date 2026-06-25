"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { BookSpread, BookPage } from "./book";
import styles from "./book/BookSystem.module.css";

export default function ConnectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <BookSpread
      id="letter"
      variant="final"
      left={
        <BookPage
          side="left"
          chapterLabel="Final Letter"
          chapterTitle="Begin the conversation"
          pageNumber="12"
        >
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3" aria-label="Contact form">
                  <div className="grid grid-cols-2 gap-3">
                    <div className={styles.formField}>
                      <label htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className={styles.formField}>
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Write your message..."
                    />
                  </div>
                  <button type="submit" className={styles.primaryCta} disabled={loading} style={{ alignSelf: "flex-start" }}>
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <Send size={14} />}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "1.5rem 0" }} role="status">
                  <p className={styles.pageHeadline} style={{ fontSize: "1.5rem" }}>
                    Message received
                  </p>
                  <p className={styles.pageProse} style={{ marginTop: "0.5rem" }}>
                    Poonam personally reads every message.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </BookPage>
      }
      right={
        <BookPage side="right" chapterLabel="Final Letter" pageNumber="13">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
          >
            <p className={styles.pageProse} style={{ marginBottom: "1rem" }}>
              Whether you&apos;d like to book a speaking engagement, discuss a
              collaboration, or share how this work has touched your family —
              Poonam would love to hear from you.
            </p>

            {[
              { icon: Mail, label: "Email", value: "hello@poonamchoudhary.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Based in", value: "Mumbai, India" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.65rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    width: "1.75rem",
                    height: "1.75rem",
                    borderRadius: "999px",
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(168,178,154,0.15)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={13} className="text-[#6E5A4E]" />
                </span>
                <div>
                  <p className={styles.pageEyebrow} style={{ margin: 0 }}>
                    {label}
                  </p>
                  <p className={styles.pageProse} style={{ margin: 0 }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}

            <div
              className={styles.marginQuote}
              style={{ marginTop: "1rem", background: "rgba(168,178,154,0.12)" }}
            >
              <p style={{ fontSize: "0.95rem" }}>
                &ldquo;For speaking enquiries and book club visits, Poonam responds
                personally.&rdquo;
              </p>
              <cite>Average response: 2–3 business days</cite>
            </div>
          </motion.div>
        </BookPage>
      }
    />
  );
}
