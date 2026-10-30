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
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>

        <p className="text-lg text-gray-700">
          I am a full-stack development student learning Next.js and React. Here
          are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}
