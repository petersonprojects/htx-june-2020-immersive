import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Link to="/" >Home Page</Link> | 
            <Link to="/forms" >Forms</Link> |
            <Link to="/projects" >Project Management</Link>
        </>
    )
}

export default Header
