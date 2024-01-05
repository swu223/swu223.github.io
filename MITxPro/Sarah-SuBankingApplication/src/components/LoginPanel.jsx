import React, { useState, useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';

export default function LoginPanel() {
  const {data} = useContext(BankContext);
  const {signedIn, setSignedIn}  = useContext(BankContext);
  const [status, setStatus]       = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const navigate = useNavigate();

  const disableB = () =>{
    if(email&&password) return false;
    return true;
  }
  
  const validate = (field, label) =>{
    console.log('starting signin', signedIn)
    if (!field) {
      setStatus(label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (label === 'email' && !field.match(emailRegex)){
      setStatus('Error: enter valid email');
      setTimeout(() => setStatus(''),3000)
      return false;
    }

    if (label === 'email' && data.filter((acc) => acc.user.email === field).length===0){
      setStatus('Error: email does not exist in our records. Please create an account.');
      setTimeout(() => setStatus(''),3000)
      return false;
    }

    if (label === 'password' && data.filter((acc) => acc.user.password === field).length===0){
      setStatus('Error: Email and password do not match. Please try again.');
      setTimeout(() => setStatus(''),3000)
      return false;
    }

    return true;
  }


  const handleClick = () =>{
    console.log('starting signin', signedIn);

    if (!validate(email,    'email')) return;
    if (!validate(password, 'password')) return;
        
    setSignedIn(true);
    navigate("/account-overview")
  }

  return (
    <Card> 
      <h3>Login Panel</h3>
      <label >Email:</label>
      <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}></input>
      <label > Password:</label>
      <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}></input>
      <Button id="login" className="btn btn-light" onClick={handleClick} disabled={disableB()}>Login</Button>
      {status && <div id='createStatus'>{status}</div>}
    </Card>
  )
};