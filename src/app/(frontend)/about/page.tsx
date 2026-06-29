import AboutHeroSection from '@/components/AboutHeroSection'
import AgilitySection from '@/components/AgilitySection'
import MissionVisionValues from '@/components/MissionVisionValues'
import { getAboutPage } from '@/lib/payload-utils'

export async function generateMetadata() {
  const a = (await getAboutPage()) as any
  return {
    title: 'About Us – Hitayu',
    description:
      a?.description ||
      'Learn about Hitayu — our mission, vision, values, and commitment to delivering secure, scalable cloud solutions.',
  }
}

export default async function AboutPage() {
  return (
    <>
      <section className="ht-cbanner">
        <div className="ht-container">
          <h1 className="ht-cbanner-title">About Us</h1>
        </div>
      </section>
      <AboutHeroSection />
      <AgilitySection />
      <MissionVisionValues />
    </>
  )
}
