import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Safely drop FAQs foreign key if it exists
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
    DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_faqs_fk";
  `)

  // Drop FAQs column if it exists
  await db.execute(sql`
    ALTER TABLE "payload_locked_documents_rels"
    DROP COLUMN IF EXISTS "faqs_id";
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // No rollback needed for cleanup migration
}
