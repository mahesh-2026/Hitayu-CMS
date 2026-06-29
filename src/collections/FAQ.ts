import type { CollectionConfig } from 'payload'

export const FAQCollection: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    description: 'Frequently Asked Questions shown on the home page',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
}
