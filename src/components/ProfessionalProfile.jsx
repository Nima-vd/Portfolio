import React, { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Database, Layers3, Sparkles } from 'lucide-react'

const achievements = [
  { value: 4, label: 'featured projects', detail: 'Across analytics, BI, databases, and web development.' },
  { value: 7, label: 'core tools', detail: 'Power BI, Python, SQL, Excel, Tableau, Figma, and Canva.' },
  { value: 3, label: 'academic qualifications', detail: 'Secondary, higher secondary, and undergraduate study.' },
  { value: 1, label: 'industry simulation', detail: 'Deloitte Australia Data Analytics Job Simulation.' },
]

const stack = [
  { label: 'Programming', items: ['Python', 'SQL'] },
  { label: 'Visualization', items: ['Power BI', 'Tableau', 'Excel'] },
  { label: 'Libraries', items: ['Pandas', 'NumPy', 'Matplotlib'] },
  { label: 'Databases', items: ['MySQL'] },
  { label: 'Frontend', items: ['React', 'Tailwind CSS'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'Figma', 'Canva'] },
]

const learning = ['Advanced SQL', 'Power BI DAX', 'Statistical analysis', 'Data storytelling', 'Machine learning fundamentals', 'Business intelligence best practices']

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
            <h2 className="font-headline-md text-headline-md text-on-surface mt-3">Analytical thinking, presented clearly.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-5 max-w-2xl">
              Computer Science graduate focused on data analysis and business intelligence. I use structured analysis, thoughtful visualization, and reliable technical foundations to make complex information easier to act on.
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
          <p className="font-headline-sm text-headline-sm text-on-surface mt-3 max-w-3xl">Graduate and entry-level opportunities in Data Analytics, Business Intelligence, or Business Analysis where I can solve real business problems with data while continuing to grow professionally.</p>
        </div>

        <div className="resume-preview mt-stack-xl">
          <div>
            <p className="eyebrow">Resume preview</p>
            <h2 className="font-headline-sm text-headline-sm text-on-surface mt-2">A concise view of the profile behind the work.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Computer Science graduate · Data analysis · Business intelligence · Kathmandu, Nepal</p>
          </div>
          <div className="resume-preview-meta">
            <span>Education</span><strong>BSc (Hons) Computer Science</strong>
            <span>Focus</span><strong>Analysis, dashboards, and decision support</strong>
            <a href="/resume.pdf" download="Nima-Norbu-Sherpa-Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-container px-5 py-3 font-label-md text-label-md text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors">Download resume <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
