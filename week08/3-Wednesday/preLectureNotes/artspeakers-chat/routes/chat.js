const express = require('express');
const router = express.Router();

const data = require('../data/data.json');


router.get('/chat', (req, res) => {

    res.render('chat', {

        maxList: data.speakers,
        pageTitle: "Chat",
        pageID: "chat",
        artwork: []
    })
})

module.exports = router;