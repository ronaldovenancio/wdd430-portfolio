interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="mb-3 text-xl font-bold text-slate-900 sm:text-2xl">
        {title}
      </h2>

      <p className="text-base leading-7 text-slate-600 sm:text-lg">
        {description}
      </p>
    </article>
  );
}