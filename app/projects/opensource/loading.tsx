export default function Loading() {
  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl animate-pulse">
        <div className="h-10 w-64 rounded bg-slate-200" />

        <div className="mt-8 space-y-6">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="h-6 w-72 rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full rounded bg-slate-200" />
            <div className="mt-2 h-4 w-2/3 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    </main>
  );
}