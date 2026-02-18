import Image from 'next/image';
import { resumeData } from '@/data/resume';
import SidebarLinks from './SidebarLinks';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-sidebar shrink-0 py-16 pr-12 flex flex-col max-lg:relative max-lg:w-full max-lg:h-auto max-lg:py-10 max-lg:pr-0">
      <div className="flex flex-col h-full">
        <div className="mb-10 glass-panel rounded-3xl p-6">
          <div className="relative w-[96px] h-[96px] mb-5 max-sm:w-[80px] max-sm:h-[80px]">
            <div className="absolute -inset-1 rounded-full avatar-ring-gradient" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-bg-primary">
              <Image
                src="/avatar.jpg"
                alt={resumeData.name}
                fill
                sizes="(max-width: 640px) 80px, 96px"
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute bottom-1 right-1 w-4 h-4 bg-success border-[3px] border-bg-primary rounded-full animate-pulse-status"
              title="Available for opportunities"
            />
          </div>

          <h1 className="text-[40px] font-extrabold leading-[1.05] mb-3 tracking-[-0.02em] max-lg:text-4xl max-sm:text-[30px]">
            <span className="gradient-text">{resumeData.name}</span>
          </h1>
          <h2 className="text-lg font-medium text-text-primary mb-1">{resumeData.title}</h2>
          <p className="text-[15px] text-text-secondary leading-[1.6]">{resumeData.tagline}</p>
        </div>

        <SidebarLinks />
      </div>
    </aside>
  );
}
