
let express = require('express');
let router = express.Router();


router.get('/faq', (req, res) => {

    res.send('FAQ us page')
  
})

module.exports = router;
