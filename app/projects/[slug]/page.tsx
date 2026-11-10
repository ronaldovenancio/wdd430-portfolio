import { Suspense } from "react";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    {
      slug: "event-management-api",
    },
  ];
}

async function ProjectDetails({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-4xl font-bold text-slate-900">
        Project: {slug}
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        This page was generated from the dynamic route parameter.
      </p>
    </div>
  );
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  return (
    <main className="px-4 py-12 sm:px-6">
      <Suspense
        fallback={
          <div className="mx-auto max-w-5xl">
            <p className="text-lg text-slate-600">
              Loading project...
            </p>
          </div>
        }
      >
        <ProjectDetails params={params} />
      </Suspense>
    </main>
  );
}