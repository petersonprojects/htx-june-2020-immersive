
-- INSERT INTO student VALUES 
--    ( DEFAULT, 'Veronica', 'vero@me.com', 'vlino2015',  5, 'F', '2020-07-23', FALSE),
--    ( DEFAULT, 'Dan', 'vero1@me.com', 'vlino2016',  5, 'M', '2020-07-23', FALSE),
--    ( DEFAULT, 'Wooday', 'vero2@me.com', 'vlino2017',  5, 'M', '2020-07-23', FALSE),
--    ( DEFAULT, 'Jeremy', 'vero3@me.com', 'vlino2018',  5, 'M', '2020-07-23', FALSE),
--    ( DEFAULT, 'Micah', 'vero4@me.com', 'vlino2019',  5, 'M', '2020-07-23', FALSE),
--    ( DEFAULT, 'RJ', 'vero4@me.com', 'vlino2020',  5, 'M', '2020-07-23', FALSE);


-- INSERT INTO student (github_username, cohort_start_date) VALUES (
--     'vlino', '2020-07-23'
-- )

-- name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean


-- INSERT INTO school VALUES (
--     DEFAULT,
--     'DigitalCrafts'   
-- );

-- inserting multiple records at a time

-- INSERT INTO school VALUES 
-- (DEFAULT,'DigitalCrafts' ),
-- (DEFAULT,'Flat Iron' ),
-- (DEFAULT,'Iron Yard' ),
-- (DEFAULT,'General Assembly' ),
-- (DEFAULT,'Codesmith' ),
-- (DEFAULT,'Code Dojo' ),
-- (DEFAULT,'Labmda' );


-- DELETE FROM school WHERE id > 4;

-- INSERT INTO school VALUES (
--     DEFAULT, 'Lamda'
-- )

-- UPDATE school SET shool_name = 'Flat Iron';


-- UPDATE student SET website = 'me@me.com', points = 1;


-- SELECT name  FROM student WHERE gender = 'M';


-- SELECT 
--     name, points, gender  
-- FROM 
--     student 
-- WHERE 
--     points >=  3 and gender = 'F';


-- SELECT 
--     name, website  
-- FROM 
--     student 
-- WHERE 
--     website ilike '%@me.com';


-- SELECT 
--     name, gender
-- FROM 
--     student 
-- WHERE 
--     gender is NULL;


-- SELECT name MAX(points) FROM student GROUP BY name;


SELECT name, points FROM student ORDER BY points DESC OFFSET 2;