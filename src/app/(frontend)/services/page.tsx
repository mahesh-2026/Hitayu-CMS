import Link from 'next/link'
import { getServices } from '@/lib/payload-utils'

export const metadata = {
  title: 'Services – Hitayu',
  description:
    'End-to-end technology solutions — Managed Services, Infrastructure Modernisation, Data & AI, and Application Modernisation.',
}

const CATEGORY_ORDER = [
  'Managed Services',
  'Infrastructure Modernisation',
  'Data, Analytics & AI',
  'Application Modernisation',
]

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default async function ServicesIndexPage() {
  const services = await getServices()

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: services.filter((s: any) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">Our Services</h1>
        </div>
      </section>

      {grouped.length === 0 && (
        <section className="ht-section">
          <div className="ht-container" style={{ textAlign: 'center' }}>
            <p className="ht-sub">No services published yet. Add some in Admin → Services.</p>
          </div>
        </section>
      )}

      {grouped.map((group, gi) => (
        <section
          key={group.category}
          id={slugify(group.category)}
          className={`ht-section ${gi % 2 === 1 ? 'ht-section--light' : ''}`}
          style={{ scrollMarginTop: 90 }}
        >
          <div className="ht-container">
            <div className="ht-eyebrow ht-eyebrow--center">{group.category}</div>
            <div className="ht-svc-grid" style={{ marginTop: 24 }}>
              {group.items.map((s: any, i: number) => (
                <div key={s.id} className={`ht-scard ht-reveal ht-d${(i % 3) + 1}`}>
                  <div className="ht-sico">
                    <i className={s.icon || 'fas fa-cloud'} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <Link href={`/services/${s.slug}`} className="ht-slink">
                    Learn More <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
