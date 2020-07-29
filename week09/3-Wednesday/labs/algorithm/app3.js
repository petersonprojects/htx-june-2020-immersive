
// make authentication :-)

let express = require('express');
let app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// session manager
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(session({
    secret: 'my dog likes chiggen',
    resave: false,
    saveUninitialized:true,
    cookie: {secure: false, maxAge: 14*24*60*60*1000} //days, hours, minutes, seconds, millisecs
}));

app.listen(3002, ()=>{
    console.log('Listening on PORT 3002');
});
