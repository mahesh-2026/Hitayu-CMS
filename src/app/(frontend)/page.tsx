import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import Process from '@/components/Process'
import Solutions from '@/components/Solutions'
import Industries from '@/components/Industries'
import TechStack from '@/components/TechStack'
// import Partners from '@/components/Partners'
// import CaseStudies from '@/components/CaseStudies'
// import Testimonials from '@/components/Testimonials'
import Careers from '@/components/Careers'
import CTASection from '@/components/CTASection'
import { ContactComponent } from '@/components/ContactComponent'
import { getSiteSettings } from '@/lib/payload-utils'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const settings = await getSiteSettings()
  return {
    title: settings?.siteName
      ? `${settings.siteName} – Transforming Business Through Technology`
      : 'Hitayu – Transforming Business Through Technology',
    description:
      settings?.heroSection?.description ||
      'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive.',
  }
}

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <About />
        <StatsSection />
        <ServicesSection />
        <Process />
        <Solutions />
        <Industries />
        <TechStack />
        {/* <Partners /> */}
        {/* <CaseStudies /> */}
        {/* <Testimonials /> */}
        <Careers source="homepage" />       
        <CTASection />
        {/* <ContactComponent /> */}
      </main>
    </>
  )
}
