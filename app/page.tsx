export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100 p-8">
      <main className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-zinc-900">
          Welcome to{" "}
          <span className="inline-block bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
            Next.js
          </span>
        </h1>
        <p className="mb-8 text-lg text-zinc-600">
          Get started by editing <code className="rounded bg-zinc-200 px-2 py-1 font-mono text-sm text-zinc-800">app/page.tsx</code>
        </p>
        <div className="flex gap-4">
          <a
            href="https://nextjs.org/docs"
            className="rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-zinc-800"
          >
            Documentation
          </a>
          <a
            href="https://nextjs.org/learn"
            className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
          >
            Learn
          </a>
        </div>
      </main>
    </div>
  );
}
