
const express = require('express')
const router = express.Router()

router.get('/speakers', (req,res) => {

    res.render('speakers')

})
// router.get('/speakers/:id', (req,res) => {

//     res.render('speakers')

// })

module.exports = router;