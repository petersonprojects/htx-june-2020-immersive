

const express = require('express');
const router = express.Router();
const db = require('../models/database.js'); //database instance

// display all of our dishes
// go to db and make query

router.get('/dishes', (req, res)=>{


    db.query('SELECT * FROM dishes')
    .then((results)=>{

        // pass 'results' which is an 
        // (array of object in which each obj is a...
        // record in the database) to our dishes.EJS file

        res.render('dishes', {
            dishes: results
        });
    })
    .catch((error)=>{
        res.send(error)
    });


});

module.exports = router;