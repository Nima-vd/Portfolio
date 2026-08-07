import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import localProfile from '../assets/profile.png'
import { ease } from './Motion'

export default function Hero() {
  const [title, setTitle] = useState('Data Analyst')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const reduceMotion = useReducedMotion()
  const pointerX = useSpring(useMotionValue(50), { stiffness: 110, damping: 24 })
  const pointerY = useSpring(useMotionValue(40), { stiffness: 110, damping: 24 })

  useEffect(() => {
    const titles = ['Data Analyst', 'Business Analyst', 'BI Developer']
    if (reduceMotion) {
      setTitle(titles[0])
      return undefined
    }
    const phrase = titles[titleIndex]
    const finishedTyping = title === phrase && !isDeleting
    const finishedDeleting = title.length === 0 && isDeleting
    const timeout = window.setTimeout(() => {
      if (finishedTyping) {
        setIsDeleting(true)
      } else if (finishedDeleting) {
        setIsDeleting(false)
        setTitleIndex((index) => (index + 1) % titles.length)
      } else {
        const nextLength = title.length + (isDeleting ? -1 : 1)
        setTitle(phrase.slice(0, nextLength))
      }
    }, finishedTyping ? 1500 : finishedDeleting ? 350 : isDeleting ? 42 : 78)
    return () => window.clearTimeout(timeout)
  }, [isDeleting, reduceMotion, title, titleIndex])

  const handlePointerMove = (event) => {
    if (reduceMotion) return
    pointerX.set(event.clientX)
    pointerY.set(event.clientY)
  }

  return (
    <section
      className="relative overflow-hidden min-h-[795px] flex items-center hero-grid"
      id="hero"
      onPointerMove={handlePointerMove}
    >
      <div className="hero-blob hero-blob-one" aria-hidden="true" />
      <div className="hero-blob hero-blob-two" aria-hidden="true" />
      <motion.div className="pointer-glow" style={{ left: pointerX, top: pointerY }} aria-hidden="true" />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 py-stack-xl">
        <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>

          {/* Profile Image + Badge */}
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="flex items-center gap-3 mb-stack-sm">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
              transition={{ opacity: { duration: 0.7 }, scale: { duration: 0.7 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
              src={localProfile}
              alt="Nima Norbu Sherpa"
              className="h-[165px] w-[120px] rounded-full object-cover border-2 border-primary shadow-lg"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }} className="hero-copy font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-sm">
            Data Analyst <span className="text-shimmer">| Business Intelligence</span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="hero-copy font-headline-sm text-headline-sm text-on-surface mb-stack-sm">
            Nima Norbu Sherpa
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="hero-copy font-label-md text-label-md text-primary mb-stack-sm">
            Python · SQL · Power BI · Excel
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, ease } } }} className="hero-copy font-label-md text-label-md text-primary mb-stack-sm typing-title">
            {title}<span aria-hidden="true" className="typing-cursor">|</span>
          </motion.p>
          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="hero-copy font-body-lg text-body-lg text-on-surface-variant mb-stack-md leading-relaxed">
            I turn structured analysis into clear business decisions through dashboards, data storytelling, and practical problem solving. I am seeking graduate and entry-level opportunities in data analytics, business intelligence, and business analysis.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-stack-sm opacity-100">
            <a
              href="#about"
              style={{ color: '#ffffff', opacity: 1 }}
              className="relative z-10 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2d9cdb] px-8 py-4 text-center font-label-md text-label-md text-white shadow-lg shadow-[#2d9cdb]/20 transition-all hover:bg-[#51e0bb] hover:text-[#061218]"
            >
              Explore My Journey <ArrowRight size={17} />
            </a>
            <a
              href="/resume.pdf"
              download="Nima-Norbu-Sherpa-Resume.pdf"
              style={{ color: '#ffffff', opacity: 1 }}
              className="relative z-10 inline-flex items-center justify-center gap-2 rounded-lg border border-[#6f9eaa] bg-[#10232c] px-8 py-4 text-center font-label-md text-label-md text-white shadow-lg shadow-black/20 transition-all hover:border-[#51e0bb] hover:bg-[#173944]"
            >
              Download My Resume <Download size={16} />
            </a>
          </div>

        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary flex flex-col items-center gap-2">
        <span className="font-label-sm text-label-sm tracking-widest">SCROLL TO EXPLORE</span><ArrowDown size={15} />
      </motion.div>
    </section>
  )
}
