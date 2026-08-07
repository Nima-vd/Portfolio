import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import localProfile from '../assets/profile.png'
import { MagneticButton, ease } from './Motion'

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 })
  const [title, setTitle] = useState('Data Analyst')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined
    const titles = ['Data Analyst', 'Insight Builder', 'Dashboard Designer']
    let index = 0
    const interval = window.setInterval(() => {
      index = (index + 1) % titles.length
      setTitle(titles[index])
    }, 2600)
    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <section
      className="relative overflow-hidden min-h-[795px] flex items-center hero-grid"
      id="hero"
      onMouseMove={(event) => {
        if (reduceMotion) return
        setPointer({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })
      }}
    >
      <div className="pointer-glow" style={{ left: `${pointer.x}%`, top: `${pointer.y}%` }} />
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 py-stack-xl">
        <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>

          {/* Profile Image + Badge */}
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="flex items-center gap-3 mb-stack-sm">
            <img
              src={localProfile}
              alt="Nima Norbu Sherpa"
              className="w-22 h-23 rounded-full object-cover border-2 border-primary shadow-lg"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }} className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-sm">
            Hi, I'm <span className="text-shimmer">Nima Norbu Sherpa</span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, ease } } }} className="font-label-md text-label-md text-primary mb-stack-sm typing-title">
            {title}<span aria-hidden="true">_</span>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }} className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md leading-relaxed">
            Passionate about transforming raw data into actionable insights.
            I bridge the gap between complex engineering principles and
            sophisticated data analytics.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-stack-sm opacity-100">
            <MagneticButton
              className="relative z-10 bg-[#2d9cdb] text-white px-8 py-4 rounded-lg font-label-md text-label-md text-center shadow-lg shadow-[#2d9cdb]/20 hover:bg-[#51e0bb] hover:text-[#061218] transition-all flex items-center justify-center gap-2"
              href="#about"
            >
              Explore My Journey <ArrowRight size={17} />
            </MagneticButton>

            <MagneticButton
              className="relative z-10 border border-[#6f9eaa] bg-[#10232c] text-white px-8 py-4 rounded-lg font-label-md text-label-md text-center shadow-lg shadow-black/20 hover:border-[#51e0bb] hover:bg-[#173944] transition-all flex items-center justify-center gap-2"
              href="#"
            >
              Download Resume <Download size={16} />
            </MagneticButton>
          </div>

        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary flex flex-col items-center gap-2">
        <span className="font-label-sm text-label-sm tracking-widest">SCROLL TO EXPLORE</span><ArrowDown size={15} />
      </motion.div>
    </section>
  )
}
