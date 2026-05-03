import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="section" id="contact">
      <div className="container-page">
        <Reveal>
          <span className="tag">Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s talk</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Share a quick message about what you need. We’ll reply with a clear plan, timeline, and next steps.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.12}>
            <div className="glass rounded-3xl p-7">
              <h3 className="text-lg font-bold tracking-tight">Direct contact</h3>
              <p className="mt-2 text-sm text-zinc-300">
                Prefer email or WhatsApp? Use any of the options below.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    Icon: Mail,
                    label: 'Email',
                    value: 'mekuanintwebsolutions@gmail.com',
                    href: 'mailto:mekuanintwebsolutions@gmail.com',
                  },
                  {
                    Icon: Phone,
                    label: 'Phone',
                    value: '+251 960 84 75 11',
                    href: 'tel:+251960847511',
                  },
                  {
                    Icon: MessageCircle,
                    label: 'WhatsApp',
                    value: '+251 960 84 75 11',
                    href: 'https://wa.me/251960847511',
                  },
                ].map((c) => (
                  <motion.a
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    key={c.label}
                    href={c.href}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/15"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                        <c.Icon className="h-5 w-5 text-indigo-200" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-zinc-100">{c.label}</div>
                        <div className="truncate text-sm text-zinc-300">{c.value}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight">Send a message</h3>
                {sent && (
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Message sent
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-zinc-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-400/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-zinc-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-400/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-semibold text-zinc-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project…"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-400/20"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
