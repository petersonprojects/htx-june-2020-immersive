
const express = require('express');
const router = express.Router();
const data = require('../data/data.json');

//this file displays feedback form form feedback.ejs

router.get('/feedback', (req, res) => {

    //make sure partials are getting data needed to render
    //maxList: (header)  - array of speakers, data.speakers
    // pageTitle (head)
    // pageID
    // artwork

    res.render('feedback.ejs', {
        maxList: data.speakers,
        pageTitle: "Feedback Form",
        pageID: "feedback",
        artwork: []
    })
})


module.exports = router;