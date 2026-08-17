import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react'
import { MagneticButton } from './Motion'

const filters = ['All', 'Power BI', 'Python', 'SQL', 'Excel', 'Tableau', 'Streamlit']
const airbnbDashboardUrl = 'https://public.tableau.com/views/AirBnB_17868643569130/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'

const createSvgImage = (title, accent, secondary, subtitle = 'Data-driven portfolio project') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect width="1200" height="800" rx="36" fill="#0F172A"/><rect x="40" y="40" width="1120" height="720" rx="28" fill="url(#grad)"/><circle cx="930" cy="220" r="140" fill="${secondary}" opacity="0.28"/><circle cx="260" cy="620" r="180" fill="${accent}" opacity="0.22"/><path d="M140 610c90-120 180-180 292-180 120 0 201 58 304 58 94 0 183-48 260-132" stroke="white" stroke-width="18" fill="none" stroke-linecap="round" opacity="0.9"/><text x="180" y="92" fill="white" font-family="Segoe UI, Arial, sans-serif" font-size="36" font-weight="700">${title}</text><text x="180" y="132" fill="rgba(255,255,255,0.82)" font-family="Segoe UI, Arial, sans-serif" font-size="24">${subtitle}</text><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${accent}"/><stop offset="100%" stop-color="${secondary}"/></linearGradient></defs></svg>`
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

