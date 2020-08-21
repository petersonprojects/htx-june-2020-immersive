import React from 'react';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';

const Cart = () => {

    const products = useSelector(state => state.productCart);
    const totalCost = useSelector(state => state.totalCost);

    // boostrap
    // initial state? create products (images, prices, description, title)
    // when user clicks on an item it adds it to your cart
    // for every item in your cart you should be able to delete (already there)
    // add a dropdown to increase the number of items you want to put

    // examples mangoes(5) / update total cost

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
