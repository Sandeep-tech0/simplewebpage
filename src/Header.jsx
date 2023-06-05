import React from 'react'
import "./Styles.css";

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



const Header = () => {
  return (
    <>
    <Navbar  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMtjw4yXI9eFVSYhBQVp9kfYyN0p-Mt4dqQ&usqp=CAU"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> tnplab</Navbar.Brand>
        <Nav className="me-auto navtop">
          <Nav.Link  className="navin" href="#home">Home</Nav.Link>
          <Nav.Link className="navin" href="#features">About</Nav.Link>
          <Nav.Link  className="navin" href="#pricing">Traning</Nav.Link>
          <Nav.Link  className="navin" href="#placement">Placement</Nav.Link>
          <Nav.Link  className="navin" href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  )
}

export default Header