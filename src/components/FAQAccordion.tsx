'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = { question: string; answer: string }

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="faq-wrapper">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{faq.question}</span>
            <ChevronDown size={20} className={open === index ? 'rotate' : ''} />
          </button>
          {open === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  )
}
