import CareersHeroSection from '@/components/CareersHeroSection'
import CareersBenefits from '@/components/CareersBenefits'
import CareersTraits from '@/components/CareersTraits'
// import CareersCTA from '@/components/CareersCTA'
import { getCareersPage } from '@/lib/payload-utils'
import Careers from '@/components/Careers'
import { CareerComponent } from '@/components/CareerComponent'
export async function generateMetadata() {
  const c = (await getCareersPage()) as any
  return {
    title: 'Careers – Hitayu',
    description:
      c?.description ||
      'Join the Hitayu team. Explore careers in cloud, data, and digital transformation technologies.',
  }
}

export default async function CareersPage() {
  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">Careers</h1>
        </div>
      </section>
      <CareersHeroSection />
      <CareersBenefits />
      <CareersTraits />
      <CareerComponent />
      {/* <CareersCTA /> */}
    </>
  )
}
