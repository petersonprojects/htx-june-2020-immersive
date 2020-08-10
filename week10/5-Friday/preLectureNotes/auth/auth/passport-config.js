
//setting up local strategy
//this function authenticates our user
// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
let db = require('../models');


const init = (passport) =>{


passport.use(new LocalStrategy(
    async (username, password, done) => {

        console.log(`username and password from form : username: ${username}, password: ${password}`);

        //beginning of verify callback function
        try {
            //code to verify user 

            let results = await db.users.findAll({ where: { username: username } })

            //array of objects from database 

            if (results != null) {

                let record = results[0];

                //compare passwords 

                bcrypt.compare(password, record.password, (err, response) => {

                    if (response) {

                        console.log(`passords matched`);
                        // passwords that match and a user that was found
                        // telling passport that user was found and should authenticated
                        done(null, { id: record.id, username: record.username })
                    }
                    else {
                        // no match was found 
                        console.log(`passords did not match`);
                        done(null, false)
                    }

                })
            }
            else {
                // no user was found in our database

                done(null, false)
            }
        }
        catch{
            // catch all error 
            done(null, false)
        }
    } //end of async function
))


// this function is called after the LocalStrategy has authenticated a user
// user is an object : { id: record.id, username: record.username }
passport.serializeUser((user, done)=>{
    console.log('serializing user', user);
    // user.id is going to be stored on the session
    done(null, user.id)
})

// validates every authenticated request
// takes id from session and finds the user in the database

passport.deserializeUser( (id, done)=>{

    console.log(`deserializing user ${id} ${Date.now()}`);
    db.users.findByPk(id)
    .then( record =>{

        done(null, record)
    })
    
})

}

module.exports = init;


