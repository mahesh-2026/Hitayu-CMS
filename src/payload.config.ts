import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { Hero } from './collections/hero'
import { HeroSlides } from './collections/HeroSlides'
import { Services } from './collections/Services'
import { Solutions } from './collections/Solutions'
import { PricingPlans } from './collections/PricingPlans'
import { Testimonials } from './collections/Testimonials'
import { SiteSettings } from './collections/SiteSettings'
import { AboutItems } from './collections/AboutItems'
import { FAQCollection } from './collections/FAQ'
import { CaseStudies } from './collections/CaseStudies'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { AboutPageGlobal } from './globals/AboutPage'
import { CareersPageGlobal } from './globals/CareersPage'
import { PartnersPageGlobal } from './globals/PartnersPage'
import { ContactPageGlobal } from './globals/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Strip sslmode / channel_binding from the URL so pg-connection-string doesn't
// emit the "SSL modes treated as aliases" warning. SSL is configured explicitly below.
const rawDbUrl = process.env.DATABASE_URL || ''
const cleanDbUrl = rawDbUrl
  .replace(/[?&]sslmode=[^&]*/g, '')
  .replace(/[?&]channel_binding=[^&]*/g, '')
  .replace(/\?&/g, '?')
  .replace(/[?&]$/, '')
const needsSSL = rawDbUrl.includes('neon.tech') || rawDbUrl.includes('sslmode=')

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Pages, Hero, HeroSlides, Services, Solutions, PricingPlans, Testimonials, SiteSettings, AboutItems, FAQCollection, ContactSubmissions],
  globals: [AboutPageGlobal, CareersPageGlobal, PartnersPageGlobal, ContactPageGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: cleanDbUrl,
      ssl: needsSSL ? { rejectUnauthorized: false } : false,
      connectionTimeoutMillis: 30000,
      idleTimeoutMillis: 30000,
      max: 5,
      allowExitOnIdle: true,
    },
  }),
  sharp,
  plugins: [],
})
