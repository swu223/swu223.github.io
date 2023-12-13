import React, { useContext } from 'react';
import {Button} from 'react-bootstrap';
import { BankContext } from '../contexts/BankContext';

export default function LoginPanel() {
  const {data, signedIn, setSignedIn } = useContext(BankContext);
  
  const handleClick = () =>{
    setSignedIn(!signedIn)
    console.log(signedIn)
  }

  return (
    <div> 
      <label>Login Panel</label>
      <label>Username:</label>
      <input></input>
      <label>Password:</label>
      <input></input>
      <Button onClick={handleClick}>Login</Button>
    </div>
  )
};