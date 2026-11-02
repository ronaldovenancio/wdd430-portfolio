interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
      <h3 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
        {title}
      </h3>

      <p className="mb-5 text-lg leading-7 text-slate-600">
        {description}
      </p>

      <p className="text-base text-slate-600">
        <strong className="text-slate-800">Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      {link && (
        <p className="mt-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg font-medium text-blue-600 transition hover:text-blue-800 hover:underline"
            >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}