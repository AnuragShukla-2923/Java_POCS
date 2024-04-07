show databases;
create table employee_management (empId varchar(5),empName varchar(30),empSalary int);
select * from db2.employee_management;
select * from ibm_ace_pocs.employee_management; 
select * from ibmdb.employee_management;
SELECT * FROM IBM_ACE.employee_management;
show databases;
drop database ibm_ace;
use ibm_ace_pocs;
show tables;
select * from countries;
select * from employee_management;
desc employee_management;
show databases;
drop database employee_apis;
use employee_management_system;
drop database employee_management_system;	
show tables;
select * from users;
use ibm_ace_pocs;
select * from personal_table;
desc personal_details;
show tables;
select * from role;
select * from users;
select * from user_role;
select * from countries;
select * from states where country_id=1 limit 500000;
select * from states;
select count(*) from cities limit 500000;
select * from  cities where id=48356;
select * from cities where state_id=67;
show databases;
drop database employee_management_system;
use employee_apis;
show tables;
select * from users;
select * from role;
select * from user_role;
show databases;
create database microservices;
drop  database microservices;


create database gramenerit;
use gramenerit;
create table enquiries (FirstName varchar(20),LastName varchar(20),Email varchar(30),Phone varchar(15),
Remarks varchar(50));
select * from enquiries;	
truncate table enquiries;
show databases;
drop database `inventory-service`;
create database `inventory-service`;
use `inventory-service`;
show tables;
select * from `t_inventory`;
drop database `order-service`;
create database `order-service`;
use `inventory-service`;
show tables;
select * from t_inventory;
show databases;
use `order-service`;
show tables;

show databases;
use gramenerit;
show tables;
truncate table gramenerit.enquiries;
select * from gramenerit.enquiries;
use employee_apis;
drop database employee_apis;
show tables;
select * from users;
select * from personal_details;
delete from personal_details where pid>0;
select * from role;
select * from user_role;
show databases;
use employee_management_system;
show tables ;
select * from users;
select * from role;
select * from user_role;

create database new_iib_prep;
use  new_iib_prep; 
drop table emp_details; 
create table emp_details (eid int NOT NULL auto_increment,
empName varchar(20),
department varchar(20), PRIMARY KEY(eid));
select * from emp_details;
create table gramener_emp_Details (Eid int not null,EName varchar(30),ESalary varchar(10),primary key(Eid));
create table gramener_emp_Info(Eid int not null,Eaddress varchar(255),EContactNo varchar(12),Experience varchar(10));
show tables;
select * from new_iib_prep.gramener_emp_Details;
insert into new_iib_prep.gramener_emp_Details values(1004,'arun Rithik','30000'),
                                                    (1005,'Sathish kumar','50000');
delete from  new_iib_prep.gramener_emp_Details where Eid=1001;   
delete from  new_iib_prep.gramener_emp_Details;  
use new_iib_prep;
create table iib_file_details (fileName varchar(255),fileDirectory varchar(255));
insert into iib_file_details value('emp.txt','D:\IBM ACE Refreshment\FileOutNodes\file_db_info'); 
update iib_file_details set fileDirectory='D:/\IBM ACE Refreshment/\FileOutNodes/\file_db_info/\output' where fileName='emp.txt';
select * from new_iib_prep.iib_file_details; 
#GRANT ALL PRIVILEGES ON forremote.logging_details TO 'sathish'@'192.168.0.247' IDENTIFIED BY 'root' WITH GRANT OPTION;                       
create database forremote;
use forremote;
create table logging_details (id int auto_increment primary key,request_msg text,response_msg text,
curr_date_time varchar (255),status varchar(255
)
)AUTO_INCREMENT=1001; 
   
select * from logging_details;
insert into logging_details (request_msg,response_msg,curr_date_time,status) value('Hi Anurag','Bye Anurag','dd-mmm-yy hh:mm:ss','Success');
CREATE USER 'sathish'@'192.168.0.247' IDENTIFIED BY 'mysql';
GRANT All PRIVILEGEs ON forremote.logging_details TO 'sathish'@'192.168.0.247';
select * from forremote.logging_details;	
select * from forremote.logging_details;
truncate table forremote.logging_details;

