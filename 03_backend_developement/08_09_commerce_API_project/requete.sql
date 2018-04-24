create table brands (
  id uuid primary key default gen_random_uuid(),
  title varchar
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  decathlon_id integer,
  label varchar
);

create table products (
  id uuid primary key default gen_random_uuid(),
  decathlon_id integer,
  title varchar,
  description varchar,
  brand_id uuid,
  min_price float,
  max_price float,
  crossed_price float,
  percent_reduction float,
  image_path varchar,
  rating float
);

create table lien_categories_products (
  categorie_id uuid,
  product_id uuid
);
ALTER TABLE lien_categories_products ADD PRIMARY KEY (categorie_id, product_id);
