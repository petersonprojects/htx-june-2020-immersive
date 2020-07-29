

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(session({
    secret: 'my dog likes chicken',
    resave: false,
    saveUninitialized:true,
    cookie: {secure: false, maxAge: 14*24*60*60*1000} //days, hours, minutes, seconds, millisecs
}));

app.get('/', (req,res) => {
    let name = "Micah"; // retrieved req.body.name or somethin
    req.session.oink = name;
    res.send('hello world')
});

app.get('/about', (req,res) => {
    // 'name' cannot be seen here without a session
    // in order to use value, INDEX has to be accessed first
    // otherwise it's going to show up as undefined
    let value = req.session.oink;

    res.send(`about us ${value}`)
});

app.listen(3001, ()=>{
    console.log(`Listening on PORT 3001`);
});