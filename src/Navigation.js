import React from 'react'
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './link.css'

function Navigation() {
  return (
    <div>
   <Navbar bg="success" variant="light">
    <Container>
    <h2 className='text-warning fst-italic'>Urbane Foods</h2>
      <div class='navi'>
    <Nav className="me-auto mx-5">
      <Row>
      <Col><Link  to="/" className='text-white text-decoration-none mx-4'><h5 class='link'>Home</h5></Link></Col>
      <Col><Link to="/about" className='text-white text-decoration-none mx-4'><h5 class='link'>About</h5></Link></Col>
      <Col><Link to="/products" className='text-white text-decoration-none mx-4'><h5 class='link'>Products</h5></Link></Col>
      <Col><Link to="/contacts" className='text-white text-decoration-none mx-4'><h5 class='link'>Contacts</h5></Link></Col>
        </Row>
    </Nav>
    </div>
    </Container>
  </Navbar>
      </div>
    );
}

export default Navigation