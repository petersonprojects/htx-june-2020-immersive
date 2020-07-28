
const express = require('express');
const router = express.Router();
const db = require('../models/database');

const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());  //req.body(fill everything that client is sending back to us)

//render our index (view)
router.get('/', (req, res) => {

    // db.query(`SELECT * FROM todos`)
    // .then((records)=>{
    //     res.render('index', {
    //         todos: records
    //     });
    // })
    // .catch((err)=>{
    //     res.send(err);
    // })

    res.render('index.ejs');

})


router.get('/api', (req, res) => {
    //return all of the current todos
    db.query(`SELECT * FROM todos`)
    .then(records => {
        res.json(records);
    })
    .catch(err=>{
        res.send(err);
    })
})


router.post('/api', (req, res) => {
    // insert new todo

    //scrape the client info sent in request from the head
    let description = req.body.description;

    db.none(`INSERT INTO todos VALUES (DEFAULT, $1)`, [description])
    .then(()=>{
        // query the database again with the new inserted value
        db.query(`SELECT * FROM todos`)
        .then((records)=>{
            // send json formatted records back to /api
            res.json(records); //array of todo2020 record objects
        })
        .catch((err)=>{
            res.send(err);
        })
    })
    .catch((err)=>{
        res.send(err);
    })

})

router.patch('/api', (req, res) => {
    //update a todo description

})


router.delete('/api/:id', (req, res) => {


})

router.delete('/api/all', (req, res) => {


})

module.exports = router;