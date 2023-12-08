import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Nav className="mr-auto">
          <Nav.Item>
            Home
          </Nav.Item>
          <Nav.Item>
            Create Account
          </Nav.Item>
          <Nav.Item>
            Login
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
};