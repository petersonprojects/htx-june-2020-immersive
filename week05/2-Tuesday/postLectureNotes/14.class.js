
/* 
Rewrite code blow using ES6 Classes
*/


function Fruit(title, price){
    this.title = title;
    this.price = price;

}



Fruit.prototype.priceInfo = function() {
    return `Price of thi ${this.title} is $${this.price}`;

}

var apple = new Fruit("Apple", 2);
console.log(apple.priceInfo());
// Price of the Apple is $2

var orange = new Fruit("Orange", 3);
console.log(orange.priceInfo());
// Price of the Orange is $3

