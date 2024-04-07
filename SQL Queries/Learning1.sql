create database `boot-course`;
use `boot-course`;
create table student (id int(9) primary key,name varchar(100) not null,city varchar(100));
show tables;
desc student;


alter table student add column mobile varchar(15); 
alter table student add column (fatherName varchar(50),motherName varchar(50),address varchar(50));
alter table student rename column mobile to contactNo;
alter table student modify column contactNo varchar(20) not null;
rename table student to studentInformation;
rename table studentInformation to student;
alter table student drop column address;


-- insert into table
insert into student (id,name,city,contactNo,motherName,fatherName) 
values(2,'Annu Singh','Coimbatore','+91-7676787678','bitti Singh','Ajju Singh'),
(3,'Annu Singh','Coimbatore','+91-7676787678','bitti Singh','Ajju Singh'),
(4,'Annu Singh','Coimbatore','+91-7676787678','bitti Singh','Ajju Singh'),
(5,'Annu Singh','Coimbatore','+91-7676787678','bitti Singh','Ajju Singh');


insert into student (id,name,city) 
values(2,'Annu Singh','Coimbatore'),
(3,'Annu Singh','Coimbatore'),
(4,'Annu Singh','Coimbatore'),
(5,'Annu Singh','Coimbatore');
insert into student (id,name,city) values(1,'Gautham Gambhir','Delhi');
select * from student;
describe student;
alter table student modify column id varchar(10);
alter table student modify column id int;
alter table student drop column fatherName,drop motherName;
alter table student drop column contactNo;


--- update Query---
update student set name ='Sachin Tendulkar';
update student set name ='Mahendra Singh Dhoni' where id = 1;
update student set name ='Suresh Raina',city='Lucknow' where id = 4;
update student set id=10001 where id=1;
select * from student;

#---delete Query---
delete from student where id =10001;
delete from student where name='Sachin Tendulkar';



#--alias--
select name as student_Name,city as Student_City from student;
select name as "student Name",city as 'Student City' from student;
select name as `Student Name`,city as `Student City` from student;
select * from student where city='Delhi' and  name ='VIRAT Kohli';
select * from student where city='Delhi' or city='Mumbai';
select * from student where city='Delhi' or name='sachin tendulkar';
select * from student where name like 'sachin%';
select * from student where name like '%kohli';
select * from student where city in ('delhi');
select * from student where city in ('delhi','mumbai');
select * from student where name in ('virat kohli') or city='mumbai';
select * from student where name in ('virat kohli') or city like '%bai';
select * from student where city!='Delhi';
select * from student where not city='Delhi';
select count(*) from student where city!='Delhi';
select count(*) from student where not city='Delhi';
select * from student;

#--Order by clause
select * from student  order by id asc;
select * from student  order by id desc;
select * from student  order by city desc;
select * from student  order by city asc;
insert into student value(6,'Virat Kolhi','Allahabad');
select * from student order by name  desc,city asc;
select * from student limit 3;
select * from student order by name  desc,city asc limit 3;

# offset :will left the top rows then given all
select * from student limit 3 offset 2;
select * from student where name like 'virat%' limit 1 offset 1;
select * from student;


#--aggregate functions---
alter table `boot-course`.student add column fees int;
use `boot-course`;
update student set fees = 7000 where id=7;
select count(id) 'Student Count' from student;
select count(id) 'Student Count' from student where city='Delhi';
select sum(fees)  'Total Fees Collection' from student;
select sum(fees) from student where city='Delhi';
select avg(fees) from student;
select avg(fees) from student where city='Delhi';



#--- Mysql Advanced Part 2
   # String Functions
select * from student;   
Select length(name) from student where id=2; 
select length("My Name IS ANurag Shukl");  
select name "Student Name",length(name) from student;
select name "Student Name",length(name) from student where id=3;
select concat('My name is ',name,'.I am a former cricketer') from student;
select concat(id,' ',name,' ',city,' ',fees) 'All Information' from student;
select concat(name,'---->',city)'name & city' from student;
select ucase(name)from student;
select lcase(name) from student;
select concat(ucase(name),'   ',lcase(city)) from student;
select substr(name,1,5) from student;
select substring('My name is Anurag Shukla',1,15);
select trim('       Hi        ');
select reverse("My name is khan");
select strcmp('a','b'); # return -1 if b is greater than a,returns 1 if a is greater,returns 0 if equal
select strcmp('a','a');
select strcmp('ac','ad');
select strcmp('bdfdd','advfgf');


