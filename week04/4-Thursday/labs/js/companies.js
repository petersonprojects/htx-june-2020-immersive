const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

<<<<<<< HEAD

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//filter all ages > 35
//filter out all even numbers

// var youngins = ages.filter(function(arrVal){
//     return arrVal <= 35;
// })

// var youngins = ages.filter((arrVal)=>arrVal <= 35);

// // var evens = ages.filter(function(arrVal){
// //     return arrVal%2 == 0;
// // })

// var evens = ages.filter((arrVal)=>arrVal%2 == 0);

// console.log(youngins);
// console.log(evens);

// var filteredArr = arr.filter(function(arrVal){
//     return arrVal < 25;
// })

// console.log(filteredArr);

//using a for loop print each obj of companies array

// for(var i = 0;i<companies.length;i++)
// {
//     console.log(companies[i]);
// }

//using for each print each obj of companies array

// var result = companies.forEach(function(index){

//         console.log(index)

//     })

// console.log(result);



// var newEnd= companies.map(function(company){
//     company.end = 2020;
//     return company;
// })

// var newAge = ages.map(function(arrVal){
//     arrVal += 5;
//     return arrVal;
// })

// console.log(newEnd);
// console.log(newAge);

// console.log(newArr);
// var names = ["Dan","Michael","Micah","Chris","Cainan","Jeremy","Woody","RJ"];

// var greetingsArr = names.map(function(name){
//     return `Hello ${name}, how are you?`;
// })

// console.log(greetingsArr);

//
var result = ages.some(function(arrVal){
    return arrVal < 60;
})

console.log(result);
// 
=======
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// Filter out all ages greater than 35 
// var ageFilter = ages.filter((age)=> age<=35)

var greeting = ()=>"hello world"

var result = greeting();

console.log(result)


var ageFilter = ages.filter(age => age <= 35);

console.log(ageFilter)

// console.log(ageFilter)

// Filter all even numbers

var evenNumbers = ages.filter(age => age %2 == 0)

console.log(evenNumbers)

/// map through ages array and return a new ages array where 5 is added to each element.

var newAges = ages.map(function(arrVal){

    return arrVal + 5
})


// var newAges = ages.map(arrVAl => arrVAl +5)
//map through the companies array and change the end date to 2020

    var newComp = companies.map(function(companyObj){

            companyObj.end = 2020;

            return companyObj;
    })


    //console.log(newComp)


//using a for loop print each object of companies array 

for(var i = 0; i<companies.length; i++){

    //console.log(companies[i])
}

//using forEach print each object of companies array

companies.forEach(function(index){
    //console.log(index)
})
>>>>>>> f24067dc7a4c96269fffc1e9ab0fff07da658bb1
