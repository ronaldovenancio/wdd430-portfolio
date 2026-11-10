import Pagination from "@/components/Pagination";
import ProjectSearch from "@/components/ProjectSearch";
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from "@/lib/projects-db";

export const instant = false;

export default async function ProjectsPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query?.trim() ?? "";

  const parsedPage = Number(searchParams?.page);
  const currentPage =
    Number.isInteger(parsedPage) && parsedPage > 0
      ? parsedPage
      : 1;

  const projects = await fetchFilteredProjects(
    query,
    currentPage
  );

  const totalPages = await fetchProjectsPages(query);

  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Projects Overview
        </h1>

        <div className="mt-6">
          <ProjectSearch />
        </div>

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

        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}