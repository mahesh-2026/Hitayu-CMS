import type { CollectionConfig } from 'payload'
import { uploadBuffer, getStorageProvider } from '../lib/storage'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'cloudUrl',
      type: 'text',
      admin: {
        readOnly: true,
        description: 'Auto-set — URL from Vercel Blob or Cloudinary',
      },
    },
  ],
  upload: {
    disableLocalStorage: true,
    adapter: 'hitayu-storage',
    adminThumbnail: ({ doc }) => {
      const url = doc.cloudUrl
      return typeof url === 'string' ? url : null
    },
  },
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        const file = req.file
        if (!file?.data) return data
        if (getStorageProvider() === 'none') return data

        try {
          const url = await uploadBuffer(file.data, file.name, file.mimetype)
          if (url) {
            data.cloudUrl = url
          }
        } catch (err) {
          console.error('[media-cloud-upload]', err)
        }

        return data
      },
    ],
  },
}
