import Sidebar from '@/components/layout/Sidebar';
import ParticleBackground from '@/components/effects/ParticleBackground';

interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <div className="fixed inset-0 background-gradient pointer-events-none z-0" />
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen max-w-[1400px] mx-auto px-8 max-lg:flex-col max-lg:px-6 max-sm:px-4">
        <Sidebar />
        <main className="flex-1 py-24 pl-12 max-w-content-max max-lg:py-2 max-lg:pb-12 max-lg:pl-0 max-lg:max-w-full">
          {children}
        </main>
      </div>
    </>
  );
}
