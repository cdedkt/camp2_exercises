create table regions (
id serial,
name varchar(255)
);

create table countries (
id serial,
code varchar(255),
name varchar(255),
region_id varchar(255)
);

create table locations (
id serial,
street_address varchar(255),
postal_code varchar(255),
city varchar(255),
state_province varchar(255),
country_id integer
);

create table jobs (
id serial,
code varchar(255),
title varchar(255),
min_salary float,
max_salary float
);

create table job_grades (
id serial,
level varchar(255),
lowest_salary float,
highest_salary float
);

create table job_history (
id serial,
employee_id integer,
start_date date,
end_date date,
job_id integer,
department_id integer
);

create table departments(
id serial,
name varchar(255),
manager_id integer,
location_id integer
);

create table employees(
id serial,
first_name varchar(255),
last_name varchar(255),
email varchar(255),
phone_number varchar(255),
hire_date date,
job_id integer,
salary float,
commission_pct float,
manager_id integer,
department_id integer
);

select * from employees;
select * from departments;
select * from countries;
select * from jobs;
select * from job_grades;
select * from job_history;
select * from locations;
select * from regions;
