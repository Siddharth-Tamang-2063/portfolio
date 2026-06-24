import { Cursor } from '@/components/cursor'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { StatsSection } from '@/components/stats-section'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="min-h-screen bg-neo-bg md:cursor-none">
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee
        items={[
          'React',
          'TypeScript',
          'Node.js',
          'MongoDB',
          'Express',
          'GSAP',
          'Tailwind',
          'Next.js',
        ]}
        className="bg-neo-secondary text-black"
      />
      <StatsSection />
      <About />
      <Skills />
      <Experience />
      <Marquee
        items={['Available for Work', 'Remote Friendly', 'Freelance', 'Full-Time']}
        reverse
        className="bg-neo-accent text-black"
      />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
