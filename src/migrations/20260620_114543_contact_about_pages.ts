import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_icon_name" AS ENUM('Zap', 'ShieldCheck', 'Cloud', 'Headphones', 'Server', 'Database', 'Globe', 'TrendingUp', 'CheckCircle', 'Star', 'Award', 'Users', 'Cpu', 'Lock', 'BarChart2', 'Rocket', 'Shield', 'Settings', 'Mail', 'Phone', 'MapPin', 'ArrowRight', 'Clock', 'Activity', 'HardDrive', 'Wifi', 'Code', 'Package');
  CREATE TYPE "public"."enum_site_settings_stats_section_stats_icon_name" AS ENUM('Zap', 'ShieldCheck', 'Cloud', 'Headphones', 'Server', 'Database', 'Globe', 'TrendingUp', 'CheckCircle', 'Star', 'Award', 'Users', 'Cpu', 'Lock', 'BarChart2', 'Rocket', 'Shield', 'Settings', 'Mail', 'Phone', 'MapPin', 'ArrowRight', 'Clock', 'Activity', 'HardDrive', 'Wifi', 'Code', 'Package');
  CREATE TYPE "public"."enum_site_settings_why_choose_section_features_icon_name" AS ENUM('Zap', 'ShieldCheck', 'Cloud', 'Headphones', 'Server', 'Database', 'Globe', 'TrendingUp', 'CheckCircle', 'Star', 'Award', 'Users', 'Cpu', 'Lock', 'BarChart2', 'Rocket', 'Shield', 'Settings', 'Mail', 'Phone', 'MapPin', 'ArrowRight', 'Clock', 'Activity', 'HardDrive', 'Wifi', 'Code', 'Package');
  CREATE TYPE "public"."enum_site_settings_aws_section_features_icon_name" AS ENUM('Zap', 'ShieldCheck', 'Cloud', 'Headphones', 'Server', 'Database', 'Globe', 'TrendingUp', 'CheckCircle', 'Star', 'Award', 'Users', 'Cpu', 'Lock', 'BarChart2', 'Rocket', 'Shield', 'Settings', 'Mail', 'Phone', 'MapPin', 'ArrowRight', 'Clock', 'Activity', 'HardDrive', 'Wifi', 'Code', 'Package');
  CREATE TYPE "public"."enum_site_settings_how_it_works_section_steps_icon_name" AS ENUM('Zap', 'ShieldCheck', 'Cloud', 'Headphones', 'Server', 'Database', 'Globe', 'TrendingUp', 'CheckCircle', 'Star', 'Award', 'Users', 'Cpu', 'Lock', 'BarChart2', 'Rocket', 'Shield', 'Settings', 'Mail', 'Phone', 'MapPin', 'ArrowRight', 'Clock', 'Activity', 'HardDrive', 'Wifi', 'Code', 'Package');
  CREATE TYPE "public"."enum_contact_submissions_service" AS ENUM('cloud-hosting', 'managed-aws', 'web-development', 'it-consulting', 'devops', 'other');
  CREATE TYPE "public"."enum_contact_submissions_status" AS ENUM('new', 'read', 'replied', 'spam');
  CREATE TABLE "hero_slides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_url" varchar,
  	"image_id" integer,
  	"alt" varchar DEFAULT 'Hero slide' NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings_header_info_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"icon" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"open_in_new_tab" boolean DEFAULT false
  );
  
  CREATE TABLE "site_settings_hero_section_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_stats_section_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"icon_name" "enum_site_settings_stats_section_stats_icon_name" DEFAULT 'Users'
  );
  
  CREATE TABLE "site_settings_why_choose_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_site_settings_why_choose_section_features_icon_name" DEFAULT 'Zap',
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_aws_section_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_name" "enum_site_settings_aws_section_features_icon_name" DEFAULT 'Globe',
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_how_it_works_section_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"step_number" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon_name" "enum_site_settings_how_it_works_section_steps_icon_name" DEFAULT 'Package'
  );
  
  CREATE TABLE "site_settings_about_page_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" varchar DEFAULT 'fas fa-rocket',
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings_contact_home_page_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"address" varchar NOT NULL,
  	"phone" varchar,
  	"image_id" integer,
  	"image_url" varchar,
  	"icon" varchar DEFAULT 'fas fa-map-marker-alt'
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "contact_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"company" varchar,
  	"service" "enum_contact_submissions_service",
  	"message" varchar NOT NULL,
  	"status" "enum_contact_submissions_status" DEFAULT 'new',
  	"ip_address" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "services" ALTER COLUMN "icon" DROP NOT NULL;
  ALTER TABLE "pricing_plans" ALTER COLUMN "description" DROP NOT NULL;
  ALTER TABLE "testimonials" ALTER COLUMN "role" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "hero_title" DROP NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "hero_description" DROP NOT NULL;
  ALTER TABLE "services" ADD COLUMN "icon_name" "enum_services_icon_name";
  ALTER TABLE "services" ADD COLUMN "image_url" varchar;
  ALTER TABLE "services" ADD COLUMN "service_image_id" integer;
  ALTER TABLE "services" ADD COLUMN "learn_more_url" varchar DEFAULT '#';
  ALTER TABLE "pricing_plans" ADD COLUMN "button_text" varchar DEFAULT 'Get Started';
  ALTER TABLE "pricing_plans" ADD COLUMN "button_url" varchar DEFAULT '#';
  ALTER TABLE "testimonials" ADD COLUMN "company" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "logo_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "header_info_email" varchar DEFAULT 'info@hitayu.com';
  ALTER TABLE "site_settings" ADD COLUMN "header_info_phone" varchar DEFAULT '+91 98765 43210';
  ALTER TABLE "site_settings" ADD COLUMN "header_button_label" varchar DEFAULT 'Sign In';
  ALTER TABLE "site_settings" ADD COLUMN "header_button_url" varchar DEFAULT '/signin';
  ALTER TABLE "site_settings" ADD COLUMN "header_button_open_in_new_tab" boolean DEFAULT false;
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_badge" varchar DEFAULT 'AWS Powered Cloud Hosting';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_title" varchar DEFAULT 'Managed AWS Hosting
  Built For Speed,
  Security & Scale';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_description" varchar DEFAULT 'Deploy your website on enterprise-grade AWS infrastructure with lightning-fast performance, daily backups and 24/7 expert support.';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_primary_button_text" varchar DEFAULT 'Get Started';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_primary_button_url" varchar DEFAULT '#';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_secondary_button_text" varchar DEFAULT 'View Plans';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_secondary_button_url" varchar DEFAULT '#pricing';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_hero_image_url" varchar DEFAULT 'https://wp.xpeedstudio.com/hostinza/wp-content/uploads/revslider/home-04/banner_image-41.png';
  ALTER TABLE "site_settings" ADD COLUMN "hero_section_hero_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "stats_section_is_visible" boolean DEFAULT true;
  ALTER TABLE "site_settings" ADD COLUMN "why_choose_section_tag" varchar DEFAULT 'WHY CHOOSE HITAYU';
  ALTER TABLE "site_settings" ADD COLUMN "why_choose_section_title" varchar DEFAULT 'Enterprise Grade
  Cloud Infrastructure';
  ALTER TABLE "site_settings" ADD COLUMN "why_choose_section_description" varchar DEFAULT 'Power your applications with secure AWS hosting designed for businesses that demand reliability and performance.';
  ALTER TABLE "site_settings" ADD COLUMN "services_section_tag" varchar DEFAULT 'OUR SERVICES';
  ALTER TABLE "site_settings" ADD COLUMN "services_section_title" varchar DEFAULT 'Hosting Solutions
  Built For Growth';
  ALTER TABLE "site_settings" ADD COLUMN "services_section_description" varchar DEFAULT 'Powerful AWS-powered hosting services designed to keep your business online and growing.';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_tag" varchar DEFAULT 'AWS POWERED';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_title" varchar DEFAULT 'Enterprise Cloud
  Infrastructure';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_description" varchar DEFAULT 'Powered by Amazon Web Services, our cloud platform delivers unmatched reliability, scalability and security for businesses of all sizes.';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_button_text" varchar DEFAULT 'Explore AWS Hosting';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_button_url" varchar DEFAULT '#';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_image_url" varchar DEFAULT 'https://localhost.pixellyo.com/html/assets/img/about-img-7.png';
  ALTER TABLE "site_settings" ADD COLUMN "aws_section_section_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "how_it_works_section_is_visible" boolean DEFAULT true;
  ALTER TABLE "site_settings" ADD COLUMN "how_it_works_section_tag" varchar DEFAULT 'HOW IT WORKS';
  ALTER TABLE "site_settings" ADD COLUMN "how_it_works_section_title" varchar DEFAULT 'Get Started In
  3 Simple Steps';
  ALTER TABLE "site_settings" ADD COLUMN "how_it_works_section_description" varchar DEFAULT 'Set up your hosting in minutes with our streamlined onboarding process.';
  ALTER TABLE "site_settings" ADD COLUMN "pricing_section_tag" varchar DEFAULT 'PRICING PLANS';
  ALTER TABLE "site_settings" ADD COLUMN "pricing_section_title" varchar DEFAULT 'Choose The Perfect
  Hosting Plan';
  ALTER TABLE "site_settings" ADD COLUMN "pricing_section_description" varchar DEFAULT 'Transparent pricing with no hidden fees. Cancel anytime.';
  ALTER TABLE "site_settings" ADD COLUMN "faq_section_tag" varchar DEFAULT 'FAQ';
  ALTER TABLE "site_settings" ADD COLUMN "faq_section_title" varchar DEFAULT 'Frequently Asked
  Questions';
  ALTER TABLE "site_settings" ADD COLUMN "faq_section_description" varchar DEFAULT 'Everything you need to know about our AWS hosting services.';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_badge" varchar DEFAULT 'AWS Powered Hosting';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_title" varchar DEFAULT 'Ready To Launch
  On AWS Infrastructure?';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_description" varchar DEFAULT 'Get secure, scalable and high-performance hosting backed by AWS cloud technology and expert support.';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_primary_button_text" varchar DEFAULT 'Get Started';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_primary_button_url" varchar DEFAULT '#';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_secondary_button_text" varchar DEFAULT 'Contact Sales';
  ALTER TABLE "site_settings" ADD COLUMN "cta_section_secondary_button_url" varchar DEFAULT '#contact';
  ALTER TABLE "site_settings" ADD COLUMN "testimonials_section_tag" varchar DEFAULT 'TESTIMONIALS';
  ALTER TABLE "site_settings" ADD COLUMN "testimonials_section_title" varchar DEFAULT 'What Our Customers
  Are Saying';
  ALTER TABLE "site_settings" ADD COLUMN "testimonials_section_description" varchar DEFAULT 'Trusted by hundreds of businesses across India and beyond.';
  ALTER TABLE "site_settings" ADD COLUMN "contact_section_tag" varchar DEFAULT 'CONTACT US';
  ALTER TABLE "site_settings" ADD COLUMN "contact_section_title" varchar DEFAULT 'Let''s Talk About
  Your Hosting Needs';
  ALTER TABLE "site_settings" ADD COLUMN "contact_section_description" varchar DEFAULT 'Our cloud hosting experts are ready to help you choose the perfect AWS hosting solution.';
  ALTER TABLE "site_settings" ADD COLUMN "contact_section_form_title" varchar DEFAULT 'Request A Callback';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_eyebrow" varchar DEFAULT 'About Hitayu';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_title_line1" varchar DEFAULT 'Reimagine, Digitize &';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_title_highlight" varchar DEFAULT 'Realize Better';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_description" varchar DEFAULT 'Hitayu is a technology solutions company dedicated to helping businesses grow through secure, scalable, and innovative cloud services. We specialize in delivering modern digital solutions that enhance agility, streamline operations, and support long-term business success. Our experience in supporting organizations across various sectors allows us to craft solutions that are both innovative and results oriented. By partnering with us, you gain access to a dedicated team of skilled professionals committed to bringing your ideas to life with precision and expertise. We take pride in our commitment to quality and customer satisfaction. Every solution we design, develop or deliver is thoroughly tested and refined to meet the highest standards before delivery—ensuring dependable performance and outstanding results for our customers.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_image_url" varchar DEFAULT 'https://res.cloudinary.com/ryg9bkkz/image/upload/v1782805193/hitayu/s3v3djty8ufbtmiksvx8.png';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_image_id" integer;
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge1_title" varchar DEFAULT 'Award Winning';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge1_sub" varchar DEFAULT 'Best IT Partner 2024';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge2_title" varchar DEFAULT 'ISO 27001';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_badge2_sub" varchar DEFAULT 'Security Certified';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_cta_text" varchar DEFAULT 'Partner with Us';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_cta_url" varchar DEFAULT '#contact';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_title" varchar DEFAULT 'Enabling Agility, Empowering Growth';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_agility_description" varchar DEFAULT 'In a world defined by constant change, the ability to adapt is no longer a competitive advantage—it is a necessity. "Enabling agility, Empowering Growth" captures the essence of what it takes for individuals and organizations to thrive in today''s dynamic environment. Agility is more than speed; it is the capacity to anticipate, respond, and evolve with purpose. We empower organizations by delivering advanced cloud solutions designed to enhance agility across every layer of the enterprise. Through modern architectures such as multi-cloud and hybrid cloud environments, containerization, and microservices, we help businesses modernize their infrastructure and streamline application development. This approach enables faster deployment cycles, improved system reliability, and the flexibility to scale resources dynamically in response to market demands. By enabling agility, we provide organizations with the tools and capabilities to pivot, innovate, and compete effectively. By empowering growth, we create a foundation for sustainable success—where technology not only supports business objectives but drives them forward.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mvv_eyebrow" varchar DEFAULT 'Our Foundation';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mvv_title_line1" varchar DEFAULT 'Mission, Vision &';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mvv_title_highlight" varchar DEFAULT 'Values';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_mission" varchar DEFAULT 'To empower businesses with secure, scalable, and innovative cloud solutions that drive efficiency, growth, and digital transformation.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_vision" varchar DEFAULT 'To be a globally recognized leader in delivering innovative, secure, and scalable cloud solutions that enable sustainable growth and digital transformation.';
  ALTER TABLE "site_settings" ADD COLUMN "about_page_values" varchar DEFAULT 'We conduct our business with honesty, transparency, and strong ethical principles in all interactions. We prioritize our clients'' needs by delivering reliable, high-quality cloud solutions that support their long-term success. We strive for the highest standards in performance, quality, and service delivery in everything we do.';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_page_eyebrow" varchar DEFAULT 'Get In Touch';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_page_title" varchar DEFAULT 'Contact Us';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_offices_eyebrow" varchar DEFAULT 'Our Offices';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_offices_title" varchar DEFAULT 'All Locations';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_business_hours" varchar DEFAULT 'Mon–Fri: 9 AM – 6 PM IST';
  ALTER TABLE "site_settings" ADD COLUMN "contact_home_page_emergency_support" varchar DEFAULT '24 × 7 × 365';
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "hero_slides_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "faqs_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "contact_submissions_id" integer;
  ALTER TABLE "hero_slides" ADD CONSTRAINT "hero_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_header_info_social_links" ADD CONSTRAINT "site_settings_header_info_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_navigation" ADD CONSTRAINT "site_settings_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_hero_section_stats" ADD CONSTRAINT "site_settings_hero_section_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_stats_section_stats" ADD CONSTRAINT "site_settings_stats_section_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_why_choose_section_features" ADD CONSTRAINT "site_settings_why_choose_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_aws_section_features" ADD CONSTRAINT "site_settings_aws_section_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_how_it_works_section_steps" ADD CONSTRAINT "site_settings_how_it_works_section_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_about_page_features" ADD CONSTRAINT "site_settings_about_page_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_contact_home_page_locations" ADD CONSTRAINT "site_settings_contact_home_page_locations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_contact_home_page_locations" ADD CONSTRAINT "site_settings_contact_home_page_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "hero_slides_image_idx" ON "hero_slides" USING btree ("image_id");
  CREATE INDEX "hero_slides_updated_at_idx" ON "hero_slides" USING btree ("updated_at");
  CREATE INDEX "hero_slides_created_at_idx" ON "hero_slides" USING btree ("created_at");
  CREATE INDEX "site_settings_header_info_social_links_order_idx" ON "site_settings_header_info_social_links" USING btree ("_order");
  CREATE INDEX "site_settings_header_info_social_links_parent_id_idx" ON "site_settings_header_info_social_links" USING btree ("_parent_id");
  CREATE INDEX "site_settings_navigation_order_idx" ON "site_settings_navigation" USING btree ("_order");
  CREATE INDEX "site_settings_navigation_parent_id_idx" ON "site_settings_navigation" USING btree ("_parent_id");
  CREATE INDEX "site_settings_hero_section_stats_order_idx" ON "site_settings_hero_section_stats" USING btree ("_order");
  CREATE INDEX "site_settings_hero_section_stats_parent_id_idx" ON "site_settings_hero_section_stats" USING btree ("_parent_id");
  CREATE INDEX "site_settings_stats_section_stats_order_idx" ON "site_settings_stats_section_stats" USING btree ("_order");
  CREATE INDEX "site_settings_stats_section_stats_parent_id_idx" ON "site_settings_stats_section_stats" USING btree ("_parent_id");
  CREATE INDEX "site_settings_why_choose_section_features_order_idx" ON "site_settings_why_choose_section_features" USING btree ("_order");
  CREATE INDEX "site_settings_why_choose_section_features_parent_id_idx" ON "site_settings_why_choose_section_features" USING btree ("_parent_id");
  CREATE INDEX "site_settings_aws_section_features_order_idx" ON "site_settings_aws_section_features" USING btree ("_order");
  CREATE INDEX "site_settings_aws_section_features_parent_id_idx" ON "site_settings_aws_section_features" USING btree ("_parent_id");
  CREATE INDEX "site_settings_how_it_works_section_steps_order_idx" ON "site_settings_how_it_works_section_steps" USING btree ("_order");
  CREATE INDEX "site_settings_how_it_works_section_steps_parent_id_idx" ON "site_settings_how_it_works_section_steps" USING btree ("_parent_id");
  CREATE INDEX "site_settings_about_page_features_order_idx" ON "site_settings_about_page_features" USING btree ("_order");
  CREATE INDEX "site_settings_about_page_features_parent_id_idx" ON "site_settings_about_page_features" USING btree ("_parent_id");
  CREATE INDEX "site_settings_contact_home_page_locations_order_idx" ON "site_settings_contact_home_page_locations" USING btree ("_order");
  CREATE INDEX "site_settings_contact_home_page_locations_parent_id_idx" ON "site_settings_contact_home_page_locations" USING btree ("_parent_id");
  CREATE INDEX "site_settings_contact_home_page_locations_image_idx" ON "site_settings_contact_home_page_locations" USING btree ("image_id");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "contact_submissions_updated_at_idx" ON "contact_submissions" USING btree ("updated_at");
  CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");
  ALTER TABLE "services" ADD CONSTRAINT "services_service_image_id_media_id_fk" FOREIGN KEY ("service_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_hero_section_hero_image_id_media_id_fk" FOREIGN KEY ("hero_section_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_aws_section_section_image_id_media_id_fk" FOREIGN KEY ("aws_section_section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_about_page_image_id_media_id_fk" FOREIGN KEY ("about_page_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hero_slides_fk" FOREIGN KEY ("hero_slides_id") REFERENCES "public"."hero_slides"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk" FOREIGN KEY ("contact_submissions_id") REFERENCES "public"."contact_submissions"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "services_service_image_idx" ON "services" USING btree ("service_image_id");
  CREATE INDEX "site_settings_logo_idx" ON "site_settings" USING btree ("logo_id");
  CREATE INDEX "site_settings_hero_section_hero_section_hero_image_idx" ON "site_settings" USING btree ("hero_section_hero_image_id");
  CREATE INDEX "site_settings_aws_section_aws_section_section_image_idx" ON "site_settings" USING btree ("aws_section_section_image_id");
  CREATE INDEX "site_settings_about_page_about_page_image_idx" ON "site_settings" USING btree ("about_page_image_id");
  CREATE INDEX "payload_locked_documents_rels_hero_slides_id_idx" ON "payload_locked_documents_rels" USING btree ("hero_slides_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_contact_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_submissions_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "hero_slides" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_header_info_social_links" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_navigation" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_hero_section_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_stats_section_stats" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_why_choose_section_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_aws_section_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_how_it_works_section_steps" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_about_page_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "site_settings_contact_home_page_locations" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "faqs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "contact_submissions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "hero_slides" CASCADE;
  DROP TABLE "site_settings_header_info_social_links" CASCADE;
  DROP TABLE "site_settings_navigation" CASCADE;
  DROP TABLE "site_settings_hero_section_stats" CASCADE;
  DROP TABLE "site_settings_stats_section_stats" CASCADE;
  DROP TABLE "site_settings_why_choose_section_features" CASCADE;
  DROP TABLE "site_settings_aws_section_features" CASCADE;
  DROP TABLE "site_settings_how_it_works_section_steps" CASCADE;
  DROP TABLE "site_settings_about_page_features" CASCADE;
  DROP TABLE "site_settings_contact_home_page_locations" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "contact_submissions" CASCADE;
  ALTER TABLE "services" DROP CONSTRAINT "services_service_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_logo_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_hero_section_hero_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_aws_section_section_image_id_media_id_fk";
  
  ALTER TABLE "site_settings" DROP CONSTRAINT "site_settings_about_page_image_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_hero_slides_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_faqs_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_contact_submissions_fk";
  
  DROP INDEX "services_service_image_idx";
  DROP INDEX "site_settings_logo_idx";
  DROP INDEX "site_settings_hero_section_hero_section_hero_image_idx";
  DROP INDEX "site_settings_aws_section_aws_section_section_image_idx";
  DROP INDEX "site_settings_about_page_about_page_image_idx";
  DROP INDEX "payload_locked_documents_rels_hero_slides_id_idx";
  DROP INDEX "payload_locked_documents_rels_faqs_id_idx";
  DROP INDEX "payload_locked_documents_rels_contact_submissions_id_idx";
  ALTER TABLE "services" ALTER COLUMN "icon" SET NOT NULL;
  ALTER TABLE "pricing_plans" ALTER COLUMN "description" SET NOT NULL;
  ALTER TABLE "testimonials" ALTER COLUMN "role" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "hero_title" SET NOT NULL;
  ALTER TABLE "site_settings" ALTER COLUMN "hero_description" SET NOT NULL;
  ALTER TABLE "services" DROP COLUMN "icon_name";
  ALTER TABLE "services" DROP COLUMN "image_url";
  ALTER TABLE "services" DROP COLUMN "service_image_id";
  ALTER TABLE "services" DROP COLUMN "learn_more_url";
  ALTER TABLE "pricing_plans" DROP COLUMN "button_text";
  ALTER TABLE "pricing_plans" DROP COLUMN "button_url";
  ALTER TABLE "testimonials" DROP COLUMN "company";
  ALTER TABLE "site_settings" DROP COLUMN "logo_id";
  ALTER TABLE "site_settings" DROP COLUMN "header_info_email";
  ALTER TABLE "site_settings" DROP COLUMN "header_info_phone";
  ALTER TABLE "site_settings" DROP COLUMN "header_button_label";
  ALTER TABLE "site_settings" DROP COLUMN "header_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "header_button_open_in_new_tab";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_badge";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_primary_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_primary_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_secondary_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_secondary_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_hero_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "hero_section_hero_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "stats_section_is_visible";
  ALTER TABLE "site_settings" DROP COLUMN "why_choose_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "why_choose_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "why_choose_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "services_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "services_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "services_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "aws_section_section_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "how_it_works_section_is_visible";
  ALTER TABLE "site_settings" DROP COLUMN "how_it_works_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "how_it_works_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "how_it_works_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "pricing_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "pricing_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "pricing_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "faq_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "faq_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "faq_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_badge";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_primary_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_primary_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_secondary_button_text";
  ALTER TABLE "site_settings" DROP COLUMN "cta_section_secondary_button_url";
  ALTER TABLE "site_settings" DROP COLUMN "testimonials_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "testimonials_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "testimonials_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "contact_section_tag";
  ALTER TABLE "site_settings" DROP COLUMN "contact_section_title";
  ALTER TABLE "site_settings" DROP COLUMN "contact_section_description";
  ALTER TABLE "site_settings" DROP COLUMN "contact_section_form_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_title_line1";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_title_highlight";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_description";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_image_url";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_image_id";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge1_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge1_sub";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge2_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_badge2_sub";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_cta_text";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_cta_url";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_title";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_agility_description";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mvv_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mvv_title_line1";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mvv_title_highlight";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_mission";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_vision";
  ALTER TABLE "site_settings" DROP COLUMN "about_page_values";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_page_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_page_title";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_offices_eyebrow";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_offices_title";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_business_hours";
  ALTER TABLE "site_settings" DROP COLUMN "contact_home_page_emergency_support";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "hero_slides_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "faqs_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "contact_submissions_id";
  DROP TYPE "public"."enum_services_icon_name";
  DROP TYPE "public"."enum_site_settings_stats_section_stats_icon_name";
  DROP TYPE "public"."enum_site_settings_why_choose_section_features_icon_name";
  DROP TYPE "public"."enum_site_settings_aws_section_features_icon_name";
  DROP TYPE "public"."enum_site_settings_how_it_works_section_steps_icon_name";
  DROP TYPE "public"."enum_contact_submissions_service";
  DROP TYPE "public"."enum_contact_submissions_status";`)
}
