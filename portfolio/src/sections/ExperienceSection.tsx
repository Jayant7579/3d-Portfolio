import { Section } from '../components/Section'
import { experience } from '../content/experience'

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've delivered value in real teams.">
      <div className="grid gap-4">
        {experience.map((e) => (
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
  )
}
