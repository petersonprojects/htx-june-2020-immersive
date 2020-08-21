

let state = {
    count: 0,
    firstName: "Micah",
    lastName: "Peterson"
}


// newState is not a copy its a memory reference to state
let newState = state;


newState.count = 4;

console.log(state)