import React, { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' }
]

export default function Header() {
  const [activeId, setActiveId] = useState('hero')

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

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="analytics">analytics</span>
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
              className={`font-label-md text-label-md transition-colors ${
                activeId === item.id
                  ? 'text-primary font-semibold border-b-2 border-primary'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-95 hover:opacity-90"
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
          Contact
        </button>
      </div>
    </header>
  )
}
