import { getSiteSettings, getContactPage } from '@/lib/payload-utils'

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
  'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
]

export default async function ContactInfoBar() {
  const [settings, contactPage] = await Promise.all([getSiteSettings(), getContactPage()])
  const s = settings as any
  const c = contactPage as any

  const pageEyebrow = c?.pageEyebrow || 'Get In Touch'
  const pageTitle = c?.pageTitle || 'Contact Us'
  const officesEyebrow = c?.officesEyebrow || 'Our Offices'
  const officesTitle = c?.officesTitle || 'All Locations'

  const phone = s?.headerInfo?.phone || s?.contactPhone || '+91 98765 43210'
  const email = s?.headerInfo?.email || s?.contactEmail || 'info@hitayu.com'
  const hours = c?.businessHours || s?.contactPhoneHours || 'Mon–Fri: 9 AM – 6 PM IST'

  const locationsRaw = c?.locations as
    | {
        title: string
        address: string
        phone?: string
        image?: { url?: string }
        imageUrl?: string
      }[]
    | undefined

  const locations =
    locationsRaw && locationsRaw.length > 0
      ? locationsRaw
      : [
          {
            title: 'Dubai UAE',
            address: 'Meydan Grandstand, 6th floor, Meydan Road, Nad AlSheba, Dubai, U.A.E',
          },
          {
            title: 'Bengaluru India',
            address:
              'Nimbekayipura Road, Huskuru-Bommenhalli Budigere Cross, Bengaluru, Karnataka 562149, India',
          },
        ]

  const headOfficeTitle = locations[0]?.title || 'Head Office'

  const infoCards = [
    { icon: 'fas fa-phone-alt', label: 'Call Us', value: phone },
    { icon: 'fas fa-envelope', label: 'Email Us', value: email },
    { icon: 'fas fa-map-marker-alt', label: 'Head Office', value: headOfficeTitle },
    { icon: 'fas fa-clock', label: 'Business Hours', value: hours },
  ]

  return (
    <>
      {/* Banner + info cards share one seamless background */}
      <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">{pageTitle}</h1>
        </div>

        {/* <div className="ht-container ht-cinfo-row">
          {infoCards.map((item, i) => (
            <div key={i} className="ht-cinfo-card">
              <div className="ht-cinfo-ico">
                <i className={item.icon} />
              </div>
              <div>
                <strong>{item.label}</strong>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>

      {/* All Locations */}
      <section className="ht-section ht-section--light">
        <div className="ht-container">
          {/* <div className="ht-eyebrow ht-eyebrow--center heading_css">{officesEyebrow}</div> */}
          <h2 className="ht-title" style={{ textAlign: 'center', marginBottom: 48 }}>
            {officesTitle}
          </h2>
          <div className="ht-cloc-grid">
            {locations.map((loc, i) => {
              const imgSrc =
                loc.image?.url || loc.imageUrl || FALLBACK_IMAGES[i % FALLBACK_IMAGES.length]
              const locPhone = loc.phone || phone
              return (
                <div key={i} className="ht-cloc-card">
                  <div className="ht-cloc-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgSrc} alt={loc.title} />
                  </div>
                  <div className="ht-cloc-body">
                    <h4>{loc.title}</h4>
                    <p className="ht-cloc-addr">
                      <i className="fas fa-map-marker-alt" /> {loc.address}
                    </p>
                    {/* <p className="ht-cloc-phone">
                      <i className="fas fa-phone-alt" /> {locPhone}
                    </p> */}
                    {/* <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ht-cloc-link"
                    >
                      Get Directions <i className="fas fa-arrow-right" />
                    </a> */}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
