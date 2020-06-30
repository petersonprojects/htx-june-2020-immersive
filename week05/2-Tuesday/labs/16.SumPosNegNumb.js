
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/

var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Write code here

// let sumPlusMinus = (array) =>{

//     let sumplus = 0;
//     let summinus = 0;
//     for(let i = 0;i<array.length;i++)
//     {
//         sumnums = (array) => {
//             return (array[i] >= 0) ? sumplus += array[i]: summinus+= array[i];
//         }

//         console.log(sumplus);
//     }
//     return sumplus;
// }

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

