
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
//read feedback.json file into this route
const feedbackData = require('../data/feedback.json');  //this is an array

//write to file using native fs module of node 
const fs = require('fs');

//send the data back as a json object to our client 
// similar to an api call from the client 

router.get('/api', (req, res) => {

    res.json(feedbackData);

})

//this route will update feedback.json file 
//read the submitted data off the header file
// have to install body-parser to read data from header 
// body-parser put body object on req object
//req.body

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.post('/api', (req,res) => {
  
    console.log(req.body.name, req.body.title, req.body.message);

    feedbackData.unshift(req.body);

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err)=>{

        if(err){
            console.log(err);
        }
    })

    res.json(feedbackData);

})



module.exports = router;