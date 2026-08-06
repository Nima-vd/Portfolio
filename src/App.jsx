import React, { useEffect } from 'react'
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

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links inside the page content only
    const main = document.querySelector('main') || document
    const anchors = main.querySelectorAll('a[href^="#"]')

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          window.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' })
        }
      }
    }

    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick))

    return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick))
  }, [])

  return (
    <div className="scroll-smooth bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Passions />
        <Contact />
      </main>
      <Footer />
      <FAB />
    </div>
  )
}

export default App
