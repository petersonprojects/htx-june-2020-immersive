

let state = {
    count: 0,
    fName: "Michael",
    lName: "Cortez"
}
///&1356 newState
///&1356 state

let newState = state
// let newState = {
//     ...state,
//     count: 5
// }

let newState = {...state}   

newState.count = 4

console.log(state, newState)