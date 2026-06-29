const steps = [
  { num: '01', title: 'Discovery & Audit', desc: 'Deep-dive into your architecture, security posture, and business objectives to define a clear path forward.' },
  { num: '02', title: 'Strategy & Design', desc: 'Tailored solution architecture, technology roadmap, and projected ROI aligned to your goals.' },
  { num: '03', title: 'Build & Migrate', desc: 'Agile, iterative delivery with rigorous testing and zero-downtime migration using proven methodologies.' },
  { num: '04', title: 'Secure & Optimise', desc: 'Harden your environment, establish monitoring baselines, tune performance, and reduce waste.' },
  { num: '05', title: 'Manage & Evolve', desc: '24/7 managed services, continuous improvement, and strategic technology advisory to stay ahead.' },
]

export default function Process() {
  return (
    <section className="ht-section ht-section">
      <div className="ht-container">
        <div className="ht-text-center" style={{ maxWidth: 620, margin: '0 auto' }}>
          {/* <div className="ht-eyebrow ht-eyebrow--center">Our Process</div> */}
          <h2 className="ht-title ht-reveal">Five Steps to <span className="hi">Guaranteed Success</span></h2>
          <p className="ht-sub ht-reveal" style={{ margin: '16px auto 0' }}>A proven, repeatable framework that has delivered results across 200+ enterprise engagements.</p>
        </div>
        <div className="ht-proc-g">
          {steps.map((s, i) => (
            <div key={i} className={`ht-pstep ht-reveal ht-d${i + 1}`}>
              <div className="ht-pnum">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
