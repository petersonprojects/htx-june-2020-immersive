import React from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/cartActions'
import { v1 as uuidv1 } from 'uuid';

// pass down a redux functon to add to the cart

const AddProduct = () => {

    const dispatch = useDispatch();

    let handleSubmit = (e) => {

        e.preventDefault();

        let product = {
            id: uuidv1(),
            productName: e.target.productName.value,
            productPrice: e.target.productPrice.value
        }

        dispatch(addProduct(product))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input id="productName" type="text" placeholder="Product Name"/>
                <br/>

                <input id="productPrice" type="text" placeholder="Product Price"/>

                <br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}

export default AddProduct
