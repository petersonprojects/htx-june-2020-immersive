const express = require('express');
const router = express.Router();

const authReq = require('../auth');

router.get('/protected', authReq, (req, res) => {

    res.send(`I'm a protected route`)
})


module.exports = router;