insert into logging_details (request_msg,response_msg,curr_date_time,status) value('{"ITEM_NUMBER":1234000123,
    "COST_PRICE":1000.00,
    "COST_CURRENCY":"$12.5",
    "INCOTERMS":"XXXXXX",
    "INCOTERMS_LOCATION":"XXXXXX",
    "COST_VALID_FROM":"14-02-2022",
    "COST_VALID_TO":"13-02-2023",
    "SALES_PRICE":1200.00,
    "SALES_CURRENCY":"$15.2",
    "SALES_VALID_FROM":"14-02-2022",
    "SALES_VALID_TO":"13-02-2023",
    "STATUS":"PROCESS"
}
','{    "ITEM_NUMBER":1234000123,
    "COST_PRICE":1000.00,
    "COST_CURRENCY":"$12.5",
    "INCOTERMS":"XXXXXX",
    "INCOTERMS_LOCATION":"XXXXXX",
    "COST_VALID_FROM":"14-02-2022",
    "COST_VALID_TO":"13-02-2023",
    "SALES_PRICE":1200.00,
    "SALES_CURRENCY":"$15.2",
    "SALES_VALID_FROM":"14-02-2022",
    "SALES_VALID_TO":"13-02-2023",
    "STATUS":"PROCESS"
}
','dd-mmm-yy hh:mm:ss','Success');
drop table logging_details;
select * from forremote.logging_details;
use forremote;
create table JSONToXMLServiceCall (id int not null primary key auto_increment,requestPayload text,transformedPayload text,
responsePayload text,currentDateTime varchar(50),tranStatus varchar(30),insertedBy varchar(50)) ;
select * from JSONToXMLServiceCall;
show tables;
create database userConnectionDB;
use userConnectionDB;
alter table userLoggingTable  add column requestDateTime varchar(50);
create table userLoggingTable (id varchar(255) not null primary key ,requestPayload text,transformedPayload text,
responsePayload text,requestDateTime varchar(50),responseDateTime varchar(50),tranStatus varchar(30),insertedBy varchar(50)) ;
truncate table userConnectionDB.userLoggingTable;
select transformedPayload from userConnectionDB.userLoggingTable where id='af33da5a-c9fd-4aca-b112-beb28c5eaad0';
select * from userConnectionDB.userLoggingTable order by requestDateTime asc;
select * from userConnectionDB.userLoggingTable  where requestDateTime like '30-Nov-23%';

use userConnectionDB;
show tables;
select * from employee;
describe employee;
alter table employee add primary key(EmployeeNumber);
desc employee;
describe eventtblofuserloggingtable;
desc  userLoggingTable;
select * from userConnectionDB.userLoggingTable;
create table studentInfo (stId int not null primary key auto_increment,stName varchar(30),stuClass varchar(30));
truncate userLoggingTable;
insert into userLoggingTable (id) values('23efdvvfbf');
create table eventtblOfUserLoggingTable 
(EVENT_ID int not null primary key,EmployeeNumber varchar(20) ,OBJECT_KEY varchar(50),OBJECT_VERB varchar(50),
OBJECT_NAME varchar(50),EVENT_PRIORITY varchar(2),EVENT_TIME varchar(50),
EVENT_STATUS varchar(2),EVENT_COMMENT varchar(50),foreign key(EmployeeNumber) references employee(EmployeeNumber));

drop table eventtblOfUserLoggingTable;
alter table eventtblOfUserLoggingTable add column EmployeeNumber varchar(20) ; 
drop table eventtblOfUserLoggingTable;
truncate table userConnectionDB.userLoggingTable;
select * from eventtblOfUserLoggingTable;
select * from userConnectionDB.employee;
select * from userConnectionDB.userLoggingTable;
desc userLoggingTable;
select * from userConnectionDB.studentInfo;

# FOR DATABASE DEFINITION CONCEPTS in IBM ACE:START
#Working code:Start
create database USERS;
use users;
show tables;
select * from  employees;
describe employees;
desc events;
CREATE TABLE EMPLOYEES (PKEY INTEGER NOT NULL, FIRSTNAME VARCHAR(30), 
           LASTNAME VARCHAR(30), COUNTRY VARCHAR(2), PRIMARY KEY(PKEY));
CREATE TABLE EVENTS (EVENT_ID INTEGER NOT NULL auto_increment, OBJECT_KEY INTEGER NOT NULL,
OBJECT_VERB VARCHAR(6), OBJECT_NAME VARCHAR(20),EVENT_PRIORITY INTEGER, EVENT_TIME TIMESTAMP,
EVENT_STATUS INTEGER, PRIMARY KEY(EVENT_ID)); 
 
