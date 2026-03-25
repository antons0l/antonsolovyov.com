import Image from 'next/image';
import { resumeData } from '@/data/resume';
import SidebarLinks from './SidebarLinks';

export default function Sidebar() {
  return (
    <aside className="sticky top-0 h-screen w-sidebar shrink-0 py-24 pr-12 flex flex-col max-lg:relative max-lg:w-full max-lg:h-auto max-lg:py-12 max-lg:pr-0">
      <div className="flex flex-col h-full">
        <div className="mb-12">
          <div className="w-[96px] h-[96px] mb-6 rounded-full overflow-hidden border-2 border-border max-sm:w-[80px] max-sm:h-[80px]">
            <Image
              src="/avatar.jpg"
              alt={resumeData.name}
              width={96}
              height={96}
              sizes="(max-width: 640px) 80px, 96px"
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="text-[40px] font-bold leading-[1.1] mb-3 tracking-[-0.02em] text-text-primary max-lg:text-4xl max-sm:text-[28px]">
            {resumeData.name}
          </h1>
          <h2 className="text-lg font-medium text-text-primary mb-1">{resumeData.title}</h2>
          <p className="text-[15px] text-text-secondary leading-[1.6] mb-4">{resumeData.tagline}</p>
        </div>

        <SidebarLinks />
      </div>
    </aside>
  );
}
