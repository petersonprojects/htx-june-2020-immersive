
const express = require('express');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');  //michael
app.set('views', 'views');


app.use(express.static('public'))

app.use(require('./routes/index'))

app.use(require('./routes/aboutus'))

app.use(require('./routes/faq'))


app.get('*', (req, res)=>{

    res.send(`you've reached an error`)
})



app.listen(PORT, () => {

    console.log(`Listening on port ${PORT}`);
})