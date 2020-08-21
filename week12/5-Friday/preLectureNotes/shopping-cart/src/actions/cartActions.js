

//item: id, productName, productPrice

export let addProduct = (productItem) => {

    return {
        type: 'AddProduct',
        productData: {...productItem}
    }

}


export let deleteProduct = (productItem) => {

    return {
        type: 'DeleteProduct',
        productData: {...productItem}
    }

}

//import {*} from filename