Delimiter //
create trigger EMPLOYEES_TRIGGER after insert on EMPLOYEES  for each row 
begin
	INSERT INTO EVENTS (OBJECT_KEY, OBJECT_VERB, OBJECT_NAME, EVENT_PRIORITY, EVENT_TIME, EVENT_STATUS)
	VALUES (new.PKEY,'CREATE','EMPLOYEE',1,CURRENT_TIMESTAMP,0); 
end //
delimiter ;    
select * from employees;
select * from events;  
desc events;  
insert into EMPLOYEES values(3,'sathish Kumar','...','IN');
update employees set firstname ='Anurag Shukla' where PKEY=1;
describe events;
#Working code:Stop

#CREATE TABLE MYSCHEMA.EMPLOYEES (PKEY INTEGER NOT NULL, FIRSTNAME VARCHAR(30), LASTNAME VARCHAR(30),
#COUNTRY VARCHAR(2), PRIMARY KEY(PKEY));
#CREATE TABLE MYSCHEMA.EVENTS (EVENT_ID INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY
#(START WITH 1 INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 NO CYCLE NO CACHE), OBJECT_KEY INTEGER NOT NULL, 
#OBJECT_VERB VARCHAR(6), OBJECT_NAME VARCHAR(20), EVENT_PRIORITY INTEGER, EVENT_TIME TIMESTAMP,
# EVENT_STATUS INTEGER, PRIMARY KEY(EVENT_ID));
#CREATE TRIGGER MYSCHEMA.EMPLOYEES_TRIGGER AFTER INSERT ON 
#MYSCHEMA.EMPLOYEES REFERENCING NEW AS N FOR EACH ROW INSERT INTO MYSCHEMA.EVENTS 
#(OBJECT_KEY, OBJECT_VERB, OBJECT_NAME, EVENT_PRIORITY, EVENT_TIME, EVENT_STATUS)
# VALUES (N.PKEY,'CREATE','EMPLOYEE',1,CURRENT_TIMESTAMP,0)


    
   

drop table employees;
drop database users;




show tables;
desc events;
insert into EMPLOYEES values(2,'Gokul','Raj','IN');
select * from events;
select * from EMPLOYEES;
select database();
show tables;
desc EMPLOYEES;
SELECT * FROM EMPLOYEES WHERE `name` = EMPLOYEES_TRIGGER;
DROP TRIGGER EMPLOYEES_TRIGGER;
drop database users;
CREATE TABLE employee(  
    `name` varchar(45) NOT NULL,    
    occupation varchar(35) NOT NULL,    
    working_date date,  
    working_hours varchar(10)  
); 
INSERT INTO employee VALUES    
('Robin', 'Scientist', '2020-10-04', 12),  
('Warner', 'Engineer', '2020-10-04', 10),  
('Peter', 'Actor', '2020-10-04', 13),  
('Marco', 'Doctor', '2020-10-04', 14),  
('Brayden', 'Teacher', '2020-10-04', 12),  
('Antonio', 'Business', '2020-10-04', 11);
select * from employee;
#create trigger before_insert_empworkinghours before insert on employee for each row
 #begin
	#if NEW.working_hours < 0 then  
	#	set NEW.working_hours= 0
    #end;
    #end;
CREATE database USERS;
DROP DATABASE USERS;

#LEARNING TRIIGERS:START
CREATE DATABASE USERS;
USE USERS;
CREATE TABLE CUSTOMER(ID INT NOT NULL primary KEY,NAME VARCHAR(40)NOT NULL,EMAIL VARCHAR(30),
BIRTHDATE DATE);
CREATE TABLE MESSAGE(ID INT auto_increment,MESSAGEID INT,MESSAGE VARCHAR(300)not NULL,
primary key(ID,MESSAGEID));

Delimiter //
create trigger check_null_dob after insert on customer for each row 
begin
	if new.birthdate is null then
		insert into message(messageid,message) values(new.id,concat('Hi',new.name,',please update your dob.'));
    end if;
end //
delimiter ; 

