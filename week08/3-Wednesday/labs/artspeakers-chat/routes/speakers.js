const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json');


router.get('/speakers', (req, res) => {

    //code
    let pageSpeakers = dataFile.speakers; // [{}, {}, {}]
    let pagePhotos = [];
    

    pageSpeakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })

    res.render('speakers', {
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageTitle: "Roux Meetups--Speakers",
        pageID: "speakerList",
        maxList: pageSpeakers
    })
})


router.get('/speakers/:speakerid', (req, res) => {

    let speakerArray = dataFile.speakers;

    let photos = [];
    let speakers = [];

    speakerArray.forEach((speakerObj)=>{
        if(speakerObj.shortname == req.params.speakerid){

            photos = photos.concat(speakerObj.artwork)
            speakers.push(speakerObj)
        }

    })

    // console.log(`photos: ${photos} speaker object: ${pageSpeakers}`);

    res.render('speakers', {
        artwork: photos,
        speakers: speakers,
        pageTitle: `Roux Meetups--${speakers[0].name}`,
        pageID: "speakerDetail",
        maxList: speakerArray
    })

  
})


module.exports = router;