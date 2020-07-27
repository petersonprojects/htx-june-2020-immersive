var hotels = [
    { price: 200, brand: 'Estin' },
    { price: 50, brand: 'Best Western' },
    { price: 50, brand: 'Best Western' },
    { price: 250, brand: 'Best Western' },
    { price: 500, brand: 'Best Western' },
    { price: 1500, brand: 'Best Western' },
    { price: 175, brand: 'Radishin' }
]
let min = hotels[0].price; //200
let max = hotels[0].price; //200


hotels.forEach(hotel =>{
    if (hotel.price > max){
        max = hotel.price
    }
})


// 100^<i class="fas fa-signal-2    "></i>
// let min = hotels[0].price; //200
// let max = hotels[0].price; //200


// for (let i = 0; i < hotels.length; i++) {

//     for (let j = 0; j < hotels.length; j++) {

//         // finding max 

//         if (hotels[i].price > hotels[j].price && (hotels[i].price < max)) {
//             max = hotels[j].price
//         }
//     }
// }