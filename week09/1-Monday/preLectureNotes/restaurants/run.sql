
CREATE TABLE categories 
(
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(50)
);

INSERT INTO categories VALUES 
(DEFAULT, 'bbq'),
(DEFAULT, 'Mexican'),
(DEFAULT, 'Tapas'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'Ethiopian'),
(DEFAULT, 'Thai'),
(DEFAULT, 'Vietnamese'),
(DEFAULT, 'German');

CREATE TABLE Dishes 
(
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price integer,
    imageURL varchar(300)
);