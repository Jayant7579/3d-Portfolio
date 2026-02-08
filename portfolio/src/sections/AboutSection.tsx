import { Section } from '../components/Section'
import { about } from '../content/about'

export function AboutSection() {
  return (
    <Section id="about" title="About">
      <div className="glass relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-slate-900/30 to-slate-950/50 p-6 shadow-lg sm:p-7">
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-14 right-0 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative space-y-3 text-sm leading-relaxed text-slate-100 sm:text-base sm:leading-7">
          <p className="text-base font-semibold text-slate-50 sm:text-lg">Who I am</p>
          <p className="text-slate-400">{about}</p>
        </div>
      </div>
    </Section>
  )
}
