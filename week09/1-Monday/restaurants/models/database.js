
// 

const promise = require('bluebird'); //promise library

const initOptions = {
    promiseLib : promise
};

const config = {
    host: 'localhost',
    port: 5432,
    database: 'res2020',
    user: 'postgres'
};

const pgp = require('pg-promise')(initOptions);

let db = pgp(config);

module.exports = db;