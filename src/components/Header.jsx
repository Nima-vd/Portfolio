import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" data-icon="analytics">analytics</span>
          <span className="font-display-lg text-headline-sm tracking-tight text-on-surface">NIMA NORBU SHERPA</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a className="font-label-md text-label-md text-primary font-semibold border-b-2 border-primary" href="#hero">Home</a>
          <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#education">Education</a>
          <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#projects">Projects</a>
          <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#skills">Skills</a>
          <a className="font-label-md text-label-md text-secondary hover:text-primary transition-colors" href="#experience">Experience</a>
        </div>
        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md text-label-md transition-all active:scale-95 hover:opacity-90">
          Contact
        </button>
      </div>
    </header>
  )
}
