interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export const instant = false;

export default async function ProjectsPage() {
  const baseUrl =
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/api/projects`, {
      cache: "no-store",
    });
  const projects: Project[] = await response.json();

  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Projects Overview
        </h1>

        <div className="mt-8 space-y-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {project.title}
              </h2>

              <p className="mt-2 text-slate-600">
                {project.description}
              </p>

              <p className="mt-3 text-sm text-slate-500">
                {project.technologies.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}