use restdb;
select * from alien;
show databases;
use citizendb;
show tables;
desc table citizen;
select * from  citizen;
select * from hibernate_sequence;
use pocs;
create table StudentDetails (StudentId varchar(5) primary key,StudentName char(20),studentClass varchar(5),studentAge int);
 
insert  into  StudentDetails values('1001','Anurag Shukla','10',18),
                                   ('1002','Abhishek Shukla','09',16),
                                   ('1003','Atul Shukla','10',11),
                                   ('1004','Shri Shukla','10',12),
                                   ('1005','Ram Shukla','10',13),
                                   ('1006','Krishna Shukla','10',14),
                                   ('1007','Mohan Shukla','10',15),
                                   ('1008','Sonu Shukla','10',16),
                                   ('1009','Gautham Shukla','10',17),
                                   ('1010','Virat Shukla','10',18),
                                   ('1011','Virag Shukla','10',12),
                                   ('1012','Anu Shukla','10',10);
                                   select * from StudentDetails;  
                                   use pocs;
                                   create table CustomerDetails (CustId varchar(5) primary key,CustName char(20),CustAddress varchar(20),ContactNo varchar(10));
                                   insert  into  CustomerDetails values('1001','Anurag Shukla','Coimbatore','3454546535'),
                                   ('1002','Abhishek Shukla','Chennai','1644665656'),
                                   ('1003','Atul Shukla','Madurai','1154663456'),
                                   ('1004','Shri Shukla','Salem','122345643'),
                                   ('1005','Ram Shukla','Rameswaram','134535355'),
                                   ('1006','Krishna Shukla','Kanyakumari','14454545'),
                                   ('1007','Mohan Shukla','Tirunelvelli','1545635343'),
                                   ('1008','Sonu Shukla','Erode','164546655'),
                                   ('1009','Gautham Shukla','Jolarpettai','175464465'),
                                   ('1010','Virat Shukla','Tirupur','1854643545'),
                                   ('1011','Virag Shukla','Coimbatore','125446445'),
                                   ('1012','Anu Shukla','Palani','1054545454'),
                                   ('1013','Anuj Shukla','Ooty','1354545454'),
                                   ('1014','Anup Shukla','Mettupalayam','1546545454');
                                   select * from account_master;
                                   select Account_No from db1.account_master as ACT ORDER BY Account_No DESC LIMIT 1;
                                   select * from beneficiary_table;
                                   select * from customerdetails;
