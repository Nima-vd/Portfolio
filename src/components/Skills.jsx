import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ icon, name, percentage }) => {
  const [animatedWidth, setAnimatedWidth] = useState('0%')
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimatedWidth(`${percentage}%`)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1 })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [percentage])

  return (
    <motion.div ref={ref} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="p-6 bg-surface border border-outline-variant/20 rounded-xl bento-item skill-card">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary skill-icon" data-icon={icon}>{icon}</span>
          <span className="font-headline-sm text-headline-sm">{name}</span>
        </div>
        <span className="font-label-md text-label-md text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
        <motion.div 
          className="progress-bar bg-primary-container h-full"
          initial={{ width: '0%' }}
          animate={{ width: animatedWidth }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
const skills = [
  { icon: 'bar_chart', name: 'Power BI', percentage: 90 },
  { icon: 'analytics', name: 'Data Visualization', percentage: 90 },
  { icon: 'query_stats', name: 'Data Analysis', percentage: 90 },
  { icon: 'terminal', name: 'Python', percentage: 85 },
  { icon: 'table_rows', name: 'Excel', percentage: 85 },
  { icon: 'database', name: 'SQL', percentage: 85 },
  { icon: 'dashboard', name: 'Tableau', percentage: 80 },
]
  return (
    <section className="py-stack-xl bg-surface-container-lowest" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center mb-stack-lg">
        <h2 className="font-headline-md text-headline-md text-on-surface">Technical Arsenal</h2>
        <p className="text-secondary font-body-md max-w-xl mx-auto mt-2">Specialized toolset for advanced data manipulation and visualization.</p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-stack-md">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  )
}
