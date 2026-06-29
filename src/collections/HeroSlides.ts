import { CollectionConfig } from 'payload'

export const HeroSlides: CollectionConfig = {
  slug: 'hero-slides',
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'imageUrl', 'order'],
    description: 'Hero section slider images. Paste any image URL (easiest) OR upload a file.',
  },
  fields: [
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL (Paste link)',
      admin: {
        description: 'Paste a direct image URL (from Google Drive, Imgur, Cloudinary, etc.). Use this OR upload below — not both.',
        placeholder: 'https://example.com/your-image.jpg',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Or Upload Image File',
      admin: {
        description: 'Upload a file if you do not have an external URL.',
      },
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
      defaultValue: 'Hero slide',
      admin: {
        description: 'Short description of the image',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
      admin: {
        description: 'Lower numbers appear first (0, 1, 2...)',
      },
    },
  ],
}
