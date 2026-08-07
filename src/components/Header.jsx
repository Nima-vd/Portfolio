import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight, BarChart3, Menu, X } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'profile', label: 'Profile' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
]

export default function Header() {
  const [activeId, setActiveId] = useState('hero')
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveId(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.35, 0.6] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    setHidden(latest > 120 && latest > previous)
    setScrolled(latest > 24)
  })

  const navigateTo = (id) => {
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <motion.header
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 transition-[padding] duration-300 ${scrolled ? 'py-1' : ''}`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-primary" />
          <span className="font-display-lg text-headline-sm tracking-tight text-on-surface">NIMA NORBU SHERPA</span>
        </div>
        <nav className="hidden md:flex gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                navigateTo(item.id)
              }}
              className={`relative font-label-md text-label-md transition-colors py-5 ${
                activeId === item.id
                  ? 'text-primary font-semibold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {item.label}
              {activeId === item.id && <motion.span layoutId="active-nav" className="absolute left-0 right-0 bottom-3 h-px bg-primary" />}
            </a>
          ))}
        </nav>
        <button
          className="group bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-95 hover:bg-primary hover:text-on-primary"
          onClick={() => navigateTo('contact')}
        >
          Contact <ArrowUpRight size={15} className="inline ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
          className="md:hidden text-on-surface p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-white/10 overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="max-w-container-max mx-auto px-margin-mobile py-3 grid gap-1">
              {navItems.map(item => (
                <button key={item.id} type="button" onClick={() => navigateTo(item.id)} className={`text-left px-3 py-3 rounded-lg font-label-md text-label-md ${activeId === item.id ? 'bg-white/10 text-primary' : 'text-secondary'}`}>
                  {item.label}
                </button>
              ))}
              <button type="button" onClick={() => navigateTo('contact')} className="text-left px-3 py-3 rounded-lg font-label-md text-label-md text-primary">Contact</button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
