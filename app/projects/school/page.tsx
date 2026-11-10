import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";

export default function SchoolProjectsPage() {
  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">
          School Projects
        </h1>

        <Suspense
          fallback={
            <div className="mt-8 space-y-6 animate-pulse">
              <div className="h-40 rounded-xl bg-slate-200" />
              <div className="h-40 rounded-xl bg-slate-200" />
            </div>
          }
        >
          <SchoolProjectList />
        </Suspense>
      </div>
    </main>
  );
}