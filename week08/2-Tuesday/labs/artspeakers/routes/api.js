

const express = require('express');
const router = express.Router();

const fs = require('fs');

//use this to read data send from browser header file
const bodyParser = require('body-parser');

//returns an ARRAY of OBJ
const feedback = require('../data/feedback.json');

router.get('/api', (req,res)=>{
    //json stringify feedback array and sends it to /api
    res.json(feedback);


})

// this route will update the feedback.json file
// and read the submitted data off the header file
// body-parser puts body object on req object

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}))

router.post('/api',(req,res)=>{

    console.log(req.body);

    // let name = req.body.name;
    // let title = req.body.title;
    // let message = req.body.message;

    feedback.unshift(req.body);

    fs.writeFile('./data/feedback.json', JSON.stringify(feedback), 'utf8', (err)=>{
        if(err)
        {
            console.log(err)
        }
    });

    res.json(feedback);

});

router.delete('/api', (req,res) => {

    let ID = req.body.id;

    console.log(ID);

    feedback.slice(ID, ID+1);

    fs.writeFile('./data/feedback.json', JSON.stringify(feedback), 'utf8', (err)=>{
        if(err)
        {
            console.log(err)
        }
    });

    res.json(feedback);
});

module.exports = router;