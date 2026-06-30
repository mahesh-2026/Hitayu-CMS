import Image from 'next/image'
import { getAboutPage } from '@/lib/payload-utils'

export default async function About() {
  const a = (await getAboutPage()) as any

  const eyebrow = a?.eyebrow || 'About Hitayu'
  const titleLine1 = a?.titleLine1 || 'Reimagine, Digitize, and Realize Better'
  const titleHighlight = a?.titleHighlight || 'Business Outcomes'
  const description =
    a?.description ||
    'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented.'
  const imageSrc =
    a?.image?.url ||
    a?.imageUrl ||
    'https://res.cloudinary.com/ryg9bkkz/image/upload/v1782805193/hitayu/s3v3djty8ufbtmiksvx8.png'
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

  const mvvEyebrow = a?.mvvEyebrow || 'Our Foundation'
  const mvvTitleLine1 = a?.mvvTitleLine1 || 'Mission, Vision &'
  const mvvTitleHighlight = a?.mvvTitleHighlight || 'Values'
  const mission =
    a?.mission ||
    'Our mission is to empower businesses with secure, scalable, and innovative cloud solutions that improve efficiency, accelerate digital transformation, and drive sustainable growth. We are committed to delivering reliable technology services that help organizations achieve goals.'
  const vision =
    a?.vision ||
    'Our vision is to become a globally recognized leader in cloud technology solutions, enabling organizations to innovate, adapt, and grow in a rapidly evolving digital world. We strive to create lasting value through excellence, innovation, and customer success.'
  const values =
    a?.values ||
    'Our values are rooted in integrity, excellence, and customer commitment. We conduct business with honesty and transparency, deliver high-quality solutions, and continuously pursue innovation. By putting our clients first, we build trusted partnerships that support long-term success.'

  return (
    <section className="ht-section" id="about" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g">
          {/* Visual */}
          <div className="ht-about-vis ht-reveal">
            <div className="ht-about-box">
              <div className="ht-about-glow" />

              <Image
                src={imageSrc}
                alt="Hitayu"
                width={450}
                height={800}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'left center',
                  width: '100%',
                  height: 'auto',
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

          {/* Content */}
          <div>
            {/* <div className="ht-eyebrow ht-reveal">{eyebrow}</div> */}
            <h2 className="ht-title ht-reveal">
              {titleLine1} <span className="hi">{titleHighlight}</span>
            </h2>
            <p className="ht-sub ht-reveal">{description}</p>
            <div className="ht-feat-l">
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
            </div>
            <div style={{ marginTop: 36 }} className="ht-reveal ht-d4">
              <a href={ctaUrl} className="ht-btn ht-btn-p">
                {ctaText} <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        {/* MVV */}
        <div style={{ marginTop: 88, textAlign: 'center' }}>
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
