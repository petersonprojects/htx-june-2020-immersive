
const express = require('express');
const app = express();

//views
app.set('view engine', 'ejs');
app.set('views', 'views');

//public
app.use(express.static('public'));

//routes
app.use(require('./routes/dishes')); // a list of dishes data
app.use(require('./routes/newdish')); // form to enter new dish

app.listen(3000, () => {
    console.log('Listening on port 3000');
});