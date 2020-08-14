import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">

        <Navbar.Brand href="#home">First React Webpage</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutus">About Us</Nav.Link>
                <Nav.Link href="/blogs">Blogs</Nav.Link>
                <Nav.Link href="/contactus">Contact Us</Nav.Link>
            </Nav>

        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header
