
let express = require("express");

let app = express();

// middleware to set response headers to allow CORS

app.use((req, res, next)=>{

    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With", "Content-Type", "Accept")

    next();
})


app.get('/api', (req, res) => {

    res.json(
        [
            {
                id: 1,
                username: "jeremy"
            },
            {
                id: 2,
                username: "cainan"
            },
            {
                id: 3,
                username: "woody"
            }
        ]
    )
});

app.listen(3001, ()=>{
    console.log("Listening on port 3001...");
});