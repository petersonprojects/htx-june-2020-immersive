
const promise = require('bluebird'); //our promise library that we'll pass to pg-promise

let initOptions = {
    promiseLib: promise
}
// configure a connection

const config = {
    host: 'localhost',
    port: 5432,
    database: 'cohort2020v1',
    user: 'postgres'
}

//const db = pgp("postgres://username:password@host:port/database")

const pgp = require('pg-promise')(initOptions);
const db = pgp(config);  //database object - gives us access to perform CRUD operations on datbase

//db object - methods

// console.log(db);

// db.one(`SELECT * FROM student WHERE name='Wooday'`)
// .then(results =>{
//     //results array of objects where each object is a record in your database
//     console.log(results);

   
// })
// .catch(error =>{
//     console.log(error);
// })


// db.none(`INSERT INTO students VALUES (DEFAULT, 'Dan', 'Gelok');`)
// .then(()=>{

//     console.log('record was inserted');
// })

//result gives raw results
// db.result(`INSERT INTO student VALUES (DEFAULT, 'John', 'john@me.com', 'johnk', 10, 'M', '2020-07-23', TRUE, 2)`)
// .then(response => {
//         console.log(response);
// })
// .catch(error =>{
//     console.log(error);
// })
// INSERT INTO tableName (attr1, attr2) VALUES ($1, $2 ), [val1, valu2]

db.result(`INSERT INTO student VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)`, ['John', 'john@me.com', 'johnk2', 10, 'M', '2020-07-23', 'TRUE', 2])
.then(response => {
        console.log(response);
})
.catch(error =>{
    console.log(error);
})


pgp.end()