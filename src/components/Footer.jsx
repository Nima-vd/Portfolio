import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full py-stack-lg bg-surface-container-lowest border-t border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex flex-col md:flex-row justify-between items-center gap-stack-sm">
        <span className="font-display-lg text-headline-sm text-on-surface">NIMA NORBU SHERPA</span>
        <div className="flex gap-6">
          <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#experience">Experience</a>
          <a className="font-label-sm text-label-sm text-secondary hover:text-primary transition-colors" href="#skills">Skills</a>
        </div>
        <p className="font-label-sm text-label-sm text-secondary">© 2024 Nima Norbu Sherpa.</p>
      </div>
    </footer>
  )
}
