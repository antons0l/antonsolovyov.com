'use client';

import { useEffect, useRef } from 'react';
import { resumeData } from '@/data/resume';
import { Cube, Server, Layers } from '@/components/icons';

const iconMap: Record<string, React.ReactNode> = {
  cube: <Cube className="w-5 h-5 text-accent-primary" />,
  server: <Server className="w-5 h-5 text-accent-primary" />,
  layers: <Layers className="w-5 h-5 text-accent-primary" />,
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('skill-animate');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="mb-[120px] scroll-mt-24" ref={sectionRef}>
      <h2 className="flex items-center gap-3 text-[28px] font-bold text-text-primary mb-8 max-sm:text-[22px]">        
        Skills & Technologies
      </h2>
      <div className="grid gap-10">
        {resumeData.skillCategories.map((category) => (
          <div key={category.id} className="bg-bg-card border border-border rounded-2xl p-7">
            <h3 className="flex items-center gap-3 text-base font-semibold text-text-primary mb-6">
              {iconMap[category.icon] || <Cube className="w-5 h-5 text-accent-primary" />}
              {category.name}
            </h3>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                  <span className="w-[180px] text-sm font-medium text-text-secondary max-sm:w-full">{skill.name}</span>
                  <div className="flex-1 h-1.5 bg-bg-secondary rounded-sm overflow-hidden max-sm:w-full">
                    <div
                      className="skill-progress h-full skill-progress-gradient rounded-sm origin-left animate-skill-fill [animation-play-state:paused]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
