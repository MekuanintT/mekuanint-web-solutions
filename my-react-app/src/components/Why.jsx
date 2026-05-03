import { motion } from 'framer-motion'
import { BadgeCheck, Handshake, Rocket, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const reasons = [
  'Clean modern design',
  'Fast performance',
  'Affordable pricing',
  'Reliable support',
]

const highlights = [
  { Icon: Rocket, label: 'Speed-focused builds', val: 'Fast' },
  { Icon: ShieldCheck, label: 'Quality & stability', val: 'Solid' },
  { Icon: Handshake, label: 'Clear communication', val: 'Pro' },
  { Icon: BadgeCheck, label: 'Launch-ready polish', val: 'Premium' },
]

export default function Why() {
  return (
    <section className="section scroll-mt-24" id="why">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="tag">Why Choose Us</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Agency-level quality, developer-level care
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 max-w-xl text-zinc-300">
                We build modern, cinematic sites and business systems that look premium and feel fast—without
                the agency overhead.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-7 space-y-3">
                {reasons.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-zinc-200">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-400/20">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base">{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((c, idx) => (
              <Reveal key={c.label} delay={0.08 + idx * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <c.Icon className="h-5 w-5 text-indigo-200" />
                    </div>
                    <div className="text-sm font-extrabold tracking-tight text-zinc-100">{c.val}</div>
                  </div>
                  <div className="mt-4 text-sm font-semibold text-zinc-200">{c.label}</div>
                  <div className="mt-1 text-xs text-zinc-400">Built for real business outcomes.</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
