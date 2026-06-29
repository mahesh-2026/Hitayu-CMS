import { getSiteSettings } from '@/lib/payload-utils'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'

export default async function HeaderTop() {
  const settings = await getSiteSettings()
  const headerInfo = settings?.headerInfo
  const email = headerInfo?.email || 'info@hitayu.com'
  const phone = headerInfo?.phone || '+91 98765 43210'
  const socialLinks = headerInfo?.socialLinks || []

  return (
    <div className="top-header">
      <div className="container header-inner">
        {/* LEFT SIDE: Email + Phone */}
        <div className="header-left">
          <div className="header-group">
            <span className="header-icon">✉</span>
            <a href={`mailto:${email}`} className="header-link">
              {email}
            </a>
          </div>
          <div className="header-group">
            <span className="header-icon">📞</span>
            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="header-link">
              {phone}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Social Icons */}
        <div className="header-right">
          {socialLinks.map((social: any, index: Key | null | undefined) => (
            <a
              key={index}
              href={social.url || '#'}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label || 'Social link'}
            >
              {social.icon ?? social.label ?? '🔗'}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
