

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(session({
    secret: 'my girlfriend loves chiggen',
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false, maxAge: 14*60*60*1000}
}));

app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use(require('./routes/index.js'));
app.use(require('./routes/login.js'));
app.use(require('./routes/admin.js'));
app.use(require('./routes/registration.js'));
app.use(require('./routes/protected.js'));


app.get('/error', (req,res) => {
    res.send(`You've reached an error.`)
});

app.listen(3008, ()=>{
    console.log('Listening on port 3008');
});
