const express = require('express');
const router = express.Router();
const authReq = require('../auth');


router.get('/admin', authReq, (req, res) => {

    res.send('protected admin route')
})


module.exports = router;