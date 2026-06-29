import type { CollectionConfig } from 'payload'

export const AboutItems: CollectionConfig = {
  slug: 'about-items',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      required: true,
      admin: {
        description: 'Emoji icon for the card',
      },
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
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which items appear',
      },
    },
  ],
}
