import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function NavBar() {
  return(
    <Navbar>
      <Container>
        <Nav>
          <Nav.Item>
            Home
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
};