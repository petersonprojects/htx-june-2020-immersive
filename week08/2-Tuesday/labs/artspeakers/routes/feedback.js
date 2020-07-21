


const express = require('express')
const router = express.Router();
const data = require('../data/data.json')

//this file displays feedback form from feedback.ejs
router.get('/feedback', (req,res)=>{

    //make sure partials are gettting data needed to render
    // maxlist: (head) - array of speakers, data.speakers
    // pageTitle: (head)

    res.render('feedback.ejs',{
        maxList: data.speakers,
        pageTitle: "Feedback Form",
        pageID: "Feedback",
        artwork: []
    })
})

module.exports = router;
