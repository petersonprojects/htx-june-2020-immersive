//initialize express
//
//
const express = require('express');
const router = express.Router();

router.get('/aboutus', (req,res)=>{

    res.send('ABOUT US get')
});

router.post('/aboutus', (req,res)=>{

    res.send('ABOUT US post request')
});

router.put('/aboutus', (req,res)=>{

    res.send('ABOUT US put request')
});

router.delete('/aboutus', (req,res)=>{

    res.send('ABOUT US delete request')
});

module.exports = router;