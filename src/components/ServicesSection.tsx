import { getServices } from '@/lib/payload-utils'

const defaultServices = [
  { icon: 'fas fa-server', title: 'Managed Services', description: 'Full responsibility for your cloud ecosystem delivering enhanced agility, high availability, and seamless operations. 24/7 monitoring, managed infrastructure, security, and application support by certified global cloud experts.' },
  { icon: 'fas fa-cloud-upload-alt', title: 'Infrastructure Modernisation', description: 'Seamless cloud migration, modernization of legacy systems, disaster recovery, DevOps automation, and cloud cost optimization. We handle every stage from strategy to deployment to continuous management.' },
  { icon: 'fas fa-brain', title: 'Data, Analytics & AI', description: 'Transform raw data into competitive advantage. Generative AI solutions, machine learning model development, data lakes, ETL pipelines, advanced BI dashboards, and predictive analytics platforms built for decision-makers.' },
  { icon: 'fas fa-shield-alt', title: 'Managed Security Services', description: 'Proactive security management with 24/7 SOC monitoring, advanced firewall protection, threat detection & response, vulnerability assessment, and compliance with ISO 27001, SOC 2, GDPR, HIPAA.' },
  { icon: 'fas fa-laptop-code', title: 'Application Modernisation', description: 'Transform legacy monolithic applications into scalable, cloud-native microservices. Containerization, serverless computing, CI/CD pipelines, and DevOps automation to accelerate deployment cycles.' },
  { icon: 'fas fa-dollar-sign', title: 'Cloud Cost Optimisation', description: 'Intelligent FinOps strategies rightsizing, reserved instances, idle resource elimination, budget governance, and continuous monitoring to minimize cloud expenditure while maximizing performance.' },
]

export default async function ServicesSection() {
  const services = await getServices()

  const display =
    services.length >= 4
      ? services.map((s: any) => ({
          icon: s.icon || 'fas fa-cloud',
          title: s.title,
          description: s.description,
          url: s.slug ? `/services/${s.slug}` : s.learnMoreUrl || '/services',
        }))
      : defaultServices.map((s) => ({ ...s, url: '/services' }))

  return (
    <section className="ht-section ht-section--light" id="services" style={{ scrollMarginTop: 90 }}>
      <div className="ht-container">
        <div className="ht-svc-head">
          <div>
            {/* <div className="ht-eyebrow">Our Services</div> */}
            <h2 className="ht-title ht-reveal">
              End to End <span className="hi">Technology</span> Solutions<br />That Drive Real Outcomes
            </h2>
          </div>
          <a href="/services" className="ht-btn ht-btn-od ht-reveal ht-d2">
            All Services <i className="fas fa-arrow-right" />
          </a>
        </div>
        <div className="ht-svc-grid">
          {display.slice(0, 6).map((s: any, i: number) => (
            <div key={i} className={`ht-scard ht-reveal ht-d${(i % 3) + 1}`}>
              <div className="ht-sico"><i className={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a href={s.url || '#contact'} className="ht-slink">
                Learn More <i className="fas fa-arrow-right" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
