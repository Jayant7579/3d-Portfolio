import { ArrowUpRight } from 'lucide-react'
import { Section } from '../components/Section'
import { projects } from '../content/projects'

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work with clear impact and ownership."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {projects.map((p) => (
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
  )
}
