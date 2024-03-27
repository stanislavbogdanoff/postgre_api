alter table person add salary integer;

select * from person;

alter table person rename column salary to income;

alter table person drop column income;

select name as firstname, lastname as surname from person;


select p.title, p.content, u.name
from person u
full join post p on p.user_id = u.user_id;