import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact, { Footer } from '@/components/sections/Contact';
import PageContainer from '@/components/layout/PageContainer';

export default function Home() {
  return (
    <PageContainer>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </PageContainer>
  );
}
