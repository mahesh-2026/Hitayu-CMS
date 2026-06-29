import type { CollectionConfig } from 'payload'

export const Solutions: CollectionConfig = {
  slug: 'solutions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'slug', 'order'],
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      defaultValue: 'fas fa-box-open',
      admin: { description: 'Font Awesome class, e.g. fas fa-box-open' },
    },
    {
      name: 'tag',
      type: 'text',
      admin: { description: 'Short badge label shown above the title, e.g. "All-in-One"' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL path: /solutions/your-slug — use lowercase, hyphens only' },
    },
    {
      name: 'tagline',
      type: 'text',
      admin: { description: 'Short subtitle shown under the title on the detail page' },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: { description: 'Short summary used on homepage cards and the solutions index page' },
    },
    {
      name: 'fullDescription',
      type: 'textarea',
      admin: { description: 'Full long-form content shown on the dedicated detail page' },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Sub-Features (optional)',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: { description: 'External image URL for the card / detail page (optional)' },
    },
    {
      name: 'solutionImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Upload an image (overrides URL above)' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
