import React from 'react'

export default function About() {
  return (
    <section className="py-stack-xl bg-surface" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-md">
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">Who I Am</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
              A dedicated Computer Science graduate with a passion for data analysis. My background in CS has help my analytical thinking and programming expertise, allowing me to approach data challenges with precision and creativity.
            </p>
            <div className="p-6 bg-surface-container-low border border-outline-variant/30 rounded-xl mt-stack-sm">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2">My Mission</h3>
              <p className="font-body-md text-body-md text-on-surface-variant italic">
                "To transform complex datasets into clear, actionable insights through structured analysis and transparent storytelling."
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
