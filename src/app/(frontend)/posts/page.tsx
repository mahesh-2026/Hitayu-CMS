export const dynamic = 'force-dynamic'

import Link from 'next/link'
import '../styles.css'

export const metadata = {
  title: 'Blog – Hitayu',
  description: 'Latest insights, case studies and tech updates from Hitayu.',
}

export default async function PostsPage() {
  let posts: any[] = []
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@/payload.config')).default
    const payload = await getPayload({ config })
    const data = await payload.find({ collection: 'posts', limit: 50, sort: '-createdAt' })
    posts = data.docs || []
  } catch {
    // DB unavailable — show empty state
  }

  return (
    <>
      <main style={{ minHeight: '80vh', padding: '120px 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: 12 }}>Blog &amp; Insights</h1>
          <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 48 }}>
            Latest thinking from the Hitayu team
          </p>
          {posts.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 28 }}>
              {posts.map((post: any) => (
                <article key={post.id} className="ht-scard" style={{ padding: 28 }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 12 }}>{post.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '0.9rem', marginBottom: 20, lineHeight: 1.7 }}>
                    {String(post.content || '').substring(0, 120)}…
                  </p>
                  <Link href={`/posts/${post.id}`} style={{ color: 'var(--cyan)', fontWeight: 600, fontSize: '0.9rem' }}>
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,.5)' }}>
              <i className="fas fa-newspaper" style={{ fontSize: '3rem', marginBottom: 20, display: 'block' }} />
              <p>No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
