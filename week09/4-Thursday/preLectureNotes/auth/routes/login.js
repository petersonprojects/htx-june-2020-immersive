const express = require('express');
const router = express.Router();


let passport = require('passport');
let passportService = require('../auth/passport-config');


router.use(passport.initialize());
router.use(passport.session());


router.get('/login', (req, res) => {

    res.render('login')
})

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


router.post('/login', passportService, passport.authenticate('local', { successRedirect: '/protected', failureRedirect: '/login' }))


module.exports = router;