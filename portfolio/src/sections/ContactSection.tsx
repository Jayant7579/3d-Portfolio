import { ContactForm } from '../components/ContactForm'
import { Section } from '../components/Section'
import { contact } from '../content/contact'
import { socials } from '../content/socials'

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Send a message here, or wire up EmailJS for direct delivery."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass rounded-2xl p-6">
          <ContactForm />
        </div>
        <div className="glass rounded-2xl p-6">
          <div className="text-sm font-semibold text-slate-50">Quick links</div>
          <div className="mt-3 grid gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
            {contact.calendly ? (
              <a
                href={contact.calendly}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                Calendly
              </a>
            ) : null}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-slate-300">
            
          </p>
        </div>
      </div>
    </Section>
  )
}
