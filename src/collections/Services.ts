import type { CollectionConfig } from 'payload'
import { iconOptions } from '../lib/iconMap'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'slug', 'order'],
  },
  fields: [
    {
      name: 'icon',
      type: 'text',
      admin: {
        description: 'Font Awesome class or emoji (e.g., fas fa-server, 🌐) — used if Lucide Icon is not set',
      },
    },
    {
      name: 'iconName',
      type: 'select',
      options: iconOptions,
      admin: {
        description: 'Lucide icon — overrides emoji/Font Awesome icon above',
      },
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
      admin: { description: 'URL path: /services/your-slug — use lowercase, hyphens only' },
    },
    {
      name: 'category',
      type: 'select',
      options: [
        'Managed Services',
        'Infrastructure Modernisation',
        'Data, Analytics & AI',
        'Application Modernisation',
      ],
      required: true,
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
      admin: { description: 'Short summary used on homepage cards and the services index page' },
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
      admin: { description: 'Optional bullet list of sub-features shown on the detail page' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'imageUrl',
      type: 'text',
      admin: {
        description: 'External image URL for the service card / detail page (optional)',
      },
    },
    {
      name: 'serviceImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Upload an image (overrides URL above)',
      },
    },
    {
      name: 'learnMoreUrl',
      type: 'text',
      admin: { description: 'Leave blank to auto-link to /services/[slug]' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which services appear',
      },
    },
  ],
}
