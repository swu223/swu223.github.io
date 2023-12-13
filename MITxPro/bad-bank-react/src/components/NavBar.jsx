import React, {useContext, useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';

export default function NavBar() {
  const { signedIn, setSignedIn } = useContext(BankContext);

  const logOut = () => {
    setSignedIn(!signedIn)
  }
  
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" href="#home">BadBank</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="responsive-navbar-nav">
          {!signedIn && <Nav className="mr-auto">
            <Nav.Link as={Link} to="/create-account">
              Create Account
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>}
          {signedIn && <Nav className="mr-auto">
            <Nav.Link as={Link} to="/account-overview">
              Account Overview
            </Nav.Link>
            <Nav.Link as={Link} to="/deposit">
              Deposit
            </Nav.Link>
            <Nav.Link as={Link} to="/withdraw">
              Withdraw
            </Nav.Link>
            <Nav.Link onClick={logOut}>
              Signout
            </Nav.Link>
          </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};