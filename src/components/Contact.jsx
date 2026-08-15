import React from 'react'

const ContactCard = ({ icon, title, content }) => {
  return (
    <div className="p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
      <span className="material-symbols-outlined text-primary-container text-3xl mb-3" data-icon={icon}>{icon}</span>
      <p className="font-label-md text-label-md">{title}</p>
      {icon === 'mail' ? (
        <a href={`mailto:${content}`} className="font-body-md text-body-md text-secondary-fixed-dim mt-1 hover:underline">
          {content}
        </a>
      ) : icon === 'call' ? (
        <a href={`tel:${content}`} className="font-body-md text-body-md text-secondary-fixed-dim mt-1 hover:underline">
          {content}
        </a>
      ) : (
        <p className="font-body-md text-body-md text-secondary-fixed-dim mt-1">{content}</p>
      )}
    </div>
  )
}

export default function Contact() {
  const contactInfo = [
    {
      icon: 'location_on',
      title: 'Location',
      content: 'Bouddha, Kathmandu, Nepal'
    },
    {
      icon: 'call',
      title: 'Phone',
      content: '+977 9803059811'
    },
    {
      icon: 'mail',
      title: 'Email',
      content: 'workwithnima7@gmail.com'
    }
  ]

  return (
    <section className="py-stack-xl bg-on-background text-on-primary" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
        <p className="eyebrow">Open to opportunities</p>
        <p className="text-secondary-fixed-dim font-body-lg text-body-lg mb-3">I’m open to graduate and entry-level Data Analyst opportunities where I can apply my analytical and technical skills, solve real-world problems, and contribute to data-driven decision-making.</p>
        <p className="text-secondary-fixed-dim font-body-lg text-body-lg font-semibold mb-stack-lg">Email is the fastest way to reach me.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md max-w-4xl mx-auto mb-stack-lg">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          <a className="text-white hover:text-primary-container transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/nima-norbu-sherpa-026819262/" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined" data-icon="link">link</span> LinkedIn
          </a>
          <a className="text-white hover:text-primary-container transition-colors flex items-center gap-2" href="https://github.com/Nima-vd" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined" data-icon="link">link</span> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
