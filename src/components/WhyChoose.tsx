import { getSiteSettings } from '@/lib/payload-utils'
import { iconMap } from '@/lib/iconMap'
import { Zap } from 'lucide-react'

const defaultFeatures = [
  { iconName: 'Zap',         title: 'High Performance',  description: 'Lightning-fast AWS infrastructure powered by NVMe SSD storage and optimized for speed.' },
  { iconName: 'ShieldCheck', title: 'Advanced Security',  description: 'Enterprise-grade protection with WAF, DDoS mitigation, daily backups and firewalls.' },
  { iconName: 'Cloud',       title: 'AWS Cloud Hosting', description: 'Scalable cloud architecture built for 99.99% reliability on Amazon Web Services.' },
  { iconName: 'Headphones',  title: '24/7 Expert Support', description: 'Dedicated hosting specialists available around the clock via chat, email and phone.' },
]

const iconBg = [
  'bg-blue-50 text-blue-600',
  'bg-emerald-50 text-emerald-600',
  'bg-violet-50 text-violet-600',
  'bg-amber-50 text-amber-600',
]

export default async function WhyChoose() {
  const settings = await getSiteSettings()
  const section  = settings?.whyChooseSection

  const tag         = section?.tag         || 'WHY CHOOSE HITAYU'
  const title       = section?.title       || 'Enterprise Grade\nCloud Infrastructure'
  const description = section?.description || 'Power your applications with secure AWS hosting designed for businesses that demand reliability and performance.'
  const features    = section?.features && (section.features as any[]).length > 0
    ? (section.features as any[])
    : defaultFeatures

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title mt-3" style={{ whiteSpace: 'pre-line' }}>{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item: any, i: number) => {
            const Icon = iconMap[item.iconName] || Zap
            const bg   = iconBg[i % iconBg.length]
            return (
              <div
                key={i}
                className="group relative p-7 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-[#38b1ed]/30 hover:-translate-y-2 transition-all duration-300"
              >
                {/* accent top bar */}
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-[#38b1ed] to-[#080A47] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${bg}`}>
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
