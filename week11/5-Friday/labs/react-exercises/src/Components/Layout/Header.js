import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">

        <Navbar.Brand href="#home">First React Webpage</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
                <Link className="heder" to="/">Home</Link>
                <Link className="heder" to="/aboutus">About Us</Link>
                <Link className="heder" to="/blogs">Blogs</Link>
                <Link className="heder" to="/contactus">Contact Us</Link>
                <Link className="heder" to="/puppies">Movies</Link>
                <Link className="heder" to="/todo">Todos</Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header
