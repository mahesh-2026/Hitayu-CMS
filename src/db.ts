import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

let pool: Pool

try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  })
} catch (error) {
  console.error('Failed to create database pool:', error)
  process.exit(1)
}

export default pool
