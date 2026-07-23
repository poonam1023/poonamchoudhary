"use client";

import React, { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowRight, AlertCircle, Sparkles } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("from") || "/author/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed.");
      }

      router.push(redirectPath);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo / Header */}
      <div className="text-center mb-8">
        <Link href="/" className="inline-block mb-4">
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#3A2C1E",
              letterSpacing: "-0.01em",
            }}
          >
            Poonam Choudhary
          </span>
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#6E5A4E]/15 bg-[#FAF8F4] mb-3">
          <Sparkles className="w-3 h-3 text-[#98A58B]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6E5A4E]">
            PRIVATE AUTHOR PORTAL
          </span>
        </div>
        <h1
          className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Author Dashboard Sign In
        </h1>
      </div>

      {/* Card */}
      <div
        className="p-8 rounded-2xl border border-[#6E5A4E]/15 shadow-xl"
        style={{ backgroundColor: "#FAF8F4" }}
      >
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 text-sm">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{error}</p>
              {error === "Unauthorized account." && (
                <p className="text-xs text-red-600 mt-1">
                  Only authorized author email addresses defined in the project configuration can log in.
                </p>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-2">
              Author Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#6E5A4E]/50" />
              <input
                type="email"
                required
                placeholder="author@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#6E5A4E]/20 text-sm focus:outline-none focus:border-[#A8B29A] transition-colors"
                style={{ backgroundColor: "#FAF7F2" }}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#6E5A4E] mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-[#6E5A4E]/50" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#6E5A4E]/20 text-sm focus:outline-none focus:border-[#A8B29A] transition-colors"
                style={{ backgroundColor: "#FAF7F2" }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-widest text-[#FAF7F2] transition-all duration-200 flex items-center justify-center gap-2 hover:bg-[#98A58B] active:scale-[0.99] disabled:opacity-50"
            style={{ backgroundColor: "#A8B29A" }}
          >
            {loading ? (
              "Authenticating…"
            ) : (
              <>
                Enter Dashboard <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="text-center mt-6">
        <Link
          href="/"
          className="text-xs text-[#6E5A4E] hover:underline uppercase tracking-wider"
        >
          ← Return to Main Website
        </Link>
      </div>
    </div>
  );
}

export default function AuthorLoginPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6 selection:bg-[#A8B29A]/30"
      style={{
        backgroundColor: "#FAF7F2",
        color: "#3A2C1E",
        fontFamily: "var(--font-sans), sans-serif",
      }}
    >
      <Suspense fallback={<div className="text-sm text-[#6E5A4E]">Loading…</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
