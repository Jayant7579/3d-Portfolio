import { clsx } from 'clsx'
import { basics } from '../content/basics'

const links = [
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
] as const

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-8 px-6 py-4 md:py-5">
        <button
          type="button"
          onClick={() => scrollToId('top')}
          className="text-left"
          aria-label="Scroll to top"
        >
          <div className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            {basics.name}
          </div>
          <div className="text-sm text-slate-300 md:text-base">{basics.title}</div>
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              className={clsx(
                'rounded-full px-4 py-2 text-sm font-medium text-slate-100 transition md:text-base',
                'bg-white/5 hover:bg-white/10 hover:text-white',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400',
              )}
            >
              {l.label}
            </button>
          ))}
          <a
            href={basics.resumeUrl}
            target={basics.resumeUrl.startsWith('http') ? '_blank' : undefined}
            rel={basics.resumeUrl.startsWith('http') ? 'noreferrer' : undefined}
            className={clsx(
              'rounded-full px-4 py-2 text-sm font-semibold transition md:text-base',
              'border border-cyan-300/30 bg-cyan-300/10 text-cyan-100 hover:bg-cyan-300/20',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300/70',
            )}
          >
            Resume
          </a>
        </nav>
      </div>
    </div>
  )
}
