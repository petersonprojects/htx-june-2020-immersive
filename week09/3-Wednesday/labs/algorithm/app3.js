
//  authentication :-)
// encryption, sessions and middleware

let express = require('express');
let app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// session manager
const session = require('express-session');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'my dog likes chiggen',
    resave: false,
    saveUninitialized:true,
    cookie: {secure: false, maxAge: 14*24*60*60*1000} //days, hours, minutes, seconds, millisecs
}));

// ^^ this session is actually returning a function ^^
//      which has a request a response and a next
//      when next is called it runs the next chunk of middleware

let authLogin = (req, res, next) => {

    // check session username

    // console.log("I'm middleware.")

    if(req.session.username)
    {
        next();
    }
    else
    {
        res.redirect('/login');
    }

}

app.all('/admin/*', authLogin, (req,res,next) => {
    next();
});

// app. get post patch delete etc are all siblings, only ONE runs at a given time, then ENDS
app.get('/', (req,res) => {
    res.send('index page');
});

app.get('/admin/dashboard', (req,res) => {
    res.send('Administrator dashboard')
});

app.get('/admin/users', (req,res) => {
    res.send('User dashboard')
});

app.get('/login', (req,res) => {
    res.render('login.ejs');
});

let users = [
    {username: 'john', password: '1234'},
    {username: 'mary', password: '1234'},
    {username: 'cindy', password: '1234'},
    {username: 'dan', password: '1234'},
    {username: 'rj', password: '1234'}
];

app.post('/login', (req,res) => {

    // userID
    // password

    // scrape from form (send in header and use bodyparse)
    let userID = req.body.userID;
    let password = req.body.password;

    // look up documentation for array method .find()
    let user = users.find(userRecord =>{
        return userRecord.username == userID && userRecord.password == password;
    });

    // user = [{username: 'john', password: '1234'}];

    if(user != null)
    {
        // set the session information using express sessions obj
        if(req.session)
        {
            req.session.username = userID;
            res.redirect('/');
        }
    }
    else //no match was found
    {
        console.log('Login failed.');
        res.redirect('/login');
    }

});

app.listen(3002, ()=>{
    console.log('Listening on PORT 3002');
});
