import React from 'react'

const ProjectCard = ({ title, description, tag, imageSrc, link }) => {
  return (
    <div className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-video bg-surface-container-high overflow-hidden relative">
        <img 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          src={imageSrc}
        />
        <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-label-sm">{tag}</div>
      </div>
      <div className="p-6">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4">{description}</p>
        <a className="text-primary font-label-md text-label-md flex items-center gap-2 group-hover:gap-3 transition-all" href={link}>
          View Case Study <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span>
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const createSvgImage = (title, accent, secondary) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
        <rect width="1200" height="800" rx="36" fill="#0F172A"/>
        <rect x="40" y="40" width="1120" height="720" rx="28" fill="url(#grad)"/>
        <circle cx="930" cy="220" r="140" fill="${secondary}" opacity="0.28"/>
        <circle cx="260" cy="620" r="180" fill="${accent}" opacity="0.22"/>
        <path d="M140 610c90-120 180-180 292-180 120 0 201 58 304 58 94 0 183-48 260-132" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.9"/>
        <rect x="180" y="190" width="300" height="120" rx="20" fill="rgba(255,255,255,0.16)"/>
        <rect x="220" y="226" width="220" height="16" rx="8" fill="white" opacity="0.9"/>
        <rect x="220" y="258" width="160" height="12" rx="6" fill="white" opacity="0.7"/>
        <text x="180" y="92" fill="white" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="700">${title}</text>
        <text x="180" y="132" fill="rgba(255,255,255,0.82)" font-family="Segoe UI, Arial, sans-serif" font-size="24">Data-driven portfolio project</text>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${accent}"/>
            <stop offset="100%" stop-color="${secondary}"/>
          </linearGradient>
        </defs>
      </svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  const projects = [
    {
      title: 'Nepal Earthquake Risk Analysis',
      description: 'Python workflow for collecting, cleaning, and visualizing earthquake data from the USGS API for Nepal.',
      tag: 'Python',
      imageSrc: createSvgImage('Earthquake Analysis', '#f59e0b', '#dc2626'),
      link: 'https://github.com/Nima-vd/Earthquake_analysis'
    },
    {
      title: 'Sadaksachet',
      description: 'Final year project focused on road safety and community-driven reporting for Nepal.',
      tag: 'Full Stack',
      imageSrc: createSvgImage('Sadaksachet', '#14b8a6', '#2563eb'),
      link: 'https://github.com/Nima-vd/sadaksachet'
    },
    {
      title: 'Data Professional Survey Breakdown',
      description: 'Interactive Power BI dashboard that highlights salary, skills, and career insights from a survey of data professionals.',
      tag: 'Power BI',
      imageSrc: createSvgImage('Power BI Dashboard', '#7c3aed', '#0ea5e9'),
      link: 'https://github.com/Nima-vd/Data-Professional-Survey-PowerBI'
    },
    {
      title: 'Nepal Economic Indicators Dashboard',
      description: 'Streamlit dashboard analyzing GDP growth, inflation, and remittance trends in Nepal from 2000 to 2023.',
      tag: 'Streamlit',
      imageSrc: createSvgImage('Economic Dashboard', '#10b981', '#0f766e'),
      link: 'https://github.com/Nima-vd/Nepal-Economic-Dashboard'
    }
  ]

  return (
    <section className="py-stack-xl bg-surface" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex items-end justify-between mb-stack-lg">
          <div>
            <h2 className="font-headline-md text-headline-md text-on-surface">Featured Projects</h2>
            <p className="text-secondary font-body-md mt-2">Translating complex datasets into visual stories.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
