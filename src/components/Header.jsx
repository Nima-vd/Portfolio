import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { BarChart3, Menu, X } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'profile', label: 'Profile' },
  { id: 'education', label: 'Education' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [activeId, setActiveId] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
    if (!sections.length) return undefined

    const updateActiveSection = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0
      const scrollPosition = window.scrollY + headerHeight + 32
      let currentId = sections[0].id

      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition) {
          currentId = section.id
        }
      })

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        currentId = sections[sections.length - 1].id
      }

      setActiveId(currentId)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  const navigateTo = (id) => {
    const target = document.getElementById(id)
    setMenuOpen(false)
    setActiveId(id)

    if (!target) return

    window.requestAnimationFrame(() => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
      window.history.replaceState(null, '', `#${id}`)
    })
  }

  return (
    <motion.header
      ref={headerRef}
      animate={{ y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 transition-[padding] duration-300 ${scrolled ? 'py-1' : ''}`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center gap-3 h-16">
        <div className="min-w-0 flex flex-1 items-center gap-2">
          <BarChart3 size={18} className="text-primary" />
          <span className="truncate font-display-lg text-sm md:text-headline-sm tracking-tight text-on-surface">NIMA NORBU SHERPA</span>
        </div>
        <nav className="hidden lg:flex gap-4 xl:gap-6" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                navigateTo(item.id)
              }}
              className={`group relative font-label-md text-label-md transition-colors py-5 ${
                activeId === item.id
                  ? 'text-primary font-semibold'
                  : 'text-secondary hover:text-primary'
              }`}
            >
              {item.label}
              <span className={`absolute left-0 right-0 bottom-3 h-px origin-left bg-primary transition-transform duration-200 ${
                activeId === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(open => !open)}
          className="lg:hidden shrink-0 text-on-surface p-2 rounded-lg hover:bg-white/10 transition-colors"
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
            className="lg:hidden border-t border-white/10 overflow-hidden"
            aria-label="Mobile navigation"
            id="mobile-navigation"
          >
            <div className="max-w-container-max mx-auto px-margin-mobile py-3 grid gap-1">
              {navItems.map(item => (
                <button key={item.id} type="button" onClick={() => navigateTo(item.id)} className={`text-left px-3 py-3 rounded-lg font-label-md text-label-md ${activeId === item.id ? 'bg-white/10 text-primary' : 'text-secondary'}`}>
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
