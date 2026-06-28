import React, { useEffect, useState } from 'react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificate' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' }
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(`#${visibleEntry.target.id}`)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5]
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="analytics">analytics</span>
          <span className="font-display-lg text-headline-sm tracking-tight text-on-surface">NIMA NORBU SHERPA</span>
        </div>

        <nav className="hidden md:flex gap-8" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href
            const linkClass = isActive
              ? 'font-label-md text-label-md text-primary font-semibold border-b-2 border-primary'
              : 'font-label-md text-label-md text-secondary border-b-2 border-transparent hover:text-primary hover:border-primary/40 transition-colors'

            return (
              <a
                key={item.href}
                className={linkClass}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <a
          className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-95 hover:opacity-90"
          href="#contact"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
