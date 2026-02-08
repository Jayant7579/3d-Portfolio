import { Section } from '../components/Section'
import { achievements } from '../content/achievements'

export function AchievementsSection() {
  return (
    <Section id="achievements" title="Achievements" subtitle="Highlights worth calling out.">
      <div className="glass rounded-2xl p-6">
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
