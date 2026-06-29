const industries = [
  { icon: 'fas fa-university', title: 'BFSI & FinTech', desc: 'Secure, compliant cloud & AI for banking, insurance, NBFCs, and fintech innovators.' },
  { icon: 'fas fa-heartbeat', title: 'Healthcare & LifeSci', desc: 'HIPAA-compliant platforms, telemedicine infrastructure, and AI-powered diagnostics.' },
  { icon: 'fas fa-shopping-cart', title: 'Retail & E-Commerce', desc: 'Scalable commerce platforms, personalization engines, and real-time inventory management.' },
  { icon: 'fas fa-industry', title: 'Manufacturing', desc: 'IoT integration, predictive maintenance, digital twin models, and smart factory automation.' },
  { icon: 'fas fa-graduation-cap', title: 'Education & EdTech', desc: 'LMS platforms, virtual classrooms, adaptive learning systems, and student analytics.' },
  { icon: 'fas fa-film', title: 'Media & Entertainment', desc: 'Streaming infrastructure, CDN optimization, content analytics, and audience engagement.' },
  { icon: 'fas fa-truck', title: 'Logistics & Supply Chain', desc: 'Real-time tracking, route optimization AI, warehouse automation, and demand forecasting.' },
  { icon: 'fas fa-landmark', title: 'Government & Public Sector', desc: 'Digital governance platforms, citizen data security, and smart infrastructure modernization.' },
]

export default function Industries() {
  return (
    <section className="ht-section ht-section--light" id="industries" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-text-center" style={{ maxWidth: 680, margin: '0 auto' }}>
          {/* <div className="ht-eyebrow ht-eyebrow--center">Industries We Serve</div> */}
          <h2 className="ht-title ht-reveal">Deep Expertise Across<br /><span className="hi">Every Sector</span></h2>
          <p className="ht-sub ht-reveal" style={{ margin: '16px auto 0' }}>Our vertical expertise means we understand your regulatory landscape, operational challenges, and growth opportunities delivering solutions beyond generic IT.</p>
        </div>
        <div className="ht-ind-g">
          {industries.map((ind, i) => (
            <div key={i} className={`ht-icard ht-reveal ht-d${(i % 4) + 1}`}>
              <div className="ht-iico"><i className={ind.icon} /></div>
              <h4>{ind.title}</h4>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
