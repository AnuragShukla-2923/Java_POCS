create table employee(empNo int primary key,Ename varchar(255),JOB varchar(255),MGR int,HireDate varchar(255),
SAL int,Comm int,DeptNo int, foreign key(DeptNo) references department(deptNo));
create table Department(DeptNo int primary key,DName varchar(255),LOC varchar(255));
desc employee;
insert into department values(10,'ACCOUNTING','NEW YORK'),
								(20,'RESEARCH','DALLAS'),
                                (30,'SALES','CHICAGO'),
                                (40,'OPERATIONS','BOSTON');
insert into employee values(7369,'Smith','CLERK',7902,'17-Dec-80',800,null,20),
							(7499,'ALLEN','SALESMAN',7688,'20-Feb-81',1600,300,30),
                            (7521,'WARD','SALESMAN',7698,'22-Feb-81',1250,500,30),
                            (7566,'JONES','MANAGER',7839,'02-Apr-81',2975,null,20),
                            (7654,'MARTIN','SALESMAN',7698,'28-Sep-81',1250,1400,30),
                            (7698,'BLAKE','MANAGER',7839,'01-May-81',2850,null,30),
                            (7782,'CLARK','MANAGER',7839,'09-Jun-81',2450,null,10),
                            (7788,'SCOTT','ANALYST',7566,'09-Dec-82',3000,null,20),
                            (7839,'KING','PRESIDENT',null,'17-Nov-81',5000,null,10),
                            (7844,'TURNER','SALESMAN',7698,'08-Sep-81',1500,0,30),
                            (7876,'ADAMS','CLERK',7788,'12-Jan-83',1100,null,20),
                            (7900,'JAMES','CLERK',7698,'03-Dec-81',950,null,30),
                            (7902,'FORD','ANALYST',7566,'03-Dec-81',3000,null,20),
                            (7934,'MILLER','CLERK',7782,'23-Jan-82',1300,null,10);
select * from employee;
select * from department;
select distinct(JOB) from employee;  
select * from employee order by sal asc;
select * from employee order by deptNo asc, job desc;
select distinct job from employee order by job desc;  
select   mgr from employee;
select * from employee where empNo in (select mgr from employee) ;  
select * from employee where hiredate < ('01-Jan-81');                  
                            
                                