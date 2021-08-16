import React from "react";
import { useState } from "react";
import logo from '../logo.svg'
import {Nav, Navbar, Form, Modal, Button } from "react-bootstrap";


function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Navbar bg="info" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> 
            Tweets
          </Navbar.Brand>
        </Nav>
        <Form inline>
          <Nav.Link className="text-light" href="#login" onClick={handleShow}>
            Login
          </Nav.Link>
          <Nav.Link className="text-light" href="#features">
            Features
          </Nav.Link>
        </Form>
      </Navbar>

      <div className="conatiner justify-content-center">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group> 
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="info"  type="Submit" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Navigation;
