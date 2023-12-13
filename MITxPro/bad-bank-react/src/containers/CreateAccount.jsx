import React, { useState, useContext } from 'react';
// import CreateAccountForm from '../components/CreateAccountForm';
import { Card, Button } from 'react-bootstrap';
import { BankContext } from '../contexts/BankContext';

export default function CreateAccount() {
  const {data} = useContext(BankContext);
  const [show, setShow]           = useState(true);
  const [status, setStatus]       = useState('');
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');

  const handleCreate = () =>{
    console.log(name, email, password);
    
  }

  return (
    <Card>
      {show && (
      <Card.Body>
        <Card.Title>Create an account</Card.Title>
          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <Button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</Button>
      </Card.Body>)}
      {!show && (
      <Card.Body>
        <Card.Title>Success!</Card.Title>
      </Card.Body>
      )}
    </Card>
  )
};