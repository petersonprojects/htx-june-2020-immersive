// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

// function isNumber1(a) {
//     // if (typeof a === "number") {
//     //     return "that's a number";
//     // }
//     // else {
//     //     return "That's not a number";

//     // }

//     typeof(a) == "number" ? "thats a number": "thats not a number"
// }

let isNumber2 = (a) => typeof(a) == "number" ? "thats a number": "thats not a number"



console.log(isNumber2(10));
console.log(isNumber2('hey there'));
console.log(isNumber2(true));

