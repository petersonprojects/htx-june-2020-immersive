// function logArguments() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }

// var hotels = [
//     {price: 200, brand: 'Estin'},
//     {price: 50, brand: 'Best Eastern'},
//     {price: 50, brand: 'Best Eastern'},
//     {price: 250, brand: 'Best Eastern'},
//     {price: 500, brand: 'Best Eastern'},
//     {price: 1500, brand: 'Best Eastern'},
//     {price: 175, brand: 'Radishin'}
// ] 

// let min = hotels[0].price;
// let max = hotels[0].price;

// hotels.forEach((hotel)=>{

//     if(hotel.price > max){
//         max = hotel.price
//     }

//     if(hotel.price < min){
//         min = hotel.price
//     }
// })

// console.log(max, min);

// let min = hotels[0].price;
// let max = hotels[0].price;

// for (let i = 0; i < hotels.length; i++) {

//     console.log(hotels[i]);
//     for (let j = 0; j < hotels.length; j++) {

//         //finding the max
//         if (hotels[i].price > hotels[j].price && (hotels[i].price > max) ) {
//             // if price is greater than any inner loop, then not the 
//             max = hotels[i].price

//         }

//         //finding the min
//         if (hotels[i].price < hotels[j].price && (hotels[i].price < min) ) {
//             // if price is greater than any inner loop, then not the 
//             min = hotels[i].price

//         }
//     }
// }

// console.log(max, min);


// var snack = "Meo Mix";

// var getFood = food=>{
//     if (food){
//         let snack = "Friskies";
//         return snack;
//     }
//     return snack;
// }


// console.log(getFood(true));

// function getType() {
//     console.log('Type is: ' + this.type);
// }
// getType();

// var CRV = {
//     type: 'SUV',
//     getType: getType
//   };

//   CRV.getType();

// function getType() { // doesn't work
//   setTimeout(function () {
//     console.log('Type is: ' + this.type);
//   }, 500);
// }

// function selfGetType() {
//     // var self = this;
//     setTimeout(() =>{
//       console.log('Type is: ' + this.type);
//     }, 500);
// }

// var CRV = {
//     type: 'SUV',
//     getType: getType,
//     selfGetType: selfGetType
// };
// CRV.getType();
// CRV.selfGetType();





// logArguments(4, 6, 7, 3)


var workshop = {
    teacher: "Kyle",
    ask(question){
        console.log(this.teacher, question);
    }
}

var myContext = {
    teacher: "Veronica"
}

workshop.ask.call(myContext, "What is implicit binding?");