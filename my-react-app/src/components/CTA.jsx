import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function CTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-0 h-64 w-64 rounded-full bg-indigo-500/25 blur-[90px]" />
            <div className="absolute -right-10 top-10 h-64 w-64 rounded-full bg-sky-500/20 blur-[90px]" />
            <div className="absolute inset-0 opacity-70 [background:radial-gradient(70%_70%_at_30%_0%,rgba(99,102,241,0.22),transparent_70%)]" />
          </div>

          <div className="relative">
            <Reveal>
              <span className="tag">Call to Action</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let’s Build Your Website
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 max-w-2xl text-zinc-300">
                Tell us what you’re building—we’ll help you create a modern, fast, professional site or system
                that fits your business.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-7">
                <a href="#contact" className="btn-primary">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
