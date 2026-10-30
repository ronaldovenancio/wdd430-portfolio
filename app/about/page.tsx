import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>

      <p className="text-lg text-gray-700">
        I am a software testing professional and full-stack development student
        learning Next.js, React, TypeScript, and modern web development
        practices.
      </p>

      <SkillCard
        title="Software Testing"
        description="Experience with manual and automated testing, quality assurance, and software validation."
      />
    </main>
  );
}
