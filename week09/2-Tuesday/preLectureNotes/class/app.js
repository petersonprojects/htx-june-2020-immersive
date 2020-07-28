
const express = require('express');
const app = express();
const PORT = 3000;

const db = require('./models');
const { sequelize } = require('./models');

app.use(express.static('public'));

app.set('view engine', 'ejs');


db.player.findAll({
    where: {firstname: "Whitney"},
    include : [{model: db.team,
                where: {name: "Texans"}
}]})
.then(results =>{
    
    results.forEach(player=>{
        console.log(`${player.firstname} ${player.lastname} ${player.team.name}`);
    })
})


// db.user.findAll()
// .then(results =>{
//     // console.log(results);

//     results.forEach(record =>{
//         console.log(`${record.firstname} ${record.lastname}`);
//     })
// })

// db.user.findByPk(4)
// .then(user =>{
//     console.log(user);
// })

// db.user.findAll({where: {firstname: 'John'}})
// .then(results =>{

//     // console.log(results);

//     results.forEach(record =>{
//         console.log(`${record.firstname} ${record.lastname}`);
//     })
// })

// db.user.destroy({where: {firstname: 'John'}})
// .then(rowDeleted =>{

//     console.log(rowDeleted);
// })


// db.sequelize.query('SELECT * FROM users', {type: sequelize.QueryTypes.SELECT})
// .then(results =>{

//     console.log(results);
// })

// db.user.update({
//     email: "mcortez@dc.com"
// },
// {
//     where: {
//         firstname: "Michael"
//     }
// })
// .then(updatedRecord =>{

//     console.log(updatedRecord);

//     db.user.findAll({where: {firstname: "Michael"}})
//     .then(results =>{
//         console.log(results);
//     })
// })

// db.team.create(
//     {
//         name: "Texans",
//         location: "Texas"
//     }
// )
// db.team.create(
//     {
//         name: "Cowboys",
//         location: "Texas"
//     }
// )
// db.team.create(
//     {
//         name: "49ers",
//         location: "San Francisco"
//     }
// )
// db.team.create(
//     {
//         name: "Bears",
//         location: "Chicago"
//     }
// )

// db.player.create({
//     firstname : 'JJ',
//     lastname: 'Watt',
//     age : 30,
//     teamid: 1
// }
// )

// db.player.create({
//     firstname : 'Deshaun',
//     lastname: 'Watson',
//     age : 23,
//     teamid: 1
// }
// )
// db.player.create({
//     firstname : 'Dak',
//     lastname: 'Prescott',
//     age : 25,
//     teamid: 2
// }
//)
// db.player.create({
//     firstname : 'Jimmy',
//     lastname: 'Garapolo',
//     age : 26,
//     teamid: 3
// })

// db.player.create({
//     firstname : 'Mitch',
//     lastname: 'Trabiski',
//     age : 26,
//     teamid: 4
// })

// db.player.create({
//     firstname : 'Whitney',
//     lastname: 'Mercilus',
//     age : 26,
//     teamid: 1
// })






// db.user.create({
//    firstname: 'Veronica',
//    lastname: 'Lino',
//    email: 'Veronica@digitalcrafts.com'
// });

// db.user.create({
//    firstname: 'Cainan',
//    lastname: 'Barboza',
//    email: 'Cainan@dc.com'
// });

// db.user.create({
//    firstname: 'Michael',
//    lastname: 'Cortez',
//    email: 'Michael@dc.com'
// });

// db.user.create({
//    firstname: 'Jeremy',
//    lastname: 'Roussel',
//    email: 'Jeremy@dc.com'
// });

// db.user.create({
//    firstname: 'Chris',
//    lastname: 'David',
//    email: 'Chris@dc.com'
// });

// db.user.create({
//    firstname: 'Dan',
//    lastname: 'Gelok',
//    email: 'Dan@dc.com'
// });


// app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`);
// })
