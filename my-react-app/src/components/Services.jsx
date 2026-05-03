import { motion } from 'framer-motion'
import { Gauge, Globe, Layers3 } from 'lucide-react'
import Reveal from './Reveal'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Modern, responsive websites designed to represent your business professionally and attract more customers.',
  },
  {
    icon: Layers3,
    title: 'Business Systems',
    desc: 'Custom-built systems like booking platforms, dashboards, and management tools to streamline your operations.',
  },
  {
    icon: Gauge,
    title: 'Website Improvement',
    desc: 'Redesign + optimization of existing websites to improve performance, speed, and user experience.',
  },
]

export default function Services() {
  return (
    <section className="section scroll-mt-24" id="services">
      <div className="container-page">
        <Reveal>
          <span className="tag">Services</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Premium builds for modern businesses
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Clean design, strong performance, and a reliable development partner—from the first draft to launch.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={0.08 + idx * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="glass group relative rounded-2xl p-6"
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 [background:radial-gradient(65%_60%_at_50%_0%,rgba(99,102,241,0.22),transparent_70%)]" />
                  <div className="relative">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                      <Icon className="h-5 w-5 text-indigo-200" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
