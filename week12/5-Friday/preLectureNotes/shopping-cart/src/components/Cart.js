
import React from 'react'
import {useSelector} from 'react-redux'
import AddProduct from './AddProduct';

const Cart = () => {

    const products = useSelector(state => state.productCart)
    const totalCost = useSelector(state => state.totalCost)
    return (
        <>
            <h1>Shopping Cart</h1>

            <AddProduct />

            Total: ${totalCost}

            {products.map(p => <li>{p.productName} ${p.productPrice}</li>)}

        </>
    )
}


export default Cart
