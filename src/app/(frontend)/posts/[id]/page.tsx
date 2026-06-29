export const dynamic = 'force-dynamic'

import Link from 'next/link'
import '../../styles.css'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return { title: 'Blog Post – Hitayu' }
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let post: any = null

  try {
    const { getPayload } = await import('payload')
    const config = (await import('@/payload.config')).default
    const payload = await getPayload({ config })
    post = await payload.findByID({ collection: 'posts', id })
  } catch {
    // DB unavailable or post not found — show fallback
  }

  return (
    <>
      <main style={{ minHeight: '80vh', padding: '120px 24px 80px', maxWidth: 800, margin: '0 auto' }}>
        {post ? (
          <article>
            <Link href="/posts" style={{ color: 'var(--cyan)', display: 'inline-block', marginBottom: 24 }}>
              ← Back to Blog
            </Link>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: 24 }}>{post.title}</h1>
            <div style={{ color: 'rgba(255,255,255,.75)', lineHeight: 1.9 }}>{post.content}</div>
          </article>
        ) : (
          <div style={{ textAlign: 'center', paddingTop: 80 }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: 16 }}>Post Not Found</h2>
            <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 32 }}>This post doesn&apos;t exist or is unavailable.</p>
            <Link href="/" className="ht-btn ht-btn-p">Back to Home</Link>
          </div>
        )}
      </main>
    </>
  )
}
