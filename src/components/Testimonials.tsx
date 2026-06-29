import { getTestimonials } from '@/lib/payload-utils'

const defaults = [
  {
    initials: 'RS',
    quote:
      'Hitayu transformed our entire cloud infrastructure in just 8 weeks. Their technical depth and proactive communication made a complex migration feel effortless. Costs dropped 45% and performance has never been better.',
    name: 'Rajesh Sharma',
    role: 'CTO, NexGen Fintech Pvt. Ltd.',
  },
  {
    initials: 'PK',
    quote:
      'The AI diagnostics platform Hitayu built has been a game-changer. Radiologists now focus only on complex cases. Patient turnaround and departmental efficiency have improved dramatically across all our hospitals.',
    name: 'Dr. Priya Krishnamurthy',
    role: 'Director of Digital, MedCare Hospitals',
  },
  {
    initials: 'AM',
    quote:
      'From DevOps to Cybersecurity, Hitayu has been our one true technology partner. Their 24/7 support team is incredibly responsive, always going above and beyond. We genuinely consider them an extension of our team.',
    name: 'Aditya Mehta',
    role: 'VP Engineering, ShopFast Commerce',
  },
]

export default async function Testimonials() {
  const raw = await getTestimonials()
  const items =
    raw.length >= 2
      ? raw.slice(0, 3).map((t: any) => ({
          initials: (t.name || 'U').slice(0, 2).toUpperCase(),
          quote: t.quote || t.content || t.text || '',
          name: t.name || '',
          role: t.role || t.designation || '',
        }))
      : defaults

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="ht-text-center" style={{ maxWidth: 580, margin: '0 auto' }}>
          <div className="ht-eyebrow ht-eyebrow--center">Testimonials</div>
          <h2 className="ht-title ht-reveal">
            Trusted by <span className="hi">Leaders</span> Across Industries
          </h2>
        </div>
        <div className="ht-test-g">
          {items.map((t: any, i: number) => (
            <div key={i} className={`ht-tcard ht-reveal ht-d${i + 1}`}>
              <div className="ht-tstars">★★★★★</div>
              <div className="ht-tq">&ldquo;</div>
              <p>{t.quote}</p>
              <div className="ht-tfoot">
                <div className="ht-tav">{t.initials}</div>
                <div>
                  <div className="ht-tname">{t.name}</div>
                  <div className="ht-trole">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
