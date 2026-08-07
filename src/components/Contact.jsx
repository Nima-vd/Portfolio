import React, { useState } from 'react'
import { Check, LoaderCircle, Send } from 'lucide-react'
import { motion } from 'framer-motion'

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
  const [status, setStatus] = useState('idle')
  const contactInfo = [
    {
      icon: 'location_on',
      title: 'Location',
      content: 'Bouddha, Kathmandu , Nepal'
    },
    {
      icon: 'call',
      title: 'Phone',
      content: '+977 9803059811'
    },
    {
      icon: 'mail',
      title: 'Email',
      content: 'nimannorbu353@gmail.com'
    }
  ]

  return (
    <section className="py-stack-xl bg-on-background text-on-primary" id="contact">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter text-center">
        <h2 className="font-headline-md text-headline-md mb-stack-sm">Let's Build Something Insightful</h2>
        <p className="text-secondary-fixed-dim font-body-lg text-body-lg mb-stack-lg">Ready to discuss data strategy or collaboration opportunities.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md max-w-4xl mx-auto mb-stack-lg">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
        <motion.form
          onSubmit={async (event) => {
            event.preventDefault()
            setStatus('sending')
            const formData = new FormData(event.currentTarget)
            try {
              const apiBase = import.meta.env.VITE_API_URL
              const endpoint = apiBase ? `${apiBase.replace(/\/$/, '')}/contact` : '/api/contact'
              const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(formData.entries())),
              })
              if (!response.ok) throw new Error('Unable to submit message')
              setStatus('success')
              event.currentTarget.reset()
            } catch {
              setStatus('error')
            }
          }}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="contact-form max-w-3xl mx-auto grid gap-4 text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="grid gap-2 font-label-sm text-label-sm text-secondary-fixed-dim">
              Name
              <input required name="name" type="text" placeholder="Your name" className="contact-input" />
            </label>
            <label className="grid gap-2 font-label-sm text-label-sm text-secondary-fixed-dim">
              Email
              <input required name="email" type="email" placeholder="you@example.com" className="contact-input" />
            </label>
          </div>
          <label className="grid gap-2 font-label-sm text-label-sm text-secondary-fixed-dim">
            Message
            <textarea required name="message" rows="4" placeholder="Tell me about the opportunity..." className="contact-input resize-y" />
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button type="submit" disabled={status === 'sending' || status === 'success'} className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-5 py-3 font-label-md text-label-md text-on-primary-container transition-all hover:bg-primary hover:text-on-primary disabled:cursor-default disabled:opacity-80">
              {status === 'sending' ? <LoaderCircle size={16} className="animate-spin" /> : status === 'success' ? <Check size={16} /> : <Send size={16} />}
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message sent' : status === 'error' ? 'Try again' : 'Send message'}
            </button>
            <p aria-live="polite" className="font-label-sm text-label-sm text-secondary-fixed-dim">
              {status === 'success' ? 'Thanks. I will get back to you soon.' : status === 'error' ? 'The message could not be sent. Please email me directly.' : 'I usually reply within two working days.'}
            </p>
          </div>
        </motion.form>
        <div className="flex justify-center gap-6 flex-wrap">
          <a className="text-white hover:text-primary-container transition-colors flex items-center gap-2" href="https://www.linkedin.com/in/nima-norbu-sherpa-026819262/" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined" data-icon="link">link</span> LinkedIn
          </a>
          <a className="text-white hover:text-primary-container transition-colors flex items-center gap-2" href="#">
            <span className="material-symbols-outlined" data-icon="link">link</span> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
