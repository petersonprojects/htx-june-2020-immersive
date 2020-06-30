// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// function mult(obj)
// {
//     let product = obj.x * obj.y * obj.z;
//     return product;
// }

// var product = mult(obj)
// console.log(product);
//300

/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/

// var person1 = {
//     name: "Mike",
//     info: {
//         country: "Spain",
//         age: 23
//     },
//     postsQuantitiy: 100
// }

// var person2 = {
//     name: "Alice",
//     info: {
//         country: "Italy",
//         age: 25
//     }
// }



// let person = obj =>{
//     var {name,info,postsQuantitiy} = obj

//     console.log(name, info, postsQuantitiy);
// }

// person(person1);


// function person(obj)
// {
//     var {name: n, info: {}, postsQuantitiy: p} = obj;
//     console.log(name, info, postsQuantitiy);
// }

// person(person1)


function test1(obj)
{
    //
    return "hello"
}

//if u only have one parameter you can remove the parenthesis
// aswell as the return

let test2 = obj => "hello"


console.log(test2(1));