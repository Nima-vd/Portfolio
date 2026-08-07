import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { motion, useScroll } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Passions from './components/Passions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FAB from './components/FAB'
import { Reveal } from './components/Motion'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, syncTouch: true })
    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  const { scrollYProgress } = useScroll()

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <Header />
      <main className="pt-16">
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal delay={0.05}><Education /></Reveal>
        <Reveal delay={0.05}><Certificates /></Reveal>
        <Reveal delay={0.05}><Skills /></Reveal>
        <Reveal delay={0.05}><Projects /></Reveal>
        <Reveal delay={0.05}><Passions /></Reveal>
        <Reveal delay={0.05}><Contact /></Reveal>
      </main>
      <Footer />
      <FAB />
    </div>
  )
}

export default App
