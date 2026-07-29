import React from 'react'

const PassionCard = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-surface-container rounded-xl border border-outline-variant/10 text-center">
      <span className="material-symbols-outlined text-primary text-4xl mb-3" data-icon={icon}>{icon}</span>
      <span className="font-label-md text-label-md">{label}</span>
    </div>
  )
}

export default function Passions() {
  const passions = [
    { icon: 'fitness_center', label: 'Calisthenics' },
    { icon: 'directions_run', label: 'Running' },
    { icon: 'hiking', label: 'Hiking' },
    { icon: 'sports_soccer', label: 'Football' },
    { icon: 'psychology', label: 'Learning' }
  ];


  return (
    <section className="py-stack-xl bg-background">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-lg text-center">Beyond the Data</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {passions.map((passion, index) => (
            <PassionCard key={index} {...passion} />
          ))}
        </div>
      </div>
    </section>
  )
}
