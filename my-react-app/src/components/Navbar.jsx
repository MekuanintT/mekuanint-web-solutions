import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  ['Services', '#services'],
  ['Projects', '#projects'],
  ['About', '#about'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={[
            'transition-all duration-300',
            scrolled ? 'bg-zinc-950/70 backdrop-blur-xl border-b border-white/10' : 'bg-transparent',
          ].join(' ')}
        >
          <div className="container-page flex h-16 items-center justify-between">
            <a href="#home" className="group inline-flex items-center gap-2">
              <span className="text-[15px] font-extrabold tracking-tight sm:text-lg">
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-sky-300 bg-clip-text text-transparent">
                  Mekuanint
                </span>{' '}
                <span className="text-zinc-100">Web Solutions</span>
              </span>
              <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300 sm:inline-flex">
                Business Solutions
              </span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium text-zinc-300 transition hover:text-white"
                >
                  {label}
                </a>
              ))}
              <a href="#contact" className="btn-primary">
                Hire Us
              </a>
            </nav>

            <button
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-2 text-zinc-100 transition hover:bg-white/[0.06] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 1, 0.21, 1] }}
              className="absolute left-4 right-4 top-20 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-5">
                {links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-semibold tracking-tight text-zinc-100"
                  >
                    {label}
                  </a>
                ))}
                <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
                  Hire Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
