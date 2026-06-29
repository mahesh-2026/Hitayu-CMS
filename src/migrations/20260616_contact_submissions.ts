import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "contact_submissions" (
      "id" serial PRIMARY KEY NOT NULL,
      "name" varchar NOT NULL,
      "email" varchar NOT NULL,
      "phone" varchar,
      "company" varchar,
      "service" varchar,
      "message" varchar NOT NULL,
      "status" varchar DEFAULT 'new',
      "ip_address" varchar,
      "updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
      "created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
    );
  `)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    DROP TABLE IF EXISTS "contact_submissions";
  `)
}
