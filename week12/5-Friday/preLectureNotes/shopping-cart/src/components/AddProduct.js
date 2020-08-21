
import React from 'react';
import { useDispatch } from 'react-redux';
import {addProduct} from '../actions/cartActions';

///
const AddProduct = () => {

    const dispatch = useDispatch();
    
    let handleSubmit = (e) => {

        e.preventDefault();

        dispatch(addProduct({
            id: 2,
            productName: e.target.ProductName.value, 
            productPrice: e.target.ProductPrice.value
        }))

    }

    return (
        <>

            <form onSubmit={handleSubmit}>

                <input id="ProductName" type="text" placeholder="Product Name" />
                <br />

                <input type="text" id="ProductPrice" />

                <br />

                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default AddProduct
