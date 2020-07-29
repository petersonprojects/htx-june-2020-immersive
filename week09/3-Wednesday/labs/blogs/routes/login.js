
const express = require('express');
const router = express.Router();


router.get('/login', (req,res) => {
    res.render('login.ejs')
});

router.post('/login', (req,res) => {

    let username = req.body.username;
    let password = req.body.username;


    console.log(username, password);

    res.send('post login data')
});

module.exports = router;