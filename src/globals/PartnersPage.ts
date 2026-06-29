import type { GlobalConfig } from 'payload'

export const PartnersPageGlobal: GlobalConfig = {
  slug: 'partners-page',
  label: '🤝 Partners Page',
  fields: [
    { name: 'eyebrow', type: 'text', defaultValue: 'Our Partners' },
    { name: 'titleLine1', type: 'text', label: 'Title (line 1)', defaultValue: 'Cloud-Agnostic.' },
    { name: 'titleHighlight', type: 'text', label: 'Title (highlighted)', defaultValue: 'Your Cloud,' },
    { name: 'titleLine2', type: 'text', label: 'Title (line 2)', defaultValue: 'Your Choice, Our Expertise' },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        "At Hitayu, we believe in delivering solutions that are built around our customers—not limited by specific vendors. That's why we maintain a cloud-agnostic approach, giving you the freedom to choose the Cloud Service Provider (CSP) that best fits your business needs. Rather than being tied to a single platform, we work across multiple leading cloud ecosystems, ensuring that our solutions are flexible, scalable, and aligned with your strategic goals. Whether you already have a preferred provider or need guidance in selecting one, we support you every step of the way. Our team brings deep in-house expertise across a wide range of cloud platforms, enabling us to design, deploy, and manage solutions with consistency and excellence—regardless of the environment. This multi-platform capability allows us to offer unbiased recommendations and deliver the best possible outcomes for your business. By partnering with us, you gain access to a broad network of technologies and cloud capabilities, combined with the confidence that your solutions are tailored specifically to your requirements—not constrained by vendor limitations.",
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Section Image URL',
      defaultValue: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Uploaded image overrides the URL above' },
    },

    // Partner logos
    { name: 'logosEyebrow', type: 'text', defaultValue: 'Technology Partners' },
    { name: 'logosTitle', type: 'text', defaultValue: 'Multi-Platform Excellence' },
    {
      name: 'logosDescription',
      type: 'textarea',
      defaultValue:
        'Rather than being tied to a single platform, we work across multiple leading cloud ecosystems — ensuring our solutions are flexible, scalable, and aligned with your strategic goals. By partnering with us, you gain access to a broad network of technologies combined with the confidence that solutions are tailored specifically to your requirements — not constrained by vendor limitations.',
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Partner Logos',
      minRows: 1,
      defaultValue: [
        { icon: 'fab fa-aws', label: 'Amazon Web Services' },
        { icon: 'fab fa-microsoft', label: 'Microsoft Azure' },
        { icon: 'fab fa-google', label: 'Google Cloud' },
        { icon: 'fas fa-cloud', label: 'Oracle Cloud' },
        { icon: 'fas fa-server', label: 'IBM Cloud' },
      ],
      fields: [
        { name: 'icon', type: 'text', defaultValue: 'fas fa-cloud', admin: { description: 'Font Awesome class, e.g. fab fa-aws' } },
        { name: 'label', type: 'text', required: true },
      ],
    },

    // Closing tagline
    { name: 'tagline', type: 'text', defaultValue: 'Your cloud. Your choice. Our expertise.' },
    { name: 'ctaButtonText', type: 'text', defaultValue: 'Talk to Our Experts' },
    { name: 'ctaButtonUrl', type: 'text', defaultValue: '/contact' },
  ],
}
