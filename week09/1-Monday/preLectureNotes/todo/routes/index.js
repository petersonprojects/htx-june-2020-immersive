
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require('../models/database');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// router.use(express.urlencoded());

router.get('/', (req,res) => {
  
    res.render('index')
})

router.post('/', (req, res) => {
  
    console.log(req.body);
    res.send('hello');
})

router.get('/api', (req, res) => {
    //return all of the current todos
    console.log(`get`);
    db.query('SELECT * FROM todos')
    .then((results)=>{
        res.json(results)
    })
    .catch((error)=>{
        res.status(404).send('error')
    })
})


router.post('/api', (req, res) => {
    //insert a todo
    
    console.log('post');
    console.log(req.body);
  
    db.none(`INSERT INTO todos VALUES (DEFAULT, $1)`, [req.body.description])
    .then(()=>{

        db.query('SELECT * FROM todos')
        .then((results)=>{
            res.json(results)
        })
        .catch((error)=>{
            res.status(404).send('error')
        })
        
    })
    .catch(error=>{
        res.send(error)
    })

})

// router.patch('/api/description/:id', (req, res) => {
//     //update a todo description
//     let id = req.body.id; 
//     let description = req.body.description;
//     db.none('UPDATE todos SET description = $1 WHERE id=$2', [])
// })

// router.patch('/api/iscomplete/:id', (req, res) => {
//     //update a is complete
//     db.query('')
// })

router.delete('/api/:id', (req, res) => {

        console.log('delete');
    let id = req.params.id
    console.log(id);

    db.none('DELETE FROM todo WHERE id = $0', [id])
    .then(()=>{

        db.query('SELECT * FROM todos')
    .then((results)=>{
        res.json(results)
    })
    .catch((error)=>{
        res.status(404).send('error')
    })
    })
    .catch(error =>{
        res.send(error)
    })
})

// router.delete('/api/all', (req, res) => {
//     //deletes all entries
//     db.query('')
// })

module.exports = router;