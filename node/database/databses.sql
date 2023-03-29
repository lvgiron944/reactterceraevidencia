create table blogs (
    id int auto_increment primary key,
    title varchar(200) ,
    content varchar(500),
    createdAt date,
    updatedAt date
);

insert into blogs (id, title, content) values 
(1 , 'titulo 1', 'contenido de mi primer post'),
(2 , 'titulo 2', 'contenido de mi segundo post'),
(3 , 'titulo 3', 'contenido de mi tercer post');