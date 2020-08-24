<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const BaseLayout = (props) => {
    return (
    <>

        <Link to="/">Home Page</Link> |
        <Link to="/cart"> Cart</Link>
        <br/> <br/>
        {props.children}


    </>
=======

import React from 'react'
import { Link } from 'react-router-dom'

const BaseLayout = (props) => {
    return (
        <>

            <Link to="/">Home Page</Link> |
            <Link to="/cart">Cart</Link>

            <br /> <br />
            {props.children}

            <br /> <br />
        </>
>>>>>>> 13e79ab1ab314998b82803a62220e4206531c6e1
    )
}

export default BaseLayout
