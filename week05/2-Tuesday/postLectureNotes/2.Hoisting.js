// ***Hoisting 
// Fix this code

var a = 5;
var b = 10;

if (b > a) {
    c = a + b + c;
    let c = 2;
    console.log(c)

}

console.log(c)

