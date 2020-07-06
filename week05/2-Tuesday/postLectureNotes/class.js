

// var i = 5;

// for (let i = 0; i < 10; i++) {

//     //console.log(i);

// }


// var sum = i + 5;

// console.log(sum)


// function varTest() {

//     var x = 31;

//     if (true) {
//       let x = 71;  // same variable!
//       console.log(x);  // 71
//     }

//     console.log(x);  // 71
// }


// varTest()

// const PI = 3.14;

// PI = 3;

// console.log(PI)

// const arr = [1, 2, 4, 7]


// arr.push(8)

// // arr = [1, 2, 3]

// console.log(arr)


// const obj = {};

// obj.newKey = 4; 

// console.log(obj);

// obj = {key: 56}

// const name = "Tiger";
// const age = 13;

// console.log(`My cat is named ${name} and is ${age} years old`);

// var text = (
//     'cat\n' +
//     'dog\n' +
//     'nickelodeon'
// );

// var text = `
// cat dog
// nickelodeon

// `

// console.log(text);

// let today = new Date();

// var text = `the sum of 4 and 5 is ${today.toLocaleTimeString()}`

// console.log(text);

// var arr = [1, 2, 3, 4];

// var a = arr[0] // a = 1
// var b = arr[1] // b = 2


// var [a, b, c, d] = arr;

// console.log(a);

// console.log(b);

// var luke = {
//     occupation: 'jedi',
//     father: 'anakin'
// }

// var occupation = luke.occupation;

// console.log(occupation);


// var {occupation, father} = luke;

// console.log(occupation);
// console.log(father);


// function test1(obj){
//     //

//     return "hello"
// }

// let test2 = obj=> "hello"


// console.log(test2(1));


// function test(){

//     console.log(this);

//     window.aler
// }

// function addTwoNumbers(x, y){

//     x = x || 0;
//     y = y || 0;

//     return x + y;
// }

// var addTwoNumbers = (x=0, y=0) => x + y;



// console.log(addTwoNumbers())


// function logArguments(){

//     for (let i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }


// function logArguments(...args){

//     for (let arg of args){
//         console.log(arg);
//     }
// }


// logArguments(2, 5, 7, 8, 9, 10)
// logArguments(2)
// logArguments(2, 4)


// let arr1 = [1, 4, 7];

// let arr2 = [0, ...arr1, 8, 9, 10];

// // [0, 1, 4, 7, 8, 9, 10]

// arr2.push(99)

// console.log(arr1);
// console.log(arr2);


// let a = "95";

// if (a == 5){
//     console.log(5)
// }
// else {
//     console.log(10)
// }

// a == 5 ? console.log(5) : console.log(10);

// typeof(a) == "number" ? console.log("number")  : console.log("not a number")


// function Person(name, age, gender){

//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     // this.greeting = function(){
//     //     console.log(this.name)
//     // }

// }

// Person.prototype.greeting = function(){
//     console.log(this.name);
// }

// let michael = new Person("michael", 21, "M");
// michael.greeting()



// class Person {
//     constructor(name, age, gender) {
//         this.name = name,
//         this.age = age,
//         this.gender = gender
        
//     }

//     greeting(){
//         console.log(this.name);
//     }
// }

// let michael = new Person("michael", 21, "M");
// michael.greeting();



