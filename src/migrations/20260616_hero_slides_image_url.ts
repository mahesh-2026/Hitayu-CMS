import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Add imageUrl column to hero_slides table if it doesn't exist
  await db.execute(sql`
    ALTER TABLE "hero_slides"
    ADD COLUMN IF NOT EXISTS "image_url" varchar;
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "hero_slides"
    DROP COLUMN IF EXISTS "image_url";
  `)
}
//https://ibb.co/ZpB3RXQP
//https://ibb.co/nMtTz43p
//https://ibb.co/XxBfm19Q
