DROP TABLE IF EXISTS parents CASCADE;

CREATE TABLE parents (
  "id" SERIAL PRIMARY KEY,
  "first_name" varchar,
  "last_name" varchar,
  "ewallet_account_number" varchar,
  "ewallet_password" varchar,
  "bank_account_number" varchar,
  "active" boolean,
  "street_number" integer,
  "street" varchar,
  "city" varchar,
  "postal_code" varchar,
  "phone_number" varchar,
  "email" varchar,
  "money_request" TEXT[],
  "children_list" TEXT[],
  "transaction_list" TEXT[],
  "text_color" varchar,
  "background_color" varchar,
  "header_color" varchar,
  "created_at" date DEFAULT (now()),
  "updated_at" date
);
