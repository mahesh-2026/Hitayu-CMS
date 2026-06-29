import Image from 'next/image'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Footer() {
  const settings = await getSiteSettings()
  const desc = settings?.companyDescription || ''
  const logoUrl: string = (settings as any)?.logo?.url || '/logo.png'

  return (
    <footer className="ht-footer">
      <div className="ht-container">
        <div className="ht-footer-top">
          {/* Brand */}
          <div className="ht-fbrand">
            <a href="/" className="ht-logo">
              <Image
                src={"https://demo.web-glaze.com/108/wp-content/uploads/2026/06/hitayus-logo-new.png"}
                alt="Hitayu"
                width={350}
                height={170}
                style={{ objectFit: 'cover', objectPosition: 'left center' }}
              />
            </a>
            <p>{desc}</p>
            <div className="ht-fnl">
              <p>Subscribe for tech insights &amp; updates</p>
              <div className="ht-fnf">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="ht-fcol">
            <h5>Services</h5>
            <ul>
              {['Managed Services', 'Infrastructure Modernisation', 'Data, Analytics & AI', 'Managed Security', 'App Modernisation', 'Cloud Cost Optimisation'].map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="ht-fcol">
            <h5>Solutions</h5>
            <ul>
              {['SMB-in-a-Box', 'Web Hosting Kit', 'DR Jumpstart', 'Backup Kit', 'Database Starter', 'BI Solution Kit'].map((s) => (
                <li key={s}><a href="#solutions">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="ht-fcol">
            <h5>Company</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="ht-footer-bot">
          <p>© 2026 Hitayu FZE LLC</p>
          {/* <div className="ht-fbl">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
