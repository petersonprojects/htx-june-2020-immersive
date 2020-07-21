//initialize express
//
//
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.get('/', (req,res)=>{

    res.render('index',{

    });

});

router.post('/', (req,res)=>{
    //display response on index.ejs

    let username = req.body.username;
    let password = req.body.password;

    res.json(`username: ${username}<br> password: ${password} <br>`)

});

router.put('/', (req,res)=>{

    res.send('put request');
});

router.delete('/', (req,res)=>{

    res.send('delete request');
});

module.exports = router;