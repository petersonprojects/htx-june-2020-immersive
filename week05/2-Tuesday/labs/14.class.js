
/* 
Rewrite code blow using ES6 Classes
*/


// function Fruit(title, price){
//     this.title = title;
//     this.price = price;
// }

// Fruit.prototype.priceInfo = function() {
//     return `Price of thie ${this.title} is $${this.price}`;

// }

// var apple = new Fruit("Apple", 2);
// console.log(apple.priceInfo());
// // Price of the Apple is $2

// var orange = new Fruit("Orange", 3);
// console.log(orange.priceInfo());
// Price of the Orange is $3

// function addtwonums(x,y)
// {
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }

var addtwonums = (x=0,y=0) => x + y;

console.log(addtwonums());

