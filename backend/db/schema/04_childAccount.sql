DROP TABLE IF EXISTS childAccount CASCADE;

CREATE TABLE childAccount (
  "id" integer,
  "child_id" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "account_number" varchar,
  "account_balance" integer,
  "account_cvv" integer,
  "expiry_date" date
);