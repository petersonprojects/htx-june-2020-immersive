
const express = require('express');
const router = express.Router();
const db = require('../models/database');

const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());  //req.body(fill everything that client is sending back to us)

//render our index (view)
router.get('/', (req, res) => {

    res.render('index');
})


router.get('/api', (req, res) => {
    //return all of the current todos


})


router.post('/api', (req, res) => {
    // insert new todo
})

router.patch('/api', (req, res) => {
    //update a todo description



})


router.delete('/api/:id', (req, res) => {


})

router.delete('/api/all', (req, res) => {


})

module.exports = router;