import React from 'react'

const experiences = [
  
   
]

export default function Experience() {
  return (
    <section className="py-stack-xl bg-surface-container-lowest" id="experience">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-stack-lg">
          <h2 className="font-headline-md text-headline-md text-on-surface">Experience</h2>
          <p className="text-secondary font-body-md mt-2 max-w-2xl">
            Practical analytics work focused on turning messy information into clear decisions.
          </p>
        </div>

        <div className="relative grid gap-stack-md">
          {experiences.map((item, index) => (
            <article
              className="bg-surface border border-outline-variant/20 rounded-xl p-6 bento-item"
              key={item.role}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary" data-icon="work">
                      work
                    </span>
                    <span className="font-label-md text-label-md text-primary">{item.period}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{item.role}</h3>
                  <p className="font-label-md text-label-md text-secondary mt-1">{item.organization}</p>
                </div>
                <span className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md">
                  {index + 1}
                </span>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant mt-4">{item.summary}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.highlights.map((highlight) => (
                  <span
                    className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm"
                    key={highlight}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
