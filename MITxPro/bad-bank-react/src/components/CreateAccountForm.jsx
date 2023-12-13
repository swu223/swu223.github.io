import React, { useContext, useState } from 'react';
import { BankContext } from '../contexts/BankContext';
import { Card } from 'react-bootstrap';

export default function CreateAccountForm() {
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
    <Card
      bgcolor="primary"
      header="Create Account"
      body={show? (
        <>
          Name<br/>
          <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
          Email address<br/>
          <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
        </>
      ):(
        <>
        Success
        </>
      )}
    />
  )
};