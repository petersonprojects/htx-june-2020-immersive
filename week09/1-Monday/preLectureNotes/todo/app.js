
const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.use(require('./routes/index'));

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})