const fetch = require('node-fetch');
// const jsonfile = require(‘jsonfile’)
// var fs = require(‘fs’)

const file = 'characters.json'
const dataObj = {}
const table = []
const fetchString = 'https://www.anapioficeandfire.com/api/characters/'



for (let i = 1; i < 5; i++) {
    let fetchURL = fetchString + i.toString()
    fetch(fetchURL)
        .then(data => data.json())
        .then(json => table.push(json))
        .catch(err => console.log(err))
}


console.log(table);