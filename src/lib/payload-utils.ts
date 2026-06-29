import { getPayload } from 'payload'
import config from '@/payload.config'

let cachedPayload: Awaited<ReturnType<typeof getPayload>> | null = null
let initFailed = false

async function getPayloadInstance() {
  if (initFailed) return null
  if (cachedPayload) return cachedPayload
  try {
    cachedPayload = await getPayload({ config })
    return cachedPayload
  } catch {
    initFailed = true
    return null
  }
}

export async function getServices() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'services', sort: 'order', limit: 200 })
    return docs
  } catch {
    return []
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    const { docs } = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return docs[0] || null
  } catch {
    return null
  }
}

export async function getSolutions() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await (payload as any).find({ collection: 'solutions', sort: 'order', limit: 200 })
    return docs
  } catch {
    return []
  }
}

export async function getSolutionBySlug(slug: string) {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    const { docs } = await (payload as any).find({
      collection: 'solutions',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return docs[0] || null
  } catch {
    return null
  }
}

export async function getPricingPlans() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'pricing-plans', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getTestimonials() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'testimonials', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getAboutItems() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'about-items', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getAboutPage() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    return await payload.findGlobal({ slug: 'about-page' })
  } catch {
    return null
  }
}

export async function getCareersPage() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    return await payload.findGlobal({ slug: 'careers-page' })
  } catch {
    return null
  }
}

export async function getPartnersPage() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    return await payload.findGlobal({ slug: 'partners-page' })
  } catch {
    return null
  }
}

export async function getContactPage() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    return await payload.findGlobal({ slug: 'contact-page' })
  } catch {
    return null
  }
}

export async function getFAQs() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({ collection: 'faqs', sort: 'order' })
    return docs
  } catch {
    return []
  }
}

export async function getHeroSlides() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await payload.find({
      collection: 'hero-slides',
      sort: 'order',
      depth: 1,
    })
    return docs
      .map((doc: any) => {
        // Prefer pasted URL → fall back to uploaded file URL
        const url: string | undefined =
          (doc.imageUrl as string | undefined) ||
          (doc.image as any)?.url as string | undefined
        return { url, alt: (doc.alt as string) || 'Hero slide' }
      })
      .filter((s): s is { url: string; alt: string } => typeof s.url === 'string' && s.url.length > 0)
  } catch {
    return []
  }
}

export async function getSiteSettings() {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return null
    const { docs } = await payload.find({ collection: 'site-settings', limit: 1 })
    return docs[0] || null
  } catch {
    return null
  }
}

export interface ContactSubmissionData {
  name: string
  email: string
  phone?: string
  company?: string
  service?: string
  message: string
  ipAddress?: string
}

export async function createContactSubmission(data: ContactSubmissionData) {
  const payload = await getPayloadInstance()
  if (!payload) throw new Error('Payload not available')
  // Cast to any until payload-types.ts is regenerated with contact-submissions
  return (payload as any).create({
    collection: 'contact-submissions',
    data: {
      ...data,
      status: 'new',
    },
  })
}

export async function getContactSubmissions(limit = 50) {
  try {
    const payload = await getPayloadInstance()
    if (!payload) return []
    const { docs } = await (payload as any).find({
      collection: 'contact-submissions',
      sort: '-createdAt',
      limit,
    })
    return docs
  } catch {
    return []
  }
}
