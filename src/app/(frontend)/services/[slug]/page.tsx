import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/payload-utils'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)
  return {
    title: service ? `${service.title} – Hitayu` : 'Service – Hitayu',
    description: service?.description || 'Hitayu technology services.',
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service: any = await getServiceBySlug(slug)

  if (!service) notFound()

  const imageSrc =
    service.serviceImage?.url ||
    service.imageUrl ||
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80'

  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          {/* <div className="ht-eyebrow ht-eyebrow--center">{service.category}</div> */}
          <h1 className="ht-cbanner-title">{service.title}</h1>
        </div>
      </section>

      <section className="ht-section" style={{ scrollMarginTop: 90 }}>
        <div className="ht-container">
          <div className="ht-about-g">
            <div className="ht-abf-vis ht-reveal">
              <div className="ht-about-box">
                <div className="ht-about-glow" />
                <Image
                  src={imageSrc}
                  alt={service.title}
                  width={450}
                  height={800}
                  style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                  priority
                />
              </div>
            </div>
            <div>
              <div className="ht-eyebrow ht-reveal">
                {/* <i className={service.icon || 'fas fa-cloud'} style={{ marginRight: 8 }} />
                {service.category} */}
              </div>
              {service.tagline && <h2 className="ht-title ht-reveal">{service.tagline}</h2>}
              <p className="ht-sub ht-reveal">{service.fullDescription || service.description}</p>
              <div style={{ marginTop: 36 }} className="ht-reveal ht-d4">
                <a href="/contact" className="ht-btn ht-btn-p">
                  Talk to Our Experts <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.features && service.features.length > 0 && (
        <section className="ht-section ht-section--light" style={{ scrollMarginTop: 90 }}>
          <div className="ht-container">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              {/* <div className="ht-eyebrow ht-eyebrow--center">Key Capabilities</div> */}
              <h2 className="ht-title ht-reveal">What&apos;s Included</h2>
            </div>
            <div className="ht-benefit-grid">
              {service.features.map((f: any, i: number) => (
                <div key={i} className={`ht-mvv-card ht-reveal ht-d${(i % 4) + 1}`}>
                  <div className="ht-mvv-ico">
                    <i className="fas fa-check-circle" />
                  </div>
                  <h4>{f.title}</h4>
                  {f.description && <p>{f.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="ht-cta-s">
        <div className="ht-container">
          <div className="ht-cta-inn">
            <div>
              <h2>
                Ready to Get Started <span>with {service.title}?</span>
              </h2>
              <p>Talk to our experts and discover how this service fits your business.</p>
            </div>
            <div className="ht-cta-acts">
              <Link href="/services" className="ht-btn ht-btn-o">
                <i className="fas fa-arrow-left" /> All Services
              </Link>
              <a href="/contact" className="ht-btn ht-btn-p">
                Get In Touch <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
