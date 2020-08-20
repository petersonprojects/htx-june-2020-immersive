
// reducer is just a function that takes in an inital state and an action
// state always comes first and the action second
// we are initializing state here as 0

let counterReducer = (state = { count: 5 }, action) => {

    // switch cases are if, else if, else blocks
    switch(action.type)
    {
        case "INCREASE":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREASE":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default counterReducer;