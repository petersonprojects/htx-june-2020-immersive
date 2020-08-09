
const express = require('express');
const app = express();
const cookieParer = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(session({
    secret: 'cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }
}))

app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.use(require('./routes/index'));
app.use(require('./routes/registration'));
app.use(require('./routes/login'));
app.use(require('./routes/admin'));
app.use(require('./routes/protected'));


app.get('/error', (req, res) => {
  
    res.send(`you've reached an error`);
})


app.listen(3000, () => {
    console.log('listening on port 3000');
})