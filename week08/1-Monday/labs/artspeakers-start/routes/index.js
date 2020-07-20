

const express = require('express');
const router = express.Router();

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{

    let pageSpeakers = dataFile.speakers; //array of speaker objects
    let pagePhotos = [];

    pageSpeakers.forEach((speakerObj)=>{

        pagePhotos = pagePhotos.concat(speakerObj.artwork)

    })

    console.log(pagePhotos);

    res.render('index',{
        pageTitle: "Art speakers",
        artworkImages: pagePhotos,
        pageID: "home",
        maxlist: pageSpeakers
    })
});


module.exports = router;