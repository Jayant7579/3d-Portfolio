import { Section } from '../components/Section'
import { education } from '../content/education'

export function EducationSection() {
  return (
    <Section id="education" title="Education" subtitle="Academic background and credentials.">
      <div className="grid gap-4">
        {education.map((edu) => (
          <article key={`${edu.school}-${edu.degree}`} className="glass rounded-2xl p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="text-base font-semibold text-slate-50">{edu.degree}</div>
                <div className="text-sm text-slate-300">{edu.school}</div>
              </div>
              <div className="text-xs text-slate-300">{edu.period}</div>
            </div>
            {edu.details?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-200">
                {edu.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
