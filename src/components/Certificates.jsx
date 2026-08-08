import React from 'react'

export default function Certificates() {
  return (
    <section id="certificates" className="py-stack-xl bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="mb-stack-lg">
          <p className="eyebrow">Credentials</p>
          <h2 className="font-headline-md text-headline-md text-on-surface mt-3">Certifications</h2>
          <p className="text-secondary font-body-md mt-2">Verified learning evidence, with room for future certificates.</p>
        </div>

        <div className="bg-surface border border-outline-variant/30 rounded-2xl overflow-hidden shadow-md certificate-card">
          <div className="p-4 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface break-words">
                  Deloitte Australia Data Analytics Job Simulation on Forage
                </h3>
                <p className="text-primary font-label-md text-label-md mt-2">June 21, 2026</p>
              </div>
            </div>

            <ul className="space-y-3 text-on-surface-variant font-body-md text-body-md">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="check_circle">check_circle</span>
                <span>Completed a Deloitte job simulation involving data analysis and forensic technology.</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="dashboard">dashboard</span>
                <span>Created a data dashboard using Tableau.</span>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-primary text-xl" data-icon="table_chart">table_chart</span>
                <span>Used Excel to classify data and draw business conclusions.</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-high p-3 sm:p-4">
            <div className="rounded-xl border border-outline-variant/30 bg-white p-4 sm:p-6 text-center text-on-surface-variant">
              <span className="material-symbols-outlined text-5xl text-primary" data-icon="workspace_premium">workspace_premium</span>
              <p className="mt-3 font-body-md text-body-md">Certificate details and proof can be shared upon request.</p>
            </div>
          </div>
          <div className="px-4 pb-6 sm:px-8 sm:pb-8">
            <p className="font-label-sm text-label-sm text-secondary">Certification archive</p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Additional credentials will be added here as they are completed and verified.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
