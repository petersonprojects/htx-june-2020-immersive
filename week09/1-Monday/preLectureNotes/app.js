
// our promise library that we will pass to pg promise
const promise = require('bluebird');

const initOptions = {
    promiseLib: promise
}
// configure a connection
const config = {
    host: 'localhost',
    port: 5432,
    database: 'cohort2020v2',
    user: 'postgres'
}

const pgp = require('pg-promise')(initOptions);

const db = pgp(config); //databse object - gives us access to perform CRUD on db
// db object - methods
// console.log(db);

// db.none(`INSERT INTO students VALUES (DEFAULT, 'Dan', 'Gelok');`)
// .then(()=>{
//     console.log('Record was inserted successfully.');
// })

// db.one(`SELECT title FROM articles WHERE title = 'JS Prototypes'`)
// .then(results =>{
//     // results array of objects where each object is a record in your database
//     console.log(results);

//     // results.forEach((article)=>{
//     //     console.log(article.title);
//     // })
// })
// .catch((error)=>{
//     console.log(error);
// })

// result gives raw resultss
// db.result(`INSERT INTO articles VALUES (DEFAULT, 'PG Promises', 5);`)
// .then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// })


// INSERT INTO tableName (attr1, attr2) VALUES ($1, $2), [value$1, value$2]


// SQL Injection Sanitization method

// db.result(`INSERT INTO articles VALUES (DEFAULT, $1, $2)`, ['Sanitizing SQL', 5])
// .then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// })

pgp.end();