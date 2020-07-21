
const express = require('express')
const app = express(); //http.createSevers
const PORT = 3000;

// public
app.use(express.static('public'));

//views 
app.set("view engine", "ejs");
app.set("views", "views");

//routes
app.use(require("./routes/index"))
app.use(require('./routes/aboutus'))
//server => req  => middleware => response

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


