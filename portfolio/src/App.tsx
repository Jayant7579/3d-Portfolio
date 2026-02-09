import { useEffect, useState } from 'react'
import { Hero3D } from './components/Hero3D'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { basics } from './content/basics'
import { AchievementsSection } from './sections/AchievementsSection'
import { ContactSection } from './sections/ContactSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { SiteFooter } from './sections/SiteFooter'
import { SkillsSection } from './sections/SkillsSection'

export default function App() {
  const [phase, setPhase] = useState<'loading' | 'fading' | 'ready'>('loading')

  useEffect(() => {
    const fillTimer = window.setTimeout(() => setPhase('fading'), 3200)
    const readyTimer = window.setTimeout(() => setPhase('ready'), 3800)
    return () => {
      window.clearTimeout(fillTimer)
      window.clearTimeout(readyTimer)
    }
  }, [])

  return (
    <div id="top" className="min-h-screen">
      <Loader phase={phase} name={basics.name} />

      {phase === 'ready' ? (
        <>
          <div className="fixed inset-0 -z-10">
            <Hero3D />
          </div>
          <Navbar />

          <main className="mx-auto w-full max-w-5xl px-5 pt-10 pb-14">
            <div>
              <HeroSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <AchievementsSection />
              <ContactSection />
              <SiteFooter />
            </div>
          </main>
        </>
      ) : null}
    </div>
  )
}
