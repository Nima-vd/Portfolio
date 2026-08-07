import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, className = '' }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 350, damping: 22 })
  const springY = useSpring(y, { stiffness: 350, damping: 22 })

  const handleMove = (event) => {
    if (reduceMotion || !ref.current) return
    const bounds = ref.current.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18)
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  )
}