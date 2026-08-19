import React, { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { BookOpen, BriefcaseBusiness, Database, Layers3, Sparkles } from 'lucide-react'

const achievements = [
  { value: 4, label: 'featured projects', detail: 'Across analytics, BI, databases, and web development.' },
  { value: 7, label: 'core tools', detail: 'Power BI, Python, SQL, Excel, Tableau, Figma, and Canva.' },
  { value: 3, label: 'academic qualifications', detail: 'Secondary, higher secondary, and undergraduate study.' },
  { value: 1, label: 'industry simulation', detail: 'Deloitte Australia Data Analytics Job Simulation.' },
]

const stack = [
  { label: 'Programming', items: ['Python',] },
  { label: 'Visualization', items: ['Power BI', 'Tableau', 'Excel'] },
  { label: 'Libraries', items: ['Pandas', 'NumPy', 'Matplotlib'] },
  { label: 'Databases', items: ['MySQL'] },
  { label: 'Tools', items: ['GitHub', 'Figma', 'Canva'] },
]

const learning = ['Advanced SQL', 'Power BI DAX', 'Statistical analysis', 'Data storytelling', 'Machine learning fundamentals']

function AnimatedMetric({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return undefined
    const controls = animate(0, value, { duration: 1.1, ease: 'easeOut', onUpdate: latest => setCount(Math.round(latest)) })
    return () => controls.stop()
  }, [inView, value])

  return <span ref={ref}>{count}</span>
}

const services = [
  { icon: Database, title: 'Data analysis', text: 'Clean, explore, and interpret datasets to surface practical findings.' },
  { icon: Layers3, title: 'BI dashboards', text: 'Turn recurring questions into focused Power BI and visualization experiences.' },
  { icon: BriefcaseBusiness, title: 'Decision support', text: 'Translate technical analysis into clear context for non-technical stakeholders.' },
]

export default function ProfessionalProfile() {
  return (
    <section id="profile" className="py-stack-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="profile-intro grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-stack-lg items-end">
          <div>
            <p className="eyebrow">Professional profile</p>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-3">Aspiring Data Analyst, driven by data and curiosity.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-5 max-w-2xl">
              Computer Science graduate aspiring to build a career as a Data Analyst. Skilled in Python, SQL, Power BI, Excel, and Tableau, with a strong foundation in data analysis, visualization, and dashboard development. Passionate about exploring data, identifying trends, and turning complex information into meaningful insights that support better business decisions.
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-2xl">
              I’m passionate about using data to understand problems, support informed decision-making, and continuously grow my analytical and technical capabilities.
            </p>
          </div>
          <div className="profile-learning glass-panel">
            <div className="flex items-center gap-3 text-primary">
              <BookOpen size={19} />
              <span className="font-label-md text-label-md">Currently learning</span>
            </div>
            <p className="font-headline-sm text-headline-sm text-on-surface mt-4">Building depth where analysis meets decisions.</p>
            <div className="flex flex-wrap gap-2 mt-4">{learning.map(item => <span key={item} className="learning-chip">{item}</span>)}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-stack-lg">
          {achievements.map((achievement, index) => (
            <motion.article key={achievement.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }} className="glass-panel">
              <p className="text-4xl font-semibold text-primary"><AnimatedMetric value={achievement.value} />{achievement.value === 4 || achievement.value === 7 ? '+' : ''}</p>
              <p className="font-label-md text-label-md text-on-surface mt-3">{achievement.label}</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">{achievement.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-stack-lg mt-stack-xl">
          <div>
            <p className="eyebrow">Complete tech stack</p>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-3">Tools chosen for clarity.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {stack.map(group => (
              <div key={group.label} className="stack-group">
                <p className="font-label-md text-label-md text-primary">{group.label}</p>
                <ul className="mt-4 space-y-3">
                  {group.items.map(item => <li key={item} className="font-body-md text-body-md text-on-surface-variant">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-stack-xl">
          <div className="flex items-end justify-between gap-4 mb-stack-md">
            <div><p className="eyebrow">Why work with me</p><h2 className="font-headline-md text-headline-md text-on-surface mt-3">Curious, structured, and easy to work with.</h2></div>
            <Sparkles className="hidden sm:block text-primary" size={24} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map(({ icon: Icon, title, text }) => (
              <div key={title} className="service-card glass-panel">
                <Icon size={21} className="text-primary" />
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-5">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="career-objective mt-stack-xl">
          <p className="eyebrow">What I’m looking for</p>
          <p className="font-headline-sm text-headline-sm text-on-surface mt-3 max-w-3xl">Aspiring Data Analyst seeking an entry-level opportunity to apply skills in SQL, Python, Excel, Power BI, and data visualization to transform data into actionable insights and support data-driven business decisions.</p>
        </div>
      </div>
    </section>
  )
}
