import { motion } from 'framer-motion'
import { CalendarCheck, ChefHat, LayoutTemplate } from 'lucide-react'
import Reveal from './Reveal'

const projects = [
  {
    tag: 'Restaurant Website',
    Icon: ChefHat,
    bg: 'from-indigo-500/25 via-violet-500/10 to-transparent',
    title: 'Restaurant Website (Demo Project)',
    desc: 'A modern, mobile-first site with menu sections, gallery, and conversion-focused CTAs.',
  },
  {
    tag: 'Booking System',
    Icon: CalendarCheck,
    bg: 'from-sky-500/20 via-indigo-500/10 to-transparent',
    title: 'Booking System (Demo Project)',
    desc: 'A clean booking experience with schedule UI, admin-ready structure, and fast flows.',
  },
  {
    tag: 'Landing Page',
    Icon: LayoutTemplate,
    bg: 'from-violet-500/20 via-indigo-500/10 to-transparent',
    title: 'Business Landing Page (Demo Project)',
    desc: 'A premium landing page designed like modern SaaS sites, optimized for leads.',
  },
]

export default function Portfolio() {
  return (
    <section className="section scroll-mt-24" id="projects">
      <div className="container-page">
        <Reveal>
          <span className="tag">Projects</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Demo work that looks like real products
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-3 max-w-2xl text-zinc-300">
            A few examples of the type of premium, modern builds we can deliver for your business.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={0.08 + idx * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="glass group overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.bg}`} />
                  <div className="absolute inset-0 opacity-60 [background:radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.12),transparent_70%)]" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/40 px-3 py-1.5 text-xs font-semibold text-zinc-200 backdrop-blur">
                    <p.Icon className="h-4 w-4 text-indigo-200" />
                    {p.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-indigo-200/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-300/70" />
                    Hover for polish
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
