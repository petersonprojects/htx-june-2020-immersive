import React from 'react';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';

const Cart = () => {

    const products = useSelector(state => state.productCart);
    const totalCost = useSelector(state => state.totalCost);

    // use bootstrap
    
    // initial state? create products (imageURL, price, description, name)
    // click on images with titles and see description, price, title and if I recommend it
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
