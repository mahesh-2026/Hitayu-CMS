import { getAboutPage } from '@/lib/payload-utils'

export default async function AgilitySection() {
  const a = (await getAboutPage()) as any

  const title = a?.agilityTitle || 'Enabling Agility, Empowering Growth'
  const description =
    a?.agilityDescription ||
    'In a world defined by constant change, the ability to adapt is no longer a competitive advantage—it is a necessity. "Enabling agility, Empowering Growth" captures the essence of what it takes for individuals and organizations to thrive in today\'s dynamic environment. Agility is more than speed; it is the capacity to anticipate, respond, and evolve with purpose. We empower organizations by delivering advanced cloud solutions designed to enhance agility across every layer of the enterprise. Through modern architectures such as multi-cloud and hybrid cloud environments, containerization, and microservices, we help businesses modernize their infrastructure and streamline application development. This approach enables faster deployment cycles, improved system reliability, and the flexibility to scale resources dynamically in response to market demands. By enabling agility, we provide organizations with the tools and capabilities to pivot, innovate, and compete effectively. By empowering growth, we create a foundation for sustainable success—where technology not only supports business objectives but drives them forward.'
  const imageSrc =
    a?.agilityImage?.url ||
    a?.agilityImageUrl ||
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80'

  return (
    <section className="ht-section ht-section--light" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g">
          {/* Text first — image on the right this time, for visual rhythm */}
          <div>
            {/* <div className="ht-eyebrow ht-reveal">Our Philosophy</div> */}
            <h2 className="ht-title ht-reveal">{title}</h2>
            <p className="ht-sub ht-reveal">{description}</p>
          </div>

          {/* Image */}
          <div className="ht-abf-vis ht-reveal">
            <div className="ht-about-box">
              <div className="ht-about-glow" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
