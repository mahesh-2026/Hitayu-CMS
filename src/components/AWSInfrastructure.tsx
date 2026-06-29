import { getSiteSettings } from '@/lib/payload-utils'
import { iconMap } from '@/lib/iconMap'
import { Globe } from 'lucide-react'

const defaultFeatures = [
  { iconName: 'Globe',       title: 'Global Infrastructure' },
  { iconName: 'TrendingUp',  title: 'Auto Scaling'          },
  { iconName: 'Database',    title: 'Daily Backups'         },
  { iconName: 'ShieldCheck', title: 'Enterprise Security'   },
]

export default async function AWSInfrastructure() {
  const settings = await getSiteSettings()
  const section  = settings?.awsSection

  const tag         = section?.tag         || 'AWS POWERED'
  const title       = section?.title       || 'Enterprise Cloud\nInfrastructure'
  const description = section?.description || 'Powered by Amazon Web Services, our cloud platform delivers unmatched reliability, scalability and security for businesses of all sizes.'
  const buttonText  = section?.buttonText  || 'Explore AWS Hosting'
  const buttonUrl   = section?.buttonUrl   || '#'
  const imageUrl    = (section?.sectionImage as any)?.url || section?.imageUrl
    || 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&w=700&h=560&fit=crop'
  const features    = section?.features && (section.features as any[]).length > 0
    ? (section.features as any[])
    : defaultFeatures

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left – content */}
          <div>
            <span className="section-tag">{tag}</span>
            <h2 className="text-4xl font-extrabold text-[#0f172a] mt-3 mb-5 leading-tight" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">{description}</p>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              {features.map((item: any, i: number) => {
                const Icon = iconMap[item.iconName] || Globe
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#38b1ed]/10 flex items-center justify-center text-[#38b1ed] flex-shrink-0">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <span className="text-sm font-semibold text-[#0f172a]">{item.title}</span>
                  </div>
                )
              })}
            </div>

            <a href={buttonUrl} className="btn-primary">{buttonText}</a>
          </div>

          {/* Right – image */}
          <div className="relative">
            {/* decorative ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#38b1ed]/10 to-[#080A47]/5 -z-10" />
            <img
              src={imageUrl}
              alt="AWS Cloud Infrastructure"
              className="w-full rounded-2xl shadow-2xl object-cover"
              style={{ maxHeight: 480 }}
            />
            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#080A47] flex items-center justify-center">
                <Globe size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Global Regions</p>
                <p className="text-base font-extrabold text-[#080A47]">99.99% SLA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
