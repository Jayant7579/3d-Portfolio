import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../content/profile'

type FormState = {
  name: string
  email: string
  message: string
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

function hasEmailJs() {
  return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}\n`,
    )
    return `mailto:${profile.contact.email}?subject=${subject}&body=${body}`
  }, [form])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return

    if (!hasEmailJs()) {
      window.location.href = mailtoHref
      return
    }

    try {
      setStatus('sending')
      await emailjs.send(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, reply_to: form.email, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY! },
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      window.setTimeout(() => setStatus('idle'), 2500)
    } catch {
      setStatus('error')
      window.setTimeout(() => setStatus('idle'), 2500)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-medium text-slate-300">Name</span>
          <input
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            className="glass rounded-xl px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:ring-violet-400/50"
            placeholder="Ada Lovelace"
            required
          />
        </label>
        <label className="grid gap-1">
          <span className="text-xs font-medium text-slate-300">Email</span>
          <input
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            type="email"
            className="glass rounded-xl px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:ring-cyan-400/50"
            placeholder="ada@example.com"
            required
          />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-xs font-medium text-slate-300">Message</span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
          rows={5}
          className="glass resize-none rounded-xl px-3 py-2 text-sm text-slate-100 outline-none ring-1 ring-transparent focus:ring-violet-400/50"
          placeholder="Tell me about your project…"
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-violet-400 disabled:opacity-60"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {!hasEmailJs() ? (
          <a
            className="text-sm text-slate-300 underline decoration-white/20 underline-offset-4 hover:text-slate-50"
            href={mailtoHref}
          >
            Or open in email client
          </a>
        ) : null}

        {status === 'sent' ? (
          <span className="text-sm text-emerald-300">Sent — thanks!</span>
        ) : null}
        {status === 'error' ? (
          <span className="text-sm text-rose-300">Something went wrong. Try again.</span>
        ) : null}
      </div>
    </form>
  )
}

