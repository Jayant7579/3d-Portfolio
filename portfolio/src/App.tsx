import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { ContactForm } from './components/ContactForm'
import { Hero3D } from './components/Hero3D'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { profile } from './content/profile'

const iconByLabel: Record<string, React.ReactNode> = {
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  Email: <Mail className="h-4 w-4" />,
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  )
}

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const heroX = useTransform(scrollYProgress, [0, 1], [0, -180])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      <main>
        <div className="w-screen max-w-none overflow-hidden">
          <motion.div
            ref={heroRef}
            style={{ scale: heroScale, x: heroX, y: heroY }}
            className="relative h-[70vh] w-screen max-w-none"
          >
            <Hero3D />
          </motion.div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-5 pt-10">
          <div className="grid items-start gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl"
              >
                {profile.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="mt-3 text-base text-slate-300 sm:text-lg"
              >
                {profile.tagline}
              </motion.p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  <span>{profile.location}</span>
                </Pill>
                <Pill>
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Open to opportunities</span>
                </Pill>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10"
                  >
                    {iconByLabel[s.label] ?? <ArrowUpRight className="h-4 w-4" />}
                    <span>{s.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block" />
          </div>
        </div>

        <Section id="about" title="About" subtitle="">
          <div className="glass relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-slate-900/30 to-slate-950/50 p-6 shadow-lg sm:p-7">
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-14 right-0 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative space-y-3 text-sm leading-relaxed text-slate-100 sm:text-base sm:leading-7">
              <p className="text-base font-semibold text-slate-50 sm:text-lg">Who I am</p>
              <p className="text-slate-400">{profile.about}</p>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tools I use to ship reliable, polished work.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {profile.skills.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-semibold text-slate-50">{s.name}</div>
                  {s.level ? (
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {s.level}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work with clear impact and ownership.">
          <div className="grid gap-4 lg:grid-cols-2">
            {profile.projects.map((p) => (
              <article key={p.title} className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-slate-50">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.links?.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 transition hover:bg-white/10"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Where I’ve delivered value in real teams.">
          <div className="grid gap-4">
            {profile.experience.map((e) => (
              <article key={`${e.org}-${e.role}`} className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold text-slate-50">{e.role}</div>
                    <div className="text-sm text-slate-300">{e.org}</div>
                  </div>
                  <div className="text-xs text-slate-300">{e.period}</div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements" subtitle="Highlights worth calling out.">
          <div className="glass rounded-2xl p-6">
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
              {profile.achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Send a message here, or wire up EmailJS for direct delivery."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="glass rounded-2xl p-6">
              <ContactForm />
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="text-sm font-semibold text-slate-50">Quick links</div>
              <div className="mt-3 grid gap-2">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    {s.label}
                  </a>
                ))}
                {profile.contact.calendly ? (
                  <a
                    href={profile.contact.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  >
                    Calendly
                  </a>
                ) : null}
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-300">
                Tip: to enable direct sending from this form, create a free EmailJS account and set
                `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`
                in a `.env` file.
              </p>
            </div>
          </div>
        </Section>

        <footer className="mx-auto w-full max-w-6xl px-5 pb-14 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span className="opacity-80">Built with React, Vite, and Three.js</span>
          </div>
        </footer>
      </main>
    </div>
  )
}
