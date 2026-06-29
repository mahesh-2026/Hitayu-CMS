import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings_careers_page_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-star',
  	"title" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "site_settings_careers_page_traits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  ALTER TABLE "site_settings" ALTER COLUMN "about_page_title_line1" SET DEFAULT 'Reimagine, digitize, and realize better';
  ALTER TABLE "site_settings" ALTER COLUMN "about_page_title_highlight" SET DEFAULT 'business outcomes';
  ALTER TABLE "site_settings" ALTER COLUMN "about_page_description" SET DEFAULT 'At Hitayu, we specialize in delivering impactful technology solutions that enable businesses to grow and thrive. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_eyebrow" varchar DEFAULT 'Careers';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_title_line1" varchar DEFAULT 'Build Your';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_title_highlight" varchar DEFAULT 'Future';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_title_line2" varchar DEFAULT 'with Hitayu';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_description" varchar DEFAULT 'At Hitayu, we believe that our people are the driving force behind everything we do. We are passionate about building innovative, reliable, and scalable technology solutions—and that starts with building a team of talented, motivated individuals who share our vision. Whether you''re an experienced professional or just starting your career, we offer an environment where you can learn, grow, and make a real impact. Our work spans across cloud solutions, infrastructure, data management, and emerging technologies, giving you the opportunity to work on meaningful projects that shape the future of businesses. We foster a culture of collaboration, innovation, and continuous learning. You''ll work alongside skilled professionals in a supportive environment that encourages new ideas, values diverse perspectives, and promotes personal and professional development.';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_image_url" varchar DEFAULT 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_benefits_eyebrow" varchar DEFAULT 'Why Join Us?';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_benefits_title" varchar DEFAULT 'Benefits & Culture';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_traits_eyebrow" varchar DEFAULT 'Who We''re Looking For';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_traits_title" varchar DEFAULT 'We''re always on the lookout for passionate individuals who are:';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_title" varchar DEFAULT 'Join Our Team';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_description" varchar DEFAULT 'If you''re ready to take the next step in your career and be part of a forward-thinking organization, we''d love to hear from you.';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_button_text" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_cta_button_url" varchar DEFAULT '/contact';
  ALTER TABLE "site_settings" ADD COLUMN "careers_page_careers_email" varchar DEFAULT 'careers@hitayu.com';
  ALTER TABLE "site_settings_careers_page_benefits" ADD CONSTRAINT "site_settings_careers_page_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_careers_page_traits" ADD CONSTRAINT "site_settings_careers_page_traits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_settings_careers_page_benefits_order_idx" ON "site_settings_careers_page_benefits" USING btree ("_order");
  CREATE INDEX "site_settings_careers_page_benefits_parent_id_idx" ON "site_settings_careers_page_benefits" USING btree ("_parent_id");
  CREATE INDEX "site_settings_careers_page_traits_order_idx" ON "site_settings_careers_page_traits" USING btree ("_order");
  CREATE INDEX "site_settings_careers_page_traits_parent_id_idx" ON "site_settings_careers_page_traits" USING btree ("_parent_id");
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_about_page_agility_image_id_media_id_fk" FOREIGN KEY ("about_page_agility_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_careers_page_image_id_media_id_fk" FOREIGN KEY ("careers_page_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "site_settings_about_page_about_page_agility_image_idx" ON "site_settings" USING btree ("about_page_agility_image_id");
  CREATE INDEX "site_settings_careers_page_careers_page_image_idx" ON "site_settings" USING btree ("careers_page_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "site_settings_careers_page_benefits" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_careers_page_traits" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "site_settings_careers_page_benefits" CASCADE;
  DROP TABLE "site_settings_careers_page_traits" CASCADE;
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_about_page_agility_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_careers_page_image_id_media_id_fk";
  
  DROP INDEX "site_settings_about_page_about_page_agility_image_idx";
  DROP INDEX "site_settings_careers_page_careers_page_image_idx";
  ALTER TABLE "site_settings" ALTER COLUMN "about_page_title_line1" SET DEFAULT 'Reimagine, Digitize &';
  ALTER TABLE "site_settings" ALTER COLUMN "about_page_title_highlight" SET DEFAULT 'Realize Better';
  ALTER TABLE "site_settings" ALTER COLUMN "about_page_description" SET DEFAULT 'Hitayu is a technology solutions company dedicated to helping businesses grow through secure, scalable, and innovative cloud services. We specialize in delivering modern digital solutions that enhance agility, streamline operations, and support long-term business success. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.';
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_title_line1";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_title_highlight";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_title_line2";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_description";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_benefits_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_benefits_title";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_traits_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_traits_title";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_title";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_description";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_cta_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "careers_page_careers_email";`)
}
