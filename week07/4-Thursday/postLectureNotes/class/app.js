
const express = require('express');
const app = express();

const axios = require('axios');
app.use(express.static('public'))

app.get('/', (req, res) => {
    
    res.send(`
    
    <link rel="stylesheet" href="styles.css">
    <div class="bg-yellow">home page</div>`)
})
app.get('/greeting.html', (req, res) => {
    
    res.send('route')
})


///network card requst --- /api callback
app.get('/api', (req, res) => {
  
    axios.get('https://corona.lmao.ninja/v2/states')
    .then((response)=>{
        console.log(response);

        // res.json(response)
    })

    res.send('hello world')
})


// /contact?name=veronca
app.get('/contact', (req, res) => {
  
    // let fname = req.param('name')
    // let lname= req.param('lname')

    let fname = req.query.name;
    let lname = req.query.lname;

    res.send(`<h1>My name is ${fname} ${lname}</h1>`)
})

app.get("/add/:num1,:num2",(req,res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let total = num1 + num2

    eval("console.log('hello world')")
    res.send(`The sum of ${num1} and ${num2} is ${total}`)
})

app.get('/contact/:fname', (req, res) => {

    let name = req.params.fname;

    res.send(`<h1 class="bg-yellow">My first name is: ${name}</h1>`)
  
})

app.get('/photo', (req, res) => {
  
    res.send(`<img height="300px" src="${req.query.images}" >`)
})

let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}


app.get('/dogs/:id', (req, res)=>{
  
    let id = req.params.id

    console.log(data.data[id].name, data.data[id].img);
    res.send(`
    
        <h1>${data.data[id].name}</h1>

        <ul>
            <li><a href="/dogs/0">Golden Retriever</a></li>
            <li><a href="/dogs/1">Lab</a></li>
            <li><a href="/dogs/2">pug</a></li>
            <li><a href="/dogs/3">poodle</a></li>
        </ul>

        <img height="300px" src="${data.data[id].img}">
    `)
})

// /calculate/4/5
app.get('/calculate/:a/:b/:op', (req, res) => {
  
    let a = req.params.a;
    let b = req.params.b;
    let op = req.params.op 
    let result = eval(`${a}${op}${b}`);

    res.send(`<h1>Addition of ${a} ${op} ${b} = ${result}</h1>`)

})

// app.get('/flights/:from/:to', (req, res) => {
  
//     res.send(`depart  from : ${req.params.from} Arriving at: ${req.params.to}`)
// })

// app.get('/cats', (req, res) => {
  
//     res.send('cats')
// })

// app.get('/puppies', (req, res) => {
  
//     res.send('puppie')
// })

// //cat  cats cat/ cats/
// app.get('/cat*', (req, res) => {
  
//     res.send('testing')

// })

// app.get('/bat(wo)*man*', (req, res) => {
  
//     res.send('batman')

// })

app.listen(3000, () => {

    console.log(`listening on port 3000`);
})