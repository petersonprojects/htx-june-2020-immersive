let auth = (req, res, next) => {

    //if the session exists, then go to next function in chain
    // if (req.session.username) {

    //     next()
    // }
    // else {
    //     res.redirect('/login')
    // }

    console.log(req.isAuthenticated());

    if(req.isAuthenticated()){

        next();
    }
    else{
        res.redirect('/error')
    }

}

module.exports = auth;