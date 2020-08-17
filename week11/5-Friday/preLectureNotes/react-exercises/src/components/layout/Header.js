
import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/">Home</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/todo">Todos</Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/contactus">Contact Us</Link>
                        
                    </Nav>
                    
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
