import React from 'react'

export default function Education() {
  const education = [
    {
      year: '2023 - 2026',
      degree: 'Bachelor (Hons) in Computer Science',
      institution: 'Herald College Kathmandu (Affiliated with University of Wolverhampton, UK)',
      grade: 'Graduate',
    },
    {
      year: '2022',
      degree: '+2 (Higher Secondary Education)',
      institution: 'Reliance International Academy',
      grade: 'GPA: 3.30',
    },
    {
      year: '2020',
      degree: 'Secondary Education Examination (SEE)',
      institution: 'Winsome English Boarding School',
      grade: 'GPA: 3.80',
    },
  ]

  return (
    <section id="education" className="py-stack-xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">

        <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-xs">
          Education
        </h2>
        <p className="text-secondary font-body-md mt-2 mb-stack-lg">
          My academic journey and qualifications.
        </p>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <h3 className="text-xl font-semibold">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600">
                    {item.institution}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-medium">
                    {item.year}
                  </p>
                  <p className="text-blue-600">
                    {item.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}