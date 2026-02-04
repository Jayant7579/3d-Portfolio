import { clsx } from 'clsx'
import { profile } from '../content/profile'

const links = [
  { id: 'about', label: 'About' },
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
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <button
          type="button"
          onClick={() => scrollToId('top')}
          className="text-left"
          aria-label="Scroll to top"
        >
          <div className="text-sm font-semibold tracking-tight text-slate-50">
            {profile.name}
          </div>
          <div className="text-xs text-slate-300">{profile.title}</div>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => scrollToId(l.id)}
              className={clsx(
                'rounded-full px-3 py-1.5 text-sm text-slate-300 transition',
                'hover:bg-white/5 hover:text-slate-50',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400',
              )}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