create table OracleSampleFileTable (Id varchar (50),TypeVersion int1,LastModifiedUtc varchar(100),PartNumber varchar(50),
   Revision int,PdmSource varchar(20),Reporting varchar(20),Category varchar(40),EquipmentSection varchar(50),
   WeightKg float,PartType varchar(5),DrawingNumber varchar(30),PatternIdentification varchar(30),
   MatCode varchar(20),Industry varchar(50),Line varchar(30),Model varchar(30),Notes varchar(255),AlternateNumbers varchar(50),
   Products varchar(50),Locations varchar(30)) ;
   insert into OracleSampleFileTable values("284644-PDB",1,"2022-07-26T22:48:49.6069724Z","284644-PDB",1,"Enovia","Bearing",
   "Casting/Forgings","Bearing section",95.50,"N/A?","20045473","PP-2926","2560","IT","Firing Systems","Duoflex Burner",
   "Remember to offer complete rotor insted of rotor shaft (PDB-2051212)","284644-42-PDB","EV Crusher 150x150","INDIA");
   select * from OracleSampleFileTable;
   drop table OracleSampleFileTable;
   describe OracleSampleFileTable;
   create table OracleSampleFileTable (ITEM_NUMBER varchar(40),COST_PRICE float,COST_CURRENCY varchar(30),INCOTERMS varchar(20),
   INCOTERMS_LOCATION varchar(40),COST_VALID_FROM varchar(10),COST_VALID_TO varchar(10)
   ,SALES_PRICE float,SALES_CURRENCY varchar(30),SALES_VALID_FROM varchar(10),SALES_VALID_TO varchar(10),`STATUS` int);
   select * from OracleSampleFileTable;
   delete from OracleSampleFileTable;
   use pocs;
   show tables;
   select * from customerdetails;
   create table Exception_Configuration(flow_Name varchar(100),log_Location varchar(20));
   create table log_Exception(Application_Name varchar(100),flow_Name varchar(100),Exception_Msg varchar(5000),payload varchar(5000),currentTimeStamp varchar(30));
   insert into exception_configuration values('Test_Exception_Flow','DB');
                                              
                                              select * from exception_configuration;	
                                              select * from log_exception;
                                              update exception_configuration set log_location='Email' where flow_Name='Test_Exception_Flow';
                                              update exception_configuration set log_location='File' where flow_Name='Test_Exception_Flow';
                                              update exception_configuration set log_location='DB' where flow_Name='Test_Exception_Flow';
                                              use db1;
                                              show table status;
                                              show tables;
                                              describe table  account_master;
                                              desc account_master;
                                              select * from account_master;
                                              create database java_projects;
                                              CREATE TABLE account_table AS SELECT * FROM db1.account_master;
                                              use java_projects;
                                              show tables;
                                              select * from account_table;	
                                              
                                              drop tables account_table,accounttable,hibernate_sequence;
                                            
                                              desc account_table;
                                              
                                              
                                              
                                              drop tables account_table;
                                              create database myhibernate;
                                              use myhibernate;
                                              show tables;
                                              select * from student;  
                                              select * from student_address;
                                              desc student_address;
                                              desc student;
                                               desc answer;
                                                desc question;
                                                select * from answer;
                                                select * from question;
                                                drop table answer;
                                                drop tables question_answer;
                                                drop tables question,student,student_address,question_answer,answer,employee,project,
                                                employee_project,employee_project_details;
                                                select * from answer;
                                                show tables;
                                                select * from question_answer;
                                                select * from answer;
                                                select * from question;  
                                                show databases;
                                                use myhibernate;
                                                show tables;
                                                select * from employee;
                                                select * from project;
                                                select * from employee_project_details;
 drop tables answer,employee,employee_project_details,project,question,student,student_address;
 show tables;
 drop tables answer,employee,employee_project_details,project,question;
 drop tables student,student_address;
 select * from answer;
 select * from question;
 select * from student;
 select * from student_address;
 use myhibernate;
 create database employee_management_system; 
 show databases;
 use employee_management_system;
 show tables;
 
 
 select * from personal_details ;
  select * from personal_table  where pid=210; 
  select * from personal_table ;
 describe table personal_details;
 describe table personal_table;
 desc personal_table;
 
 drop table personal_details;
 drop table personal_table;
 SELECT * FROM personal_details WHERE (Col1, Col2, Col3, Col4......) IS NULL;
 desc table personal_details;
 describe personal_details;
 show databases;
 use myhibernate;
 show tables;
 select * from student_address;
 use employee_management_system;
 show tables;
 drop  table authetication_roles;
 drop  table authentication_roles,user_role,users,users_seq;
 drop table user_table_seq;
 select * from authentication_roles;
 select * from user_role;
 select * from users_seq;
 select * from personal_table where pid=206;
 select * from personal_table where pid-211;
 select * from personal_table where pid=214;
 SET GLOBAL max_allowed_packet=1073741824;
 desc  personal_table;
 drop table personal_table;
 drop table user_table;
 show tables;
 drop table user_role;
 drop table role_table;
 select * from personal_details;
 drop tables personal_details,role_table,user_role,user_table,user_table_seq;
 drop tables personal_table,role_table,user_role,user_table,user_table_seq;
 show tables;
 select * from personal_table where pid=215;
 drop table personal_table;
select * from personal_table ; 
use employee_management_system;
drop table personal_table;
show tables;
desc personal_table;
select * from user_table;
select * from role_table;
select * from user_role;
create database employee_profile_test;
use  employee_profile_test;
show tables;
select * from user_table;
desc  user_table;
select * from role_table;
select * from user_role;
select * from personal_table;
use employee_management_system;
show tables;
select * from personal_table;

