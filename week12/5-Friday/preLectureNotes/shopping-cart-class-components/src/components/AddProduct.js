
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addProduct} from '../actions/cartActions'
import { v1 as uuidv1 } from 'uuid'

class AddProduct extends Component {


    handleSubmit = (e) => {
        e.preventDefault();

        //collect our data from form 

        //this uploads data to our global store
        this.props.onAddProduct({
            id: uuidv1(),
            productName: this.refs.name.value, 
            price: this.refs.price.value
        })

    }

    render() {
        return (
            <>

                <form onSubmit={this.handleSubmit}>

                    <input ref="name" type="text" placeholder="Product Name" />
                    <input ref="price" type="text" placeholder="Price" />

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
} //end of class

let mapDispatchToProps = (dispatch) => {

    return {
        //product is an object {}
        //this.props.onAddProduct({})
        onAddProduct: (product) => dispatch(addProduct(product))
    }

}


export default connect(null, mapDispatchToProps)(AddProduct)
