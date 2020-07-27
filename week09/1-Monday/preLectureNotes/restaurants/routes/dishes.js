const express = require('express');
const router = express.Router();
const db = require('../models/database');  //database instance


// display all of our dishes 
// go to db and make query 

router.get('/dishes', (req, res) => {


    db.query('SELECT * FROM Dishes')
    .then(results =>{

        //pass results (array of objects/records in db to ejs file)

        res.render('dishes', {
            dishes: results
        })
    })
    .catch(error =>{
        res.send(error)
    })
})


module.exports = router;