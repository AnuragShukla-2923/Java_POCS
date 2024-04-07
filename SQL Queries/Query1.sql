use db1;
select * from loggingdetails;
alter table loggingdetails add primary key(MsgID);
alter table loggingdetails modify column Intime timestamp,modify OutTime timestamp;
select * from account_master;
alter table account_master modify Account_NO int NOT NULL AUTO_INCREMENT PRIMARY KEY,add index(Account_NO);
alter table account_master AUTO_INCREMENT=1000000001;
alter table credit_table modify Credit_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,add index(Credit_ID);
alter table credit_table AUTO_INCREMENT=1000000001;
alter table debit_table modify Debit_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,add index(Debit_ID);
alter table debit_table AUTO_INCREMENT=1000000001;
alter table fd_table modify Transaction_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,add index(Transaction_ID);
alter table fd_table AUTO_INCREMENT=1000000001;
delete from fd_table;
alter table credit_table add foreign key(Account_NO) references account_master(Account_NO);
alter table credit_table modify column Account_NO int(20);
alter table loggingdetails add column Source varchar(50) after Intime;


