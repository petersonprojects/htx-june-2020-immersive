
// let state = {

//     student: {
//         name: "Dan",
//         city: "Houston"
//     },
//     campus: {
//         school: {
//             name: "Digitalcrafts",
//             info: {
//                 city: "Houston",
//                 state: "Texas",
//                 type: "Bootcamp"
//             }
//         }
//     }
// }

// let newState = {

//     ...state,
//     student: {
//         ...state.student
//     },
//     campus: {
//         school: {
//             ...state.campus.school,
//             info: {
//                 ...state.campus.school.info,
//                 city: "Atlanta",
//                 state: "Georgia"
//             }
//         }

//     }
// }

// console.log(state)

// console.log(newState)

// let state = {
    
//     houses: {

//         gryffindor: {
//             points: 15
//         },
//         ravenclaw: {
//             points: 18
//         },
//         hufflepuff: {
//             points: 7
//         },
//         slytherin: {
//             points: 5
//         }

//     }
// }


// let key = "gryffindor";

// console.log(state)

// let newState = {
//     ...state,
//     houses: {
//         ...state.houses,
//         [key]: {
//             ...state.houses[key],
//             points: state.houses[key].points + 3
//         }
//     }
// }

// console.log(newState)

// let state = [1, 2, 3];
// let newState = [0, ...state, 4, 5];


// console.log(state)
// console.log(newState)

// let state = [1, 2, "X", 4];

// let newState = state.map(item => {
    
//     if(item == "X")
//     {
//         item = 3
//     }

//     return item;

// });


// console.log(newState)

// let state = [1, 2, 3, 5, 6];

// let newItem = 4;

// let newState = [...state];


// // index of whwere u wanna start and what u wanna delete, and what u wanna insert
// newState.splice(3, 0, newItem)

// console.log(newState)

// let state = [1, 2, "X", 4];

// let newState = state.filter(item => {

//     return item != "X"
// })

// console.log(newState)
