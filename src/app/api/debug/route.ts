import config from '@payload-config'
import { getPayload } from 'payload'

// Temporary diagnostic route. Open /api/debug in the browser after deploy.
// It runs the SAME initialization the Payload admin does, and returns the
// REAL error message instead of a generic 500. Delete this file once fixed.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const steps: Record<string, unknown> = {}
  try {
    steps.env = {
      hasDatabaseUrl: !!process.env.DATABASE_URL,
      hasPayloadSecret: !!process.env.PAYLOAD_SECRET,
      serverUrl: process.env.NEXT_PUBLIC_SERVER_URL || null,
      nodeVersion: process.version,
    }

    const payload = await getPayload({ config })
    steps.payloadInit = 'ok'

    const users = await payload.count({ collection: 'users' })
    steps.usersCount = users?.totalDocs ?? users

    return Response.json({ ok: true, steps })
  } catch (e: unknown) {
    const err = e as { message?: string; stack?: string; name?: string; code?: string }
    return Response.json(
      {
        ok: false,
        steps,
        error: {
          name: err?.name,
          code: err?.code,
          message: err?.message,
          stack: err?.stack?.split('\n').slice(0, 12),
        },
      },
      { status: 500 },
    )
  }
}
