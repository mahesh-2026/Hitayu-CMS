import ContactInfoBar from '@/components/ContactInfoBar'
import { ContactComponent } from '@/components/ContactComponent'

export const metadata = {
  title: 'Contact Us – Hitayu',
  description: 'Get in touch with Hitayu. Find our offices, contact details, and send us a message.',
}

export default async function ContactPage() {
  return (
    <>
      <ContactInfoBar />
      <ContactComponent />
    </>
  )
}
