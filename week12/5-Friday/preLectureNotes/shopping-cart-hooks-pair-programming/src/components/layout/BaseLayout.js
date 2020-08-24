import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
    return (
        <>
            <Link to="/">Home Page |</Link>
            <Link to="/cart">Cart</Link>
            {props.children}
        </>
    )
}

export default BaseLayout
