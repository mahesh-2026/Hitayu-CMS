import { getCareersPage } from '@/lib/payload-utils'

type Props = {
  source?: string
}

export default async function Careers({ source }: Props) {
  const c = (await getCareersPage()) as any

  const eyebrow = c?.eyebrow || 'Careers'
  const titleLine1 = c?.titleLine1 || 'Build Your'
  const titleHighlight = c?.titleHighlight || 'Future'
  const titleLine2 = c?.titleLine2 || 'with Hitayu'
  const description =
    c?.description ||
    'At Hitayu, we believe that our people are the driving force behind everything we do. We offer an environment where you can learn, grow, and make a real impact — working on meaningful projects spanning cloud solutions, infrastructure, data management, and emerging technologies.'

  const benefits =
    c?.benefits && c.benefits.length > 0
      ? c.benefits.slice(0, 3)
      : [
          {
            icon: 'fas fa-chart-line',
            title: 'Growth Opportunities',
            description:
              'Invest in your development through training, mentorship, and hands-on experience with the latest technologies.',
          },
          {
            icon: 'fas fa-lightbulb',
            title: 'Innovative Work',
            description:
              'Be part of projects leveraging the latest in cloud, data, and digital transformation technologies that shape the future of businesses.',
          },
          {
            icon: 'fas fa-balance-scale',
            title: 'Work-Life Balance',
            description:
              'We support flexible work environments, collaborative culture, and a team-oriented atmosphere where your ideas are genuinely valued.',
          },
        ]

  const traits =
    c?.traits && c.traits.length > 0
      ? c.traits.map((t: any) => t.text)
      : [
          'Curious and eager to learn new technologies',
          'Problem-solvers with a proactive mindset',
          'Team players with strong communication skills',
          'Driven to deliver high-quality results',
          'Cloud & DevOps certification preferred',
        ]

  const careersEmail = c?.careersEmail || 'careers@hitayu.com'
  const ctaButtonUrl = c?.ctaButtonUrl || '/contact'

  const displayDescription =
    source === 'homepage'
      ? `${description.slice(0, 200)}${description.length > 200 ? '...' : ''}`
      : description

  return (
    <section className="ht-section ht-section" id="careers" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-about-g" style={{ gap: 60 }}>
          {/* Content */}
          <div>
            {/* <div className="ht-eyebrow ht-reveal">{eyebrow}</div> */}
            <h2 className="ht-title ht-reveal">
              {titleLine1} <span className="hi">{titleHighlight}</span> {titleLine2}
            </h2>
            {/* <p className="ht-sub ht-reveal">{displayDescription}</p> */}

            <p className="ht-sub ht-reveal">{displayDescription}</p>

            {/* {source === 'homepage' && description.length > 200 && (
              <a
                href="/careers"
                className="ht-btn ht-btn-p"
                style={{ marginTop: 16, display: 'inline-flex' }}
              >
                Read More <i className="fas fa-arrow-right" />
              </a>
            )} */}


            {/* <div className="ht-feat-l">
              {benefits.map((b: any, i: number) => (
                <div key={i} className={`ht-feat ht-reveal ht-d${i + 1}`}>
                  <div className="ht-ftic">
                    <i className={b.icon || 'fas fa-star'} />
                  </div>
                  <div>
                    <h4>{b.title}</h4>
                    <p>{b.description}</p>
                  </div>
                </div>
              ))}
            </div> */}
            <div style={{ marginTop: 36, display: 'flex', gap: 14 }} className="ht-reveal ht-d4">
              <a href={ctaUrlSafe(ctaButtonUrl)} className="ht-btn ht-btn-p">
                Apply Now <i className="fas fa-arrow-right" />
              </a>
              <a href="/careers" className="ht-btn ht-btn-od">
                Learn More
              </a>
            </div>
          </div>

          {/* Panel */}
          <div className="ht-reveal ht-d2">
            <div
              style={{
                background: 'linear-gradient(135deg,var(--navy-dark),var(--navy-mid))',
                borderRadius: 'var(--r-2xl)',
                padding: 40,
                color: '#fff',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  marginBottom: 24,
                }}
              >
                Who We&apos;re Looking For
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {traits.map((t: string, i: number) => (
                  <div key={i} className="ht-career-check">
                    <i className="fas fa-check" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              {/* <div
                style={{
                  marginTop: 32,
                  padding: '20px',
                  background: 'rgba(0,200,232,.1)',
                  border: '1px solid rgba(0,200,232,.2)',
                  borderRadius: 'var(--r-md)',
                }}
              >
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.7 }}>
                  Ready to take the next step? We would love to hear from you. Send your resume and a
                  brief introduction by filling out the form below.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ctaUrlSafe(url: string) {
  return url || '/contact'
}
