import React from 'react'
import { useSelector } from 'react-redux'
import AddProduct from './AddProduct'
import DeleteProduct from './DeleteProduct'

//bootstrap

//create products  (imageURL, prices, description, title)
// click on an item, and it adds to the cart 
// delete 
// mango (5) update total cost 
// click on image and see description, price title


const Cart = () => {

    const products = useSelector(state => state.cart)
    const totalCost = useSelector(state => state.totalCost)

    return (
        <>
            <h1>Shopping Cart</h1>

            <AddProduct />
          totalCost:${totalCost}

            {products.map((p) => <li>{p.productName} ${p.price} <DeleteProduct product={p} /></li>) }

        </>
    )
}

export default Cart
