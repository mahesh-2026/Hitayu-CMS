const techs = [
  { icon: 'fab fa-aws', label: 'AWS' },
  { icon: 'fab fa-microsoft', label: 'Azure' },
  { icon: 'fab fa-google', label: 'Google Cloud' },
  { icon: 'fab fa-docker', label: 'Docker' },
  { icon: 'fab fa-python', label: 'Python' },
  { icon: 'fab fa-react', label: 'React.js' },
  { icon: 'fab fa-node-js', label: 'Node.js' },
  { icon: 'fab fa-jenkins', label: 'Jenkins' },
  { icon: 'fas fa-database', label: 'PostgreSQL' },
  { icon: 'fab fa-github', label: 'GitHub' },
  { icon: 'fas fa-fire', label: 'Terraform' },
  { icon: 'fas fa-chart-pie', label: 'Power BI' },
]

export default function TechStack() {
  return (
    <section className="ht-section ht-section--dark">
      <div className="ht-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            {/* <div className="ht-eyebrow">Technology Stack</div> */}
            <h2 className="ht-title ht-reveal" style={{ color: '#fff' }}>We Master <span className="hi">Best in Class</span><br />Tools &amp; Platforms</h2>
          </div>
          {/* <p className="ht-sub ht-sub--w ht-reveal ht-d2" style={{ maxWidth: 360 }}>50+ active certifications across leading cloud platforms, security frameworks, and developer tools.</p> */}
        </div>
        <div className="ht-tech-g">
          {techs.map((t, i) => (
            <div key={i} className={`ht-titem ht-reveal ht-d${(i % 6) + 1}`}>
              <i className={t.icon} />
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
