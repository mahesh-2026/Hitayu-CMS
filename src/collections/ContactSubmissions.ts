import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'service', 'status', 'createdAt'],
    description: 'Contact form submissions from the website',
    group: 'Content',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company / Organization',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Service Interested In',
      options: [
        { label: 'Cloud Hosting', value: 'cloud-hosting' },
        { label: 'Managed AWS', value: 'managed-aws' },
        { label: 'Web Development', value: 'web-development' },
        { label: 'IT Consulting', value: 'it-consulting' },
        { label: 'DevOps / CI-CD', value: 'devops' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      label: 'Status',
      options: [
        { label: '🟢 New', value: 'new' },
        { label: '👁 Read', value: 'read' },
        { label: '✅ Replied', value: 'replied' },
        { label: '🗑 Spam', value: 'spam' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Track the status of this enquiry',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      label: 'IP Address',
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'Captured automatically',
      },
    },
  ],
  timestamps: true,
}
