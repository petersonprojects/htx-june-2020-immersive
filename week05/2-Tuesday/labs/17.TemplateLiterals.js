// let today = new Date();

// var text = `the sum of 4 and 5 is ${today.toLocaleTimeString()}`

// var arr = [0,1,2,3];

// //tedious

// var [a,b,c,d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

var luke = {
    occupation: 'jedi',
    father: 'anakin'
}

// this.luke.occupation is the same as the line below

var {occupation, father} = luke;

console.log(occupation);
console.log(father);