import { getPartnersPage } from '@/lib/payload-utils'

export default async function PartnersCTA() {
  const p = (await getPartnersPage()) as any

  const tagline = p?.tagline || 'Your cloud. Your choice. Our expertise.'
  const ctaButtonText = p?.ctaButtonText || 'Talk to Our Experts'
  const ctaButtonUrl = p?.ctaButtonUrl || '/contact'

  const words = tagline.trim().split(' ')
  const lastWord = words.pop()
  const rest = words.join(' ')

  return (
    <section className="ht-cta-s">
      <div className="ht-container">
        <div className="ht-cta-inn" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <h2>
              {rest} <span>{lastWord}</span>
            </h2>
          </div>
          <div className="ht-cta-acts">
            <a href={ctaButtonUrl} className="ht-btn ht-btn-p">
              {ctaButtonText} <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
