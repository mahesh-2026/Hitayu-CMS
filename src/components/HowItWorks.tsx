import { getSiteSettings } from '@/lib/payload-utils'
import { iconMap } from '@/lib/iconMap'
import { Package } from 'lucide-react'

const defaultSteps = [
  { stepNumber: '01', iconName: 'Package',  title: 'Choose Your Plan',      description: 'Select the hosting plan that fits your budget. All plans include free SSL, daily backups and easy migrations.' },
  { stepNumber: '02', iconName: 'Settings', title: 'Configure & Deploy',    description: 'Our team sets up your AWS environment in minutes with one-click deployments and zero downtime migrations.' },
  { stepNumber: '03', iconName: 'Rocket',   title: 'Go Live & Scale',       description: 'Your website is live on enterprise AWS infrastructure. Scale CPU, RAM and storage instantly as you grow.' },
]

const stepColors = ['#38b1ed', '#080A47', '#10b981']

export default async function HowItWorks() {
  const settings = await getSiteSettings()
  const section  = settings?.howItWorksSection

  if (section?.isVisible === false) return null

  const tag         = section?.tag         || 'HOW IT WORKS'
  const title       = section?.title       || 'Get Started In\n3 Simple Steps'
  const description = section?.description || 'Set up your hosting in minutes with our streamlined onboarding process.'
  const steps       = section?.steps && (section.steps as any[]).length > 0
    ? (section.steps as any[])
    : defaultSteps

  return (
    <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
      {/* bg decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#38b1ed]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#080A47]/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title mt-3" style={{ whiteSpace: 'pre-line' }}>{title}</h2>
          <p className="section-desc">{description}</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connecting dashed line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-[calc(16.7%+24px)] right-[calc(16.7%+24px)] h-[2px] border-t-2 border-dashed border-slate-200 z-0" />

          {steps.map((step: any, i: number) => {
            const Icon  = iconMap[step.iconName] || Package
            const color = stepColors[i % stepColors.length]

            return (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                {/* Step number circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white"
                  style={{ background: color }}
                >
                  <Icon size={28} strokeWidth={1.75} />
                </div>

                <div
                  className="text-7xl font-black leading-none mb-3 select-none"
                  style={{ color: `${color}18` }}
                >
                  {step.stepNumber || String(i + 1).padStart(2, '0')}
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group-hover:shadow-lg group-hover:border-slate-200 transition-all duration-300 w-full -mt-8">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
