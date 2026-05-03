import Navbar   from './components/Navbar'
import Background from './components/Background'
import Hero     from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Why      from './components/Why'
import About    from './components/About'
import CTA      from './components/CTA'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-zinc-950 text-zinc-100">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Why />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
