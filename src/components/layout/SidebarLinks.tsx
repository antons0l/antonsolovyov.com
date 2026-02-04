import Navigation from './Navigation';
import { resumeData } from '@/data/resume';
import { Github, Linkedin, Twitter, Facebook, Mail } from '@/components/icons';

interface SidebarLinksProps {
  className?: string;
}

export default function SidebarLinks({ className }: SidebarLinksProps) {
  return (
    <div className={className}>
      <Navigation />

      <div className="flex gap-5 mt-8 max-sm:gap-3">
        <a
          href={resumeData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-text-muted rounded-lg transition-all duration-150 hover:text-accent-primary hover:bg-bg-hover hover:-translate-y-0.5"
          aria-label="GitHub"
        >
          <Github className="w-[22px] h-[22px]" />
        </a>
        <a
          href={resumeData.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-text-muted rounded-lg transition-all duration-150 hover:text-accent-primary hover:bg-bg-hover hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-[22px] h-[22px]" />
        </a>
        <a
          href={resumeData.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-text-muted rounded-lg transition-all duration-150 hover:text-accent-primary hover:bg-bg-hover hover:-translate-y-0.5"
          aria-label="Twitter"
        >
          <Twitter className="w-[22px] h-[22px]" />
        </a>
        <a
          href={resumeData.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 text-text-muted rounded-lg transition-all duration-150 hover:text-accent-primary hover:bg-bg-hover hover:-translate-y-0.5"
          aria-label="Facebook"
        >
          <Facebook className="w-[22px] h-[22px]" />
        </a>
        <a
          href={`mailto:${resumeData.email}`}
          className="flex items-center justify-center w-10 h-10 text-text-muted rounded-lg transition-all duration-150 hover:text-accent-primary hover:bg-bg-hover hover:-translate-y-0.5"
          aria-label="Email"
        >
          <Mail className="w-[22px] h-[22px]" />
        </a>
      </div>
    </div>
  );
}
