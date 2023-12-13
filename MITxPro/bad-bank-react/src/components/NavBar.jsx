import React, {useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function NavBar({signedIn}) {
 
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>BadBank</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="responsive-navbar-nav">
          {!signedIn && <Nav className="mr-auto">
            <Nav.Link>
              Create Account
            </Nav.Link>
            <Nav.Link>
              Login
            </Nav.Link>
          </Nav>}
          {signedIn && <Nav className="mr-auto">
            <Nav.Link>
              Account Overview
            </Nav.Link>
            <Nav.Link>
              Deposit
            </Nav.Link>
            <Nav.Link>
              Withdraw
            </Nav.Link>
            <Nav.Link>
              Signout
            </Nav.Link>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};