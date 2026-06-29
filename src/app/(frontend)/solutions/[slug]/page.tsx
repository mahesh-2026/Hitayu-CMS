import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getSolutionBySlug } from '@/lib/payload-utils'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = await getSolutionBySlug(slug)
  return {
    title: solution ? `${solution.title} – Hitayu` : 'Solution – Hitayu',
    description: solution?.description || 'Hitayu SMB solutions.',
  }
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution: any = await getSolutionBySlug(slug)

  if (!solution) notFound()

  const imageSrc =
    solution.solutionImage?.url ||
    solution.imageUrl ||
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80'

  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          {/* <div className="ht-eyebrow ht-eyebrow--center">{solution.tag || 'SMB Solutions'}</div> */}
          <h1 className="ht-cbanner-title">{solution.title}</h1>
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
                  alt={solution.title}
                  width={450}
                  height={800}
                  style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
                  priority
                />
              </div>
            </div>
            <div>
              {/* <div className="ht-eyebrow ht-reveal">
                <i className={solution.icon || 'fas fa-box-open'} style={{ marginRight: 8 }} />
                {solution.tag || 'SMB Solutions'}
              </div> */}
              {solution.tagline && <h2 className="ht-title ht-reveal">{solution.tagline}</h2>}
              <p className="ht-sub ht-reveal">{solution.fullDescription || solution.description}</p>
              <div style={{ marginTop: 36 }} className="ht-reveal ht-d4">
                <a href="/contact" className="ht-btn ht-btn-p">
                  Get a Quote <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {solution.features && solution.features.length > 0 && (
        <section className="ht-section ht-section--light" style={{ scrollMarginTop: 90 }}>
          <div className="ht-container">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="ht-eyebrow ht-eyebrow--center">What's Included</div>
              <h2 className="ht-title ht-reveal">Key Capabilities</h2>
            </div>
            <div className="ht-benefit-grid">
              {solution.features.map((f: any, i: number) => (
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
                Ready to Get Started <span>with {solution.title}?</span>
              </h2>
              <p>Talk to our experts and get a tailored quote for your business.</p>
            </div>
            <div className="ht-cta-acts">
              <Link href="/solutions" className="ht-btn ht-btn-o">
                <i className="fas fa-arrow-left" /> All Solutions
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
