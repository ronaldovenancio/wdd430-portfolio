import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl gap-6 px-4 py-4 sm:px-6">
          <Link
            href="/projects"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Overview
          </Link>

          <Link
            href="/projects/opensource"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Open Source
          </Link>

          <Link
            href="/projects/school"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            School
          </Link>
        </div>
      </nav>

      {children}
    </section>
  );
}