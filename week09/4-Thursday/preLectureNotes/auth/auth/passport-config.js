
let passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
let db = require('../models');


const init = (req, res, next)=>{


    let username = req.body.username;
    let password = req.body.password;

    passport.use(new LocalStrategy((username, password, done) => {
        console.log(`I'm in passport`);
    
        db.users.findAll({ where: { username: username } })
            .then((results) => {
    
                if (results != null) {
    
                    let record = results[0];
    
                    bcrypt.compare(password, record.password, (err, response) => {
                        if (response) {
                            console.log('passwords matched');
    
                            //serizalize user gets called here
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
    
    passport.serializeUser((user, done) => {
        // passport is adding information to the sessions
        console.log('serializing user')
        done(null, user.id)
    })
    
    passport.deserializeUser((id, done) => {
        //checking to see if user is valid with the cookie that was passed in.
        console.log('deserializing user')
        console.log(id);
        db.users.findByPk(id)
            .then((record) => {
                done(null, record)
            })
    })

    next();
}

module.exports = init;

