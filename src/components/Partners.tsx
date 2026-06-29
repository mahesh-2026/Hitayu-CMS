import { getPartnersPage } from '@/lib/payload-utils'

export default async function Partners() {
  const p = (await getPartnersPage()) as any

  const eyebrow = p?.eyebrow || 'Our Partners'
  const titleLine1 = p?.titleLine1 || 'Cloud-Agnostic.'
  const titleHighlight = p?.titleHighlight || 'Your Cloud,'
  const titleLine2 = p?.titleLine2 || 'Your Choice, Our Expertise'
  const shortDescription =
    'We maintain a cloud-agnostic approach — giving you the freedom to choose the Cloud Service Provider that best fits your business needs. Our team brings deep in-house expertise across all leading cloud platforms.'

  const logosTitle = p?.logosTitle || 'Multi-Platform Excellence'
  const logosDescription =
    p?.logosDescription ||
    'Rather than being tied to a single platform, we work across multiple leading cloud ecosystems — ensuring our solutions are flexible, scalable, and aligned with your strategic goals. By partnering with us, you gain access to a broad network of technologies combined with the confidence that solutions are tailored specifically to your requirements — not constrained by vendor limitations.'

  const logos =
    p?.logos && p.logos.length > 0
      ? p.logos
      : [
          { icon: 'fab fa-aws', label: 'Amazon Web Services' },
          { icon: 'fab fa-microsoft', label: 'Microsoft Azure' },
          { icon: 'fab fa-google', label: 'Google Cloud' },
          { icon: 'fas fa-cloud', label: 'Oracle Cloud' },
          { icon: 'fas fa-server', label: 'IBM Cloud' },
        ]

  return (
    <section className="ht-section" id="partners" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-text-center" style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="ht-eyebrow ht-eyebrow--center">{eyebrow}</div>
          <h2 className="ht-title ht-reveal">
            {titleLine1} <span className="hi">{titleHighlight}</span>
            <br />
            {titleLine2}
          </h2>
          <p className="ht-sub ht-reveal" style={{ margin: '16px auto 0' }}>
            {shortDescription}
          </p>
        </div>
        <div className="ht-part-box ht-reveal">
          <div className="ht-part-inner">
            <div className="ht-part-text">
              <h3>{logosTitle}</h3>
              <p>{logosDescription}</p>
            </div>
            <div className="ht-part-logos">
              {logos.map((l: any, i: number) => (
                <div key={i} className="ht-plogo">
                  <i className={l.icon || 'fas fa-cloud'} />
                  <span>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
