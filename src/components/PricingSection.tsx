import { Check } from 'lucide-react'
import { getSiteSettings, getPricingPlans } from '@/lib/payload-utils'

const defaultPlans = [
  { id: 1, name: 'Starter',    price: '299',  period: '/month', isPopular: false, buttonText: 'Get Started', buttonUrl: '#',
    features: [{ feature: '1 Website' }, { feature: '10 GB SSD Storage' }, { feature: 'Free SSL Certificate' }, { feature: 'Daily Backup' }, { feature: '24/7 Support' }] },
  { id: 2, name: 'Business',   price: '799',  period: '/month', isPopular: true,  buttonText: 'Get Started', buttonUrl: '#',
    features: [{ feature: '10 Websites' }, { feature: '50 GB SSD Storage' }, { feature: 'Free SSL Certificate' }, { feature: 'Daily Backup' }, { feature: 'Priority Support' }, { feature: 'AWS Cloud Hosting' }] },
  { id: 3, name: 'Enterprise', price: '1499', period: '/month', isPopular: false, buttonText: 'Get Started', buttonUrl: '#',
    features: [{ feature: 'Unlimited Websites' }, { feature: '200 GB SSD Storage' }, { feature: 'AWS Infrastructure' }, { feature: 'Load Balancer' }, { feature: 'Dedicated Resources' }, { feature: '24/7 Premium Support' }] },
]

export default async function PricingSection() {
  const [settings, plans] = await Promise.all([getSiteSettings(), getPricingPlans()])
  const section = settings?.pricingSection

  const tag         = section?.tag         || 'PRICING PLANS'
  const title       = section?.title       || 'Choose The Perfect\nHosting Plan'
  const description = section?.description || 'Transparent pricing with no hidden fees. Cancel anytime.'

  const displayPlans = plans.length > 0 ? plans : defaultPlans

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title mt-3" style={{ whiteSpace: 'pre-line' }}>{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {displayPlans.map((plan: any, i: number) => {
            const isPopular = plan.isPopular || plan.featured || false
            const features  = plan.features || []
            // Fix price: strip any existing currency symbols then show clean
            const rawPrice  = String(plan.price || '0').replace(/[₹$€£\s]/g, '')

            return (
              <div
                key={plan.id || i}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isPopular
                    ? 'bg-[#080A47] border-[#38b1ed] shadow-xl shadow-[#080A47]/20'
                    : 'bg-white border-slate-200 hover:border-[#38b1ed]/40'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#38b1ed] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <h3 className={`text-lg font-bold mb-1 ${isPopular ? 'text-white' : 'text-[#0f172a]'}`}>
                  {plan.name}
                </h3>

                {plan.description && (
                  <p className={`text-sm mb-4 ${isPopular ? 'text-white/60' : 'text-slate-400'}`}>
                    {plan.description}
                  </p>
                )}

                <div className={`flex items-end gap-1 mb-6 mt-4 ${isPopular ? 'text-white' : 'text-[#0f172a]'}`}>
                  <span className="text-lg font-semibold">₹</span>
                  <span className="text-5xl font-black leading-none">{rawPrice}</span>
                  <span className={`text-sm mb-1 ${isPopular ? 'text-white/50' : 'text-slate-400'}`}>
                    {plan.period || '/month'}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((f: any, fi: number) => (
                    <li key={fi} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isPopular ? 'bg-[#38b1ed]/20' : 'bg-emerald-50'
                      }`}>
                        <Check size={12} className={isPopular ? 'text-[#38b1ed]' : 'text-emerald-500'} strokeWidth={3} />
                      </div>
                      <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-slate-600'}`}>
                        {typeof f === 'string' ? f : f.feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.buttonUrl || '#'}
                  className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isPopular
                      ? 'bg-[#38b1ed] text-white hover:bg-[#2ea0d8]'
                      : 'bg-[#080A47] text-white hover:bg-[#38b1ed]'
                  }`}
                >
                  {plan.buttonText || 'Get Started'}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
