
let express = require('express');
let router = express.Router();


router.get('/aboutus', (req, res) => {

    res.send('About us page')
  
})


module.exports = router;