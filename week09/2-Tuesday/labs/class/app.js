
// npm install sequelize pg pg hstore
// sequelize init

const express = require('express');
const app = express();
const PORT = 3001;

const db = require('./models');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

// db.user.findAll()
// .then((results)=>{

//     results.forEach(record => {
//         console.log(`${record.firstname} ${record.lastname}`);
//     });

// });

// db.user.findByPk(4)
// .then(user=>{
//     console.log(user);
// })

// db.user.findAll({where: {firstname: 'John'}})
// .then((data)=>{

//     data.forEach(record => {
//         console.log(record.firstname, record.lastname);
//     });

// });

// db.user.destroy({where: {lastname: 'Doe'}})
// .then((deletedRow)=>{
//     console.log(`${deletedRow} deleted.`);
// });

// db.user.destroy({where:{id:9}})
// .then((deletedRow)=>{
//     console.log(`${deletedRow} deleted.`);
// });

//!!!!!!!doesnt work!!!!!!
// db.sequelize.query('SELECT * FROM users', {type: sequelize.QueryTypes.SELECT})
// .then(results => {
//     console.log(results);
// })

// db.user.update({email: "mcortezTWO@dc.com"}, {where:{firstname: 'Michael', lastname:'Cortez'}})
// .then((newRecord)=>{

//     //returns full record only with the code below.
//     // newRecord just returns the number of rows updated

//     db.user.findAll({where:{firstname:"Michael"}})
//     .then(record=>{
//         console.log(record);
//     });

// });

// db.user.create({
//     firstname:'Micah',
//     lastname:'Peterson', 
//     email:'micahpeterson@live.com'
// });


// db.team.create(
//     {
//         name:'Texans',
//         location:'Houston'
//     }
// )

// db.team.create(
//     {
//         name:'Cowboys EW',
//         location:'Dallas EW'
//     }
// )

// db.player.create(
//     {
//         firstname: 'JJ',
//         lastname: 'Watt',
//         age: 30,
//         teamID: 1
//     }
// )
// db.player.create(
//     {
//         firstname: 'Deandre',
//         lastname: 'Hopkins',
//         age: 23,
//         teamID: 1
//     }
// )
// db.player.create(
//     {
//         firstname: 'Who',
//         lastname: 'Cares',
//         age: 45,
//         teamID: 2
//     }
// )
// db.player.create(
//     {
//         firstname: 'Seriously',
//         lastname: 'WhoCares',
//         age: 55,
//         teamID: 2
//     }
// )


// !!!!!!!!doesnt work!!!!!!!
// db.player.findAll(where:{firstname:'JJ'},{include: [{model: db.team}]})
// .then((results)=>{
//     results.forEach(player => {
//         console.log(`${player.firstname} ${player.lastname} - ${player.team.name}`);
//     });

// })

// app.listen(PORT, ()=>{
//     console.log(`Listening on port ${PORT}`);
// });