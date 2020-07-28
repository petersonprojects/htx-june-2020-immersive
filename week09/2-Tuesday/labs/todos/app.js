
const express = require('express');

const app = express();

const db = require('./models');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(require('./routes/index'));

app.listen(3005, () => {
    console.log(`listening on port 3005`);
});