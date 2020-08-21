
// all of the functions for the cart in one file

//item: id, productName, productPrice

export let addProduct = (productItem) => {

    return {
        type: 'AddProduct',
        productData: productItem
    }
}

export let deleteProduct = (id) => {

    return {
        type: 'DeleteProduct',
        id: id
    }
}

// import { * } from './actions/cartActions';