insert into customer(id,name,email,birthdate) 
values(1,"nancy","nancy@abc.com",null),
	  (2,"Ronald","Ronald@123gmail.com","1998-11-12"),
      (3,"Krish","Krish@xyz.com","1997-08-20"),
      (4,"Alice","Alice@abc.com",Null);
      
      
select * from message;  
select database();  
select * from customer;
show tables;  
     
#LEARNING TRIGGERS:CLOSE


use users;
select * from employees;
select * from events;





           

           











# FOR DATABASE DEFINITION CONCEPTS in IBM ACE:Closing



#GRANT ALL privileges ON userConnectionDB.userLoggingTable TO 'user'@'%192.168.0.247' IDENTIFIED BY 'root';
 #GRANT ALL PRIVILEGES ON userConnectionDB.userLoggingTable TO 'root'@'192.168.0.245' IDENTIFIED BY 'root' WITH GRANT OPTION;
 #GRANT ALL ON yourdatabasename.* TO 'root'@'%' IDENTIFIED BY 'yourRootPassword';
#grant ALL ON yourdatabasename.* TO root@'%' IDENTIFIED BY 'yourRootPassword';
 CREATE USER 'user1'@'%192.168.0.247' IDENTIFIED BY 'user1'; 
 GRANT ALL PRIVILEGES ON userConnectionDB.userLoggingTable TO 'user1'@'localhost' WITH GRANT OPTION; 

 CREATE USER 'foo'@'localhost' IDENTIFIED WITH mysql_native_password BY 'bar';
 GRANT ALL PRIVILEGES ON userConnectionDB.* TO'foo'@'%192.168.0.247';
 FLUSH PRIVILEGES;
 select user, host from mysql.user;
 select user,host
from mysql.user
where user = 'Glp-175';
 drop user 'username'@'%192.168.0.247';
 drop user 'root'@'192.168.0.247';
 drop user 'root'@'Glp-175';
 drop user  'Sathish'@'192.168.0.247';
CREATE USER 'root'@'192.168.0.247' IDENTIFIED BY 'mysql';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.0.247' WITH GRANT OPTION;
FLUSH PRIVILEGES;
CREATE USER 'username'@'192.168.0.247' IDENTIFIED BY 'password';
GRANT ALL ON *.* TO 'username'@'192.168.0.247';
FLUSH PRIVILEGES;

CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON *.* TO 'username'@'localhost';
FLUSH PRIVILEGES;

CREATE USER 'root'@'192.168.0.247' IDENTIFIED BY 'mysql';
GRANT ALL ON userConnectionDB.userLoggingTable TO 'root'@'192.168.0.247';
FLUSH PRIVILEGES;

CREATE USER 'root'@'GLP-175' IDENTIFIED BY 'mysql';
GRANT ALL ON userConnectionDB.userLoggingTable TO 'root'@'GLP-175';
FLUSH PRIVILEGES;


create table userLoggingRequest (id varchar(255) not null primary key ,requestPayload text,requestDateTime varchar(50),insertedBy varchar(50)) ;


create table userLoggingResponse (Resid varchar(255) not null primary key ,id varchar(255) not null,transformedPayload text,
responsePayload text,responseDateTime varchar(50),tranStatus varchar(30)) ;


insert into userLoggingRequest values('1001','XML MESSAGE1','23/11/2023','Anurag1'),
									('1002','XML MESSAGE2','23/11/2024','Anurag2'),
									('1003','XML MESSAGE','23/11/2025','Anurag3'),
									('1004','XML MESSAGE','23/11/2026','Anurag4'),
                                    ('1005','XML MESSAGE','23/11/2027','Anurag5');

#INSERT INTO userLoggingRequest(id,requestPayload,requestDateTime,insertedBy) OUTPUT Inserted.ID VALUES('bob');
select * from userConnectionDB.userLoggingRequest order by id desc;
Select * from userLoggingRequest where id = `(
                                   insert into userLoggingRequest 
                                    values('1006','XML MESSAGE1','23/11/2023','Anurag1'))`;
                                    
select * from userConnectionDB.userLoggingTable;                                    
create table userConnectionDB.Employee(EmployeeNumber varchar(20),FamilyName varchar(50),FirstName varchar(50),Salary varchar(50));
select * from userConnectionDB.Employee;
insert into userConnectionDB.Employee Values('00001','Smith','John','20000'),
							                ('00002','Jones','Harry','26000'),
                                             ('00003','Doe','Jane','31000');
