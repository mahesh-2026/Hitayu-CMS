import Image from 'next/image'
import { getAboutPage } from '@/lib/payload-utils'

export default async function AboutHeroSection() {
  const a = (await getAboutPage()) as any

  const eyebrow = a?.eyebrow || 'About Hitayu'
  const titleLine1 = a?.titleLine1 || 'Reimagine, digitize, and realize better'
  const titleHighlight = a?.titleHighlight || 'business outcomes'
  const description =
    a?.description ||
    'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.'
  const imageSrc =
    a?.image?.url || a?.imageUrl || 'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/about-img.webp'
  const badge1Title = a?.badge1Title || 'Award Winning'
  const badge1Sub = a?.badge1Sub || 'Best IT Partner 2024'
  const badge2Title = a?.badge2Title || 'ISO 27001'
  const badge2Sub = a?.badge2Sub || 'Security Certified'
  const ctaText = a?.ctaText || 'Partner with Us'
  const ctaUrl = a?.ctaUrl || '#contact'

  const features =
    a?.features && a.features.length > 0
      ? a.features
      : [
          { icon: 'fas fa-rocket', title: 'Enabling Agility, Empowering Growth' },
          { icon: 'fas fa-star', title: 'Commitment to Quality' },
          { icon: 'fas fa-users-cog', title: 'Skilled, Dedicated Team' },
        ]

  return (
    <section className="ht-section" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g">
          {/* Image */}
          <div className="ht-abf-vis ht-reveal">
            <div className="ht-about-box">
              <div className="ht-about-glow" />
              <Image
                src={imageSrc}
                alt="Hitayu"
                width={450}
                height={800}
                style={{
                  // objectFit: '',
                  objectPosition: 'left center',
                  width: '100%',
                  height: '100%',
                }}
                priority
              />
            </div>
            {/* <div className="ht-afl ht-afl1">
              <div className="ht-afli ht-afli-c">
                <i className="fas fa-trophy" />
              </div>
              <div className="ht-aflt">
                <strong>{badge1Title}</strong>
                <span>{badge1Sub}</span>
              </div>
            </div> */}
            {/* <div className="ht-afl ht-afl2">
              <div className="ht-afli ht-afli-n">
                <i className="fas fa-certificate" />
              </div>
              <div className="ht-aflt">
                <strong>{badge2Title}</strong>
                <span>{badge2Sub}</span>
              </div>
            </div> */}
          </div>

          {/* Text */}
          <div>
            {/* <div className="ht-eyebrow ht-reveal">{eyebrow}</div> */}
            <h1 className="ht-title ht-reveal">
              {titleLine1} <span className="hi">{titleHighlight}</span>
            </h1>
            <p className="ht-sub ht-reveal">{description}</p>
            {/* <div className="ht-feat-l">
              {features.map((f: any, i: number) => (
                <div key={i} className={`ht-feat ht-reveal ht-d${i + 1}`}>
                  <div className="ht-ftic">
                    <i className={f.icon || 'fas fa-rocket'} />
                  </div>
                  <div>
                    <h4>{f.title}</h4>
                  </div>
                </div>
              ))}
            </div> */}
            {/* <div style={{ marginTop: 36 }} className="ht-reveal ht-d4">
              <a href={ctaUrl} className="ht-btn ht-btn-p">
                {ctaText} <i className="fas fa-arrow-right" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
