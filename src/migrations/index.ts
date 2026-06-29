import * as migration_20260604_035531_initial from './20260604_035531_initial';
import * as migration_20260606_cleanup_faqs from './20260606_cleanup_faqs';
import * as migration_20260616_contact_submissions from './20260616_contact_submissions';
import * as migration_20260616_hero_slides_image_url from './20260616_hero_slides_image_url';
import * as migration_20260620_114543_contact_about_pages from './20260620_114543_contact_about_pages';
import * as migration_20260620_121048 from './20260620_121048';
import * as migration_20260624_media_cloud_url from './20260624_media_cloud_url';

export const migrations = [
  {
    up: migration_20260604_035531_initial.up,
    down: migration_20260604_035531_initial.down,
    name: '20260604_035531_initial',
  },
  {
    up: migration_20260606_cleanup_faqs.up,
    down: migration_20260606_cleanup_faqs.down,
    name: '20260606_cleanup_faqs',
  },
  {
    up: migration_20260616_contact_submissions.up,
    down: migration_20260616_contact_submissions.down,
    name: '20260616_contact_submissions',
  },
  {
    up: migration_20260616_hero_slides_image_url.up,
    down: migration_20260616_hero_slides_image_url.down,
    name: '20260616_hero_slides_image_url',
  },
  {
    up: migration_20260620_114543_contact_about_pages.up,
    down: migration_20260620_114543_contact_about_pages.down,
    name: '20260620_114543_contact_about_pages',
  },
  {
    up: migration_20260620_121048.up,
    down: migration_20260620_121048.down,
    name: '20260620_121048',
  },
  {
    up: migration_20260624_media_cloud_url.up,
    down: migration_20260624_media_cloud_url.down,
    name: '20260624_media_cloud_url',
  },
];
