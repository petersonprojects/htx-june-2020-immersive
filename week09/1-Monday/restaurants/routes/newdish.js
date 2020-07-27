
//display the form to enter in new dishes
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('../models/database.js');

// display our form 

router.get('/newdish', (req, res)=>{
    res.render('newdish');
});

// place body-parser middleware above what's going to use it
router.use(bodyParser.urlencoded({extended: false}));

// grab information from the header of html file ()
router.post('/newdish', (req, res)=>{

    // take form data and insert a record inside our DB

    res.send('post')
});

module.exports = router;