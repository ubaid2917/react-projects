import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";


const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="px-3 d-flex justify-content-between">
        <Navbar.Brand href="#home" className="fw-bold">Product Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='d-flex justify-content-end w-100'>
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#features" className="text-light">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-light">Pricing</Nav.Link>
            <Nav.Link href="#cart" >
              <FaShoppingCart size={25} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     

    </>
  )
}

export default NavbarComponent