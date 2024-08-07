import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary navbar ">
      <Container className='cont'>
          <Navbar.Brand href="/learn">
            <div className="d-flex gap-2">
              <Image src={logo} width="40" height="40" rounded />              
                <span>
                  CHA STUDENT PORTAL
                  <small>No One Gets Left Behind</small>
                </span>              
            </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto">
            <Nav.Link to="/learn">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header
