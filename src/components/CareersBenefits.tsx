import { getCareersPage } from '@/lib/payload-utils'

export default async function CareersBenefits() {
  const c = (await getCareersPage()) as any

  const benefitsEyebrow = c?.benefitsEyebrow || 'Why Join Us?'
  const benefitsTitle = c?.benefitsTitle || 'Benefits & Culture'

  const benefits =
    c?.benefits && c.benefits.length > 0
      ? c.benefits
      : [
          {
            icon: 'fas fa-chart-line',
            title: 'Growth Opportunities',
            description: 'We invest in your development through training, mentorship, and hands-on experience.',
          },
          {
            icon: 'fas fa-lightbulb',
            title: 'Innovative Work',
            description:
              'Be part of projects that leverage the latest in cloud, data, and digital transformation technologies.',
          },
          {
            icon: 'fas fa-users',
            title: 'Collaborative Culture',
            description: 'Work in a team-oriented environment where your ideas are valued.',
          },
          {
            icon: 'fas fa-balance-scale',
            title: 'Flexible Work Environment',
            description: 'We support work-life balance and modern ways of working.',
          },
        ]

  return (
    <section className="ht-section ht-section--light" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div style={{ textAlign: 'center' }}>
          {/* <div className="ht-eyebrow ht-eyebrow--center">{benefitsEyebrow}</div> */}
          <h2 className="ht-title ht-reveal" style={{ marginBottom: 48 }}>
            {benefitsTitle}
          </h2>
        </div>
        <div className="ht-benefit-grid">
          {benefits.map((b: any, i: number) => (
            <div key={i} className={`ht-mvv-card ht-reveal ht-d${(i % 4) + 1}`}>
              <div className="ht-mvv-ico">
                <i className={b.icon || 'fas fa-star'} />
              </div>
              <h4>{b.title}</h4>
              <p>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
