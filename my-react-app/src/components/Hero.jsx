import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-500/25 blur-[90px]" />
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
        <div className="absolute left-1/2 top-64 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(circle_at_center,black_25%,transparent_68%)]" />
      </div>

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="tag mx-auto">
              <Sparkles className="h-3.5 w-3.5 text-indigo-200" />
              Available for new projects
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Modern Websites & Business Systems for{' '}
              <span className="bg-gradient-to-r from-indigo-300 via-violet-200 to-sky-200 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg">
              We design and develop fast, professional websites and custom systems that help businesses
              attract more customers and operate more efficiently.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className="btn-outline w-full sm:w-auto">
                View Our Work
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ['10+', 'Projects Delivered'],
                ['100%', 'Client Satisfaction'],
                ['3+', 'Years Experience'],
              ].map(([num, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="glass rounded-2xl px-6 py-5"
                >
                  <div className="text-2xl font-extrabold tracking-tight">{num}</div>
                  <div className="mt-1 text-sm text-zinc-300">{label}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
