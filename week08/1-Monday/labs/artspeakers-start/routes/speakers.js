
const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json')
const maxlist = dataFile.speakers;


router.get('/speakers',(req,res)=>{

    let pageSpeakers = dataFile.speakers; //array of objects
    let pagePhotos = [];

    pageSpeakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    });

    res.render('speakers',{
        photos: pagePhotos,
        speakers: pageSpeakers,
        maxlist: pageSpeakers
    });

});

router.get('/speakers/:speakerid',(req,res)=>{

    let speakerArray = dataFile.speakers;
    let photos = [];
    let speakers = [];

    speakerArray.forEach((speakerObj)=>{
        if(speakerObj.shortname == req.params.speakerid)
        {
            photos = photos.concat(speakerObj.artwork);
            speakers.push(speakerObj);
        }
    });

    res.render('speakers',{
        photos: photos,
        speakers: speakers,
        maxlist: speakerArray
    });

});

module.exports = router;