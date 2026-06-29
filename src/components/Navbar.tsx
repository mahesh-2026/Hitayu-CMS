import Link from 'next/link'
import Image from 'next/image'
import { getSiteSettings } from '@/lib/payload-utils'

export default async function Navbar() {
  const settings = await getSiteSettings()

  const logoUrl =
    'https://demo.web-glaze.com/108/wp-content/uploads/2026/06/hitayus-logo-new.png'

  return (
    <>
      <nav className="ht-nav" id="ht-nav">
        <div className="ht-nav__bar">
          {/* Logo */}
          <Link href="/" className="ht-logo">
            <Image
              src={logoUrl}
              alt="Hitayu"
              width={55}
              height={55}
              priority
            />
            <span className="ht-logo-text">Hitayu</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="ht-nav__links">
            {/* Company */}
            <li className="ht-nitem">
              <span className="ht-na">
                Company <i className="fas fa-chevron-down" />
              </span>

              <ul className="ht-dropdown">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Career</Link>
                </li>
              </ul>
            </li>

            {/* Services */}
            {/* Services */}
<li className="ht-nitem">
  <span className="ht-na">
    Services <i className="fas fa-chevron-down" />
  </span>

  <ul className="ht-dropdown">
    {/* Managed Services */}
    <li className="ht-submenu">
      <span>
        Managed Services
        <i className="fas fa-chevron-right" />
      </span>

      <ul className="ht-dropdown-sub">
        <li>
          <Link href="/services/end-to-end-cloud-management">
            End-to-End Cloud Management
          </Link>
        </li>

        <li>
          <Link href="/services/managed-infrastructure-services">
            Managed Infrastructure Services
          </Link>
        </li>

        <li>
          <Link href="/services/managed-security-services">
            Managed Security Services
          </Link>
        </li>

        <li>
          <Link href="/services/multi-cloud-hybrid-cloud-managed-services">
            Multi-Cloud/Hybrid Cloud Managed Services
          </Link>
        </li>
      </ul>
    </li>

    {/* Infrastructure Modernisation */}
            <li className="ht-submenu">
                <span>
                  Infrastructure Modernisation
                  <i className="fas fa-chevron-right" />
                </span>

                <ul className="ht-dropdown-sub">
                  <li>
                    <Link href="/services/cloud-migration-services">
                      Cloud Migration Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/modernization">
                      Modernization
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/disaster-recovery-services">
                      Disaster Recovery Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/devops-automation-services">
                      DevOps Automation Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/cloud-cost-optimization">
                      Cloud Cost Optimization
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/backup-as-a-service">
                      Backup as a Service (BaaS)
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Data, Analytics & AI */}
              <li className="ht-submenu">
                <span>
                  Data, Analytics &amp; AI
                  <i className="fas fa-chevron-right" />
                </span>

                <ul className="ht-dropdown-sub">
                  <li>
                    <Link href="/services/generative-ai-services">
                      Generative AI Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/data-and-analytics">
                      Data and Analytics
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/machine-learning-services">
                      Machine Learning (ML) Services
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Application Modernisation */}
              <li className="ht-submenu">
                <span>
                  Application Modernisation
                  <i className="fas fa-chevron-right" />
                </span>

                <ul className="ht-dropdown-sub">
                  <li>
                    <Link href="/services/application-development">
                      Application Development
                    </Link>
                  </li>

                  <li>
                    <Link href="/services/application-modernisation">
                      Application Modernisation
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

            {/* Solutions */}
            <li className="ht-nitem">
              <span className="ht-na">
                Solutions <i className="fas fa-chevron-down" />
              </span>

              <ul className="ht-dropdown">
                <li className="ht-submenu">
                  <span>
                    SMB Solutions
                    <i className="fas fa-chevron-right" />
                  </span>

                  <ul className="ht-dropdown-sub">
                    <li>
                      <Link href="/solutions/smb-in-a-box">
                        Ready to run SMB package
                      </Link>
                    </li>

                    <li>
                      <Link href="/solutions/web-hosting-launch-kit">
                        Webhosting Launch Kit
                      </Link>
                    </li>

                    <li>
                      <Link href="/solutions/dr-jumpstart-bundle">
                        DR Jumpstart Bundle
                      </Link>
                    </li>

                    <li>
                      <Link href="/solutions/backup-solution-kit">
                        Backup Solution Kit
                      </Link>
                    </li>

                    <li>
                      <Link href="/solutions/database-starter-kit">
                        Database Starter Kit
                      </Link>
                    </li>

                    <li>
                      <Link href="/solutions/storage-kit">
                        Storage Kit for SMBs
                      </Link>
                    </li>

                    <li>
                      <Link href="/solutions/bi-solution-kit">
                        Business Intelligence
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* Industries */}
            <li className="ht-nitem">
              <Link href="/industries" className="ht-na">
                Industries
              </Link>
            </li>

            {/* Contact */}
            <li className="ht-nitem">
              <Link href="/contact" className="ht-na">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="ht-nav__act">
            <Link href="/contact" className="ht-nav-cta">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="ht-ham" id="ht-ham" aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="ht-mob" id="ht-mob">
        <Link href="/about">About</Link>
        <Link href="/careers">Career</Link>

        <Link href="/services#managed-services">
          Managed Services
        </Link>

        <Link href="/services#infrastructure-modernisation">
          Infrastructure Modernisation Services
        </Link>

        <Link href="/services#data-analytics-and-ai">
          Data, Analytics and AI Services
        </Link>

        <Link href="/services#application-modernisation">
          Application Modernisation
        </Link>

        <Link href="/solutions/smb-in-a-box">
          Ready to run SMB package
        </Link>

        <Link href="/solutions/web-hosting-launch-kit">
          Webhosting Launch Kit
        </Link>

        <Link href="/solutions/dr-jumpstart-bundle">
          DR Jumpstart Bundle
        </Link>

        <Link href="/solutions/backup-solution-kit">
          Backup Solution Kit
        </Link>

        <Link href="/solutions/database-starter-kit">
          Database Starter Kit
        </Link>

        <Link href="/solutions/storage-kit">
          Storage Kit for SMBs
        </Link>

        <Link href="/solutions/bi-solution-kit">
          Business Intelligence
        </Link>

        <Link href="/industries">Industries</Link>

        <Link href="/contact">Contact Us</Link>

        <Link href="/contact" className="ht-mob-cta">
          Get Started →
        </Link>
      </div>
    </>
  )
}