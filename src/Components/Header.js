import React from "react";

//React Bootstrap

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image'
import logo from '../assets/sl100x400.png'


const Header = () => {
  return (
  
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">{<Image className="logo" src={logo} alt="social game poker logo"/>}</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="">House Rules</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Action</NavDropdown.Item>
          <NavDropdown.Item href="">Another action</NavDropdown.Item>
          <NavDropdown.Item href="">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </Navbar>
  
  )
};

export default Header;
