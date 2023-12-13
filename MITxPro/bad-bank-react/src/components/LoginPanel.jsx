import React, { useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';

export default function LoginPanel() {
  const {signedIn, setSignedIn } = useContext(BankContext);
  
  const handleClick = () =>{
    setSignedIn(!signedIn)
    console.log(signedIn)
  }

  return (
    <Card> 
      <h3>Login Panel</h3>
      <label>Username:</label>
      <input></input>
      <label>Password:</label>
      <input></input>
      <Button onClick={handleClick} as={Link} to="/account-overview">Login</Button>
    </Card>
  )
};