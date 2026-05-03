import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Layers, Server, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'Node.js',
  'Tailwind CSS',
  'UI/UX Design',
  'REST APIs',
  'Databases',
]

export default function About() {
  return (
    <section className="section scroll-mt-24" id="about">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <span className="tag">About</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Mekuanint Web Solutions
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 text-zinc-300">
                We are Mekuanint Web Solutions, a software development team focused on building modern websites and
                business systems.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-3 text-zinc-300">
                We care about clean UI, reliable engineering, and making systems that help businesses run
                smoother—from landing pages to full business workflows.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-7 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-semibold text-zinc-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="glass relative overflow-hidden rounded-3xl p-7">
              <div className="absolute inset-0 opacity-70 [background:radial-gradient(70%_70%_at_20%_0%,rgba(99,102,241,0.22),transparent_70%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                      <Sparkles className="h-5 w-5 text-indigo-200" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-200">Core strengths</div>
                      <div className="text-xs text-zinc-400">Design + performance + delivery</div>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-zinc-200">
                    2026
                  </span>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    { Icon: Code2, title: 'Frontend', sub: 'React • Tailwind • Motion' },
                    { Icon: Server, title: 'Backend', sub: 'Node.js • APIs • Auth' },
                    { Icon: Database, title: 'Data', sub: 'SQL • Mongo • Integrations' },
                    { Icon: Cpu, title: 'Systems', sub: 'Dashboards • Workflows' },
                    { Icon: Layers, title: 'UX', sub: 'Clean layouts • Conversion' },
                  ].map((card) => (
                    <motion.div
                      key={card.title}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                          <card.Icon className="h-5 w-5 text-indigo-200" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-zinc-100">{card.title}</div>
                          <div className="text-xs text-zinc-400">{card.sub}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
