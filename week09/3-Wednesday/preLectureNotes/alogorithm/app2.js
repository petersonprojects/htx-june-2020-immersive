
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const session = require('express-session');

//req.session
app.use(session({
    secret: 'my dog likes chicken',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 14 * 24 * 60 * 60 * 1000 }
}))


app.get('/', (req, res) => {
  
    let name = "Veronica" //req.body.name

    req.session.name = "Veronica"
    res.send('hello world')
})

app.get('/about', (req, res) => {
  
    let val = req.session.name;

    res.send(`about us ${val}`)
})


app.listen(3000, ()=>{
    console.log(`listening on port 3000`);
})