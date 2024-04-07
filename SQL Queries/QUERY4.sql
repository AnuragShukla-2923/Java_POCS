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
select * from account_master where ACCOUNT_NO=100000001 or ACCOUNT_NO=100000024;
select * from account_master where HOLDER_NAME='Virendra Sehwag' or 'Suresh Raina';

select * from beneficiary_table;
select * from account_master where ACCOUNT_NO=100000024 or ACCOUNT_NO=100000001;
select * from account_master;
delete  from account_master where ACCOUNT_NO >=100000028;
select * from file_header;
alter table file_trailer rename column RecordCount to RecordCount1;
alter table file_trailer add column RecordType2 varchar(255),add  RecordCount2 int;
alter table file_trailer modify column RecordCount1 int;
create table po_details (POC varchar (50),ORMSStyleCode varchar(250),StyleDescription varchar(250),
ORMSPackCode varchar(250),ORMSSKUCode varchar(250),ColourDescription varchar(250),SizeDescription varchar(250),
QuantityOfPacks varchar(250),QuantityOfSKU varchar(250),QuantityPerPack varchar(250),CustomsFriendlyDescription varchar(250),
NumberOfPieces varchar(250),UnitCostPrice varchar(250));
create table po_header (POC varchar(250),DestinationCountry varchar(250),OrderType varchar(250),
SourceSystem varchar(250),ToPhysicalLocation varchar(250),FromPhysicalLocation varchar(250),PaymentTerms varchar(250),
PaymentMethod varchar(250),ShippingTerms varchar(250),CartonSet varchar(250),OrderDate varchar(250),
RequiredHandoverDate varchar(250),PortOfOriginCode varchar(250),SupplierID varchar(250),SupplierName varchar(250),
SupplierSiteID varchar(250),SupplierSiteOrganisationalUnit varchar(250),SupplierSiteBusinessUnit varchar(250),
SellingValue varchar(250),SellingValueCurrencyCode varchar(250),TransferPrice varchar(250),
TransferPriceCurrencyCode varchar(250),DepartmentNumber varchar(250),DepartmentDescription varchar(250),
CurrencyCode varchar(250),NewLineInd varchar(250));
use db1;
select * from account_master;


select * from credit_table;
select * from transaction_table;
insert into account_master (HOLDER_NAME,ACCOUNT_TYPE,DOB,ADDRESS,MOBILE,ACCOUNT_STATUS,CREATION_DATE,BALANCE)
values ('P.V.Singh','Current',curdate(),'Indore','000000000','Active',current_timestamp(),10000);
rollback;
commit;
create database POCS;
use pocs;
create table FLSA_IntelexContractSalesOrder_V(
`Contract ID` varchar(250),`Contract/Sales Order Number` varchar(250),`Name` varchar(50) not null,`Source` varchar(250) not null,
`Cost Centre Location.Location Code` varchar(250),`Contract Location` varchar(250),
`ERP Customer Number` varchar(250),`ERP Customer Name` varchar(250),`Industry` varchar(250) not null,`Status` varchar(50) not null,
`Project Manager.Number` varchar(250));
select * from flsa_intelexcontractsalesorder_v;

