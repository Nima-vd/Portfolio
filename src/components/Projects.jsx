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
  const projects = [
    {
      title: 'Healthcare Analytics',
      description: 'Comprehensive COVID-19 Analysis using advanced Power BI modeling to track recovery and spread rates.',
      tag: 'Power BI',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZJbzw8W34UzEWENdAuoAN3VjHS_nHDm0d-eMdOHemAQlaC24DxR4YB_qQ5-wdFnhnTBq7rpw-MV0CwvSBmAVWjGN1mAawtrKBnwwLRIGUpmnpXLGKmNfYPVZJ_lFGxjWIqpQoMNnMK59mIPMDWyi9ZGyJh6i6OwKPzi-_v1c1BNd0X3wAxpRO8ciTL13Xb36M4QjbvU64rVyt7g7hva33w_zPV3m5h2OXQgNBlIo17oTr6bI5j-REMLMFm-HLO0aEubRpbnuF5kA',
      link: '#'
    },
    {
      title: 'Business Intelligence',
      description: 'In-depth Sales Analysis using Python (Pandas/Matplotlib) to identify seasonal trends and growth opportunities.',
      tag: 'Python',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1xA4k7oKt_VQnqDDmNPPmG0m44pOHBzl4I77UGTU15LWVwBYUzdYDm3pBkxLfUp6xbvdUH2Aas4MA5yDMQi31aAUstSZPLRy4YpdYKzCDy9_itgQ_enU4PeyLzSziRWpMtV0Q7yag3Yh1Fvyr2Tp3cRzXaaDWMDkIL81fflmAZYkOWuKHQ3_RY3Sy78Pwr5oh5q2ixbHd7TQNjVsR6vUXLoGW3gjth_Wlo5wn71g3EC5IG7xlQ9h1kKkRYytV_HyMAE7Dbz6zZcE',
      link: '#'
    },
    {
      title: 'Healthcare Database',
      description: 'Scalable Hospital Management System designed with SQL for efficient patient records and inventory tracking.',
      tag: 'SQL',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-c-E8a_9WipNTaW-sSUEYYFfs_AnE6JHGfN3WWPWYXEoqyg0KmTUPY4Ubgffo4PcvmpPjlLEZS15K-JkcbWOOZN_yTM5g6xnY53SSW6SDSZElX7GrJYmdRCIacJ91IvnCXm0Y0p_-MfEGCLpjXP8oqCtWf2ke1F1BOJPKsdkUi7Rw7K0bV7BeNAywDLD4ZEUnPmH-TNEiqjAl4z_sHJ3AgAB6RDyjrUVcgnMP26hyr34cNaQrQ8gex6ikKK9uBdwV0c8SA1-YvU',
      link: '#'
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
