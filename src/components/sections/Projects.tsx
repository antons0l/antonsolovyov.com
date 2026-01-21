import Image from 'next/image';
import { resumeData } from '@/data/resume';
import { Github, ExternalLinkIcon, Star } from '@/components/icons';

export default function Projects() {
  return (
    <section id="projects" className="mb-[120px] scroll-mt-24">
      <h2 className="flex items-center gap-3 text-[28px] font-bold text-text-primary mb-8 max-sm:text-[22px]">
        Pet Projects
      </h2>
      <div className="flex flex-col gap-6">
        {resumeData.projects.map((project) => (
          <article 
            key={project.id} 
            className="group grid grid-cols-[160px_1fr] gap-6 p-6 rounded-xl bg-transparent border border-transparent transition-all duration-300 cursor-pointer hover:bg-bg-card hover:border-border hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] max-lg:grid-cols-1"
          >
            <div className="aspect-16/10 rounded-lg overflow-hidden bg-bg-secondary border border-gray-500 transition-colors duration-150 group-hover:border-gray-400 max-lg:max-w-[200px]">
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 200px, 160px"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="text-base font-semibold text-text-primary transition-colors duration-150 group-hover:text-accent-primary">
                  {project.url || project.liveUrl || project.githubUrl ? (
                    <a
                      href={project.url || project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link text-text-primary no-underline inline-flex items-center gap-1 transition-colors duration-150 hover:text-accent-primary"
                    >
                      {project.title}
                      <ExternalLinkIcon className="w-3.5 h-3.5 ml-1 opacity-0 translate-y-0.5 transition-all duration-150 group-hover/link:opacity-100 group-hover/link:translate-y-0" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted transition-colors duration-150 hover:text-accent-primary"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted transition-colors duration-150 hover:text-accent-primary"
                      aria-label="Live site"
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-[1.7] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary transition-colors duration-150 hover:bg-accent-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.award && (
                <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 bg-linear-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 rounded-full text-xs font-semibold text-award">
                  <Star className="w-3.5 h-3.5" />
                  <span>{project.award}</span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
