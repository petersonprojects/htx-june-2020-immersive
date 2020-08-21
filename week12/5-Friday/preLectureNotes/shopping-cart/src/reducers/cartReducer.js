



let cartReducer = (state, action) => {


    if (state == undefined) {
        state = {
            totalCost: 1,
            productCart: [
                {
                    id: 1,
                    productName: 'apples',
                    productPrice: 1
                }
            ]
        }
    }

    switch (action.type) {

        case 'AddProduct':
            return {
                ...state,
                totalCost: state.totalCost + parseFloat(action.productData.productPrice),
                productCart: state.productCart.concat(action.productData)

            }
        case 'DeleteProduct':

            let updatedCart = state.productCart.filter(pObj => {
                
                return pObj.id != action.productData.id
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
