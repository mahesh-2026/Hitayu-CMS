# Next.js Frontend with Payload CMS

## Project Structure

Your project now has a **completely separated frontend** from the **Payload CMS Admin Panel**:

```
src/app/
├── (frontend)              ← Your public website
│   ├── page.tsx           ← Homepage (/)
│   ├── layout.tsx         ← Root layout
│   ├── styles.css         ← Global styles
│   └── posts/
│       ├── page.tsx       ← Blog listing (/posts)
│       └── [id]/
│           └── page.tsx   ← Individual post (/posts/:id)
│
├── (payload)              ← Admin Panel (isolated)
│   └── api/
│       ├── [...slug]/     ← Admin dashboard (/admin)
│       ├── graphql/       ← GraphQL API
│       └── graphql-playground/
│
└── my-route/route.ts      ← Example API route
```

## How It Works

### Frontend (Public Website)
- **Home Page**: `http://localhost:3000/`
  - Displays featured posts
  - Shows website welcome message
  - Links to blog and admin panel
  
- **Blog Page**: `http://localhost:3000/posts`
  - Lists all blog posts from Payload CMS
  - Card-based layout with excerpts
  - Links to individual post pages
  
- **Individual Post**: `http://localhost:3000/posts/[id]`
  - Full post content
  - Rich text rendering
  - Back navigation

### Admin Panel (Payload CMS)
- **URL**: `http://localhost:3000/admin`
- Create/Edit/Delete:
  - Posts
  - Pages
  - Media (images, files)
  - Users
- GraphQL endpoint: `/api/graphql`

## How Data Flows

```
Admin Panel (/admin)
    ↓
PostgreSQL Database
    ↓
Payload CMS API
    ↓
Frontend (Next.js Server-Side Rendering)
    ↓
Browser (public website)
```

## Key Features

✅ **Separated Frontend & Admin**
- Frontend at `/` with route group `(frontend)`
- Admin at `/admin` with route group `(payload)`
- No naming conflicts

✅ **Server-Side Rendering**
- Frontend fetches data at build time
- Fast page loads
- SEO optimized

✅ **Collections Set Up**
- **Posts**: Blog posts with title and content
- **Pages**: CMS pages with rich text
- **Media**: File/image management
- **Users**: User authentication

✅ **Styling**
- Modern, responsive CSS
- Mobile-first design
- Dark header, light content

## Getting Started

### 1. Create Content in Admin Panel
```
1. Go to http://localhost:3000/admin
2. Login with your credentials
3. Go to "Posts" collection
4. Click "Create New"
5. Fill in Title and Content
6. Publish
```

### 2. View on Frontend
```
1. Go to http://localhost:3000
2. See your posts displayed on homepage
3. Click "Blog" to see all posts
4. Click "Read More" to view full post
```

### 3. Develop Frontend
Edit files in `src/app/(frontend)/`:
- Homepage: `page.tsx`
- Styles: `styles.css`
- Add new routes: Create new folders with `page.tsx`

## Important URLs

| Page | URL | Type |
|------|-----|------|
| Homepage | `http://localhost:3000/` | Frontend |
| Blog Listing | `http://localhost:3000/posts` | Frontend |
| Individual Post | `http://localhost:3000/posts/[id]` | Frontend |
| Admin Panel | `http://localhost:3000/admin` | Payload CMS |
| GraphQL API | `http://localhost:3000/api/graphql` | API |
| GraphQL Playground | `http://localhost:3000/api/graphql-playground` | IDE |

## Next Steps

### Add More Pages
Create a new folder in `src/app/(frontend)/`:
```typescript
// src/app/(frontend)/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>
}
```

### Customize Collections
Edit files in `src/collections/`:
- `Posts.ts` - Add fields to posts
- `Pages.ts` - Add fields to pages
- `Media.ts` - Configure media handling
- `Users.ts` - Configure users

### Style Your Site
Edit `src/app/(frontend)/styles.css`:
- Change colors in `:root` variables
- Modify layouts and spacing
- Add custom components

### Add API Routes
Create routes in `src/app/(frontend)/api/`:
```typescript
// src/app/(frontend)/api/hello/route.ts
export async function GET() {
  return Response.json({ message: "Hello!" })
}
```

## Troubleshooting

### No posts showing?
1. Check if you created posts in admin panel
2. Ensure posts are published
3. Check browser console for errors

### Admin panel not loading?
1. Make sure you're at `/admin`
2. Try logging in with your credentials
3. Check `.env` file has correct `PAYLOAD_SECRET`

### Database connection error?
1. Check PostgreSQL is running
2. Verify `DATABASE_URL` in `.env`
3. Run `npm run dev` to restart server

## Commands

```bash
# Development
npm run dev          # Start dev server

# Admin Panel
npm run payload      # Payload CLI commands
npm run generate:types  # Generate TypeScript types
npm run generate:importmap  # Generate import map

# Build & Deploy
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm test            # Run tests
```

## Environment Variables

```
DATABASE_URL=postgres://postgres:password@localhost:5432/headless-cms
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

---

**Everything is set up and ready to use!** 🚀
