
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

SELECT 
    name, count(articles.id)
FROM 
    author 
FULL OUTER JOIN 
    articles ON author.id = articles.author_id
GROUP BY
    author.id;