#-- Other Important Functions---
select curdate();
select curtime();
select now();
select current_user();
select year(curdate());
select month(curdate());
select day(curdate());
select current_timestamp();
select if(4<5,'yes','no');
select if (4>5,'yes','no');
select name,fees,if(fees>2000,'Due','No Due') from student;
select ifnull(null,'anurag Shukla');   # return 2nd value if first is null
select ifnull('adsd','anurag Shukla'); # return 2nd value if first is null
select database();  #-- returns current database
select version();    #--returns db versions
select user();  #--currnet users
select database() 'DB Name',version() 'Version', user() 'UserName';
select * from student where id in (1,2,4,3);
select * from student where id >1 or id <4;
select * from student where id >1 and id <4;
select * from student where id =1 or id =2 or id=4;
select * from student where city like '%bai' or name like '%rat%';
select * from student where name like 'virat%';
select * from student where city like '_elhi'; # _ is holds 1 characters
select * from student where city like '___bai';
select * from student where city like '___b__';
select * from student where city like '_u%';
select * from student where name like '%singh%';
select * from student;


#assignments:maths functions like sin,cos,tan etc.


#--- Keys
use `boot-course`;
create table laptops(LapiId int primary key,model varchar(100) not null,price int,id int,
foreign key(id)references student(id));

create table laptops(LapiId int primary key,model varchar(100) not null,price int);
alter table laptops add column(id int),add foreign key(id)references Student(id); 

create table laptops(LapiId int primary key,model varchar(100) not null,price int,id int);
alter table laptops add foreign key(id) references student(id); 
desc student;
drop table laptops;
desc laptops;
show tables;
use `boot-course`;
insert into laptops values(7,'Dell-4333',6000,21);
create table qualification (qid int primary key,degreeName varchar(50),passyear varchar(4)not null,
about varchar(1000),sid int,foreign key(sid) references student(id));
select * from student;
select * from laptops;
select * from qualification;
insert into qualification values(3,'M.E.','2024','A.I',7);

# how to drop foreign key
alter table qualification drop foreign key sid;


#JOINS
# Simple/normal Join Also Callled EquiJoin
select student.name,student.city,laptops.model,laptops.price,qualification.degreeName,qualification.passyear,
qualification.about from student, laptops,qualification where student.id=laptops.id and 
student.id=qualification.sid;

# using Alias
select S.name,S.city,L.model,L.price,Q.degreeName,Q.passyear,Q.about from student S, laptops L, qualification Q 
where S.id=L.id and S.id=Q.sid;

#Inner Join: inner & equi have same result always
#select s.name,s.city,l.model,l.price,q.degreeName,q.about 
#from student s,qualification q Inner Join laptops l on s.id=l.id and s.id=q.sid;

select s.name,s.city,l.model,l.price from student s Inner Join laptops l on s.id=l.id;


#Creating a new User and grant permission:explained using GUI
# Mysql Stored Procedure
use `boot-course`;
# delimiter $: it is a symbol which help to tell mysql engine that query finished here
Delimiter //
show tables //
select * from student //
Delimiter ;

# create procedure
Delimiter //
create procedure createuser()
	begin 
    create table if not exists `users` (
    user_id int auto_increment primary key,
    firstName varchar(255),
    lastName varchar(255),
    city varchar(255)) ;
    
    insert into users(firstName,lastName,city) values('Anurag','Shukla','Coimbatore');
    insert into users(firstName,lastName,city) values('Sachin','Singh','Bengaluru');
    select * from users;
    end //
    
call createuser() //
drop procedure createuser //
desc users //
show tables //
select * from users //
Delimiter ;


# Variables
Delimiter //
create procedure countuserItems() 
begin
declare count int default 0;
select count(*) into count from users;
select count;
end //

call countuserItems() //
    insert into users(firstName,lastName,city) values('Anurag','Shukla','Coimbatore') //
    insert into users(firstName,lastName,city) values('Sachin','Singh','Bengaluru') ;


# Parametes: IN,OUT,INOUT(IN will accept value,OUT will give value)
# mean inside procedure will get value from IN and assign value to OUT but from outside procedure(client) will get value from OUT and give to IN
#Task:
Demiliter //
create procedure SelectByLastName(IN l_name varchar(255))
begin
select * from users where lastName=l_name;
end //

