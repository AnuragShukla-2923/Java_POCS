select * from account_master;
insert into account_master value(100001,'Himanshu','Saving',current_date(),'Lucknow','7509421836','Active',current_date(),10000);
select * from credit_table;
insert into credit_table value(200001,100001,10000,10000,current_timestamp());
insert into credit_table value(300001,100001,5000,5000,current_timestamp());
insert into fd_table value(400001,100001,1000,2,8,1160,current_timestamp(),current_date());


insert into loggingdetails value('10004',current_timestamp(),'FLOW1',current_timestamp(),'111','ACTIVE');
select * from account_master;
select * from debit_table;
delete  from loggingdetails;
select * from loggingdetails;
alter table loggingdetails modify MsgID varchar(255) not null;
alter table loggingdetails modify column MsgID int;
select * from loggingdetails;
alter table loggingdetails modify Intime timestamp not null;
alter table loggingdetails modify Source varchar(50);
select * from loggingdetails;
alter table  loggingdetails modify column MsgID int(10);
select * from loggingdetails;
create table ACCOUNT_MASTER (ACCOUNT_NO bigint(20),FD_AMOUNT float,TIME_DURATION INT(5),PERCENTAGE INT(5),
MATURITY_AMOUNT float,MATURITY_TIME date,
primary KEY(FD_ID));
create table ACCOUNT_MASTER(ACCOUNT_NO bigint(20),HOLDER_NAME varchar(50),ACCOUNT_TYPE varchar(20),DOB date,ADDRESS varchar(50),
MOBILE varchar(20),ACCOUNT_STATUS varchar(20),CREATION_DATE date,BALANCE float,
primary key(ACCOUNT_NO));
create table TRANSACTION_TABLE(TRANSACTION_ID bigint(20) auto_increment,ACCOUNT_NO bigint(20),
TRANSACTION_NAME varchar(30),CREDIT_AMOUNT float,DEBIT_AMOUNT float,BALANCE float,UPDATE_TIME datetime,
primary key(TRANSACTION_ID),foreign key(ACCOUNT_NO) references account_master(ACCOUNT_NO));
create table DEBIT_TABLE(DEBIT_ID bigint(20)auto_increment,ACCOUNT_NO bigint(20),DEBIT_AMOUNT float,BALANCE float,
UPDATE_TIME date,
primary key(DEBIT_ID),foreign key(ACCOUNT_NO)references account_master(ACCOUNT_NO));
select * from loggingdetails;

alter table loggingdetails drop primary key;
alter table loggingdetails modify column MsgID bigint(20);
alter table loggingdetails add primary key(MsgID);
select * from loggingdetails;
create table beneficiary_table(BENEFICIARY_ID bigint(20) auto_increment,ACCOUNT_NO bigint(20),HOLDER_NAME varchar(50),
BENEFICIARY_ACCOUNT_NO bigint(20),BENEFICIARY_NAME varchar(50),
primary key(BENEFICIARY_ID),foreign key(ACCOUNT_NO)references account_master(ACCOUNT_NO),
foreign key(BENEFICIARY_ACCOUNT_NO)references account_master(ACCOUNT_NO));
select * from account_master;
insert into account_master value(1000000,'Anurag Shukla','Saving',curdate(),'Lucknow','+91-7509421836','ACTIVE',
curdate(),10000.00); 


select * from transaction_table;
select * from beneficiary_table;
select * from db1.debit_table where ACCOUNT_NO=100000001 ORDER BY DEBIT_ID asc LIMIT 23;
select * from debit_table;
select * from credit_table;
Select * from db1.debit_table  where ACCOUNT_NO =100000001 limit 10;
select * from fd_table;
select * from account_master;
alter table debit_table modify column UPDATE_TIME timestamp;
select * from transaction_table where ACCOUNT_NO=100000024;
select * from debit_table where ACCOUNT_NO=100000025;
select * from account_master where ACCOUNT_NO=100000024 or ACCOUNT_NO=100000001;
select * from account_master;
select * from beneficiary_table;











