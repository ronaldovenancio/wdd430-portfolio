import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Event Management API",
    description:
      "A RESTful API for managing events, venues, registrations, and users.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
    link: "https://github.com/ronaldovenancio/cse341-event-management-api",
  },
  {
    title: "WDD 430 Portfolio",
    description:
      "A Next.js portfolio application created to practice modern full-stack development concepts.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/ronaldovenancio/wdd430-portfolio",
  },
];

export default function Home() {
  return (
      <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <section className="mb-16 py-8 sm:py-12 lg:py-16">
                <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-base">
                  Portfolio
                </p>

                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  Welcome to my project portfolio.
                </h1>

                <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600 sm:text-xl">
                  I build practical software projects focused on quality, problem solving,
                  full-stack development, and clean user experiences.
                </p>
          </section>

          <ProjectList projects={projects} />
        </div>
      </main>
);
}
