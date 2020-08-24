
export let addProduct = (product) => {

    return {
        type: "ADD",
        product: product
    }
}


export let deleteProduct = (product) => {

    return {
        type: "DELETE",
        product: product
    }
}