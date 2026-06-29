import { Pool } from 'pg'

export async function GET() {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    })

    const result = await pool.query('SELECT NOW()')

    return Response.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    return Response.json({
      success: false,
      error: String(error),
    })
  }
}
