//brew services start postgres

//createdb marathon

//plsql -d marathon -U Christophe

CREATE EXTENSION pgcrypto;

create table purchases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name varchar(255),
  euros_spent integer,
  fidelity_points_earned integer,
  purchase_date timestamp, --date sans les heures
  number_of_items integer
);

alter table purchases alter column id set DEFAULT gen_random_uuid();
alter table purchases add primary key (id);


insert into purchases (client_name, euros_spent, fidelity_points_earned, purchase_date, number_of_items)
values ('Delattre', 10000, 12000, current_date, 7);


select * from purchases where client_name = 'Delattre';

select * from purchases p  order by p.purchase_date limit 3;

select * from purchases p where p.purchase_date<(current_date-interval '2 months');

select * from purchases p where p.purchase_date<(current_date-interval '6 months') and number_of_items>3;

select * from purchases p order by euros_spent desc limit 1;

select sum(euros_spent) from purchases p where purchase_date > '2017-06-21' and purchase_date < '2017-09-23' ;


insert into purchases
