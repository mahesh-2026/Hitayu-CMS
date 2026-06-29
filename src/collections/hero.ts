  import { CollectionConfig } from 'payload'

  export const Hero: CollectionConfig = {
    slug: 'hero',
    admin: {
      useAsTitle: 'title',
    },
    fields: [
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
        name: 'primaryButtonText',
        type: 'text',
      },
      {
        name: 'secondaryButtonText',
        type: 'text',
      },
    ],
  }