call selectBylastname('Shukla') //
call selectBylastname('Singh');
# New Procedure CountByLast
Delimiter //
create procedure countByLast(IN l_name varchar(255),OUT Count_l int)
begin 
select count(*) into count_l from users where lastName=l_name;
end //
call countByLast('Shukla',@countLat) //
select @countLat //
# drop procedure
drop procedure countuserItems //
# Listing Procedure
show procedure status //
show procedure status where db='boot-course' //

#views: each time no need to write cmd to see data,we can run view
Delimiter ;
use `boot-course`;
select * from student;
select * from qualification;
select * from laptops;
select s.name,s.city,q.degreeName,q.about from student s 
Inner join qualification q  on s.id=q.qid; 
#Inner Join on 3 tables:
select s.name,s.city,q.degreeName,q.about,l.model,l.price from student s 
Inner join qualification q on s.id=q.qid
Inner join laptops l on s.id=l.id;

#Creating a view for inner join on 2 tables
create view `student-qualification`
as select s.name,s.city,q.degreeName,q.about from student s 
Inner join qualification q  on s.id=q.qid;

#Alter a view for inner join on 3 tables
alter view `student-qualification`
as
select s.name,s.city,l.model,l.price,q.degreeName,q.about from student s 
Inner Join laptops l on s.id=l.id
Inner Join qualification q on s.id=q.qid;

# alter can be done in below way also:
create or replace view `student-qualification`
as
select s.name,s.city,l.model,l.price,q.degreeName,q.about,q.passyear from student s 
Inner Join laptops l on s.id=l.id
Inner Join qualification q on s.id=q.qid;

#Selecting from view
select * from `student-qualification`;
select * from studentInfo;

#How to rename a view
rename table `student-qualification` to studentInfo;

#Delete View
drop view studentInfo;

/*Index: used for fast searching so give best result when having lacs of records
#Guidelines for Index:
#1: Automatically created index for primary & Unique key so not requried for them
#2: Index columns that u frequently used to retrieve data.
#3: Index columns that are used for join to improve join performance
#4: Avoid column that contains too many null values.
#5: Small tables do not requires indexes. 
*/


select * from states;
use `boot-course`;
show tables;
select * from  cities; 
select * from student;
select * from states;
select * from cities where id=2;

# create Index on student table
create Index  stName on student(name);
create Index cityName on cities(name);
/*create Index indexName on tables(col1,col2,...);   */
show index from cities;   # to show no of index in a table
drop index cityName on cities;  # to drop a index

# Regular Expressions:
select * from student;
select * from student where name regexp 'ra';
select * from student where name regexp 'ma';  # will get all wher ma finds
select * from student where name regexp '^an';   # starting with an
select * from student where name regexp '^mahe';   # starting with mahe
select * from student where name regexp '^sa';   # starting with sa
select * from student where name regexp 'la$';   # all strings ending with la
select * from student where name regexp 'li$';   # all strings ending with li

#Multiple pattern in 1 query
select * from student where name regexp 'la|hli|kar';   # all strings where finds la/hli/kar
select * from student where name regexp '^anu|hli|kar$';   # all strings where finds la/hli/kar
select * from student where name regexp '[ais]';   # it will check for all the letters separately in [],a,i,s separates
select * from student where name regexp '[sh]';
select * from student where name regexp '[skoma]h';  # it will make combos like(sh,kh,oh)like that 
select * from student where name regexp '^[sam]';  # it will make combos starting with(s,a,m)like that 
select * from student where name regexp '^[sam]a';  # it will make combos starting with(sa,aa,ma)like that 
select * from student where name regexp 'r[a]';  # it will make combos lie(ra)like that 
select * from student where name regexp '[a-n]r';  # it will make combos range from a-n with r like(ar,br,cr,dr....)

#Commit & Rollback
 
 
#Transaction 
use `boot-course`;
select * from student;
desc student;
/*start transaction;
select @highest:=max(id) from student;
insert into student set id=@highest+1, name='Narendra Modi', city='Ahemadabad', fees =10000;
commit;

# For rollback
start transaction;
select @highest:=max(id) from student;
insert into student set id=@highest+1, name='Narendra Modi', city='Ahemadabad', fees =10000;
rollback;
*/ #run the comment code in a separate file

#Sequences:



























 
