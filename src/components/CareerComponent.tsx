import { getSiteSettings, getContactPage } from '@/lib/payload-utils'
import CareerForm from './CareerForm'

export async function CareerComponent() {
  const [settings, contactPage] = await Promise.all([
    getSiteSettings(),
    getContactPage(),
  ])

  const s = settings as any
  const cp = contactPage as any

  const tag = s?.contactSection?.tag || 'Get In Touch'
  const title = s?.contactSection?.title || "Let's Talk About\nYour Project"
  const description =
    s?.contactSection?.description ||
    'Tell us about your project. Our team will respond within 24 hours with a tailored proposal and consultation schedule.'

  const phone = s?.headerInfo?.phone || s?.contactPhone || '+91 98765 43210'
  const email = s?.headerInfo?.email || s?.contactEmail || 'info@hitayu.com'
  const hours =
    cp?.businessHours ||
    s?.contactPhoneHours ||
    'Mon–Fri: 9 AM – 6 PM IST'

  const infoItems = [
    { icon: 'fas fa-phone-alt', title: 'Phone', lines: [phone] },
    { icon: 'fas fa-envelope', title: 'Email', lines: [email] },
    { icon: 'fas fa-clock', title: 'Business Hours', lines: [hours] },
  ]

  const cmsLinks = (settings as any)?.headerInfo?.socialLinks as
    | { label: string; url: string; icon: string }[]
    | undefined

  const socials =
    cmsLinks && cmsLinks.length > 0
      ? cmsLinks.map((s) => ({
          icon: s.icon?.startsWith('fa') ? s.icon : `fab fa-${s.icon}`,
          label: s.label,
          url: s.url || '#',
        }))
      : [
          { icon: 'fab fa-linkedin-in', label: 'LinkedIn', url: '#' },
          { icon: 'fab fa-twitter', label: 'Twitter', url: '#' },
          { icon: 'fab fa-facebook-f', label: 'Facebook', url: '#' },
          { icon: 'fab fa-instagram', label: 'Instagram', url: '#' },
          { icon: 'fab fa-youtube', label: 'YouTube', url: '#' },
        ]

  return (
    <section
      className="ht-section"
      id="contact"
      style={{ scrollMarginTop: 90 }}
    >
      <div className="ht-container">
        <div
          className="ht-con-g"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/*
          =====================================================
          LEFT SIDE CONTENT (TEMPORARILY HIDDEN)
          =====================================================

          <div>
            <div className="ht-eyebrow ht-reveal">{tag}</div>

            <h2 className="ht-title ht-reveal">
              {title.split('\n').map((line: string, i: number) => (
                <span key={i}>
                  {i === title.split('\n').length - 1 ? (
                    <span className="hi">{line}</span>
                  ) : (
                    line
                  )}
                  {i < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>

            <p className="ht-sub ht-reveal">{description}</p>

            <div className="ht-con-info">
              {infoItems.map((item, i) => (
                <div
                  key={i}
                  className={`ht-cii ht-reveal ht-d${i + 1}`}
                >
                  <div className="ht-ciico">
                    <i className={item.icon} />
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.lines.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="ht-soc-row ht-reveal ht-d4">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  className="ht-soc"
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
          */}

          {/* FORM ONLY */}
          <div
            className="ht-reveal"
            style={{
              width: '100%',
              maxWidth: '700px',
            }}
          >
            <CareerForm />
          </div>
        </div>
      </div>
    </section>
  )
}