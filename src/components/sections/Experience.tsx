import { resumeData } from '@/data/resume';
import { ExternalLink, Download } from '@/components/icons';

export default function Experience() {
  return (
    <section id="experience" className="mb-[120px] scroll-mt-24">
      <h2 className="flex items-center gap-3 text-[28px] font-bold text-text-primary mb-2 max-sm:text-[22px]">        
        Professional Experience
      </h2>
      <div>        
        <p className="mb-5 text-base">
          Here are some of my recent roles.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {resumeData.experience.map((exp) => (
          <article 
            key={exp.id} 
            className="grid grid-cols-[130px_1fr] gap-4 p-6 rounded-xl bg-transparent border border-transparent transition-all duration-300 hover:bg-bg-card hover:border-border hover:translate-x-1 max-lg:grid-cols-1"
          >
            <div className="text-xs font-semibold text-text-muted uppercase tracking-[0.05em] pt-1 max-lg:pt-0 max-lg:mb-2">
              <span>{exp.startDate} - </span>
              <br/>
              <span>{exp.endDate}</span>
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2">
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-text-primary no-underline inline-flex items-center gap-1 transition-colors duration-150 hover:text-accent-primary"
                  >
                    {exp.title}
                    <span className="text-text-secondary font-medium ml-1">· {exp.company}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-0 translate-y-0.5 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0" />
                  </a>
                ) : (
                  <span className="text-text-primary inline-flex items-center gap-1">
                    {exp.title}
                    <span className="text-text-secondary font-medium ml-1">· {exp.company}</span>
                  </span>
                )}
              </h3>
              <p className="text-sm text-text-secondary leading-[1.7] mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 rounded-full text-xs font-medium bg-accent-primary/10 text-accent-primary transition-colors duration-150 hover:bg-accent-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a 
        href="/Resume_Anton_Solovyov.pdf" 
        className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-accent-primary no-underline font-semibold text-sm border border-accent-primary rounded-lg transition-colors duration-150 hover:bg-accent-primary/10" 
        target="_blank"
        download
      >
        View Full Resume
        <Download className="w-[18px] h-[18px]" />
      </a>
    </section>
  );
}
