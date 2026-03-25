import { resumeData } from '@/data/resume';
import { Cube, Server, Layers } from '@/components/icons';

const iconMap: Record<string, React.ReactNode> = {
  cube: <Cube className="w-4 h-4 text-accent-primary" />,
  server: <Server className="w-4 h-4 text-accent-primary" />,
  layers: <Layers className="w-4 h-4 text-accent-primary" />,
};

export default function Skills() {
  return (
    <section id="skills" className="mb-[120px] scroll-mt-24">
      <h2 className="text-2xl font-semibold text-text-primary mb-8 max-sm:text-xl">
        Skills &amp; Technologies
      </h2>
      <div className="grid gap-10">
        {resumeData.skillCategories.map((category) => (
          <div key={category.id}>
            <h3 className="flex items-center gap-2.5 text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              {iconMap[category.icon] || <Cube className="w-4 h-4 text-accent-primary" />}
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill.name} className="px-3 py-1.5 text-sm text-text-primary bg-bg-secondary rounded-lg">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
