import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Section } from '../components/Section'
import { projects } from '../content/projects'
import { useRef } from 'react'

export function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.projects-slider__card') as HTMLDivElement | null
    const gap = 16
    const width = card?.getBoundingClientRect().width ?? 340
    track.scrollBy({ left: direction * (width + gap), behavior: 'smooth' })
  }

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work with clear impact and ownership."
    >
      <div className="projects-slider">
        <div className="projects-slider__controls">
          <button type="button" className="projects-slider__btn" onClick={() => scrollByCard(-1)}>
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>
          <div className="projects-slider__hint">Scroll or drag to explore</div>
          <button type="button" className="projects-slider__btn" onClick={() => scrollByCard(1)}>
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div
          ref={trackRef}
          className="projects-slider__track"
          role="region"
          aria-label="Projects slider"
          tabIndex={0}
        >
          {projects.map((p) => (
            <div key={p.title} className="projects-slider__card">
              <article className="glass rounded-2xl p-6 h-full">
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
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
