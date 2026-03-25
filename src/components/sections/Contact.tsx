import { resumeData } from '@/data/resume';
import { Mail, Linkedin } from '@/components/icons';

export default function Contact() {
  return (
    <section id="contact" className="mb-[120px] scroll-mt-24">
      <h2 className="text-2xl font-semibold text-text-primary mb-4 max-sm:text-xl">
        Get in Touch
      </h2>
      <div className="max-w-lg">
        <p className="text-base text-text-secondary mb-8 leading-relaxed">
          I&apos;m open to new opportunities and collaborations. Whether you have
          a role, a project idea, or just want to connect &mdash; feel free to reach out.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${resumeData.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-primary text-bg-primary rounded-lg text-sm font-semibold transition-opacity duration-150 hover:opacity-90"
          >
            <Mail className="w-4 h-4" />
            Email me
          </a>
          <a
            href={resumeData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-primary rounded-lg text-sm font-semibold transition-colors duration-150 hover:border-accent-primary hover:text-accent-primary"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="text-center py-12 border-t border-border mt-12">
      <p className="text-sm text-text-muted">Designed &amp; Built by {resumeData.name}</p>
    </footer>
  );
}
