import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type SectionProps = PropsWithChildren<{
  id: string
  title: string
  subtitle?: string
  className?: string
}>

export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={clsx('mx-auto w-full max-w-6xl px-5 py-16', className)}>
      <header className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </header>
      {children}
    </section>
  )
}

