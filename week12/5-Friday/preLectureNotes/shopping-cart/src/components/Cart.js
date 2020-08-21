import React from 'react';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';

const Cart = () => {

    const products = useSelector(state => state.productCart);
    const totalCost = useSelector(state => state.totalCost);

    return (
        <>
            <h1>Shopping Cart</h1>

            Total: ${totalCost}

            {products.map(p => {
                return <li key={p.id}>{p.productName} ${p.productPrice} <DeleteProduct product={p}/></li>
            })}

            <br/>
            <br/>

            <AddProduct />

        </>
    )
}

export default Cart
