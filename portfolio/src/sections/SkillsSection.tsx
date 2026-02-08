import { Section } from '../components/Section'
import { skills } from '../content/skills'

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" subtitle="Tools I use to ship reliable, polished work.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.name} className="skill-card glass rounded-2xl p-5">
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
  )
}
