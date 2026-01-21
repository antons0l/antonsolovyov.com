import Sidebar from '@/components/layout/Sidebar';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact, { Footer } from '@/components/sections/Contact';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 background-gradient pointer-events-none z-0" />
      <ParticleBackground />

      <div className="relative z-10 flex min-h-screen max-w-[1400px] mx-auto px-12 max-lg:flex-col max-lg:px-6 max-sm:px-4">
        <Sidebar />
        <main className="flex-1 py-24 pl-12 max-w-content-max max-lg:py-0 max-lg:pb-12 max-lg:pl-0 max-lg:max-w-full">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
