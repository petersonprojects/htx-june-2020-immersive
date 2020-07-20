

const express = require('express');
const router = express.Router();

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{

    //code
    res.render('index',{
        pageTitle: "Art speakers"
    })
});


module.exports = router;