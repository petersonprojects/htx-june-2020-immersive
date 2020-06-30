// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

function isNumber(a) {
    if (typeof a === "number") {
        return "that's a number";
    }
    else {
        return "That's not a number";

    }
}
console.log(isNumber(10));
console.log(isNumber('hey there'));
console.log(isNumber(true));

