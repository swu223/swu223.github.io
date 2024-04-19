import React, {useContext} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';
import bad_bank_logo from '../bad_bank_logo.jpg'
import { handleLogoutDB } from '../utils/endpoints/auth';

export default function NavBar() {
  const { signedIn, setSignedIn } = useContext(BankContext);

  const logOut = () => {
    handleLogoutDB();
    setSignedIn(false);
  }

  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" href="#home" >
          <img
            alt=""
            src={bad_bank_logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          BadBank
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="responsive-navbar-nav">
          {!signedIn && 
            <Nav className="mr-auto" variant="underline" defaultActiveKey="/">
              <Nav.Link as={Link} to="/create-account" eventKey="create-account">Create Account</Nav.Link>
              <Nav.Link as={Link} to="/login" eventKey="login">Login</Nav.Link>
              <Nav.Link as={Link} to="/alldata" eventKey="all-data">All Data</Nav.Link>
            </Nav>}
          {signedIn && 
            <Nav className="mr-auto" variant="underline" defaultActiveKey="account-overview">
              <Nav.Link as={Link} to="/account-overview" eventKey="account-overview">Account Overview</Nav.Link>
              <Nav.Link as={Link} to="/deposit" eventKey="deposit">Deposit</Nav.Link>
              <Nav.Link as={Link} to="/withdraw" eventKey="withdraw">Withdraw</Nav.Link>
              <Nav.Link as={Link} to="/alldata" eventKey="all-data">All Data</Nav.Link>
              <Nav.Link onClick={logOut} as={Link} to="/">Signout</Nav.Link>
            </Nav>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};