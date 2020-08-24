

let counterReducer = (state = {count:5}, action) => {

    
    switch (action.type) {
        case 'INCREASE':
            return{
                ...state,
                count: state.count + 1
            }

        case 'DECREASE':
            return {
                ...state,
                count: state.count - 1
            }
            
        default:
            return state;
    }
}

export default counterReducer;