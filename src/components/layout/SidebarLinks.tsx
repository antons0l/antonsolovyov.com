import Navigation from './Navigation';
import { resumeData } from '@/data/resume';
import { Github, Linkedin, Twitter, Facebook, Mail } from '@/components/icons';

interface SidebarLinksProps {
  className?: string;
}

const iconClass =
  'flex items-center justify-center w-10 h-10 text-text-muted rounded-xl border border-border/50 transition-all duration-200 hover:text-accent-primary hover:border-accent-primary/40 hover:bg-bg-hover hover:-translate-y-0.5';

export default function SidebarLinks({ className }: SidebarLinksProps) {
  return (
    <div className={className}>
      <Navigation />

      <div className="flex gap-3 mt-8 max-sm:gap-2.5">
        <a href={resumeData.social.github} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="GitHub">
          <Github className="w-[20px] h-[20px]" />
        </a>
        <a href={resumeData.social.linkedin} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="LinkedIn">
          <Linkedin className="w-[20px] h-[20px]" />
        </a>
        <a href={resumeData.social.twitter} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Twitter">
          <Twitter className="w-[20px] h-[20px]" />
        </a>
        <a href={resumeData.social.facebook} target="_blank" rel="noopener noreferrer" className={iconClass} aria-label="Facebook">
          <Facebook className="w-[20px] h-[20px]" />
        </a>
        <a href={`mailto:${resumeData.email}`} className={iconClass} aria-label="Email">
          <Mail className="w-[20px] h-[20px]" />
        </a>
      </div>
    </div>
  );
}
