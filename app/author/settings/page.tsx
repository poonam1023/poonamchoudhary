import { getSessionAuthor, getAuthorizedAuthors } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const session = await getSessionAuthor();
  const authorizedEmails = getAuthorizedAuthors();
  let totalPosts = 0;
  let totalMedia = 0;
  let totalAuthors = 0;

  try {
    totalPosts = await prisma.blogPost.count();
    totalMedia = await prisma.mediaItem.count();
    totalAuthors = await prisma.author.count();
  } catch (err) {
    console.warn("Prerender/build warning: Failed to count stats", err);
  }

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-3xl" style={{ color: "#3A2C1E" }}>
      <div>
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif" }}>
          Settings
        </h1>
        <p className="text-sm text-[#6E5A4E] mt-0.5">System configuration and account information</p>
      </div>

      {/* Author Profile */}
      <section className="rounded-2xl border border-[#6E5A4E]/10 overflow-hidden" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="px-6 py-4 border-b border-[#6E5A4E]/10">
          <h2 className="font-bold text-sm uppercase tracking-wider">Author Profile</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-[#FAF7F2]"
              style={{ backgroundColor: "#A8B29A" }}
            >
              {session?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>
            <div>
              <p className="font-bold text-lg" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                {session?.name || "Author"}
              </p>
              <p className="text-sm text-[#6E5A4E]">{session?.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Authors */}
      <section className="rounded-2xl border border-[#6E5A4E]/10 overflow-hidden" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="px-6 py-4 border-b border-[#6E5A4E]/10">
          <h2 className="font-bold text-sm uppercase tracking-wider">Authorized Authors</h2>
          <p className="text-xs text-[#6E5A4E] mt-1">
            Only these emails can log into the Author Dashboard. Edit{" "}
            <code className="text-xs bg-[#6E5A4E]/10 px-1 py-0.5 rounded">AUTHORIZED_AUTHORS</code> in{" "}
            <code className="text-xs bg-[#6E5A4E]/10 px-1 py-0.5 rounded">.env</code> to change.
          </p>
        </div>
        <div className="p-6">
          <div className="space-y-2">
            {authorizedEmails.map((email) => (
              <div key={email} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#6E5A4E]/10 bg-[#FAF7F2]">
                <div className="w-7 h-7 rounded-full bg-[#A8B29A]/20 flex items-center justify-center text-xs font-bold text-[#A8B29A]">
                  {email.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-mono">{email}</span>
                {email === session?.email && (
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#A8B29A]/20 text-[#4A5A3E]">
                    You
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Stats */}
      <section className="rounded-2xl border border-[#6E5A4E]/10 overflow-hidden" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="px-6 py-4 border-b border-[#6E5A4E]/10">
          <h2 className="font-bold text-sm uppercase tracking-wider">Database Overview</h2>
        </div>
        <div className="p-6 grid grid-cols-3 gap-4">
          {[
            { label: "Blog Posts", value: totalPosts },
            { label: "Media Items", value: totalMedia },
            { label: "Authors", value: totalAuthors },
          ].map((s) => (
            <div key={s.label} className="text-center px-4 py-5 rounded-xl bg-[#FAF7F2] border border-[#6E5A4E]/8">
              <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                {s.value}
              </p>
              <p className="text-xs text-[#6E5A4E] mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech info */}
      <section className="rounded-2xl border border-[#6E5A4E]/10 overflow-hidden" style={{ backgroundColor: "#FAF8F4" }}>
        <div className="px-6 py-4 border-b border-[#6E5A4E]/10">
          <h2 className="font-bold text-sm uppercase tracking-wider">System Info</h2>
        </div>
        <div className="p-6">
          <dl className="space-y-3 text-sm">
            {[
              ["Framework", "Next.js 16 (App Router)"],
              ["Database", "SQLite via Prisma ORM"],
              ["Auth", "JWT / HTTP-only Cookies"],
              ["Storage", "Local filesystem (/public/uploads)"],
              ["Editor", "Tiptap Rich Text"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4">
                <dt className="w-32 font-semibold text-[#6E5A4E] shrink-0">{k}</dt>
                <dd className="text-[#3A2C1E]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