const dataAnalyticsProjects = [
  { title: 'Earthquake Risk Analysis', tag: 'Python', category: 'Python', description: 'A Python workflow for collecting, cleaning, and visualizing earthquake event data from the USGS API.', imageSrc: createSvgImage('Earthquake Analysis', '#f59e0b', '#dc2626'), link: 'https://github.com/Nima-vd/Earthquake_analysis', demo: null, problem: 'Make earthquake activity easier to inspect through a repeatable analytical workflow.', dataset: 'USGS earthquake event data.', tools: 'Python, data collection, cleaning, and visualization.', methodology: 'Collect source data, prepare it for analysis, then visualize patterns and risk signals.', dataCleaning: 'Standardize API fields and prepare records for consistent filtering and comparison.', analysis: 'Explore activity by location, timing, and earthquake characteristics.', insights: 'The workflow creates a repeatable view of seismic activity and risk patterns.', value: 'Supports clearer exploration of hazard trends and a foundation for future risk reporting.', challenges: 'Working with changing API responses while maintaining a consistent analysis pipeline.', learned: 'How a reliable data pipeline improves the quality of downstream visual analysis.' },
  { title: 'Data Professional Survey Breakdown', tag: 'Power BI', category: 'Power BI', description: 'An interactive Power BI dashboard highlighting salary, skills, and career insights from a survey of data professionals.', imageSrc: createSvgImage('Power BI Dashboard', '#7c3aed', '#0ea5e9'), link: 'https://github.com/Nima-vd/Data-Professional-Survey-PowerBI', demo: null, problem: 'Turn a broad survey into an accessible view of data-career patterns.', dataset: 'Survey data from data professionals.', tools: 'Power BI, data modeling, dashboard design, and visual analysis.', methodology: 'Organize survey dimensions into interactive views that support comparison and exploration.', dataCleaning: 'Prepare survey fields and categories so comparisons remain consistent across visuals.', analysis: 'Compare salary, skills, and career context through interactive dashboard views.', insights: 'The dashboard makes salary, skills, and career context easier to compare.', value: 'Shows how a broad survey can become a useful decision-support surface.', challenges: 'Presenting varied survey responses without obscuring important differences.', learned: 'How information design affects the usefulness of a business dashboard.' },
  { title: 'Online Retail Sales Analysis', tag: 'Power BI', category: 'Power BI', description: 'An interactive Power BI dashboard analyzing online retail sales data with insights into revenue, products, customers, and year-over-year growth trends.', imageSrc: createSvgImage('Online Retail Analysis', '#8b5cf6', '#06b6d4'), link: 'https://github.com/Nima-vd/online-retail-powerbi-analysis', demo: null, problem: 'Transform raw retail transaction data into an interactive business intelligence dashboard that provides actionable insights into sales performance and business metrics.', dataset: 'Online retail transaction data from two yearly periods.', tools: 'Microsoft Power BI, Power Query, DAX, Data Modeling, Excel, and Data Visualization.', methodology: 'Combine and prepare data using Power Query, create a date table for time-based analysis, establish data relationships, and build multi-page dashboards with interactive visualizations.', dataCleaning: 'Combined yearly datasets, transformed data types, created calculated revenue columns, and prepared the dataset for comprehensive analysis.', analysis: 'Analyzed sales performance through three dashboard pages: Executive Overview (revenue, orders, customers, KPIs), Product & Customer Analysis (top products, top customers, revenue patterns), and Geographic & Time Analysis (country performance, monthly trends, year-over-year growth).', insights: 'The dashboards reveal key metrics including total revenue, order and customer counts, top-performing products and countries, average order value, revenue per customer, and year-over-year growth patterns.', value: 'Provides business stakeholders with a comprehensive view of retail performance enabling data-driven decision-making across sales, product, and geographic dimensions.', challenges: 'Working with data preparation at scale, creating meaningful DAX measures, and designing intuitive dashboards that answer multiple business questions simultaneously.', learned: 'Power Query data transformation, data modeling and relationships, DAX measures (SUM vs SUMX), date functions, drill-down capabilities, conditional formatting, and building multi-page interactive dashboards.' },
  {
    title: 'Airbnb Data Analytics Dashboard',
    tag: 'Tableau',
    category: 'Tableau',
    label: 'Data Analytics / Data Visualization',
    tags: ['Tableau Public', 'Data Analytics', 'Data Visualization'],
    description: 'An interactive Tableau dashboard analysing Airbnb listings, pricing, property characteristics, geographic differences, and trends over time.',
    imageSrc: createSvgImage('Airbnb Tableau Dashboard', '#e11d48', '#0ea5e9', 'Airbnb pricing and listing insights'),
    link: airbnbDashboardUrl,
    linkLabel: 'View Dashboard',
    showDemoStatus: false,
    caseStudyRows: [
      ['Overview', 'An interactive Tableau dashboard analysing Airbnb listings, pricing, property characteristics, geographic differences, and trends over time. The project transforms Airbnb data into meaningful business insights for pricing and market review.'],
      ['Business Questions', 'How does property size relate to average Airbnb price? Which property sizes dominate the Airbnb market? How does average price vary by location? What trends can be observed over time?'],
      ['Tools and Skills', 'Tableau Public, data visualization, calculated fields, bins, joins, relationships, geographic analysis, and time-series analysis.'],
      ['Key Insights', 'Property Size and Pricing: average price increased from 96.2 for 1-bedroom properties to 584.8 for 6-bedroom properties. Market Composition: the dataset contains 1,811 one-bedroom listings compared with only 5 six-bedroom listings. Location and Pricing: average prices vary considerably across ZIP codes. Overall Trend: the time-series analysis shows an upward trend, increasing from approximately 1,000K to 2,100K.'],
      ['Dashboard Preview', 'The dashboard presents Airbnb pricing, listing composition, bedroom count differences, ZIP-code pricing variation, and time-series movement in a single Tableau Public view.'],
      ['Tableau Dashboard Link', 'Use the View Dashboard button to open the interactive Tableau Public dashboard in a new tab.'],
    ],
  },
  { title: 'Economic Indicators Dashboard', tag: 'Streamlit', category: 'Streamlit', description: 'A Streamlit dashboard analysing GDP growth, inflation, and remittance trends over a multi-year period.', imageSrc: createSvgImage('Economic Dashboard', '#10b981', '#0f766e'), link: 'https://github.com/Nima-vd/Nepal-Economic-Dashboard', demo: null, problem: 'Make long-term economic indicators easier to explore together through an interactive dashboard.', dataset: 'Economic indicator time-series data from 2000 to 2023.', tools: 'Python, Streamlit, data preparation, and interactive visualization.', methodology: 'Bring multiple indicators into one navigable dashboard for trend comparison.', dataCleaning: 'Align indicator names, years, and values to support consistent time-series views.', analysis: 'Compare GDP growth, inflation, and remittance trends across the shared period.', insights: 'Users can inspect multiple indicators across the same time window and identify key shifts.', value: 'Creates a clearer starting point for contextual economic analysis and stakeholder review.', challenges: 'Making indicators with different scales readable in one dashboard.', learned: 'How interactive controls can make longitudinal analysis more approachable.' },
]

