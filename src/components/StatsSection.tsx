const stats = [
  { t: 200, suffix: '+', label: 'Projects Delivered' },
  { t: 50, suffix: '+', label: 'Enterprise Clients' },
  { t: 98, suffix: '%', label: 'Client Satisfaction' },
  { t: 8, suffix: '+', label: 'Years of Excellence' },
]

export default function StatsSection() {
  return (
    <section className="ht-stats-s">
      <div className="ht-container">
        <div className="ht-stats-g">
          {stats.map((s, i) => (
            <div key={i} className="ht-stat ht-reveal">
              <div className="ht-snum">
                <span className="ht-counter" data-t={s.t}>0</span>
                <span className="ac">{s.suffix}</span>
              </div>
              <div className="ht-slbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
