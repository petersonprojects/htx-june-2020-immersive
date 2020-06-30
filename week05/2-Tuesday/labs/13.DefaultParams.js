/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

// var missingArgument = () =>
// {
//     throw new Error('Function square requires an argument.')
// }

// // DEFAULT PARAMS
// var square = (a = missingArgument()) => {
//     console.log(a * a);

//     return a * a;
// }

// square(10)
// // 100 

// console.log(square());

//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument




// function logArguments(){
//     for (let i = 0; i < arguments.length;i++)
//     {
//         console.log(arguments[i]);
//     }
// }

function logArguments(...args)
{
    for (let arg of args)
    {
        console.log(args);
    }
}

logArguments(2,5);

