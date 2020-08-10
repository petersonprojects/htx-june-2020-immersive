
// middleware function
let auth = (req, res, next) => {

    //is user authenticiated 

    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/error')
    }
}

module.exports = auth;