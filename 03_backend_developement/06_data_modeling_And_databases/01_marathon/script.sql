//brew services start postgres

//createdb marathon

//plsql -d marathon -U Christophe

create table race (
  race_name varchar(100),
  started_date timestamp,
  runner_name varchar(100),
  runner_bib integer,
  runner_final_position integer,
  runner_racing_time time
);

select * from race where race_name='New York City Marathon - Women';
select * from race where runner_bib>100;
select * from race where runner_bib<100;
select * from race where runner_racing_time < '02:15:00';
select * from race where runner_racing_time < '02:30:00';
select * from race where runner_racing_time between '02:15:00' and '02:30:00';

select * from race;

select * from race where race_name='New York City Marathon - Women' and started_date = '2017-12-07';

select * from race where race_name='New York City Marathon - Men' and started_date = '2017-12-07'
order by runner_final_position limit 3;


select * from race where race_name='New York City Marathon - Women' and started_date = '2017-12-07'
and ((runner_racing_time < '02:15:00' and runner_bib>100) or (runner_racing_time < '02:30:00' and runner_bib<100))
order by runner_racing_time;

select * from race where race_name='New York City Marathon - Men' and started_date='2017-12-07' and runner_racing_time<
(select runner_racing_time  from race where race_name='New York City Marathon - Men' and started_date='2017-12-07' and runner_name='Koen Naert')
order by runner_racing_time;

select * from race cr where race_name='New York City Marathon - Men' and started_date='2017-12-07' and runner_racing_time<
(select runner_racing_time  from race where race_name=cr.race_name and started_date=cr.started_date and runner_name='Koen Naert')
order by runner_racing_time;

delete from race;

insert into race (race_name, started_date, runner_name, runner_bib, runner_final_position, runner_racing_time )  values
('New York City Marathon - Men','2017-12-07','Christophe',20,110,'04:15:00'),
('New York City Marathon - Men','2017-12-07','Jean Phi',15,200,'04:30:00'),
('New York City Marathon - Women','2017-12-07','Jiao',318,500,'02:05:00'),
('New York City Marathon - Men','2017-12-07','Koen Naert',10,20,'02:28:00'),
('New York City Marathon - Women','2017-12-07','women 2',18,18,'01:50:00'),
('New York City Marathon - Women','2017-12-07','women 3',19,19,'04:40:00'),
('New York City Marathon - Men','2017-12-07','Nico',200,1000,'02:20:17'),
('New York City Marathon - Men','2017-12-07','Men 2',188,550,'06:20:17'),
('New York City Marathon - Men','2017-12-07','Men 3',450,198,'03:20:17');
