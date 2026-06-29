const items = [
  { icon: 'fab fa-aws', label: 'Amazon Web Services' },
  { icon: 'fab fa-microsoft', label: 'Microsoft Azure' },
  { icon: 'fab fa-google', label: 'Google Cloud Platform' },
  { icon: 'fab fa-docker', label: 'Docker & Kubernetes' },
  { icon: 'fas fa-database', label: 'Salesforce' },
  { icon: 'fab fa-python', label: 'Python & TensorFlow' },
  { icon: 'fas fa-snowflake', label: 'Snowflake' },
  { icon: 'fab fa-react', label: 'React & Node.js' },
  { icon: 'fas fa-fire', label: 'Terraform' },
  { icon: 'fab fa-github', label: 'GitHub & GitLab' },
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <>
      {/* Wave divider */}
      {/* <div className="ht-wave" style={{ background: 'var(--navy-deep)' }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 40 }}>
          <path d="M0,20 C360,50 1080,-10 1440,20 L1440,40 L0,40 Z" fill="#2D3480" />
        </svg>
      </div> */}
      <div className="ht-mstrip">
        <div className="ht-mtrack">
          {doubled.map((item, i) => (
            <div key={i} className="ht-mi">
              <i className={`${item.icon} ht-mi-ico`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
