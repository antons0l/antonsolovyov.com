import Image from 'next/image';
import { resumeData } from '@/data/resume';
import { Github, ExternalLinkIcon, Star } from '@/components/icons';

export default function Projects() {
  return (
    <section id="projects" className="mb-[120px] scroll-mt-24">
      <h2 className="section-title">Pet projects</h2>

      <div className="flex flex-col gap-5">
        {resumeData.projects.map((project) => (
          <article
            key={project.id}
            className="group content-card content-card-hover grid grid-cols-[170px_1fr] gap-6 p-6 max-lg:grid-cols-1"
          >
            <div className="aspect-3/2 rounded-xl overflow-hidden bg-bg-secondary border border-border transition-colors duration-150 group-hover:border-accent-primary/40 max-lg:max-w-[220px]">
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 1024px) 220px, 170px"
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
              <p className="text-sm text-text-secondary leading-[1.75] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="pill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {project.award && (
                <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-linear-to-r from-yellow-500/20 to-yellow-500/10 border border-yellow-500/30 rounded-full text-xs font-semibold text-award">
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
