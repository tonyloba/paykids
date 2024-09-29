DROP TABLE IF EXISTS accountSetting CASCADE;

CREATE TABLE accountSetting (
  "child_id" varchar,
  "parent_id" varchar,
  "active" boolean,
  "created_at" date DEFAULT (now())
);