

// function sample() {

//     console.log('Hello World')
// }

// sample()


// (function greeting(name) {
//     console.log("hello there " + name)
// })("Woody")


// var a = 5;

// var b = a; 

// console.log(a, b)

// b = 4; 

// console.log(a, b)


var original = [4, 7 ,9, 12]

var copy = original;

// console.log(original, copy)

copy[0] = 99;

copy.push(45);
// console.log(original, copy)


var newArray = []

for(var i = 0; i< original.length; i++){
    newArray.push(original[i])
}

// console.log(original, newArray)

// newArray.push(100);

// console.log(original, newArray)

// var newArray2 = []

// Object.assign(newArray2, original)

// console.log(original, newArray2)

// newArray2.push(108);

// console.log(original, newArray2);


// var newArray3 = [...original]

// console.log(original, newArray3)


// newArray3.push("hello")

// console.log(original, newArray3)


// function greeting(){

//     var name = "Chris"

//     console.log(`Hello ${name}`);


// }

// greeting()

// var adamsFun = function (name){

//     return `what's up ${name}`;
// }

// var greeting  = adamsFun("Adam")

// console.log(greeting)


var add = function(num1, num2){
    return num1 + num2;
}

var subtract = function(num1, num2){

    return num1 -num2;
}

var calc = function(num1, num2, operation){
    return operation(num1, num2)
}


var result = calc(4, 5, subtract);

console.log(result)
