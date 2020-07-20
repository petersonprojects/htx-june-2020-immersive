
const express = require('express');

const router = express.Router();

let dataFile = require('../data/data.json');


router.get('/', (req, res) => {


    let pageSpeakers = dataFile.speakers;

    let pagePhotos = [];  //populate with all of the artwork

    pageSpeakers.forEach((speakerObj) => {
      

        pagePhotos = pagePhotos.concat(speakerObj.artwork)

    })

    
    res.render('index', {
        photos: pagePhotos
    })
})

module.exports = router;

//postman