const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../models');


router.get('/registration', (req, res) => {

    res.render('registration')
})

router.post('/registration', (req, res) => {
  
    let username = req.body.username; 
    let password = req.body.password;
    let email = req.body.email;

    let passwordEncrypted = bcrypt.hashSync(password, 8);

    db.users.create({
        username: username, 
        email: email, 
        password: passwordEncrypted,
        roleID: 1
    })
    .then(user =>{

        res.redirect('/login')
    })
    .catch(error =>{
        res.redirect('/error')
    })

    // console.log(username, password, email);
    
    // res.send('post data')
})


module.exports = router;