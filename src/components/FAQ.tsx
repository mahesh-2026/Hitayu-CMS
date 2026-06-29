import { getSiteSettings, getFAQs } from '@/lib/payload-utils'
import FAQAccordion from './FAQAccordion'

const defaultFAQs = [
  { question: 'What is AWS Hosting?',             answer: 'AWS Hosting uses Amazon Web Services infrastructure to provide high-performance, scalable, and secure hosting solutions for businesses of all sizes.' },
  { question: 'Do you provide free SSL certificates?', answer: 'Yes, all hosting plans include free SSL certificates to secure your website and improve trust with your visitors and search engines.' },
  { question: 'Can I migrate my existing website?', answer: 'Yes, we provide free website migration assistance to help move your website to our platform with minimal downtime and zero data loss.' },
  { question: 'How often are backups taken?',      answer: 'Daily automated backups are included with all plans to ensure your data remains protected and recoverable at any time.' },
  { question: 'Can I upgrade my hosting plan later?', answer: 'Absolutely. You can upgrade at any time without any downtime. Resources scale instantly without affecting your website availability.' },
]

export default async function FAQ() {
  const [settings, faqDocs] = await Promise.all([getSiteSettings(), getFAQs()])
  const section = settings?.faqSection

  const tag         = section?.tag         || 'FAQ'
  const title       = section?.title       || 'Frequently Asked\nQuestions'
  const description = section?.description || 'Everything you need to know about our AWS hosting services.'

  const faqs = faqDocs.length > 0
    ? faqDocs.map((f: any) => ({ question: f.question, answer: f.answer }))
    : defaultFAQs

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left sticky header */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <span className="section-tag">{tag}</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] mt-3 mb-5 leading-tight" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">{description}</p>

            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <p className="font-bold text-[#0f172a] mb-1">Still have questions?</p>
              <p className="text-sm text-slate-500 mb-4">Our support team is available 24/7 to help you.</p>
              <a href="#contact" className="btn-primary text-sm px-5 py-3 inline-block text-center">
                Contact Support
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-3">
            <FAQAccordion faqs={faqs} />
          </div>

        </div>
      </div>
    </section>
  )
}
