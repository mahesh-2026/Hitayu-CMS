// Example: How to fetch data from Payload CMS in your Next.js frontend

import { getPayload } from 'payload'
import config from '@/payload.config'

// ============================================
// Server-Side Data Fetching (Recommended)
// ============================================

// Example 1: Fetch all posts
export async function getAllPosts() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const result = await payload.find({
      collection: 'posts',
      limit: 100,
    })
    return result.docs
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Example 2: Fetch a single post by ID
export async function getPostById(id: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const post = await payload.findByID({
      collection: 'posts',
      id,
    })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

// Example 3: Fetch posts with filtering
export async function getPublishedPosts() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const result = await payload.find({
      collection: 'posts',
      where: {
        // Add your filter conditions here
        // Example: { status: { equals: 'published' } }
      },
      limit: 50,
    })
    return result.docs
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Example 4: Fetch pages
export async function getAllPages() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const result = await payload.find({
      collection: 'pages',
      limit: 100,
    })
    return result.docs
  } catch (error) {
    console.error('Error fetching pages:', error)
    return []
  }
}

// Example 5: Fetch page by slug
export async function getPageBySlug(slug: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const result = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
    })
    return result.docs[0] || null
  } catch (error) {
    console.error('Error fetching page:', error)
    return null
  }
}

// ============================================
// Usage Examples in Components
// ============================================

// Example: In a Server Component (page.tsx)
/*
export default async function HomePage() {
  const posts = await getAllPosts()

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
*/

// Example: Fetch specific data during static generation
/*
export async function generateStaticParams() {
  const posts = await getAllPosts()
  
  return posts.map((post) => ({
    id: post.id,
  }))
}
*/

// ============================================
// REST API Usage (Client-Side Alternative)
// ============================================

// If you prefer REST API instead of direct database access:

// Fetch posts via REST API
/*
async function getPostsViaAPI() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts?limit=10`,
    { next: { revalidate: 60 } }
  )
  return response.json()
}
*/

// Fetch single post via REST API
/*
async function getPostByIdViaAPI(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/posts/${id}`
  )
  return response.json()
}
*/

// ============================================
// GraphQL Usage (Client-Side Alternative)
// ============================================

// If you prefer GraphQL:
/*
async function getPostsViaGraphQL() {
  const query = `
    query {
      Posts(limit: 10) {
        docs {
          id
          title
          content
        }
      }
    }
  `

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/graphql`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    }
  )
  return response.json()
}
*/

// ============================================
// Data Types (from payload-types.ts)
// ============================================

/*
Post interface:
{
  id: string
  title: string
  content?: string
  createdAt: string
  updatedAt: string
}

Page interface:
{
  id: string
  title: string
  slug: string
  content?: RichTextField
  createdAt: string
  updatedAt: string
}
*/

export {}
