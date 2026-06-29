import Image from 'next/image'
import { getSiteSettings, getHeroSlides } from '@/lib/payload-utils'
import HeroSlider from './HeroSlider'

export default async function Hero() {
  const [settings, slides] = await Promise.all([getSiteSettings(), getHeroSlides()])
  const hasSlides = slides.length > 0
  const hero = settings?.heroSection

  const badge = hero?.badge || 'Empowering Growth Through Technology — Since 2016'
  const description =
    hero?.description ||
    'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our dedicated team of professionals brings your ideas to life with precision and expertise.'

  const stats = [
    { t: 200, suffix: '+', label: 'Projects Delivered' },
    { t: 50, suffix: '+', label: 'Enterprise Clients' },
    { t: 8, suffix: '+', label: 'Years Excellence' },
  ]

  // ── FULL-PAGE SLIDER MODE (when images are added from Admin → Hero Slides) ──
  if (hasSlides) {
    return (
      <section className="ht-hero ht-hero--full" id="home">
        <HeroSlider slides={slides} fullPage />
      </section>
    )
  }

  // ── FALLBACK: text layout (when no slides added yet) ─────────────────────
  return (
    <section className="ht-hero" id="home">
      {/* Backgrounds */}
      <div className="ht-hbg">
        <div className="ht-hbg-grad" />
        <div className="ht-hbg-grid" />
        <div className="ht-orb ht-o1" />
        <div className="ht-orb ht-o2" />
        <div className="ht-orb ht-o3" />
        <div className="ht-ptcl" id="ht-ptcl" />
      </div>

      <div className="ht-container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="ht-hero-wrap">
          {/* Left content */}
          <div>
            <div className="ht-hbadge">
              <span className="ht-hbadge-dot" />
              {badge}
            </div>

            <h1 className="ht-htitle">
              Reimagine, Digitize
              <br />
              &amp;{' '}
              <span className="grad" id="ht-typeEl">
                realize better business outcomes
              </span>
            </h1>

            <p className="ht-hsub">{description}</p>

            <div className="ht-hact">
              <a href="#contact" className="ht-btn ht-btn-p">
                Get Free Consultation <i className="fas fa-arrow-right" />
              </a>
              <a href="#services" className="ht-btn ht-btn-o">
                <i className="fas fa-play-circle" /> Explore Services
              </a>
            </div>

            <div className="ht-hchips">
              {stats.map((s, i) => (
                <div key={i} className="ht-chip">
                  <div className="ht-chip-v">
                    <span className="ht-counter" data-t={s.t}>
                      0
                    </span>
                    <span>{s.suffix}</span>
                  </div>
                  <div className="ht-chip-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — fallback circular card */}
          <div className="ht-hvis">
            <div className="ht-horb">
              <div className="ht-hring" />
              <div className="ht-hcard">
                <Image
                  src="/logo.png"
                  alt="Hitayu"
                  width={160}
                  height={120}
                  style={{ objectFit: 'contain', mixBlendMode: 'screen', width: 'auto', height: 'auto' }}
                  priority
                />
                <div className="ht-htag">Technology · Innovation · Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
