import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'Job title or company (e.g. "CEO, Acme Corp")',
      },
    },
    {
      name: 'company',
      type: 'text',
      admin: {
        description: 'Company name (optional)',
      },
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The testimonial text',
      },
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 5,
      admin: {
        description: 'Star rating (1-5)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which testimonials appear',
      },
    },
  ],
}
