// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];


var add = function(num1,num2){
    return num1 + num2;
}
var subtract = function(num1,num2){
    return num1 - num2;
}

var calc = function(num1, num2, operation)
{
    return operation(num1,num2);
}

var result = calc(4,5,add);

console.log(result);

var array = [0,1,2,3,4,5]

array.forEach(function(element)
{
    console.log(element+"!");
}
)

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];