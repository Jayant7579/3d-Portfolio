import { basics } from '../content/basics'

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-400">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>(c) {new Date().getFullYear()} {basics.name}</span>
        <span className="opacity-80">Engineer by mindset, AI by passion</span>
      </div>
    </footer>
  )
}
