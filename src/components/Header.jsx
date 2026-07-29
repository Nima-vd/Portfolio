import React, { useEffect, useState } from 'react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' }
]

export default function Header() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(entry => entry.isIntersecting)
        if (visible.length) {
          const topMost = visible.reduce((prev, current) => {
            return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current
          })
          setActiveId(topMost.target.id)
        }
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0.15
      }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
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
        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-95 hover:opacity-90">
          Contact
        </button>
      </div>
    </header>
  )
}
