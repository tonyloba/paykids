DROP TABLE IF EXISTS requestMoney CASCADE;

CREATE TABLE requestMoney (
  "id" integer,
  "child_id" varchar,
  "parent_id" varchar,
  "request_note" varchar,
  "request_amount" integer,
  "request_number" integer,
  "created_at" date DEFAULT (now()),
  "decided" boolean,
  "decision_updated_at" date DEFAULT (now())
);