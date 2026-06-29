// collections/CaseStudies.ts

import { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'tag',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
      required: true,
      admin: {
        description: 'Font Awesome class name',
      },
    },
    {
      name: 'background',
      type: 'text',
      defaultValue: 'linear-gradient(135deg,#0F1235,#252B6E)',
    },
    {
      name: 'metrics',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}