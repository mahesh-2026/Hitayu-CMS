import { getCareersPage } from '@/lib/payload-utils'

export default async function CareersTraits() {
  const c = (await getCareersPage()) as any

  const traitsEyebrow = c?.traitsEyebrow || "Who We're Looking For"
  const traitsTitle = c?.traitsTitle || "We're always on the lookout for passionate individuals who are:"

  const traits =
    c?.traits && c.traits.length > 0
      ? c.traits
      : [
          { text: 'Curious and eager to learn' },
          { text: 'Problem-solvers with a proactive mindset' },
          { text: 'Team players with strong communication skills' },
          { text: 'Driven to deliver high-quality results' },
        ]

  return (
    <section className="ht-section ht-section--dark" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container" style={{ maxWidth: 880 }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          {/* <div className="ht-eyebrow ht-eyebrow--center ht-reveal">{traitsEyebrow}</div> */}
          <h2 className="ht-title ht-reveal">{traitsTitle}</h2>
        </div>
        <div className="ht-traits-grid">
          {traits.map((t: any, i: number) => (
            <div key={i} className={`ht-career-check ht-reveal ht-d${(i % 4) + 1}`}>
              <i className="fas fa-check" />
              <span>{t.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
