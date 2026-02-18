'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [activeSection, setActiveSection] = useState('about');

  const isNearBottom = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    return scrollTop + windowHeight >= documentHeight - 100;
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isNearBottom()) {
        setActiveSection('contact');
        return;
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const handleScroll = () => {
      if (isNearBottom()) setActiveSection('contact');
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome, isNearBottom]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!isHome) return;

    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex flex-col gap-1 mb-auto max-lg:flex-row max-lg:flex-wrap max-lg:gap-3">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={isHome ? `#${id}` : `/#${id}`}
          className={`group flex items-center gap-4 py-2.5 px-3 rounded-xl no-underline text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 max-lg:py-2 ${
            isHome && activeSection === id
              ? 'text-accent-primary bg-accent-primary/10 border border-accent-primary/20'
              : 'text-text-muted border border-transparent hover:text-text-primary hover:bg-bg-hover'
          }`}
          onClick={(e) => handleClick(e, id)}
        >
          <span
            className={`w-6 h-px transition-all duration-300 max-lg:hidden ${
              isHome && activeSection === id
                ? 'w-10 bg-accent-primary'
                : 'bg-text-muted group-hover:w-10 group-hover:bg-text-primary'
            }`}
          />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}
