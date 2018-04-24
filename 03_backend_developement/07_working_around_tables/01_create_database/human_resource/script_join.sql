
select e.first_name, l.city from employees e
inner join departments d on d.id=e.department_id
inner join locations l on l.id=d.location_id;
; 


-- JOIN
--Write a query in SQL to display the first name, last name, department number, and department name for each employee.
select emp.first_name, emp.last_name, emp.department_id, dep.name from employees emp
inner join departments dep on dep.id=emp.department_id;


--Write a query in SQL to display the first and last name, department, city, and state province for each employee.
select emp.first_name, emp.last_name, emp.department_id, dep.name, loc.city, loc.state_province
from employees emp
inner join departments dep on dep.id=emp.department_id
inner join locations loc on loc.id=dep.location_id;

select * from departments;
select * from locations;
select * from countries;
select * from job_grades;
select * from jobs;

--Write a query in SQL to display the first name, last name, salary, and job grade for all employees.
--????


--Write a query in SQL to display the first name, last name, department number and department name, for all employees for departments 8 or 4.
select emp.first_name, emp.last_name, emp.department_id, dep.name from employees emp
inner join departments dep on dep.id=emp.department_id
where emp.department_id in (4, 8);


--Write a query in SQL to display those employees who contain a letter z to their first name and also display their last name, department, city, and state province.

select emp.first_name, emp.last_name, emp.department_id, dep.name, loc.city, loc.state_province
from employees emp
inner join departments dep on dep.id=emp.department_id
inner join locations loc on loc.id=dep.location_id
where strpos(emp.first_name,'z')>0;


--Write a query in SQL to display all departments including those where does not have any employee.
select * from departments;


--Write a query in SQL to display the first and last name and salary for those employees who earn less than the employee earn whose number is 83.
select emp.first_name, emp.last_name, emp.salary
from employees emp
where emp.salary < (select salary from employees where id=83);

--Write a query in SQL to display the first name of all employees including the first name of their manager.
select emp.first_name, emp.last_name, emp.id, mgr.first_name, mgr.last_name, emp.manager_id
from employees emp
inner join employees mgr on mgr.id=emp.manager_id;

--Write a query in SQL to display the department name, city, and state province for each department.
select dep.name, loc.city, loc.state_province from departments dep
inner join locations loc on loc.id=dep.location_id;

--Write a query in SQL to display the first name, last name, department number and name, for all employees who have or have not any department.
select emp.first_name, emp.last_name, emp.department_id, dep.name from employees emp
left join departments dep on dep.id=emp.department_id;


--Write a query in SQL to display the first name of all employees and the first name of their manager including those who does not working under any manager.
select emp.id, emp.first_name, emp.last_name, emp.manager_id, mgr.id, mgr.first_name, mgr.last_name, mgr.manager_id
from employees emp
left join employees mgr on mgr.id=emp.manager_id;


--Write a query in SQL to display the first name, last name, and department number for those employees who work in the same department as the employee who hold the last name as Taylor.



--Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.

--Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between maximum salary for the job and salary of the employee.
select j.title, emp.first_name, emp.last_name, emp.salary, j.max_salary, j.max_salary-emp.salary
from employees emp
inner join jobs j on j.id=emp.job_id;

select * from jobs;

--Write a query in SQL to display the name of the department, average salary and number of employees working in that department who got commission.
select d.id, d.name, avg(e.salary), count(*)
from departments d
inner join employees e on e.department_id=d.id
group by d.id, d.name
order by d.name;


--Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees who is working in the department which ID is 8.

--Write a query in SQL to display the name of the country, city, and the departments which are running there.

--Write a query in SQL to display department name and the full name (first and last name) of the manager.

--Write a query in SQL to display job title and average salary of employees.

--Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning a salary on and above 12000.

--Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.

--Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department 8.
select j.id, j.title, sum(end_date-start_date) from job_history jh
inner join jobs j on j.id=jh.job_id
where jh.department_id=8
group by j.id, j.title;

--Write a query in SQL to display the full name (first and last name), and salary of those employees who working in any department located in London.

--Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for those employees with worked without a commission percentage.

--Write a query in SQL to display the department name and number of employees in each of the department.

--Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country presently where (s)he is working.
