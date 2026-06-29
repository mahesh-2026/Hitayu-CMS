import { NextRequest, NextResponse } from 'next/server'
import { uploadFile } from '@/lib/storage'

export async function POST(req: NextRequest) {
  try {
    const providerParam = req.nextUrl.searchParams.get('provider') as
      | 'blob'
      | 'cloudinary'
      | null

    const form = await req.formData()
    const file = form.get('file') as File | null

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 })
    }

    if (!file.type.startsWith('image/') && !file.type.startsWith('video/') && file.type !== 'application/pdf') {
      return NextResponse.json(
        { success: false, error: 'Only images, videos, and PDFs are allowed.' },
        { status: 400 },
      )
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File too large. Max 10 MB.' },
        { status: 400 },
      )
    }

    const url = await uploadFile(file, providerParam ?? undefined)

    if (!url) {
      const name = providerParam === 'blob' ? 'Vercel Blob' : providerParam === 'cloudinary' ? 'Cloudinary' : 'storage'
      return NextResponse.json(
        { success: false, error: `${name} is not configured. Add the required env vars and restart.` },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, url, provider: providerParam })
  } catch (err) {
    console.error('[storage-upload]', err)
    return NextResponse.json(
      { success: false, error: 'Upload failed. Please try again.' },
      { status: 500 },
    )
  }
}
