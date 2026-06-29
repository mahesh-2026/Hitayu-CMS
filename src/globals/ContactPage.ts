import type { GlobalConfig } from 'payload'

export const ContactPageGlobal: GlobalConfig = {
  slug: 'contact-page',
  label: '📇 Contact Page',
  fields: [
    { name: 'pageEyebrow', type: 'text', label: 'Banner Eyebrow', defaultValue: 'Get In Touch' },
    { name: 'pageTitle', type: 'text', label: 'Banner Title', defaultValue: 'Contact Us' },
    { name: 'officesEyebrow', type: 'text', label: 'Offices Eyebrow', defaultValue: 'Our Offices' },
    { name: 'officesTitle', type: 'text', label: 'Offices Section Title', defaultValue: 'All Locations' },
    {
      name: 'locations',
      type: 'array',
      label: 'Office Locations',
      fields: [
        { name: 'title', type: 'text', required: true, admin: { description: 'e.g. Dubai UAE, Bengaluru India' } },
        { name: 'address', type: 'textarea', required: true },
        { name: 'phone', type: 'text', admin: { description: 'Leave blank to use the global phone number' } },
        { name: 'image', type: 'upload', relationTo: 'media', admin: { description: 'Office photo (uploaded)' } },
        { name: 'imageUrl', type: 'text', label: 'Office Photo URL', admin: { description: 'Used if no uploaded photo is set above' } },
        { name: 'icon', type: 'text', defaultValue: 'fas fa-map-marker-alt' },
      ],
    },
    { name: 'businessHours', type: 'text', defaultValue: 'Mon–Fri: 9 AM – 6 PM IST' },
    { name: 'emergencySupport', type: 'text', defaultValue: '24 × 7 × 365' },
  ],
}
