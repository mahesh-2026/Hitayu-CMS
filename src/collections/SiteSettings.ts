import type { CollectionConfig } from 'payload'
import { iconOptions } from '../lib/iconMap'

export const SiteSettings: CollectionConfig = {
  slug: 'site-settings',
  admin: {
    useAsTitle: 'siteName',
    description: 'Site-wide basics (logo, header/footer, contact info) and homepage section content. Page-specific content (About/Careers/Partners/Contact) lives under Globals in the sidebar.',
  },
  fields: [
    // ─── GENERAL ────────────────────────────────────────────────────────────
    {
      name: 'siteName',
      type: 'text',
      required: true,
      defaultValue: 'HOSTIKO',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Upload your site logo' },
    },
    {
      name: 'companyDescription',
      type: 'textarea',
      admin: { description: 'Short company description used in footer' },
    },

    // ─── HEADER ─────────────────────────────────────────────────────────────
    {
      name: 'headerInfo',
      type: 'group',
      label: 'Header Info',
      fields: [
        { name: 'email', type: 'text', defaultValue: 'info@hitayu.com' },
        { name: 'phone', type: 'text', defaultValue: '+91 98765 43210' },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
            {
              name: 'icon',
              type: 'text',
              required: true,
              admin: { description: 'Emoji or text symbol (e.g. in, 𝕏, f)' },
            },
          ],
        },
      ],
    },
    {
      name: 'navigation',
      label: 'Navigation Menu',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'openInNewTab', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'headerButton',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', defaultValue: 'Sign In' },
        { name: 'url', type: 'text', defaultValue: '/signin' },
        { name: 'openInNewTab', type: 'checkbox', defaultValue: false },
      ],
    },

    // ─── HERO SECTION ────────────────────────────────────────────────────────
    {
      name: 'heroSection',
      type: 'group',
      label: '🏠 Hero Section',
      fields: [
        {
          name: 'badge',
          type: 'text',
          defaultValue: 'AWS Powered Cloud Hosting',
          admin: { description: 'Small badge text above the title' },
        },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Managed AWS Hosting\nBuilt For Speed,\nSecurity & Scale',
          admin: { description: 'Main heading. Use line breaks for multi-line display.' },
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Deploy your website on enterprise-grade AWS infrastructure with lightning-fast performance, daily backups and 24/7 expert support.',
        },
        { name: 'primaryButtonText', type: 'text', defaultValue: 'Get Started' },
        { name: 'primaryButtonUrl', type: 'text', defaultValue: '#' },
        { name: 'secondaryButtonText', type: 'text', defaultValue: 'View Plans' },
        { name: 'secondaryButtonUrl', type: 'text', defaultValue: '#pricing' },
        {
          name: 'heroImageUrl',
          type: 'text',
          label: 'Hero Image URL',
          defaultValue:
            'https://wp.xpeedstudio.com/hostinza/wp-content/uploads/revslider/home-04/banner_image-41.png',
          admin: { description: 'External image URL for hero section' },
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Image (Upload)',
          admin: { description: 'Uploaded image overrides the URL field above' },
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stats',
          admin: { description: 'Small stats shown below buttons (e.g. 99.99% Uptime)' },
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },

    // ─── STATS COUNTER SECTION ───────────────────────────────────────────────
    {
      name: 'statsSection',
      type: 'group',
      label: '📊 Stats Counter Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show this section',
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Counter Stats',
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
              admin: { description: 'e.g. 500+' },
            },
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: { description: 'e.g. Happy Clients' },
            },
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Users',
            },
          ],
        },
      ],
    },

    // ─── WHY CHOOSE SECTION ──────────────────────────────────────────────────
    {
      name: 'whyChooseSection',
      type: 'group',
      label: '✅ Why Choose Section',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'WHY CHOOSE HITAYU' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Enterprise Grade\nCloud Infrastructure',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Power your applications with secure AWS hosting designed for businesses that demand reliability and performance.',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Cards',
          fields: [
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Zap',
            },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
          ],
        },
      ],
    },

    // ─── SERVICES SECTION ────────────────────────────────────────────────────
    {
      name: 'servicesSection',
      type: 'group',
      label: '🛠 Services Section',
      admin: {
        description:
          'Section heading/intro — actual service cards are managed in the Services collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'OUR SERVICES' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Hosting Solutions\nBuilt For Growth',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Powerful AWS-powered hosting services designed to keep your business online and growing.',
        },
      ],
    },

    // ─── AWS / ABOUT SECTION ─────────────────────────────────────────────────
    {
      name: 'awsSection',
      type: 'group',
      label: '☁️ AWS Infrastructure Section',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'AWS POWERED' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Enterprise Cloud\nInfrastructure',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Powered by Amazon Web Services, our cloud platform delivers unmatched reliability, scalability and security for businesses of all sizes.',
        },
        { name: 'buttonText', type: 'text', defaultValue: 'Explore AWS Hosting' },
        { name: 'buttonUrl', type: 'text', defaultValue: '#' },
        {
          name: 'imageUrl',
          type: 'text',
          label: 'Section Image URL',
          defaultValue: 'https://localhost.pixellyo.com/html/assets/img/about-img-7.png',
        },
        {
          name: 'sectionImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Section Image (Upload)',
          admin: { description: 'Upload overrides the URL above' },
        },
        {
          name: 'features',
          type: 'array',
          label: 'Feature Bullets',
          fields: [
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Globe',
            },
            { name: 'title', type: 'text', required: true },
          ],
        },
      ],
    },

    // ─── HOW IT WORKS SECTION ────────────────────────────────────────────────
    {
      name: 'howItWorksSection',
      type: 'group',
      label: '⚙️ How It Works Section',
      fields: [
        {
          name: 'isVisible',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show this section',
        },
        { name: 'tag', type: 'text', defaultValue: 'HOW IT WORKS' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Get Started In\n3 Simple Steps',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Set up your hosting in minutes with our streamlined onboarding process.',
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Steps',
          fields: [
            {
              name: 'stepNumber',
              type: 'text',
              required: true,
              admin: { description: 'e.g. 01' },
            },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea', required: true },
            {
              name: 'iconName',
              type: 'select',
              options: iconOptions,
              defaultValue: 'Package',
            },
          ],
        },
      ],
    },

    // ─── PRICING SECTION ─────────────────────────────────────────────────────
    {
      name: 'pricingSection',
      type: 'group',
      label: '💳 Pricing Section',
      admin: {
        description:
          'Section heading — actual pricing cards are managed in Pricing Plans collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'PRICING PLANS' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Choose The Perfect\nHosting Plan',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Transparent pricing with no hidden fees. Cancel anytime.',
        },
      ],
    },

    // ─── FAQ SECTION ─────────────────────────────────────────────────────────
    {
      name: 'faqSection',
      type: 'group',
      label: '❓ FAQ Section',
      admin: {
        description: 'Section heading — FAQ items are managed in the FAQs collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'FAQ' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Frequently Asked\nQuestions',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Everything you need to know about our AWS hosting services.',
        },
      ],
    },

    // ─── CTA SECTION ─────────────────────────────────────────────────────────
    {
      name: 'ctaSection',
      type: 'group',
      label: '🚀 CTA (Call-To-Action) Section',
      fields: [
        { name: 'badge', type: 'text', defaultValue: 'AWS Powered Hosting' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'Ready To Launch\nOn AWS Infrastructure?',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Get secure, scalable and high-performance hosting backed by AWS cloud technology and expert support.',
        },
        { name: 'primaryButtonText', type: 'text', defaultValue: 'Get Started' },
        { name: 'primaryButtonUrl', type: 'text', defaultValue: '#' },
        { name: 'secondaryButtonText', type: 'text', defaultValue: 'Contact Sales' },
        { name: 'secondaryButtonUrl', type: 'text', defaultValue: '#contact' },
      ],
    },

    // ─── TESTIMONIALS SECTION ────────────────────────────────────────────────
    {
      name: 'testimonialsSection',
      type: 'group',
      label: '⭐ Testimonials Section',
      admin: {
        description:
          'Section heading — testimonial cards are managed in the Testimonials collection',
      },
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'TESTIMONIALS' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: 'What Our Customers\nAre Saying',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'Trusted by hundreds of businesses across India and beyond.',
        },
      ],
    },

    // ─── CONTACT SECTION ─────────────────────────────────────────────────────
    {
      name: 'contactSection',
      type: 'group',
      label: '📞 Contact Section',
      fields: [
        { name: 'tag', type: 'text', defaultValue: 'CONTACT US' },
        {
          name: 'title',
          type: 'textarea',
          defaultValue: "Let's Talk About\nYour Hosting Needs",
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Our cloud hosting experts are ready to help you choose the perfect AWS hosting solution.',
        },
        { name: 'formTitle', type: 'text', defaultValue: 'Request A Callback' },
      ],
    },


    // ─── FOOTER ──────────────────────────────────────────────────────────────
    { name: 'footerAddress', type: 'text' },
    { name: 'footerPhone', type: 'text' },
    { name: 'footerEmail', type: 'text' },
    { name: 'contactEmail', type: 'text' },
    { name: 'contactPhone', type: 'text' },
    { name: 'contactAddress', type: 'textarea' },
    {
      name: 'contactPhoneHours',
      type: 'text',
      defaultValue: 'Mon-Fri, 9AM-6PM EST',
    },

    // ─── LEGACY FIELDS (kept for backward compat) ───────────────────────────
    { name: 'heroTitle', type: 'text' },
    { name: 'heroDescription', type: 'textarea' },
  ],
}
