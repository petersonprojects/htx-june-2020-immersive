const express = require('express');
const router = express.Router();


let LocalStrategy = require('passport-local').Strategy;
let passport = require('passport');

let bcrypt = require('bcryptjs');

let db = require('../models');

router.use(passport.initialize());
router.use(passport.session());

// router.use(bodyParser.urlencoded({ extended: false }))


router.get('/login', (req, res) => {

    res.render('login')
})


router.post('/login', passport.authenticate('local', { successRedirect: '/protected', failureRedirect: '/login' }))

passport.use(new LocalStrategy((username, password, done) => {
    console.log(`I'm in passport`);

    db.users.findAll({ where: { username: username } })
        .then((results) => {

            if (results != null) {

                let record = results[0];

                bcrypt.compare(password, record.password, (err, response) => {
                    if (response) {
                        console.log('passwords matched');

                        //serialize user gets called here
                        done(null, { id: record.id, username: record.username })
                    }
                    else {
                        console.log('passwords didnt');
                        done(null, false);
                    }
                })
            }
            else {
                console.log(`user not found`)
                done(null, false)
            }

        })
}))



module.exports = router;