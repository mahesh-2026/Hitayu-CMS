import Image from 'next/image'
import { getPartnersPage } from '@/lib/payload-utils'

export default async function PartnersHeroSection() {
  const p = (await getPartnersPage()) as any

  const eyebrow = p?.eyebrow || 'Our Partners'
  const titleLine1 = p?.titleLine1 || 'Cloud-Agnostic.'
  const titleHighlight = p?.titleHighlight || 'Your Cloud,'
  const titleLine2 = p?.titleLine2 || 'Your Choice, Our Expertise'
  const description =
    p?.description ||
    "At Hitayu, we believe in delivering solutions that are built around our customers—not limited by specific vendors. That's why we maintain a cloud-agnostic approach, giving you the freedom to choose the Cloud Service Provider (CSP) that best fits your business needs. Rather than being tied to a single platform, we work across multiple leading cloud ecosystems, ensuring that our solutions are flexible, scalable, and aligned with your strategic goals. Whether you already have a preferred provider or need guidance in selecting one, we support you every step of the way. Our team brings deep in-house expertise across a wide range of cloud platforms, enabling us to design, deploy, and manage solutions with consistency and excellence—regardless of the environment. This multi-platform capability allows us to offer unbiased recommendations and deliver the best possible outcomes for your business. By partnering with us, you gain access to a broad network of technologies and cloud capabilities, combined with the confidence that your solutions are tailored specifically to your requirements—not constrained by vendor limitations."
  const imageSrc =
    p?.image?.url || p?.imageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80'

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
                alt="Hitayu Partners"
                width={450}
                height={800}
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="ht-eyebrow ht-reveal">{eyebrow}</div>
            <h1 className="ht-title ht-reveal">
              {titleLine1} <span className="hi">{titleHighlight}</span>
              <br />
              {titleLine2}
            </h1>
            <p className="ht-sub ht-reveal">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
