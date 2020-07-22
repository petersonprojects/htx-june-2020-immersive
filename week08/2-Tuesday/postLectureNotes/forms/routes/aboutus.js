const express = require('express');
const router = express.Router();

router.get('/aboutus', (req, res) => {
  
    res.send('get: aboutus')
});

router.post('/aboutus', (req, res) => {
  
    res.send('post: aboutus')
});

router.put('/aboutus', (req, res) => {
  
    res.send('put: aboutus')
});

router.delete('/aboutus', (req, res) => {
  
    res.send('delete: aboutus')
});

module.exports = router;