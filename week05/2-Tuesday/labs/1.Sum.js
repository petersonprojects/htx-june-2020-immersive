// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

var sum = (...args) => {
    let sum = 0;
    sum = args.reduce((acc, elem) => (acc + elem), 0);
    return sum;
}

let sum1 = sum(1,3);
let sum2 = sum(10, 20, 5);

console.log(sum1,sum2);

