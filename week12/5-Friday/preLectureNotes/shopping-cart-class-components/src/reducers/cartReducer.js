
import { v1 as uuidv1 } from 'uuid'

const initialState = {

    totalCost: 2,
    cart: [
        {
            id: uuidv1(),
            productName: "Oranges",
            price: 2

        }
    ]
}

const cartReducer = (state = initialState, action) => {


    switch (action.type) {

        case 'ADD':
            return {
                ...state,
                totalCost: state.totalCost + parseFloat(action.product.price),
                cart: state.cart.concat(action.product)
            }
        case 'DELETE':

            let newCart = state.cart.filter(p => {

                //1 != 1
                return p.id != action.product.id
            })
            return {
                ...state,
                totalCost: state.totalCost - parseFloat(action.product.price),
                cart: newCart
            }
        default:
            return state

    }
}


export default cartReducer