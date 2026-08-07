import React, { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight, BarChart3 } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
]

export default function Header() {
  const [activeId, setActiveId] = useState('hero')
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
    if (!sections.length) return

    const getCurrentSection = () => {
      const scrollPosition = window.scrollY + 120
      const current = sections
        .filter(section => section.offsetTop <= scrollPosition)
        .sort((a, b) => b.offsetTop - a.offsetTop)[0]
      return current || sections[0]
    }

    const updateActive = () => {
      const currentSection = getCurrentSection()
      if (currentSection) {
        setActiveId(currentSection.id)
      }
    }

    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()

    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()
    setHidden(latest > 120 && latest > previous)
  })

  return (
    <motion.header
      animate={{ y: hidden ? '-110%' : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-primary" />
          <span className="font-display-lg text-headline-sm tracking-tight text-on-surface">NIMA NORBU SHERPA</span>
        </div>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                setActiveId(item.id)
                const target = document.getElementById(item.id)
                if (target) {
                  const offset = 88
                  const top = target.getBoundingClientRect().top + window.scrollY - offset
                  window.scrollTo({ top, behavior: 'smooth' })
                }
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
        </div>
        <button
          className="group bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-95 hover:bg-primary hover:text-on-primary"
          onClick={() => {
            const target = document.getElementById('contact')
            if (target) {
              const offset = 88
              const top = target.getBoundingClientRect().top + window.scrollY - offset
              window.scrollTo({ top, behavior: 'smooth' })
              setActiveId('contact')
            }
          }}
        >
          Contact <ArrowUpRight size={15} className="inline ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.header>
  )
}
