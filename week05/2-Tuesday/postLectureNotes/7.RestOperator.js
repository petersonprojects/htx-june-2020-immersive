// ***Rest Operator
//Assign values to the a, b, c variables using destructuring and rest operator

var a, b, c;
var arr = [1, 2, 3, 4, 5, 6, 7]
//console.log(a);
// 1
//console.log(b);
//2

//console.log(c);
//[3, 4, 5, 6, 7]


var [a, b, ...c] = arr;


console.log(a);
console.log(b);
console.log(c);