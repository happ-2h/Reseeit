CREATE DATABASE reseeit;

CREATE TABLE products (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  date_purchased DATE NOT NULL DEFAULT CURRENT_DATE,
  name VARCHAR(50) NOT NULL,
  price_purchased BIGINT,
  condition VARCHAR(50),
  category VARCHAR(50) NOT NULL
);