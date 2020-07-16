
const express = require('express');
const { get } = require('http');

const app = express();

app.get('/', (req, res) => {

    res.sendFile('/Users/veronicalino/Documents/digitalCrafts/June2020/week07/4-Thursday/preLectureNotes/class/myFile.html');
})



app.listen(3000, () => {
    console.log(`listening on port ${3000}`);
})