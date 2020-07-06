/*
Answer the following questions:
1. Why are there no errors generated after line 12?
2. Why is there a TypeError generated after line 17

Change one line of code so the error will go away. 
Don't change line 12 or 17
*/

var arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];

// BEFORE: Uncaught TypeError:
// Assignment to constant variable. 
// AFTER: No error 

console.log(arr);
// [1, 2, 3, 4]
