DROP TABLE IF EXISTS approveRequestMoney CASCADE;

CREATE TABLE approveRequestMoney (
  "id" integer,
  "child_id" varchar,
  "parent_id" varchar,
  "request_note" varchar,
  "request_amount" integer,
  "created_at" date DEFAULT (now()),
  "decided" boolean,
  "decision_updated_at" date DEFAULT (now())
);