import { FileQuestion } from "lucide-react";

export function NoReport({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-500">
          <FileQuestion aria-hidden="true" size={24} strokeWidth={1.7} />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-slate-800">
          No report found
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
          There is no analytics data available for this report link.
        </p>
      </section>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 text-white">
      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />

      <section className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-black/20 backdrop-blur sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-400/10 text-indigo-200">
          <FileQuestion aria-hidden="true" size={30} strokeWidth={1.6} />
        </div>

        <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
          HeyPlay Analytics
        </p>
        <p className="mt-5 bg-gradient-to-r from-indigo-200 to-pink-400 bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl">
          404
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          No report found
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-400">
          This page doesn&apos;t have a report. Check the report link and try
          again.
        </p>
        <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent" />
        <p className="mt-5 text-xs text-slate-500">
          Reports are available through their unique links.
        </p>
      </section>
    </main>
  );
}
