import { v1 as uuidv1 } from 'uuid';
// function that takes in the state and the action

let cartReducer = (state, action) => {

    if (state === undefined)
    {
        state = {
            totalCost: 1.03,
            storeItems:[],
            productCart: [
                {
                    id: uuidv1(),
                    productName: "oranges",
                    productPrice: 1.03
                }
            ]
        }
    }

    switch(action.type)
    {
        case "AddProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseFloat(action.productData.productPrice),
                productCart: [...state.productCart, action.productData]
            }
        case "DeleteProduct":
            let updatedCart = state.productCart.filter(product => {
                // if the id coming from the array in state is not equal to the 
                // product data id then return it to the new array of products
                // this is just one method of updating the list there are many
                return product.id !== action.productData.id
            })
            return {
                ...state,
                totalCost: state.totalCost - parseFloat(action.productData.productPrice),
                productCart: updatedCart
            }
        default:
            return state;
    }

}


export default cartReducer;
