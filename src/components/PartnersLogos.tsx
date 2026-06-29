import { getPartnersPage } from '@/lib/payload-utils'

export default async function PartnersLogos() {
  const p = (await getPartnersPage()) as any

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
    <section className="ht-section ht-section--light" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
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
