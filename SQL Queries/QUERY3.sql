create table ACCOUNT_MASTER(ACCOUNT_NO bigint(20) auto_increment,HOLDER_NAME varchar(50),ACCOUNT_TYPE varchar(20),DOB date,ADDRESS varchar(50),
MOBILE varchar(20),ACCOUNT_STATUS varchar(20),CREATION_DATE date,BALANCE float,
primary key(ACCOUNT_NO));

create table FD_TABLE (FD_ID  bigint(20) auto_increment,ACCOUNT_NO bigint(20),FD_AMOUNT float,TIME_DURATION INT(5),PERCENTAGE INT(5),
MATURITY_AMOUNT float,MATURITY_TIME date,
primary KEY(FD_ID),foreign key(ACCOUNT_NO)references account_master(ACCOUNT_NO));



create table TRANSACTION_TABLE(TRANSACTION_ID bigint(20) auto_increment,ACCOUNT_NO bigint(20),
TRANSACTION_NAME varchar(30),CREDIT_AMOUNT float,DEBIT_AMOUNT float,BALANCE float,UPDATE_TIME datetime,
primary key(TRANSACTION_ID),foreign key(ACCOUNT_NO) references account_master(ACCOUNT_NO));

create table DEBIT_TABLE(DEBIT_ID bigint(20)auto_increment,ACCOUNT_NO bigint(20),DEBIT_AMOUNT float,BALANCE float,
UPDATE_TIME date,
primary key(DEBIT_ID),foreign key(ACCOUNT_NO)references account_master(ACCOUNT_NO));

create table CREDIT_TABLE(CREDIT_ID bigint(20)auto_increment,ACCOUNT_NO bigint(20),CREDIT_AMOUNT float,BALANCE float,
UPDATE_TIME date,
primary key(CREDIT_ID),foreign key(ACCOUNT_NO)references account_master(ACCOUNT_NO));

create table BENEFICIARY_TABLE(BENEFICIARY_ID bigint(20) auto_increment,ACCOUNT_NO bigint(20),HOLDER_NAME varchar(50),
BENEFICIARY_ACCOUNT_NO bigint(20),BENEFICIARY_NAME varchar(50),
primary key(BENEFICIARY_ID),foreign key(ACCOUNT_NO)references account_master(ACCOUNT_NO),
foreign key(BENEFICIARY_ACCOUNT_NO)references account_master(ACCOUNT_NO));

drop table account_master;
insert into account_master value(100000001,'ANURAG SHUKLA','SAVING',curdate(),'LUCKNOW','+91-7509421836','ACTIVE',curdate(),
100000);
select * from account_master;
select * from fd_table;
select * from  credit_table;
select * from account_master ORDER BY ACCOUNT_NO DESC Limit 1;
alter table fd_table add column FD_TIME date after PERCENTAGE;
select * from fd_table ;
select * from account_master;
select * from  debit_table;
Select * from db1.debit_table ORDER BY ACCOUNT_NO DESC LIMIT 10;
Select * from db1.debit_table ORDER BY ACCOUNT_NO asc whe LIMIT 10;
Select * from db1.debit_table  where ACCOUNT_NO =100000001 limit 10;
