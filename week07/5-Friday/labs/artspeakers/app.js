
const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.static('public'))

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))

app.listen(3001,()=>{
    console.log('running express on port 3001');
})