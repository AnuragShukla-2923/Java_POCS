show databases;use employee_management_project;show tables;select * from personal_details;select * from users;select * from role;
select * from user_role;select * from user_profile;
select * from educational_details;select * from family_details;select * from accommodation_details;select * from salary_details;
select * from skills_details;select * from work_experience_details;
delete  from skills_details where skills_details.user_id=2;
delete  from work_experience_details where user_id=1;
select * from skills_details where user_id=1;
SET GLOBAL max_allowed_packet=1073741824;
select * from users_skills;
drop database employee_management_project;
use blog_app_apis;
show tables;
select * from users;
select * from categories;
select * from comments;
select * from post;
use upload_file_in_filesystem;show tables;
select * from user_profile;
create database IBM_ACE_POCS;
show databases;
use world;
show tables;
select * from country;
select * from countrylanguage; 
select * from city;
drop database world;
use upload_file_in_filesystem;
show tables;
select * from user_profile;
drop database upload_file_in_filesystem;
use pocs;
show tables;
show databases;
use restdb;drop database restdb;
show tables;
select * from alien;
use sys;
show tables;
show databases;
use sakila; drop database sakila;
show tables;
use performance_schema;
show tables;
use log; drop database log;
show tables;
select * from logtable;
use mysql;
show tables;
use jwt_test; drop database jwt_test;
show tables;
use myhibernate;
show tables;
drop database  myhibernate;
show databases;
use java_projects;
show tables;
drop database java_projects;
use iib;
show tables;
use gramener;
show tables;
drop database blog_app_apis;
use citizendb; drop database citizendb;
show tables;
drop database employee_apis;
use exlog; drop database exlog;
show tables;
use db1;
show tables;
use demodb; drop database demodb;
show tables;
use gramener;drop database gramener;
show tables;
show databases;
drop database employee_management_project;
create database ibm_ace_pocs;
use ibm_ace_pocs;
use db1;
show tables;
use employee_management_project;
show tables;select * from personal_details;
create table employee_management (empId varchar(5),empName varchar(30),empSalary int);
drop table employee_management;
use ibm_ace_pocs;
insert into employee_management values('10001','Gokul Sam','50000'),
('10002','Arunagiri','50000'),
('10003','Joseph','50000'),
('10004','Sathish','50000'),
('10005','Anurag Shukla','5000'),
('10006','Atul Sharma','6000'),
('10007','Rahul Kumar','7000'),
('10008','Alia Bhatt','12000'),
('10009','Ranbeer Singh','15000'),
('10010','MSD','25000'),
('10011','Virat Kohli','17000'),
('10012','Lina Srinivasan','18000'),
('10013','Sonia Saal','20000');
select * from employee_management;SELECT * FROM ibm_ace_pocs.employee_management WHERE empId=10001;
create table `json_table` (ITEM_NUMBER character(100),COST_PRICE float,COST_CURRENCY character(100),INCOTERMS character(100),INCOTERMS_LOCATION character(100), COST_VALID_FROM character(100), 
COST_VALID_TO character(100),SALES_PRICE float,SALES_CURRENCY character(100),SALES_VALID_FROM character(100),SALES_VALID_TO character(100), `STATUS` int);
drop table 	`json_table`;
select * from `json_table`;
show databases;
use sys;
use ibm_ace_pocs;
show tables;
select * from `json_table`;
select * from employee_management;
create database microservices;
create database RESERVDB;
drop database AirlinesReservations;

use reservdb;
create table XMLFLIGHTTB (FLIGHTDATE char(15) not null,FLIGHTNO char(15) not null,ECONOMICCLASS integer not null,
FIRSTCLASS integer not null,TOTALECONOMIC integer not null,TOTALFIRST integer not null,ECONOMICPRICE integer not null,
FIRSTPRICE integer not null,STARTPOINT char(15) not null,ENDPOINT char(15) not null,RESERVATIONSEQNO integer not null);
insert into xmlflighttb value('20030525','CA937',1,0,100,100,3000,50000,'DLE','CBE',0);
insert into xmlflighttb value('20030525','BA039',1,0,100,100,3000,50000,'DLE','CBE',0);

create table XMLPASSENGERTB (LASTNAME char(15) not null,FIRSTNAME char(15) not null,FLIGHTNO char(15) not null,FLIGHTDATE char(15) not null,
CLASSTYPE char(15) not null,RESERVATIONNO varchar(100) not null);

SELECT T.* FROM reservdb.XMLFLIGHTTB AS T;
show tables;
select * from XMLPASSENGERTB;
select * FROM xmlflighttb;
drop tables XMLPASSENGERTB;
drop table xmlflighttb;

SHOW DATABASES;
select * from xmlflighttb;
SELECT schema_name FROM information_schema.schemata;
desc XMLPASSENGERTB;
desc  xmlflighttb;
drop table xmlflighttb;
select * from xmlflighttb;
insert into xmlflighttb value('20030525','CA937',1,0,100,100,3000,50000,'DLE','CBE','CA937200305253');
use reservdb;
delete  from XMLPASSENGERTB;
select* from XMLPASSENGERTB;
select * from xmlflighttb;
SELECT * FROM reservdb.XMLFLIGHTTB 
				WHERE FLIGHTDATE = 20030525
				AND FLIGHTNO ='BA039';
                
                
use reservdb;                
create table XMLFLIGHTTB (FLIGHTDATE char(15) not null,
                          FLIGHTNO char(15) not null,
                          ECONOMICCLASS integer not null default 0,
						  FIRSTCLASS integer not null default 0,
                          TOTALECONOMIC integer not null default 100,
                          TOTALFIRST integer not null default 100,
                          ECONOMICPRICE integer not null default 3000,
						  FIRSTPRICE integer not null default 50000,
                          `STARTPOINT` char(15) not null,
                          `ENDPOINT` char(15) not null,
                          RESERVATIONSEQNO integer not null);


create table XMLPASSENGERTB (LASTNAME char(15) not null,
                             FIRSTNAME char(15) not null,
							 FLIGHTNO char(15) not null,
                             FLIGHTDATE char(15) not null,
                             CLASSTYPE char(15) not null,
                             RESERVATIONNO varchar(100) not null);
insert into xmlflighttb value('20030525','CA937',1,0,100,100,3000,50000,'DLE','CBE',0);
insert into xmlflighttb value('20030525','BA039',1,0,100,100,3000,50000,'DLE','CBE',0);                             
                             
select * from XMLPASSENGERTB;
select * from XMLFLIGHTTB;
SELECT * FROM ibm_ace_pocs.employee_management;
use reservdb; 
show databases;
use microservices;
show tables;
desc micro_users;
select * from micro_users;
create database users;
create table users.EMPLOYEES (PKEY INTEGER NOT NULL, FIRSTNAME VARCHAR(30), LASTNAME VARCHAR(30), COUNTRY VARCHAR(2), PRIMARY KEY(PKEY));
drop database users;