Insert into `FLSA_IntelexContractSalesOrder_V` 
(`Contract ID`,`Contract/Sales Order Number`,`Name`,`Source`,`Cost Centre Location.Location Code`,`Contract Location`,`ERP Customer Number`,`ERP Customer Name`,`Industry`,`Status`,`Project Manager.Number`) values 
            ('E10DEN-FLSmidth (Thailand) Co., Ltd.-201113-S','201113','Lane Xang Minerals Limited','62 - Epicor 10.1','Bangkok','Bangkok','E10DEN-FLS803-182','Lane Xang Minerals Limited','','Open',''),
            ('E10DEN-FLSmidth (Thailand) Co., Ltd.-201114-S','201114','Phu Bia Mining Limited','62 - Epicor 10.1','Bangkok','Bangkok','E10DEN-FLS803-177','Phu Bia Mining Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598087-S','598087','Pilbara Iron Company (Services) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-857','Pilbara Iron Company (Services) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598088-S','598088','Pilbara Iron Company (Services) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-857','Pilbara Iron Company (Services) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598089-S','598089','Pilbara Iron Company (Services) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-857','Pilbara Iron Company (Services) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598090-S','598090','Hunter Valley Energy Coal Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-564','Hunter Valley Energy Coal Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598091-S','598091','Hunter Valley Energy Coal Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-564','Hunter Valley Energy Coal Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598092-S','598092','Hunter Valley Energy Coal Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-564','Hunter Valley Energy Coal Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598093-S','598093','BM Alliance Coal Operations Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-465','BM Alliance Coal Operations Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598094-S','598094','BM Alliance Coal Operations Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-465','BM Alliance Coal Operations Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598095-S','598095','RTA Weipa Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-831','RTA Weipa Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598096-S','598096','BHP Billiton Iron Ore Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-705','BHP Billiton Iron Ore Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598097-S','598097','Northern Star (Kanowna) Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-762','Northern Star (Kanowna) Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598098-S','598098','RTA Weipa Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-831','RTA Weipa Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598099-S','598099','Sedgman Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-883','Sedgman Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598100-S','598100','Pilbara Iron Company (Services) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-857','Pilbara Iron Company (Services) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598101-S','598101','Oaky Creek Coal Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-840','Oaky Creek Coal Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598102-S','598102','Fortescue Metals Group Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-642','Fortescue Metals Group Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598103-S','598103','BHP Billiton Iron Ore Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-705','BHP Billiton Iron Ore Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598104-S','598104','Alcoa of Australia Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-426','Alcoa of Australia Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598105-S','598105','Fosterville Gold Mine Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-391','Fosterville Gold Mine Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598106-S','598106','Fortescue Metals Group Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-642','Fortescue Metals Group Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598107-S','598107','Whitehaven Coal Mining Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-984','Whitehaven Coal Mining Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598108-S','598108','Fortescue Metals Group Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-642','Fortescue Metals Group Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598109-S','598109','FLSmidth S.A.C.','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-182','FLSmidth S.A.C.','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598110-S','598110','South32 Worsley Alumina Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-5','South32 Worsley Alumina Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598111-S','598111','Roy Hill Iron Ore Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-579','Roy Hill Iron Ore Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598112-S','598112','BHP Billiton Olympic Dam Corporation Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-711','BHP Billiton Olympic Dam Corporation Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598113-S','598113','Alcoa of Australia Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-426','Alcoa of Australia Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598114-S','598114','Evolution Mining (Cowal) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-330','Evolution Mining (Cowal) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598115-S','598115','Newcrest Mining Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-827','Newcrest Mining Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598116-S','598116','Roy Hill Iron Ore Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-579','Roy Hill Iron Ore Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598117-S','598117','Roy Hill Iron Ore Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-579','Roy Hill Iron Ore Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598118-S','598118','FQM Australia Nickel Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-386','FQM Australia Nickel Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598119-S','598119','Roy Hill Iron Ore Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-579','Roy Hill Iron Ore Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598120-S','598120','Lihir Gold Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-6','Lihir Gold Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598121-S','598121','Middlemount Coal Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-707','Middlemount Coal Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598122-S','598122','Newmont Boddington Gold Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-722','Newmont Boddington Gold Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598123-S','598123','OneSteel Manufacturing Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-839','OneSteel Manufacturing Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598124-S','598124','Terra Mining Services Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-2081','Terra Mining Services Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598125-S','598125','Anglo Coal (Capcoal Management) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-438','Anglo Coal (Capcoal Management) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598126-S','598126','Chauvel Industrial Services','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-90','Chauvel Industrial Services','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598127-S','598127','Anglo Coal (Capcoal Management) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-438','Anglo Coal (Capcoal Management) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598128-S','598128','FLSmidth S.A.C.','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-182','FLSmidth S.A.C.','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598129-S','598129','Anglo Coal (Capcoal Management) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-438','Anglo Coal (Capcoal Management) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598130-S','598130','Coronado Curragh Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-589','Coronado Curragh Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598131-S','598131','Anglo Coal (Capcoal Management) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-438','Anglo Coal (Capcoal Management) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598132-S','598132','Lihir Gold Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-6','Lihir Gold Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598133-S','598133','Anglo Coal (Capcoal Management) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-438','Anglo Coal (Capcoal Management) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598134-S','598134','FLSmidth A/S','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-164','FLSmidth A/S','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598135-S','598135','Barrick Niugini Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-7','Barrick Niugini Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598136-S','598136','Anglo Coal (Capcoal Management) Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-438','Anglo Coal (Capcoal Management) Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598137-S','598137','HV Operations Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-548','HV Operations Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598138-S','598138','Talison Lithium Limited','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-926','Talison Lithium Limited','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598139-S','598139','Trelleborg Engineered Products Australia Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-953','Trelleborg Engineered Products Australia Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598140-S','598140','Sedgman Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-883','Sedgman Pty Ltd','','Open',''),
			('E10DEN-FLSmidth Pty Ltd-598141-S','598141','Foxleigh Management Pty Ltd','62 - Epicor 10.1','Pinkenba','Pinkenba','E10DEN-FLS309-519','Foxleigh Management Pty Ltd','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206391-S','206391','PT Freeport Indonesia','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-40','PT Freeport Indonesia','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206392-S','206392','PT Indo Muro Kencana','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-63','PT Indo Muro Kencana','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206393-S','206393','PT Freeport Indonesia','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-40','PT Freeport Indonesia','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206394-S','206394','PT Freeport Indonesia','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-40','PT Freeport Indonesia','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206395-S','206395','PT Agincourt Resources','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-12','PT Agincourt Resources','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206396-S','206396','PT Freeport Indonesia','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-40','PT Freeport Indonesia','','Open',''),
			('E10DEN-PT FLSmidth Indonesia-206397-S','206397','PT Amman Mineral Nusa Tenggara','62 - Epicor 10.1','Jakarta','Jakarta','E10DEN-FLS440-15','PT Amman Mineral Nusa Tenggara','','Open','');
