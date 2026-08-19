import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ icon, name }) => {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="p-6 bg-surface border border-outline-variant/20 rounded-xl bento-item skill-card">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-primary skill-icon" data-icon={icon}>{icon}</span>
        <span className="font-headline-sm text-headline-sm">{name}</span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
const skills = [
  { icon: 'bar_chart', name: 'Power BI' },
  { icon: 'analytics', name: 'Data Visualization' },
  { icon: 'query_stats', name: 'Data Analysis' },
  { icon: 'terminal', name: 'Python' },
  { icon: 'table_rows', name: 'Excel' },
  { icon: 'database', name: 'SQL' },
  { icon: 'dashboard', name: 'Tableau' },
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
