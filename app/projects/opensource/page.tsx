interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}



export default async function OpenSourceProjectsPage() {
  
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

  const response = await fetch(
    `${baseUrl}/api/projects?type=opensource`,
    {
      cache: "no-store",
    }
  );

  const projects: Project[] = await response.json();

  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Open Source Projects
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
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}