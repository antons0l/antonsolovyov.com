import { resumeData } from '@/data/resume';
import { ExternalLink, Download } from '@/components/icons';

export default function Experience() {
  return (
    <section id="experience" className="mb-[120px] scroll-mt-24">
      <h2 className="section-title">Professional experience</h2>
      <p className="section-subtitle">Recent roles and impact highlights.</p>

      <div className="flex flex-col gap-4">
        {resumeData.experience.map((exp) => (
          <article
            key={exp.id}
            className="content-card content-card-hover grid grid-cols-[130px_1fr] gap-5 p-6 max-lg:grid-cols-1"
          >
            <div className="text-xs font-semibold text-text-muted uppercase tracking-[0.08em] pt-1 max-lg:pt-0 max-lg:mb-2">
              <span>{exp.startDate} - </span>
              <br />
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
              <p className="text-sm text-text-secondary leading-[1.75] mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="pill-tag">
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
        className="btn-ghost gap-2 mt-8 text-sm font-semibold"
        target="_blank"
        download
      >
        View full resume
        <Download className="w-[18px] h-[18px]" />
      </a>
    </section>
  );
}
