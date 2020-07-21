//initialize express
//
//
const express = require('express');
const app = express(); 
const PORT = 5000;

//public
app.use(express.static('public'));

//views
app.set('view engine', 'ejs');
app.set('views','views');

//routes
app.use(require('./routes/index'));
app.use(require('./routes/aboutus'));

//server => request => middleware => response

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
});