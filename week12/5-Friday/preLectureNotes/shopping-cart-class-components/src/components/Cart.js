
import React, { Component } from 'react'
import {connect} from 'react-redux';
import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct'

class Cart extends Component {
    render() {
        return (
            <>
                <h1>Shopping Cart</h1>

                <AddProduct />
                Total Cost: ${this.props.totalCost}

                {this.props.products.map(p =>{

                    return <li>{p.productName} ${p.price} <DeleteProduct product={p} /></li>
                })}
            </>
        )
    }
} //end of class 

let mapStateToProps = (state) => {

    return {
        totalCost: state.totalCost,
        products: state.cart
    }
}


export default connect(mapStateToProps, null)(Cart)
