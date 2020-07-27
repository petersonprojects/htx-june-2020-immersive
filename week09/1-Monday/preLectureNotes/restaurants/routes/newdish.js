
// display the for to enter in new dishes

const express = require('express');
const router = express.Router();
const db = require('../models/database');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false})); //req.body  {name, desciption, price}
//display our form 

router.get('/newdish', (req, res) => {

    db.query('SELECT * FROM categories')
    .then(results =>{

        res.render('newdish', {
            categories: results
        })
    })
    .catch(error =>{
        res.send(error);
    })
    
})



// grab information from the header of html file ()
router.post('/newdish', (req, res) => {

    //req.body

    let name = req.body.title;  //name attributes on form 
    let category = parseInt(req.body.category); //name attributes on form 

    console.log(category);
    let fooddescription = req.body.description; //name attributes on form 

    console.log(fooddescription);
    let price = parseInt(req.body.price);
    let imageurl = req.body.imageURL;


    //take form data 
    // insert the record inside of our database

    db.none(`INSERT INTO Dishes VALUES (DEFAULT, $1, $2, $3, $4, $5)`, [name, category, fooddescription, price, imageurl])
    .then(()=>{
        res.redirect('/dishes')
    })
    .catch(error =>{
        res.send(error)
    })

    
})

module.exports = router;