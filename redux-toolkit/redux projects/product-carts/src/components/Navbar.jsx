import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';



const NavbarComponent = () => {
  const dispatch = useDispatch(); 
   let cartItemsCount = useSelector(state => state.cart.items.length);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="px-3 py-3 d-flex justify-content-between">
        <Navbar.Brand href="#home" className="fw-bold">Product Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='d-flex justify-content-end w-100'>
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#features" className="text-light">Features</Nav.Link>
            <Nav.Link href="#pricing" className="text-light">Pricing</Nav.Link>
            <Nav.Link href="#cart" style={{ position: 'relative' }}> 
              <FaShoppingCart size={25} />
              <Badge bg="danger" style={{
                position: 'absolute',
                top: '-5px',
                right: '-10px',
                padding: '2px 6px',
                borderRadius: '50%'
              }}>

                {cartItemsCount}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     

    </>
  )
}

export default NavbarComponent