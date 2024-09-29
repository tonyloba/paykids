DROP TABLE IF EXISTS children CASCADE;

CREATE TABLE children (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "account_number" varchar,
  "account_password" varchar,
  "expiry_date" timestamp,
  "start_date" date,
  "end_date" date,
  "active" boolean,
  "account_balance" integer,
  "account_cvv" integer,
  "money_request" varchar,
  "parent_id" varchar,
  "permission_list" TEXT[],
  "transaction_list" TEXT[],
  "max_transaction" integer,
  "bank_account_reference" varchar,
  "text_color" varchar,
  "card_color" varchar,
  "background_color" varchar,
  "header_color" varchar,
  "updated_at" date,
  "created_at" date DEFAULT (now())
);