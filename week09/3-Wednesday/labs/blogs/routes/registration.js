
const express = require('express');
const router = express.Router();


router.get('/registration', (req,res) => {
    res.render('registration.ejs');
});

router.post('/registration', (req,res) => {

    let username = req.body.username;
    let password = req.body.username;
    let email = req.body.email;

    console.log(username, password, email);

    res.send('post registration data');

});

module.exports = router;