const academicProjects = [
  {
    title: 'Road Safety Reporting Platform',
    tag: 'Final Year Project',
    category: 'Academic Projects',
    label: 'Final Year Project · Full-Stack Web Application',
    description: 'A final-year full-stack web application for structured road safety incident reporting, management, and administrative data visualization.',
    imageSrc: createSvgImage('Road Safety Platform', '#14b8a6', '#2563eb', 'Academic full-stack project'),
    link: 'https://github.com/Nima-vd/sadaksachet',
    demo: null,
    problem: 'Develop a centralized platform for collecting, managing, reviewing, and visualizing road safety incident reports through different user roles.',
    dataset: 'Structured road safety incident reports submitted by users through the platform.',
    tools: 'Full-stack web development, database management, role-based access control, data collection, dashboard development, charts, and data visualization.',
    methodology: 'Designed a role-based workflow where Citizens submit incident reports, Staff manage and review reports, and Administrators monitor collected incident data through charts and visual reports.',
    dataCleaning: 'Applied input validation and structured data handling to maintain consistent and reliable incident records before storing them in the database.',
    analysis: 'The Admin dashboard uses the collected incident data to generate charts and visualizations. These visual reports help Administrators monitor reported incidents and understand patterns within the available data.',
    insights: 'The Admin visualizations provide a clear overview of reported road safety incidents and help Administrators identify patterns and differences within the collected incident records.',
    value: 'The platform combines structured data collection, database management, and administrative data visualization to support organized monitoring and review of road safety incidents.',
    challenges: 'Designing separate workflows for Citizens, Staff, and Administrators while ensuring reliable data collection, database management, and meaningful Admin dashboard visualizations.',
    learned: 'Gained practical experience in database-backed application development, structured data collection, role-based systems, dashboard development, and presenting data through charts and visualizations.',
  },
]

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ delay: index * 0.07 }} className="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden project-card" style={{ perspective: 900 }}>
      <div className="aspect-video bg-surface-container-high overflow-hidden relative">
        <img alt={`${project.title} project preview`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.imageSrc} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09171d]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-label-sm">{project.tag}</span>
      </div>
      <div className="p-6">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{project.title}</h3>
        {project.label ? <p className="font-label-sm text-label-sm text-primary mb-3">{project.label}</p> : null}
        <p className="font-body-md text-body-md text-on-surface-variant mb-5">{project.description}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <MagneticButton className="text-primary font-label-md text-label-md inline-flex items-center gap-2" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel || 'GitHub'} <ArrowUpRight size={15} /></MagneticButton>
          {project.demo ? <a className="text-secondary font-label-md text-label-md inline-flex items-center gap-2 hover:text-primary transition-colors" href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a> : <span className="text-secondary/70 font-label-sm text-label-sm inline-flex items-center gap-2"><ExternalLink size={14} /> Demo not published</span>}
          <button type="button" onClick={() => setExpanded(open => !open)} aria-expanded={expanded} className="ml-auto text-secondary hover:text-primary transition-colors" aria-label={`${expanded ? 'Hide' : 'Show'} ${project.title} case study`}><ChevronDown size={18} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} /></button>
        </div>
        <AnimatePresence initial={false}>
          {expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><dl className="case-study-grid mt-6 pt-5 border-t border-outline-variant/20">{(project.caseStudyRows || [['Problem', project.problem], ['Dataset', project.dataset], ['Tools used', project.tools], ['Methodology', project.methodology], ['Data handling', project.dataCleaning], ['Analysis and visualization', project.analysis], ['Key insights', project.insights], ['Value', project.value], ['Challenges', project.challenges], ['What I learned', project.learned]]).map(([label, text]) => text ? <div key={label}><dt className="font-label-sm text-label-sm text-primary">{label}</dt><dd className="font-body-md text-body-md text-on-surface-variant mt-1">{text}</dd></div> : null)}</dl></motion.div>}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects = useMemo(() => activeFilter === 'All' ? dataAnalyticsProjects : dataAnalyticsProjects.filter(project => project.category === activeFilter), [activeFilter])
  return (
    <section className="py-stack-xl bg-surface" id="projects">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-stack-lg"><div><p className="eyebrow">Selected work</p><h2 className="font-headline-md text-headline-md text-on-surface mt-3">Projects with a point of view.</h2><p className="text-secondary font-body-md mt-2 max-w-2xl">A focused sample of data analytics work and academic application development. Open a case study to see the problem, method, and project context.</p></div><div className="project-stats"><span><strong>04</strong> analytics</span><span><strong>01</strong> academic</span></div></div>
        <div className="mb-stack-md">
          <p className="eyebrow">Data Analytics Projects</p>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-3">Analysis, dashboards, and data-focused workflows.</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6" role="group" aria-label="Filter projects by technology">{filters.map(filter => <button type="button" key={filter} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`filter-chip ${activeFilter === filter ? 'is-active' : ''}`}>{filter}</button>)}</div>
        {filteredProjects.length ? <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">{filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div> : <div className="empty-projects glass-panel"><p className="font-label-md text-label-md text-primary">{activeFilter} projects</p><p className="font-body-md text-body-md text-on-surface-variant mt-2">No {activeFilter.toLowerCase()} project is published in the current portfolio yet.</p></div>}

        <div className="mt-stack-xl mb-stack-md">
          <p className="eyebrow">Academic Projects</p>
          <h3 className="font-headline-sm text-headline-sm text-on-surface mt-3">Full-stack academic work with structured data collection and admin dashboard visualization.</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
          {academicProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  )
}
