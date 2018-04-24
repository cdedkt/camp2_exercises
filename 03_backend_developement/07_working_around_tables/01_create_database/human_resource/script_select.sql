select * from employees;
select * from departments;
select * from countries;
select * from jobs;
select * from job_grades;
select * from job_history;
select * from locations;
select * from regions;

--Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000.

select emp.first_name || ' ' || emp.last_name as full_name, emp.salary from employees emp where emp.salary<6000;

--Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000.


--Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen".
select * from employees emp where emp.last_name='McEwen';

--Write a query in SQL to display all the information for all employees without any department number.
select * from employees emp where emp.department_id is null;

--Write a query in SQL to display all the information about the department Marketing.
select * from departments dep where dep.name='Marketing';

--Write a query in SQL to display the full name (first and last), hire date, salary, and department number for those employees whose first name does not containing the letter M and make the result set in ascending order by department number.

select * from employees emp where strpos(emp.first_name, 'M')=0 order by emp.department_id;

--Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000 and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987.

select * from employees emp where (emp.salary between 8000 and 12000 and emp.commission_pct is not null)
or (emp.department_id not in (4, 12, 7) and emp.hire_date<'1987-06-05');


--Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn any commission.

--Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen, and salary, for those employees whose salary is within the range of 9000 and 17000. The column headings assign with Full_Name, Contact_Details and Remuneration respectively.

--Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending with the letter m.

select * from employees emp where right(emp.first_name, 1)='m';
select * from employees emp where emp.first_name like '%m';


--Write a query in SQL to display the full name (first and last) name, and salary, for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name.
select emp.first_name || '  ' || emp.last_name, emp.salary as full_name from employees emp where emp.salary not between 7000 and 15000 order by full_name;
select * from employees emp where emp.salary < 7000 or emp.salary > 15000;

--Write a query in SQL to display the full name (first and last), job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009.

select emp.first_name || '  ' || emp.last_name, emp.salary as full_name from employees emp;

--Write a query in SQL to display the the full name (first and last name), and department number for those employees who works either in department 7 or 9.

select emp.first_name || '  ' || emp.last_name, emp.salary as full_name from employees emp where emp.department_id in (7, 9);

--Write a query in SQL to display the full name (first and last name), salary, and manager number for those employees who is working under a manager.

--Write a query in SQL to display all the information from Employees table for those employees who was hired before June 21st, 2002.

--Write a query in SQL to display the first and last name, email, salary and manager ID, for those employees whose managers are hold the ID 21, 4 or 46.

--Write a query in SQL to display all the information for all employees who have the letters D, S, or N in their first name and also arrange the result in descending order by salary.
select * from employees emp where emp.first_name like '%D%' or emp.first_name like '%S%' or emp.first_name like '%N%' order by emp.salary desc;

--Write a query in SQL to display the full name (first name and last name), hire date, commission percentage, email and telephone separated by '-', and salary for those employees who earn the salary above 11000 or the seventh digit in their phone number equals 3 and make the result set in a descending order by the first name.

select * from employees emp where emp.salary>11000 or substr(emp.phone_number, 7, 1)='3';


--Write a query in SQL to display the first and last name, and department number for those employees who holds a letter s as a 3rd character in their first name.

--Write a query in SQL to display the employee ID, first name, job id, and department number for those employees who is working except the departments 5, 3 and 8.
select * from employees emp where emp.department_id not in (5, 3, 8);

--Write a query in SQL to display the employee Id, first name, job id, and department number for those employees whose department number equals 3, 4 or 9.

select * from employees emp where emp.department_id in (3, 4, 9);

--Write a query in SQL to display the ID for those employees who did two or more jobs in the past.
select * from job_history;

select jh.employee_id, count(*) nb_job from job_history jh
group by jh.employee_id
having count(*)>1;


--Write a query in SQL to display job ID, number of employees, sum of salary, and difference between highest salary and lowest salary for a job.
select * from employees;

select emp.job_id, count(*), sum(emp.salary), max(emp.salary), min(emp.salary), max(emp.salary)-min(emp.salary) diff
from employees emp
group by emp.job_id;


--Write a query in SQL to display job ID for those jobs that were done by two or more for more than 300 days.

--Write a query in SQL to display the country ID and number of cities in that country we have.
select * from locations where country_id=6;

select l.country_id, count(distinct(l.city))  from locations l
group by l.country_id;


--Write a query in SQL to display the manager ID and number of employees managed by the manager.
select mgr.id, count(1) from employees mgr
left join employees emp on emp.manager_id=mgr.id
group by mgr.id;


select * from employees emp where emp.manager_id = 1;

--Write a query in SQL to display the details of jobs in descending sequence on job title.

--Write a query in SQL to display the first and last name and date of joining of the employees who is either Sales Representative or Sales Man.

--Write a query in SQL to display the average salary of employees for each department who gets a commission percentage.
select * from employees emp;

--Write a query in SQL to display those departments where any manager is managing 4 or more employees.
select mgr.id, count(*) from employees mgr
left join employees emp on emp.manager_id=mgr.id
group by mgr.id
having count(*)>=4;

--Write a query in SQL to display those departments where more than ten employees work who got a commission percentage.

--Write a query in SQL to display the employee ID and the date on which he ended his previous job.

--Write a query in SQL to display the details of the employees who have no commission percentage and salary within the range 7000 to 12000 and works in that department which number is 5.

--Write a query in SQL to display the job ID for those jobs which average salary is above 8000.

--Write a query in SQL to display job Title, the difference between minimum and maximum salaries for those jobs which max salary within the range 12000 to 18000.

--Write a query in SQL to display all those employees whose first name or last name starts with the letter D.

--Write a query in SQL to display the details of jobs which minimum salary is greater than 9000.

--Write a query in SQL to display those employees who joined after 7th September, 1987.
