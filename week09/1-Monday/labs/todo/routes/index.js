
const express = require('express');
const router = express.Router();
const db = require('../models/database');

router.get('/', (req,res) => {
  
    res.render('index')
})


router.get('/api', (req, res) => {
    //return all of the current todos
    
})


router.post('/api', (req, res) => {
    //insert a todo
    
  
})

router.patch('/api/description/:id', (req, res) => {
    //update a todo description
   
})



router.delete('/api/:id', (req, res) => {
    
})

router.delete('/api/all', (req, res) => {
    //deletes all entries
    
})

module.exports = router;