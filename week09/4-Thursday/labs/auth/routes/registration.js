const express = require('express');
const router = express.Router();


router.get('/registration', (req, res) => {

    res.render('registration')
})

router.post('/registration', (req, res) => {
  
    let username = req.body.username; 
    let password = req.body.password;
    let email = req.body.email;

    
})


module.exports = router;