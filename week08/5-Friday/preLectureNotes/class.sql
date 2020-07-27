
-- CREATE TABLE author (
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );

--reference author; one to many; articles is the many
-- CREATE TABLE articles (
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author(id)
-- );


-- INSERT INTO author VALUES
-- (DEFAULT, 'Jeremey'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'RJ'),
-- (DEFAULT, 'Woody'),
-- (DEFAULT, 'Dan'),
-- (DEFAULT, 'Daniel'),
-- (DEFAULT, 'Cainan'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Micah');


-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Prototypes', 1),
-- (DEFAULT, 'JS Promises', 1),
-- (DEFAULT, 'Express Routes', 1),
-- (DEFAULT, 'Styling with Bootstrap 4', 2),
-- (DEFAULT, 'API call with Google Maps', 2),
-- (DEFAULT, 'Python RPG Game', 5),
-- (DEFAULT, 'What is NumPy', 5),
-- (DEFAULT, 'OOP in Python vs JS', 4),
-- (DEFAULT, 'The Big O: Nested For Loops', 4),
-- (DEFAULT, 'Preparing for Technical Interviews', 9),
-- (DEFAULT, 'Gaming in JS using Phaser.io', 8),
-- (DEFAULT, 'Fizz Buzz - The Solution', 3),
-- (DEFAULT, 'Coding in Russian', 6);

-- INSERT INTO author VALUES (
--     DEFAULT, 'JJ Watt'
-- )

-- SELECT author.id AS author_id, article, name

-- SELECT * FROM articles;

-- SELECT 
--     title, name
-- FROM 
--     author 
-- INNER JOIN 
--     articles ON author.id = articles.author_id
-- WHERE author_id = 2;


-- SELECT 
--     author.id AS authorID , articles.id AS articlesID, title, name
-- FROM 
--     author 
-- FULL OUTER JOIN 
--     articles ON author.id = articles.author_id;

-- SELECT 
--     name, count(articles.id)
-- FROM 
--     author 
-- FULL OUTER JOIN 
--     articles ON author.id = articles.author_id
-- GROUP BY
--     author.id;


-- CREATE TABLE groups (

--     id SERIAl PRIMARY KEY,
--     name varchar(100)
-- );


-- INSERT INTO groups VALUES 
-- ( DEFAULT, 'Houston Javascript Meetup'),
-- ( DEFAULT, 'PyLadies'),
-- ( DEFAULT, 'Girl Develop It'),
-- ( DEFAULT, 'Houston Web Desigh Group');


-- CREATE TABLE member (
--     id SERIAL PRIMARY KEY,
--     memeber varchar(50)
-- );


-- INSERT INTO member VALUES 
-- ( DEFAULT, 'Michael'),
-- ( DEFAULT, 'Dan'),
-- ( DEFAULT, 'Woody'),
-- ( DEFAULT, 'Michah'),
-- ( DEFAULT, 'RJ'),
-- ( DEFAULT, 'Jeremy'),
-- ( DEFAULT, 'Chris'),
-- ( DEFAULT, 'Cainan');

-- CREATE TABLE membership (
--     id SERIAL PRIMARY KEY,
--     group_id integer REFERENCES groups(id),
--     member_id integer REFERENCES member(id)
-- );

-- INSERT INTO membership VALUES
-- (DEFAULT, 1, 1),
-- (DEFAULT, 1, 2),
-- (DEFAULT, 1, 6),
-- (DEFAULT, 1, 7),
-- (DEFAULT, 1, 8),
-- (DEFAULT, 2, 1),
-- (DEFAULT, 2, 2),
-- (DEFAULT, 3, 4),
-- (DEFAULT, 3, 1),
-- (DEFAULT, 4, 1),
-- (DEFAULT, 4, 3);


SELECT 
    member, name
FROM 
    groups 
INNER JOIN 
    membership ON groups.id = group_id 
INNER JOIN 
    member ON member.id  = member_id
WHERE member.id = 1 ;

