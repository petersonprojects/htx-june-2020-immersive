const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcryptjs');
const passport = require('passport');



router.get('/login', (req, res) => {

    res.render('login')
})


router.get('/logout', (req, res) => {
  
    req.logout()  //passport logout function 
    res.redirect('/');
}
)

// authenticate user
router.post('/login', passport.authenticate('local', {successRedirect: '/protected', failureRedirect: '/login'}))

module.exports = router;