DROP TABLE IF EXISTS sendMoney CASCADE;

CREATE TABLE sendMoney (
  "id" integer,
  "child_id" varchar,
  "parent_id" varchar,
  "send_money_note" varchar,
  "send_amount" integer,
  "created_at" date DEFAULT (now())
);