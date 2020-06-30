// ***Rest Operator
//Assign values to the a, b, c variables using destructuring and rest operator

var a, b, c;
var arr = [1, 2, 3, 4, 5, 6, 7];

// a = [arr[0]];
// b = [arr[1]];
// c = [...arr];

// c.shift();
// c.shift();

var [a,b,...c] = arr; // does the same thing in 1 line as i did in 5

console.log(a);
console.log(b);
console.log(c);




// spread operators

// let arr1 = [1,4,7];
// let arr2 = arr1;

// // with this it has an independent copy of the same array that can
// // be changed independently of the original
// arr2 = [0, ...arr1, 8, 9, 10];

// //this just changed both arrays. it is passed by reference
// // unless you explicitly copy it
// // it pushed to the same address
// arr2.push(99)

// console.log(arr1);
// console.log(arr2);
