

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());


router.get('/', (req, res) => {

    res.render('index')
})

router.post('/' , (req, res) => {
  
    console.log(req.body.username);
    console.log(req.body.password);
    let username = req.body.username;
    let password = req.body.password;
    //display response on index.ejs
    res.send(`username: ${username} password: ${password}`)
})


router.put('/', (req, res) => {
  
    res.send('put request')
})

router.delete('/', (req, res) => {
  
    res.send('delete request')
})


module.exports = router;