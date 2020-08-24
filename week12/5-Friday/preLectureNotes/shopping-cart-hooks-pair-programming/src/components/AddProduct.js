import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../actions/cartActions'
import { v1 as uuidv1 } from 'uuid';

const AddProduct = () => {
    const dispatch = useDispatch()

    let handleSubmit = (e) => {
        e.preventDefault()
        let product = {
            id: uuidv1(),
            productName: (e.target.name.value),
            price: (e.target.Price.value),
        }
        dispatch(addProduct(product))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" placeholder="Product Name"></input>
                <input type="text" id="Price" placeholder="Price"></input>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default AddProduct
