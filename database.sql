create table person (
    id serial primary key,
    name varchar(255) not null,
    lastname varchar(255)
    age integer
);

create table post (
    id serial primary key,
    title varchar(255),
    content varchar(255),
    user_id integer,
    foreign key (user_id) references person (id)
);