interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({ title, description }: SkillCardProps) {
  return (
    <article className="mt-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </article>
  );
}
