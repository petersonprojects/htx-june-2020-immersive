
// all of the functions for the cart in one file

//item: id, productName, productPrice

export let addProduct = (productItem) => {

    return {
        type: 'AddProduct',
        productData: productItem
    }
}

export let deleteProduct = (productItem) => {

    return {
        type: 'DeleteProduct',
        productData: productItem
    }
}

// import { * } from './actions/cartActions';