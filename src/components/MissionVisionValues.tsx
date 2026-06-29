import { getAboutPage } from '@/lib/payload-utils'

export default async function MissionVisionValues() {
  const a = (await getAboutPage()) as any

  const mvvEyebrow = a?.mvvEyebrow || 'Our Foundation'
  const mvvTitleLine1 = a?.mvvTitleLine1 || 'Mission, Vision &'
  const mvvTitleHighlight = a?.mvvTitleHighlight || 'Values'
  const mission =
    a?.mission ||
    'To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.'
  const vision =
    a?.vision ||
    'To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth and digital transformation.'
  const values =
    a?.values ||
    'We conduct our business with honesty, transparency, and strong ethical principles in all interactions. We prioritize our clients\' needs by delivering reliable, high-quality cloud solutions that support their long-term success. We strive for the highest standards in performance, quality, and service delivery in everything we do.'

  return (
    <section className="ht-section" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div style={{ textAlign: 'center' }}>
          {/* <div className="ht-eyebrow ht-eyebrow--center">{mvvEyebrow}</div> */}
          <h2 className="ht-title ht-reveal">
            {mvvTitleLine1} <span className="hi">{mvvTitleHighlight}</span>
          </h2>
        </div>
        <div className="ht-mvv-grid">
          <div className="ht-mvv-card ht-reveal">
            <div className="ht-mvv-ico">
              <i className="fas fa-bullseye" />
            </div>
            <h4>Our Mission</h4>
            <p>{mission}</p>
          </div>
          <div className="ht-mvv-card ht-reveal ht-d1">
            <div className="ht-mvv-ico">
              <i className="fas fa-eye" />
            </div>
            <h4>Our Vision</h4>
            <p>{vision}</p>
          </div>
          <div className="ht-mvv-card ht-reveal ht-d2">
            <div className="ht-mvv-ico">
              <i className="fas fa-heart" />
            </div>
            <h4>Our Values</h4>
            <p>{values}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
