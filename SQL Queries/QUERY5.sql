use iib;
select * from file_header;
select * from file_trailer;
select * from po_header;
select * from po_details;
alter table file_header modify column FileDate varchar(50),modify FileTime varchar(50);
alter table file_trailer modify column RecordCount1 varchar(250),modify RecordCount2 varchar(250);
select * from flsa_intelexcontractsalesorder_v;
describe flsa_intelexcontractsalesorder_v;
Select * from pocs.flsa_intelexcontractsalesorder_v;
Select * from pocs.flsa_intelexcontractsalesorder_v Where `Contract/Sales Order Number`=201113;
SELECT COUNT(column_name) as number FROM information. flsa_intelexcontractsalesorder_v;
SELECT count(*) as No_of_Column FROM information_schema.columns WHERE table_name ='flsa_intelexcontractsalesorder_v';
describe account_master;
select * from account_master;
use pocs;
describe flsa_intelexcontractsalesorder_v;
SELECT * FROM flsa_intelexcontractsalesorder_v WHERE column_name IS NULL;
Select * from flsa_intelexcontractsalesorder_v  limit 2;
SELECT IFNULL(c) as anyVariableName from flsa_intelexcontractsalesorder_v;
select ifnull('Contract ID','Contract/Sales Order Number','Name','Source','Cost Centre Location.Location Code',
'Contract Location','ERP Customer Number','ERP Customer Name','Industry','Status','Project Manager.Number') 
as NotNULLValue from flsa_intelexcontractsalesorder_v;





