
const express = require('express');
const router = express.Router();


router.get('/speakers', (req, res) => {

    res.render('speakers')
})

//speakers/1
router.get('/speakers/:id', (req, res) => {

    res.render('speakers')
})


module.exports = router;