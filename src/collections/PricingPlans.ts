import type { CollectionConfig } from 'payload'

export const PricingPlans: CollectionConfig = {
  slug: 'pricing-plans',
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
      name: 'price',
      type: 'text',
      required: true,
      admin: {
        description: 'Price in format like "$2.99"',
      },
    },
    {
      name: 'period',
      type: 'text',
      required: true,
      defaultValue: '/month',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Mark this plan as popular/featured',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Get Started',
      admin: { description: 'CTA button label for this plan' },
    },
    {
      name: 'buttonUrl',
      type: 'text',
      defaultValue: '#',
      admin: { description: 'CTA button link URL' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which plans appear',
      },
    },
  ],
}
