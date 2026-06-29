import Link from 'next/link'
import { getSolutions } from '@/lib/payload-utils'

export const metadata = {
  title: 'Solutions – Hitayu',
  description: 'Ready-to-run packages for small & medium businesses — SMB-in-a-Box, hosting, backup, disaster recovery, database, and BI kits.',
}

export default async function SolutionsIndexPage() {
  const solutions = await getSolutions()

  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          <div className="ht-eyebrow ht-eyebrow--center">SMB Solutions</div>
          <h1 className="ht-cbanner-title">Ready-to-Run Packages</h1>
        </div>
      </section>

      <section className="ht-section" style={{ scrollMarginTop: 90 }}>
        <div className="ht-container">
          {solutions.length === 0 ? (
            <p className="ht-sub" style={{ textAlign: 'center' }}>
              No solutions published yet. Add some in Admin → Solutions.
            </p>
          ) : (
            <div className="ht-sol-grid">
              {solutions.map((s: any, i: number) => (
                <Link
                  key={s.id}
                  href={`/solutions/${s.slug}`}
                  className={`ht-sol-card ht-reveal ht-d${(i % 3) + 1}`}
                  style={{ display: 'block' }}
                >
                  <div className="ht-sol-top">
                    <div className="ht-sol-ico">
                      <i className={s.icon || 'fas fa-box-open'} />
                    </div>
                    <div>
                      {s.tag && <div className="ht-sol-tag">{s.tag}</div>}
                      <h3>{s.title}</h3>
                    </div>
                  </div>
                  <div className="ht-sol-body">
                    <p>{s.description}</p>
                  </div>
                  <div className="ht-slink" style={{ marginTop: 16 }}>
                    Learn More <i className="fas fa-arrow-right" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
