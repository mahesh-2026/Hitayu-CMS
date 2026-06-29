import PartnersHeroSection from '@/components/PartnersHeroSection'
import PartnersLogos from '@/components/PartnersLogos'
import PartnersCTA from '@/components/PartnersCTA'
import { getPartnersPage } from '@/lib/payload-utils'

export async function generateMetadata() {
  const p = (await getPartnersPage()) as any
  return {
    title: 'Partners – Hitayu',
    description:
      p?.description ||
      'Hitayu is cloud-agnostic — partnering with AWS, Azure, Google Cloud, Oracle, and IBM to deliver the best solution for your business.',
  }
}

export default async function PartnersPage() {
  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">Partners</h1>
        </div>
      </section>

      <PartnersHeroSection />
      <PartnersLogos />
      <PartnersCTA />
    </>
  )
}
