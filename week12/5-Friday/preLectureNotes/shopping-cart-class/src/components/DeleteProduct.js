import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../actions/cartActions'

const DeleteProduct = ({product }) => {

    const dispatch = useDispatch()

    let onDelete = () => {

        dispatch(deleteProduct({...product}))


    }

    return (
        <>
            <button onClick={onDelete} >Delete</button>
        </>
    )
}

export default DeleteProduct
