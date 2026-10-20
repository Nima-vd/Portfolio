import React from 'react'
import { Award, BriefcaseBusiness, ExternalLink } from 'lucide-react'

const experience = [
  {
    type: 'Internship',
    title: 'Data Visualization Associate (Early Remote Internship)',
    organization: 'Excelerate',
    date: 'Sep 2026 - Oct 2026 · 2 mos',
    location: 'Dubai, United Arab Emirates · Remote',
    icon: BriefcaseBusiness,
    description: 'Developed practical data analytics and visualization skills through analyzing learner and opportunity datasets to identify trends, build interactive dashboards, and generate actionable business insights.',
    highlights: [
      'Analyzed learner and opportunity data to identify trends and patterns.',
      'Developed data visualization skills to present findings clearly and effectively.',
      'Practiced critical thinking and information literacy to interpret data and support data-driven decisions.',
      'Strengthened communication, collaboration, and technology literacy skills while working in a remote learning environment.',
    ],
  },
  {
    type: 'Certificate',
    title: 'Data Analyst Bootcamp 2026',
    organization: 'Alex The Analyst',
    date: 'Issued Aug 2026 · Expires Dec 2036',
    icon: Award,
    description: 'Successfully completed the 24+ hour Data Analyst Bootcamp by Alex Freberg, covering SQL, Excel, Python, Power BI, R, and AWS.',
    link: 'https://www.youtube.com/watch?v=cnjhHZNJEDk&t=96030s',
    linkLabel: 'View credential',
  },
  {
    type: 'Job simulation',
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    organization: 'Forage',
    date: 'Issued Jun 2026',
    icon: Award,
    description: 'Completed a data analytics job simulation involving data analysis and forensic technology. Created a Tableau dashboard and used Excel to classify data and draw business conclusions.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-stack-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-stack-lg">
          <p className="eyebrow">Career and credentials</p>
          <h2 className="font-headline-md text-headline-md text-on-surface mt-3">Experience</h2>
          <p className="text-secondary font-body-md mt-2">Professional experience and applied data analytics training.</p>
        </div>

        <div className="space-y-5">
          {experience.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="bg-surface border border-outline-variant/30 rounded-xl shadow-md p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-primary-container text-on-primary-container p-3" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                      <div>
                        <p className="font-label-md text-label-md text-primary">{item.type}</p>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">{item.title}</h3>
                        <p className="font-body-md text-on-surface-variant mt-1">{item.organization}</p>
                      </div>
                      <div className="md:text-right shrink-0">
                        <p className="font-label-md text-label-md text-on-surface">{item.date}</p>
                        {item.location && <p className="font-body-sm text-secondary mt-1">{item.location}</p>}
                      </div>
                    </div>
                    <p className="font-body-md text-on-surface-variant mt-4">{item.description}</p>
                    {item.highlights && (
                      <ul className="mt-3 space-y-2 text-on-surface-variant font-body-md">
                        {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="text-primary" aria-hidden="true">•</span><span>{highlight}</span></li>)}
                      </ul>
                    )}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:underline mt-4">
                        {item.linkLabel}<ExternalLink size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}