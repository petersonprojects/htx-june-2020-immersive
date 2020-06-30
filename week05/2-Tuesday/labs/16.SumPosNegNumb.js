
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/

// Write code here

// let sumPlusMinus = (array) => {
//     let sumplus = 0;
//     let summinus = 0;

//     for (item of array)
//     {
//         item >= 0 ? sumplus += item: summinus += item;
//     }

//     return {plus: sumplus, minus: summinus};
// };
// great example of reduce function with coniditons

// var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// let sumPlusMinus = (arr) => (
//     arr.reduce((acc, elem)=>({
//             plus: elem > 0 ? acc.plus + elem: acc.plus,
//             minus: elem < 0 ? acc.minus + elem: acc.minus
//         }, {plus: 0, minus: 0})
//     ));

// console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

class Person
{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greeting(){
        console.log(this.name);
    }

}

let micah = new Person("Micah", 25, "Male");
micah.greeting();

//how its done in python(self) and java

// class Person {
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     name(){
//         //
//     }
// }

// let michael = new Person("michael",21,"M")
