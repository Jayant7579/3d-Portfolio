import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { about } from '../content/about'
import { basics } from '../content/basics'
import { socials } from '../content/socials'

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

export function HeroSection() {
  return (
    <section className="pb-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl"
          >
            {basics.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 text-base text-slate-300 sm:text-lg"
          >
            {basics.tagline}
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-2">
            <Pill>
              <MapPin className="h-4 w-4 text-cyan-300" />
              <span>{basics.location}</span>
            </Pill>
            <Pill>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Open to opportunities</span>
            </Pill>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {socials.map((s) => (
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
          <div className="mt-4">
            <a
              href={basics.resumeUrl}
              target={basics.resumeUrl.startsWith('http') ? '_blank' : undefined}
              rel={basics.resumeUrl.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              <span>Resume</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="lg:pt-2">
          <div className="about-card">
            <div className="about-card__glow" aria-hidden="true" />
            <div className="about-card__glow about-card__glow--secondary" aria-hidden="true" />
            <div className="about-card__content">
              <div className="about-card__eyebrow">About Me</div>
              <p className="about-card__text">{about}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
