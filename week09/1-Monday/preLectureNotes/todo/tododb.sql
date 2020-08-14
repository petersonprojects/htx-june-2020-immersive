--todo2020 db
CREATE TABLE todos(
    id SERIAL NOT NULL PRIMARY KEY,
    description varchar(1000) NOT NULL ,
    isComplete boolean DEFAULT FALSE

);

INSERT INTO todos VALUES 
(DEFAULT,'testing', FALSE),
(DEFAULT,'another test', TRUE);
