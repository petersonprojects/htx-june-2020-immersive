
let express = require('express');
let router = express.Router();


router.get('/', (req, res) => {

    // res.send(`
    //     <link rel="stylesheet" href="styles.css">
    //     <h1 class="highlight">Front Page</h1>
    // `)

    let pictures = [
        "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
        "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
        "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
    ]

    let nameArr = [
        "Woody",
        "RJ",
        "Micah",
        "Jeremy",
        "Chris",
        "Dan",
        "Cainan",
        "Michael"
    ]

    let cities = [
        "Atlanta",
        "Houston",
        "Seattle",
        "Miami"
    ]

    cities.forEach(city =>{
        console.log(city);
    })

    res.render('index', {
        firstName: "Veronica",
        lastName: "Lino",
        pic: pictures,
        nameRef: nameArr
    })

})

module.exports = router;