import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    blob: !!process.env.BLOB_READ_WRITE_TOKEN,
    cloudinary: !!(
      process.env.CLOUDINARY_CLOUD_NAME &&
      process.env.CLOUDINARY_API_KEY &&
      process.env.CLOUDINARY_API_SECRET
    ),
  })
}
