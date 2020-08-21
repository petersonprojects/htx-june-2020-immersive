

// let bob = function(num, str, x)
// {
//     console.log('bob', num, str, this, x)

//     return true;
// }


// let student = {
//     name: 'Cainan Barboza',
//     occupation: "Student",
//     greetingMethod: function(fn){
//         // let n = arguments[1];
//         // let s = arguments[2];
//         // fn.apply(student, [n,s])
//     }
// }

// let micah = bob.bind(student, 5, "hello");

// micah("peterson")

// student.greetingMethod(bob, 4, "digitalcrafts");

// recieves THIS then the arguments
// bob.call(student, 1, "call");

// recieves, THIS then an array
// bob.apply(student, [1, "apply"]);

// console.log(student.greetingMethod(bob))

// bob(1,'hello')

let handleClick = function(){

    console.log(this);
}

let buttonClick = {

    e: {target:0, value:4},
    x: 12,
    y: 67

}

let hClick = handleClick.bind(buttonClick)

hClick();