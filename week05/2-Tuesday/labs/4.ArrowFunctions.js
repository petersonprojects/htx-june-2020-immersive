// ***Write these functions with  Arrow Functions

function mult(a, b) {
    return a * b;
}

// as an arrow func
let mult = (a, b) => (a*b);

// set time out is a broswer api
setTimeout(function () {
    console.log(mult(5, 10));
}, 1000)

//written as an arrow function
setTimeout(()=>{console.log(mult(5,10))}, 1000);

//purpose of arrow functions is for keyword "this"
// javascript not a typical OOP language
// did not start as full fledged language
// when it begun it was meant to make website interactive
// prototypical language
// javascript is based on blocks that are linked together
// containers etc.

// "this" keyword denotes execution context