create database IBMACEUSER;
use IBMACEUSER;
CREATE TABLE EMPLOYEES (PKEY INTEGER NOT NULL,
 FIRSTNAME VARCHAR(30), LASTNAME VARCHAR(30), COUNTRY VARCHAR(2), PRIMARY KEY(PKEY));
CREATE TABLE EMPLOYEESDetails (EMPEVENT_ID INTEGER NOT NULL auto_increment, EMPOBJECT_KEY INTEGER NOT NULL,
EMPOBJECT_VERB VARCHAR(6), EMPOBJECT_NAME VARCHAR(20), EMPEVENT_PRIORITY INTEGER, EMPEVENT_TIME TIMESTAMP,
 EMPEVENT_STATUS INTEGER, PRIMARY KEY(EMPEVENT_ID)); 
 

 
 
 
 Delimiter //
create trigger EMPLOYEES_TRIGGER after insert on EMPLOYEES  for each row 
begin
	INSERT INTO EMPLOYEESDetails (EMPOBJECT_KEY, EMPOBJECT_VERB, EMPOBJECT_NAME, 
    EMPEVENT_PRIORITY, EMPEVENT_TIME, EMPEVENT_STATUS)
	VALUES (new.PKEY,'CREATE','EMPLOYEE',1,CURRENT_TIMESTAMP,0); 
end //
delimiter ;  
use forremote;
show tables;
select * from logging_details;
use ibmaceuser;
select * from ibmaceuser.employees;	
INSERT INTO EMPLOYEES (PKEY, FIRSTNAME, LASTNAME, COUNTRY) VALUES (13, 'Ben', 'Thompson', 'US');
INSERT INTO EMPLOYEES (PKEY, FIRSTNAME, LASTNAME, COUNTRY) VALUES (14, 'Joe', 'Bloggs', 'UK');
INSERT INTO EMPLOYEES (PKEY, FIRSTNAME, LASTNAME, COUNTRY) VALUES (15, 'Jan', 'Modaal', 'IN');
INSERT INTO EMPLOYEES (PKEY, FIRSTNAME, LASTNAME, COUNTRY) VALUES (16, 'Otto', 'Normalverbraucher', 'EU');
INSERT INTO EMPLOYEES (PKEY, FIRSTNAME, LASTNAME, COUNTRY) VALUES (17, 'John', 'Doe', 'IN');
select * from mysql.user;
select * from employees where PKEY=11;
select * from EMPLOYEESDetails;   
insert into EMPLOYEES values(1,'sathish','...','IN');
insert into EMPLOYEES values(2,'Gokul','Sam','IN');
insert into EMPLOYEES values(9,'Vani','Rithik','IN');
SELECT EMPLOYEES.PKEY, EMPLOYEES.FIRSTNAME, EMPLOYEES.LASTNAME, EMPLOYEES.COUNTRY
FROM EMPLOYEES
WHERE EMPLOYEES.COUNTRY = ?
ORDER BY EMPLOYEES.PKEY ASC, 
EMPLOYEES.FIRSTNAME ASC, 
EMPLOYEES.LASTNAME ASC, EMPLOYEES.COUNTRY ASC;
SELECT EMPLOYEES.FIRSTNAME, EMPLOYEES.LASTNAME, EMPLOYEES.COUNTRY
FROM EMPLOYEES
WHERE EMPLOYEES.PKEY = 1
ORDER BY EMPLOYEES.FIRSTNAME ASC, EMPLOYEES.LASTNAME ASC, EMPLOYEES.COUNTRY ASC;
SELECT EMPLOYEES.FIRSTNAME, EMPLOYEES.LASTNAME, EMPLOYEES.COUNTRY, EMPLOYEES.PKEY
FROM EMPLOYEES
WHERE EMPLOYEES.PKEY = 2
ORDER BY EMPLOYEES.FIRSTNAME ASC, 
EMPLOYEES.LASTNAME ASC, EMPLOYEES.COUNTRY ASC,
EMPLOYEES.PKEY ASC;

create table employeesInfo (employeeNumber int primary key,firstName varchar(50),lastName varchar(50)
,salary int);
drop table employeesInfo;
insert into ibmaceuser.employeesInfo(employeeNumber,firstName,lastName,salary) value("000006","BRUCE","ADAMSON",25280);
select * from  ibmaceuser.employeesinfo;
Update employeesinfo Set firstName='Salmaan',lastName='Khan' WHERE employeeNumber=1;
use ibmaceuser;
select * from employeesinfo where employeeNumber=5;

