import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <section className="mb-12 text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
                About
            </p>

            <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
                About Me
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                I am a software testing professional and full-stack development
                student learning Next.js, React, TypeScript, and modern web
                development practices.
            </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillCard
            title="Software Testing"
            description="Experience with manual and automated testing, quality assurance, and software validation."
          />

          <SkillCard
            title="Full-Stack Development"
            description="Developing modern web applications using Next.js, React, TypeScript, APIs, and responsive design."
          />
        </section>
      </div>
    </main>
  );
}