const cases = [
  {
    bg: 'linear-gradient(135deg,#0F1235,#252B6E)',
    icon: 'fas fa-university', tag: 'BFSI',
    title: 'Core Banking Modernization on AWS for Leading Private Bank',
    desc: 'Migrated legacy on-premise banking systems to cloud-native microservices, achieving dramatically faster transaction processing and major infrastructure cost savings.',
    metrics: [{ v: '60%', l: 'Cost Reduction' }, { v: '3×', l: 'Faster Processing' }, { v: '99.99%', l: 'Uptime' }],
  },
  {
    bg: 'linear-gradient(135deg,#0D2137,#1A4A6E)',
    icon: 'fas fa-heartbeat', tag: 'Healthcare',
    title: 'AI-Powered Diagnostic Platform for Multi-Specialty Hospital Chain',
    desc: 'ML-driven radiology analysis platform processing 10,000+ scans daily with high accuracy, cutting radiologist workload and improving patient turnaround time significantly.',
    metrics: [{ v: '94%', l: 'Accuracy' }, { v: '75%', l: 'Faster TAT' }, { v: '10K+', l: 'Daily Scans' }],
  },
  {
    bg: 'linear-gradient(135deg,#1A1235,#2D1C6E)',
    icon: 'fas fa-shopping-cart', tag: 'Retail',
    title: 'Real-Time Personalization Engine for National E-Commerce Platform',
    desc: 'Kafka-powered real-time recommendation system processing 2M+ events per second, driving a significant uplift in average order value and customer engagement.',
    metrics: [{ v: '35%', l: 'Higher AOV' }, { v: '2M+', l: 'Events/sec' }, { v: '48hrs', l: 'Deploy Time' }],
  },
]

export default function CaseStudies() {
  return (
    <section className="ht-section ht-section--light">
      <div className="ht-container">
        <div className="ht-svc-head">
          <div>
            {/* <div className="ht-eyebrow">Case Studies</div> */}
            <h2 className="ht-title ht-reveal">Results That <span className="hi">Speak</span> for Themselves</h2>
          </div>
          <a href="#contact" className="ht-btn ht-btn-od ht-reveal ht-d2">All Cases <i className="fas fa-arrow-right" /></a>
        </div>
        <div className="ht-cases-g">
          {cases.map((c, i) => (
            <div key={i} className={`ht-ccase ht-reveal ht-d${i + 1}`}>
              <div className="ht-cimg" style={{ background: c.bg }}>
                <i className={c.icon} />
                <div className="ht-ctag">{c.tag}</div>
              </div>
              <div className="ht-cbody">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="ht-cmet">
                  {c.metrics.map((m, j) => (
                    <div key={j} className="ht-met">
                      <strong>{m.v}</strong>
                      <span>{m.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
