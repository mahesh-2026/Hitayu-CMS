import type { GlobalConfig } from 'payload'

export const CareersPageGlobal: GlobalConfig = {
  slug: 'careers-page',
  label: '💼 Careers Page',
  fields: [
    // Hero / Intro
    { name: 'eyebrow', type: 'text', defaultValue: 'Careers' },
    { name: 'titleLine1', type: 'text', label: 'Title (line 1)', defaultValue: 'Build Your' },
    { name: 'titleHighlight', type: 'text', label: 'Title (highlighted)', defaultValue: 'Future' },
    { name: 'titleLine2', type: 'text', label: 'Title (line 2, after highlight)', defaultValue: 'with Hitayu' },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        "At Hitayu, we believe that our people are the driving force behind everything we do. We are passionate about building innovative, reliable, and scalable technology solutions—and that starts with building a team of talented, motivated individuals who share our vision. Whether you're an experienced professional or just starting your career, we offer an environment where you can learn, grow, and make a real impact. Our work spans across cloud solutions, infrastructure, data management, and emerging technologies, giving you the opportunity to work on meaningful projects that shape the future of businesses. We foster a culture of collaboration, innovation, and continuous learning. You'll work alongside skilled professionals in a supportive environment that encourages new ideas, values diverse perspectives, and promotes personal and professional development.",
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Section Image URL',
      defaultValue: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Uploaded image overrides the URL above' },
    },

    // Why Join Us — benefits
    { name: 'benefitsEyebrow', type: 'text', defaultValue: 'Why Join Us?' },
    { name: 'benefitsTitle', type: 'text', defaultValue: 'Benefits & Culture' },
    {
      name: 'benefits',
      type: 'array',
      label: 'Benefit Cards',
      minRows: 1,
      defaultValue: [
        { icon: 'fas fa-chart-line', title: 'Growth Opportunities', description: 'We invest in your development through training, mentorship, and hands-on experience.' },
        { icon: 'fas fa-lightbulb', title: 'Innovative Work', description: 'Be part of projects that leverage the latest in cloud, data, and digital transformation technologies.' },
        { icon: 'fas fa-users', title: 'Collaborative Culture', description: 'Work in a team-oriented environment where your ideas are valued.' },
        { icon: 'fas fa-balance-scale', title: 'Flexible Work Environment', description: 'We support work-life balance and modern ways of working.' },
        { icon: 'fas fa-rocket', title: 'Impactful Careers', description: 'Contribute to solutions that help businesses grow and succeed.' },
      ],
      fields: [
        { name: 'icon', type: 'text', defaultValue: 'fas fa-star', admin: { description: 'Font Awesome class, e.g. fas fa-chart-line' } },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },

    // Who we're looking for — traits
    { name: 'traitsEyebrow', type: 'text', defaultValue: "Who We're Looking For" },
    {
      name: 'traitsTitle',
      type: 'text',
      defaultValue: "We're always on the lookout for passionate individuals who are:",
    },
    {
      name: 'traits',
      type: 'array',
      label: 'Traits',
      minRows: 1,
      defaultValue: [
        { text: 'Curious and eager to learn' },
        { text: 'Problem-solvers with a proactive mindset' },
        { text: 'Team players with strong communication skills' },
        { text: 'Driven to deliver high-quality results' },
      ],
      fields: [{ name: 'text', type: 'text', required: true }],
    },

    // Closing CTA
    { name: 'ctaTitle', type: 'text', defaultValue: 'Join Our Team' },
    {
      name: 'ctaDescription',
      type: 'textarea',
      defaultValue:
        "If you're ready to take the next step in your career and be part of a forward-thinking organization, we'd love to hear from you.",
    },
    { name: 'ctaButtonText', type: 'text', defaultValue: 'Get In Touch' },
    { name: 'ctaButtonUrl', type: 'text', defaultValue: '/contact' },
    { name: 'careersEmail', type: 'text', defaultValue: 'careers@hitayu.com' },
  ],
}
