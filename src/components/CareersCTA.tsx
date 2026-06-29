import { getCareersPage } from '@/lib/payload-utils'

export default async function CareersCTA() {
  const c = (await getCareersPage()) as any

  const ctaTitle = c?.ctaTitle || 'Join Our Team'
  const ctaDescription =
    c?.ctaDescription ||
    "If you're ready to take the next step in your career and be part of a forward-thinking organization, we'd love to hear from you."
  const ctaButtonText = c?.ctaButtonText || 'Get In Touch'
  const ctaButtonUrl = c?.ctaButtonUrl || '/contact'
  const careersEmail = c?.careersEmail || 'careers@hitayu.com'

  return (
    <section className="ht-cta-s">
      <div className="ht-container">
        <div className="ht-cta-inn">
          <div>
            <h2>
              {ctaTitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span>{ctaTitle.split(' ').slice(-1)}</span>
            </h2>
            <p>{ctaDescription}</p>
          </div>
          <div className="ht-cta-acts">
            <a href={ctaButtonUrl} className="ht-btn ht-btn-p">
              {ctaButtonText} <i className="fas fa-arrow-right" />
            </a>
            {/* <a href={`mailto:${careersEmail}`} className="ht-btn ht-btn-o">
              <i className="fas fa-envelope" /> {careersEmail}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}
