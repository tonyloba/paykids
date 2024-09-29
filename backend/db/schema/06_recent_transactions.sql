DROP TABLE IF EXISTS recent_transactions CASCADE;

CREATE TABLE recent_transactions (
  "id" SERIAL PRIMARY KEY,
  "child_id" varchar,
  "account_number" varchar,
  "transaction_amount" integer,
  "transaction_note" varchar,
  "created_at" date DEFAULT (now())
);