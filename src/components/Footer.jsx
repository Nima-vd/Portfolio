import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-sm">
        <span className="font-display-lg text-headline-sm text-on-surface">NIMA NORBU SHERPA</span>
        <div className="flex gap-6">
          <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#education">Education</a>
          <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#skills">Skills</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/nima-norbu-sherpa-026819262/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-primary transition-transform hover:-translate-y-1"><ArrowUpRight size={17} /></a>
          <a href="https://github.com/Nima-vd" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-secondary hover:text-primary transition-transform hover:-translate-y-1"><ArrowUpRight size={17} /></a>
          <p className="font-label-sm text-label-sm text-secondary">© 2024 Nima Norbu Sherpa.</p>
          <ArrowUpRight size={15} className="text-primary" />
        </div>
      </div>
    </motion.footer>
  )
}
