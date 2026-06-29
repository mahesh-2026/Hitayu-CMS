import Image from 'next/image'
import { getCareersPage } from '@/lib/payload-utils'

export default async function CareersHeroSection() {
  const c = (await getCareersPage()) as any

  const eyebrow = c?.eyebrow || 'Careers'
  const titleLine1 = c?.titleLine1 || 'Build Your'
  const titleHighlight = c?.titleHighlight || 'Future'
  const titleLine2 = c?.titleLine2 || 'with Hitayu'
  const description =
    c?.description ||
    "At Hitayu, we believe that our people are the driving force behind everything we do. We are passionate about building innovative, reliable, and scalable technology solutions—and that starts with building a team of talented, motivated individuals who share our vision. Whether you're an experienced professional or just starting your career, we offer an environment where you can learn, grow, and make a real impact. Our work spans across cloud solutions, infrastructure, data management, and emerging technologies, giving you the opportunity to work on meaningful projects that shape the future of businesses. We foster a culture of collaboration, innovation, and continuous learning. You'll work alongside skilled professionals in a supportive environment that encourages new ideas, values diverse perspectives, and promotes personal and professional development."
  const imageSrc =
    c?.image?.url || c?.imageUrl || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80'

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
                alt="Careers at Hitayu"
                width={450}
                height={800}
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div>
            {/* <div className="ht-eyebrow ht-reveal">{eyebrow}</div> */}
            <h1 className="ht-title ht-reveal">
              {titleLine1} <span className="hi">{titleHighlight}</span> {titleLine2}
            </h1>
            <p className="ht-sub ht-reveal">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