update ibmaceuser.employeesinfo set firstName='Anurag',lastName='Shukla' where employeeNumber=1;
select * from employeesinfo where employeeNumber=3;
delete from ibmaceuser.employeesinfo where employeeNumber>=2;
create table customerInformation (customerID int auto_increment primary key,
firstName character(50),lastName character(50),Address varchar(100),mobileNo varchar(15));
insert into customerInformation(firstName,lastName,Address,mobileNo)
 values('Anurag','Shukla','Infront of Rangachari sari Shop,Ramnagar
,Coimbatore,Tamilnadu,India-64001','+91-9887878998');
select * from customerInformation;

show tables;
desc employeesinfo;
select * from employeesinfo where employeeNumber=4;
#delete from employeesinfo where exist(select * from employeesinfo where employeeNumber=2);
#delete from employeesinfo where employeeNumber in(select )
delete from employeesinfo where (Select employeeNumber from employeesinfo where employeeNumber=2);
delete from employeesinfo where employeeNumber in(select employeeNumber from employeesinfo 
where employeeNumber=2);
#delete from employeesinfo E1 where exist(select E2 from employeesinfo E2 where employeeNumber=2);
delete from employeesinfo where employeeNumber=(select employeeNumber from employeesinfo WHERE employeeNumber = 2);




-- for vijay Sir Work
create database forVijaySir;
use forvijaySir;
use ibmaceuser;
create table ccsidFormat (id int primary key,decription varchar(255));

insert into ccsidFormat values(1,'12"ؠWHEEL ASSEMBLY'),
(2,'TRUNNION BEARING MACHINING ص50MM')
,(3,'KEY, SQUARE, 1.25inױ.25inױ0in')
,(4,'SECTOR, س.2M E DISC'),
(5,'BUSHING W DR ض.00" BORE');
INSERT INTO ccsidFormat VALUES (6,N'12"ؠWHEEL ASSEMBLY');
select * from ccsidFormat;
select  '0x' + hex(decription) from ccsidFormat;
ALTER TABLE ccsidFormat MODIFY decription char(255) CHARACTER SET utf8;
ALTER TABLE ccsidFormat MODIFY decription varchar(255) CHARACTER SET utf16;
insert into ccsidFormat values(6,'hi');
insert into ccsidFormat values(8,'313222D8A0574845454C20415353454D424C59'),
								(9,'5452554E4E494F4E2042454152494E47204D414348494E494E4720D8B535304D4D')
,(10,'4B45592C205351554152452C20312E3235696ED7B12E3235696ED7B130696E');
select * from ccsidformat;


drop table ccsidFormat;
#-- Returns 63:
select ASCII('ش');
#-- Still returns 63:
select UNICODE('ش');
#-- Returns 1588. Note the N before the character, to indicate it's a unicode string
select UNICODE(N'ش');

SELECT  *
FROM ccsidFormat
WHERE decription like N'%[أ-ي]%'
;
SELECT Cast('12"ؠWHEEL ASSEMBLY' AS character);
SELECT * FROM ccsidFormat WHERE decription = Cast(decription AS character);
SELECT * FROM ibmaceuser.ccsidFormat As S  WHERE S.decription = CAST(S.decription AS character);
SELECT * 
from NLS_DATABASE_PARAMETERS
WHERE PARAMETER IN ('NLS_CHARACTERSET', 'NLS_NCHAR_CHARACTERSET');





use ibmaceuser;

create table cardDetails(id int auto_increment primary key,cardId varchar(255),accountId varchar(255),cardProductId varchar(255),
state varchar(255),type varchar(255),pan varchar(255),expiry varchar(50));
insert into cardDetails(cardId,accountId,cardProductId,state,type,pan,expiry) values("681848500545","1234567890","0987654321","INACTIVE","CREDIT","ABCDE1234F","0925"),
																	("681848500545","1234567890","0987654321","ACTIVE","DEBIT","ABCDE1234F","0824"),
                                                                    ("456818485005","1234567890","0987654321","ACTIVE","DEBIT","GHIJK67890L","1026"),
                                                                    ("456818485005","1234567890","0987654321","INACTIVE","CREDIT","GHIJK67890c","1025"),
                                                                    ("456818485005","1234567890","0987654321","ACTIVE","DEBIT","GHIJK67890q","1023"),
                                                                    ("456818485005","1234567890","0987654321","ACTIVE","DEBIT","GHIJK67890p","1021"),
                                                                    ("456818485005","1234567890","0987654321","ACTIVE","DEBIT","GHIJK67890k","1026");

insert into cardDetails(cardId,accountId,cardProductId,state,type,pan,expiry) values("681848500547","1234567890","0987654321","INACTIVE","CREDIT","ABCDE1234F","0925");
select * from carddetails where cardid=681848500547;
use ibmaceuser;



create table SOAP_TRANSACTION (TRANSACTIONNUMBER int primary key,TRANSACTIONDATE varchar(20),
							   STORENUMBER int,QUANTITY int ,TOTALAMOUNT decimal,
                               DELIVERYADDRESS varchar(255),TRANSACTIONSTATUS varchar(255));
use ibmaceuser;
create table cardAccountOnBoardService (accountOnBoardID varchar(255) primary key,BankCode decimal(3), MessageType decimal(4),TransactionDate decimal(8), 
TransactionTime decimal(6),TransactionReference varchar(20),SourceID varchar(9),ProductID decimal(3),WIID varchar(20),CIF decimal(7),FullName varchar(40), 
AddressLine1 varchar(40),AddressLine2 varchar(40), Country varchar(30),MobileNumber decimal(15), EmailID varchar(40),EmailIDCont varchar(20),  PassportID varchar(15),
CreditLimit decimal(17), BillingCycle decimal(2),MinimumPaymentPercentage decimal(3),BankAccountNumber varchar(30),PCTSegment varchar(3),FeeTable decimal(2),
PrimNameOnCard varchar(26),VIP varchar(1),CollectorID decimal(3),ResponseCode decimal(2),ErrorCode decimal(2),ErrorDescription varchar(30), 
ApplicationReferenceNumber decimal(13),PrimaryCardNumber varchar(16));  
                             
create table ibmaceuser.SOAP_FIXEDLENGTH_LoggingTable (BankCode int primary key,
				soapRequestPayload text,soapResponsePayload text,
                soapRequestDateTime varchar(50),soapResponseDateTime varchar(50),
                SOAPStatus boolean,
                fixedLengthRequestPayload text,fixedLengthResponsePayload text,
				fixedLengthRequestDateTime varchar(50),fixedLengthResponseDateTime varchar(50),
				fixedLengthStatus boolean,
                insertedBy varchar(255),
				brokerName varchar(100),
                serverName varchar(100),
				applicatioName varchar(255),
                flowName varchar(255));

use ibmaceuser;
select * from ibmaceuser.SOAP_FIXEDLENGTH_LoggingTable;
select * from cardAccountOnBoardService;
Select * from employeesinfo where employeeNumber= 5;
select * from employeesinfo;
drop table employeesinfo;
delete from employeesinfo;
#Update employeesinfo Set  firstName=?,lastName=?,salary=?  where employeeNumber=?
desc employeesinfo;
Select * from employeesinfoBackup;
delete from cardAccountOnBoardService;
delete from ibmaceuser.SOAP_FIXEDLENGTH_LoggingTable;
SELECT fixedLengthRequestPayload FROM SOAP_FIXEDLENGTH_LoggingTable WHERE BankCode =110;
SELECT ISNULL(NULLIF(fixedLengthRequestPayload,''))  FROM SOAP_FIXEDLENGTH_LoggingTable;
SELECT fixedLengthRequestPayload FROM SOAP_FIXEDLENGTH_LoggingTable
WHERE fixedLengthRequestPayload IS NOT NULL and BankCode = 110;

alter table SOAP_FIXEDLENGTH_LoggingTable rename column SOAPStatus to soapStatus;
SELECT * FROM INFORMATION_SCHEMA. tables; 
use ibmaceuser;
create table ExceptionLogging (id int primary key auto_increment,Flow_name varchar(50),MessageId varchar(50),Payload text,
Exception_Message text);
select * from ExceptionLogging;
select * from carddetails where cardId = 456818485005;
Select * from employeesinfo;

show tables;
describe  employeesinfo;







 

 

























