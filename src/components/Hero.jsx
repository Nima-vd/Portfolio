import React from 'react'
import localProfile from '../assets/profile.png'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[795px] flex items-center"
      id="hero"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 py-stack-xl">
        <div className="max-w-3xl">

          {/* Profile Image + Badge */}
          <div className="flex items-center gap-3 mb-stack-sm">
            <img
              src={localProfile}
              alt="Nima Norbu Sherpa"
              className="w-22 h-23 rounded-full object-cover border-2 border-primary shadow-lg"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>

          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-sm">
            Hi, I'm <span className="text-primary">Nima Norbu Sherpa</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md leading-relaxed">
            Passionate about transforming raw data into actionable insights.
            I bridge the gap between complex engineering principles and
            sophisticated data analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-stack-sm">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md text-center hover:opacity-90 transition-all flex items-center justify-center gap-2"
              href="#about"
            >
              Explore My Journey
              <span
                className="material-symbols-outlined"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </a>

            <a
              className="border border-outline-variant bg-surface text-on-surface px-8 py-4 rounded-lg font-label-md text-label-md text-center hover:bg-surface-container-low transition-all"
              href="#"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
