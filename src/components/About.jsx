import React from 'react'

export default function About() {
  return (
    <section className="py-stack-xl bg-surface" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md">
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="eyebrow">About</p>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-3 mb-stack-sm">An analytical mindset with business context.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
              I am a Computer Science graduate building a career in data analytics and business intelligence. I approach problems by clarifying the question, checking the quality of the data, and presenting the result in a form people can use.
            </p>
            <div className="p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl mt-stack-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">My Mission</h3>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                My work combines careful problem solving, business understanding, and clear communication. I keep learning so the analysis is not only technically sound, but useful to the person making the decision.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 aspect-square relative rounded-2xl overflow-hidden shadow-sm">
            <img 
              alt="Professional workspace" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhXoeIZxmYDFxrgNkGmm5m7pD6l51sF0G6NE0zoEjtoivLkwiI1mNGJn1vaEk8O7Hp-w1fyGgMAYpJlsyn_hscWBVt1iFeJ6UAV85QjIwDrLTdNCOysd4ifij92udh06X-Rr0ONl8f5xGFCgupsAvgpMeGPTAp92RZi2oo4PzC14UfXDjAOyCdJKZd0w5OYa2gTOLXC66fZv4RRe_lzz0h--g61b-70dZg0dvO5cwDSltKxd1Pk4kSmDBosnYoO56DXjdoR5cr1jY"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
