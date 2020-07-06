// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

let isNumber = a => typeof(a) == "number" ? "thtat's a number" : "that's not a number";



console.log(isNumber(10));
console.log(isNumber('hey there'));
console.log(isNumber(true));

