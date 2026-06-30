import type { GlobalConfig } from 'payload'

export const AboutPageGlobal: GlobalConfig = {
  slug: 'about-page',
  label: 'About Us Page',
  fields: [
    { name: 'eyebrow', type: 'text', defaultValue: 'About Hitayu' },
    { name: 'titleLine1', type: 'text', label: 'Title (line 1)', defaultValue: 'Reimagine, digitize, and realize better' },
    { name: 'titleHighlight', type: 'text', label: 'Title (highlighted)', defaultValue: 'business outcomes' },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Section Image URL',
      defaultValue: 'https://res.cloudinary.com/ryg9bkkz/image/upload/v1782805193/hitayu/s3v3djty8ufbtmiksvx8.png',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Uploaded image overrides the URL above' },
    },
    { name: 'badge1Title', type: 'text', defaultValue: 'Award Winning' },
    { name: 'badge1Sub', type: 'text', defaultValue: 'Best IT Partner 2024' },
    { name: 'badge2Title', type: 'text', defaultValue: 'ISO 27001' },
    { name: 'badge2Sub', type: 'text', defaultValue: 'Security Certified' },
    {
      name: 'features',
      type: 'array',
      label: 'Feature Highlights',
      minRows: 3,
      maxRows: 3,
      defaultValue: [
        { icon: 'fas fa-rocket', title: 'Enabling Agility, Empowering Growth' },
        { icon: 'fas fa-star', title: 'Commitment to Quality' },
        { icon: 'fas fa-users-cog', title: 'Skilled, Dedicated Team' },
      ],
      fields: [
        { name: 'icon', type: 'text', defaultValue: 'fas fa-rocket', admin: { description: 'Font Awesome class, e.g. fas fa-rocket' } },
        { name: 'title', type: 'text', required: true },
      ],
    },
    { name: 'ctaText', type: 'text', defaultValue: 'Partner with Us' },
    { name: 'ctaUrl', type: 'text', defaultValue: '#contact' },

    // Agility section (full statement — shown on /about page)
    { name: 'agilityTitle', type: 'text', defaultValue: 'Enabling Agility, Empowering Growth' },
    {
      name: 'agilityDescription',
      type: 'textarea',
      defaultValue:
        'In a world defined by constant change, the ability to adapt is no longer a competitive advantage—it is a necessity. "Enabling agility, Empowering Growth" captures the essence of what it takes for individuals and organizations to thrive in today\'s dynamic environment. Agility is more than speed; it is the capacity to anticipate, respond, and evolve with purpose. We empower organizations by delivering advanced cloud solutions designed to enhance agility across every layer of the enterprise. Through modern architectures such as multi-cloud and hybrid cloud environments, containerization, and microservices, we help businesses modernize their infrastructure and streamline application development. This approach enables faster deployment cycles, improved system reliability, and the flexibility to scale resources dynamically in response to market demands. By enabling agility, we provide organizations with the tools and capabilities to pivot, innovate, and compete effectively. By empowering growth, we create a foundation for sustainable success—where technology not only supports business objectives but drives them forward.',
    },
    {
      name: 'agilityImageUrl',
      type: 'text',
      label: 'Agility Section Image URL',
      defaultValue: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
    },
    {
      name: 'agilityImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Uploaded image overrides the URL above' },
    },

    // Mission / Vision / Values
    { name: 'mvvEyebrow', type: 'text', defaultValue: 'Our Foundation' },
    { name: 'mvvTitleLine1', type: 'text', defaultValue: 'Mission, Vision &' },
    { name: 'mvvTitleHighlight', type: 'text', defaultValue: 'Values' },
    {
      name: 'mission',
      type: 'textarea',
      defaultValue:
        'To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.',
    },
    {
      name: 'vision',
      type: 'textarea',
      defaultValue:
        'To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth and digital transformation.',
    },
    {
      name: 'values',
      type: 'textarea',
      defaultValue:
        'We conduct our business with honesty, transparency, and strong ethical principles in all interactions. We prioritize our clients\' needs by delivering reliable, high-quality cloud solutions that support their long-term success. We strive for the highest standards in performance, quality, and service delivery in everything we do.',
    },
  ],
}
