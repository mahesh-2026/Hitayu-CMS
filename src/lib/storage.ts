import { put } from '@vercel/blob'

export type StorageProvider = 'blob' | 'cloudinary' | 'none'

export function getStorageProvider(): StorageProvider {
  if (process.env.BLOB_READ_WRITE_TOKEN) return 'blob'
  if (
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  )
    return 'cloudinary'
  return 'none'
}

export async function uploadBuffer(
  buffer: Buffer,
  filename: string,
  mimeType: string,
  forceProvider?: 'blob' | 'cloudinary',
): Promise<string | null> {
  const provider = forceProvider ?? getStorageProvider()

  if (provider === 'blob') {
    if (!process.env.BLOB_READ_WRITE_TOKEN) return null
    const blob = await put(`uploads/${Date.now()}-${filename}`, buffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: mimeType,
    })
    return blob.url
  }

  if (provider === 'cloudinary') {
    if (!process.env.CLOUDINARY_CLOUD_NAME) return null
    const { v2: cloudinary } = await import('cloudinary')
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
      api_key: process.env.CLOUDINARY_API_KEY!,
      api_secret: process.env.CLOUDINARY_API_SECRET!,
    })
    const base64 = buffer.toString('base64')
    const dataUri = `data:${mimeType};base64,${base64}`
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'hitayu',
      resource_type: 'auto',
    })
    return result.secure_url
  }

  return null
}

export async function uploadFile(
  file: File,
  forceProvider?: 'blob' | 'cloudinary',
): Promise<string | null> {
  const buffer = Buffer.from(await file.arrayBuffer())
  return uploadBuffer(buffer, file.name, file.type, forceProvider)
}
