

const express = require('express');
const app = express();

//link to views folder
app.set('view engine', 'ejs');
app.set('views','views');

//link to public folder
app.use(express.static('public'));

//create routes

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

app.listen(3000,()=>{
    console.log('Running artspeakers on port 3000');
})