create database blog_app_apis;
use blog_app_apis;
show tables;
select * from users;
drop table categories;
drop table users;
drop table hibernate_sequence;
desc table users;
describe  users;
select * from role;
drop table role;
select * from user_role;
drop table user_role; 
select * from comments; 
select * from categories; 
select * from post ; 
drop table post;
drop table comments;
drop table categories;
drop table users;
drop table hibernate_sequence;
use employee_management_system;
drop database employee_management_system;
show tables;
select * from Personal_table;
describe table Personal_table;
describe  Personal_table;
use employee_management_system;
drop database employee_management_system;
show tables;
select * from personal_table;
select * from personal_table_seq;
select * from role;
select * from user_role;
select * from users;
select * from users_seq;
drop database employee_management_system;
drop database employee_profile_test;
use employee_profile_test;
show tables;
select * from personal_table;
select * from role;
select * from role_table;
select * from user_role;
select * from user_table;
use blog_app_apis;
drop database blog_app_apis;
show tables;
select * from users;
desc  users;
select * from role;
select * from user_role;
show databases;
use employee_management_system;
drop database employee_management_system;
show tables;
select * from users;
use employee_management_system;
show tables;
select * from personal_table;
select * from users;
select * from user_role;
select * from role;
show databases;
use blog_app_apis;
show tables;
select * from categories;
select * from post;
select * from comments;
select * from users;
select * from role;
select * from user_role;
show databases;
use employee_apis;
show tables;
select * from personal_table;
use blog_app_apis;
drop database blog_app_apis;
show tables;
select * from post;
describe table post;
SELECT `content` FROM `blog_app_apis`.`post`;


select * from users;
select * from role;

select * from user_role;
select * from categories;
select * from post;
show databases;
use employee_apis;
show tables;

select * from personal_details where pid=1;
select * from family_details where family_id=53;
select * from family_details where family_id=2;
select * from accommodation_details where family_id=3;
select * from educational_details;
select * from skills_table;
select * from users;
select * from role;
select * from user_role;
select * from salary_table;
select * from work_experience_tab;
select * from personal_table;
select * from accommodation_details  where accommodation_id=5;
select * from family_details  where family_id=10;	
select * FROM accommodation_tab_seq;
describe accommodation_tab;
drop tables accommodation_details,accommodation_details_seq;
drop tables family_details,family_details_seq;
drop tables educational_details,educational_details_seq;
show databases;
use employee_management_system;
show tables;
show databases;
use myhibernate;
select * from question;
select * from answer;
select * from skills_details;
select * from personal_details;
select * from personal_table;



drop table skills_details;
select * from work_experience_details;
select * from salary_details where salary_id=15;
select * from salary_details;
select * from skills_details;
select * from personal_table where pid=40;
select * from personal_table where pid=51;
drop table personal_table;
select * from users;
select * from family_details where family_id =23;
select * from family_details where family_id=55;
select * from role;
select * from accommodation_details where accommodation_id=56;
select * from user_role;
select * from salary_details where salary_id=58;
drop table salary_details;
select * from skills_details where skills_id=7;
select * from skills_details;
select * from educational_Details  where education_id=62;
select * from work_experience_details;
select * from users;
select * from role;
drop table personal_details;
drop table skills_details;
drop table personal_details_skills;
show tables;
select * from skills_details;
select * from educational_details;
select * from accommodation_details;
select * from family_details;
select * from personal_details;
select * from salary_details;
select * from work_experience_details;
use employee_management_system;
show tables;
select * from personal_details;
drop tables educational_details,personal_details,skills_details;
drop table Skills_details;
select * from user_role;
select * from users;
select * from role;
show databases;
use blog_app_apis;
show tables;
select * from categories;
select * from comments;
select * from post;
show tables;
select * from users;
select * from personal_details;
select * from skills_details;
select * from educational_details;
drop table educational_details;
select * from family_details;
select * from accommodation_details;
select * from work_Experience_details;
select * from salary_details;
select * from users;
select * from role;
select * from user_role;
use employee_management_system;
drop database employee_management_system;
show tables;
show databases;
use employee_apis;
use employee_management_system;
show tables;
select * from users;
select * from personal_details;

select * from user_role;
select * from role;
show databases;use employee_management_project;show tables;select * from personal_details;select * from users;select * from role;
select * from skills_details;select * from users_skills;
select * from skills_details where user_id=1;
show databases;use employee_management_system;show tables;select * from personal_details;select * from users;select * from role;
select * from user_role;
drop database employee_management_system;
delete from users where id=3;
delete from user_role where user=3;
delete from personal_details where p_id=4;
drop database employee_management_project;
drop database employee_management_project;	
use employee_management_system;
show tables;select * from personal_details;select * from users;select * from role;select * from user_role;
use employee_management_secondarytable;
drop database employee_management_secondarytable;
show tables;
select * from users;
select * from personal_details; 
 SET GLOBAL max_allowed_packet=1073741824;











 
 
 
                                              
                                              
                                              
											
                                              
   
   
    
                                   
                                   

                                   
                                   


