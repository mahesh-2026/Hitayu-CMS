import { NextRequest, NextResponse } from 'next/server'
import { createContactSubmission } from '@/lib/payload-utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 },
      )
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      'unknown'

    await createContactSubmission({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      service: service || undefined,
      message: String(message).trim(),
      ipAddress: ip,
    })

    return NextResponse.json({ success: true, message: 'Thank you! We will be in touch soon.' })
  } catch (err) {
    console.error('[contact-api]', err)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 },
    )
  }
}
