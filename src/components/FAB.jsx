import React from 'react'

export default function FAB() {
  return (
    <a className="fixed bottom-6 right-6 p-4 bg-primary text-on-primary rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-40 md:hidden flex items-center justify-center" href="tel:+918248437841">
      <span className="material-symbols-outlined" data-icon="phone">phone</span>
    </a>
  )
}
