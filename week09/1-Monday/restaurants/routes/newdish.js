
//display the form to enter in new dishes
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models/database.js');

// display our form 

router.get('/newdish', (req, res)=>{

    db.query('SELECT * FROM categories')
    .then((results)=>{
        res.render('newdish', {
            categories: results
        });
    })
    .catch((err)=>{
        console.log(err);
    });

});

// place body-parser middleware above what's going to use it
router.use(bodyParser.urlencoded({extended: false}));

// grab information from the header of html file
router.post('/newdish', (req, res)=>{

    //name attributes on the form  newdish.ejs html NOT THE SQL
    let name = req.body.title; 
    let category = parseInt(req.body.category);
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let imgURL = req.body.imgURL;

    // take form data and insert a record inside our DB
    db.none(`INSERT INTO dishes VALUES (DEFAULT, $1, $2, $3, $4, $5)`,
    [name, category, description, price, imgURL])
    .then(()=>{
        res.redirect('/dishes');
    })
    .catch(error=>{
        res.send(error);
    })

});

module.exports = router;