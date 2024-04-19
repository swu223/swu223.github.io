import React, { useState, useContext } from 'react';
// import CreateAccountForm from '../components/CreateAccountForm';
import { Card, Button } from 'react-bootstrap';
import { BankContext } from '../contexts/BankContext';
import { handleSignupDB } from '../utils/endpoints/auth';

export default function CreateAccount() {
  const {data, setUserID } = useContext(BankContext);
  const [show, setShow]           = useState(true);
  const [status, setStatus]       = useState('');
  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  // const [disableB, setDisableB]   = useState(true);

  const disableB = () =>{
    if(name&&email&&password) return false;
    return true;
  }

  const validate = (field, label)=>{
    // error if there is nothing input
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }

    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (label === 'password' && !passwordRegex.test(field)) {
      setStatus('Error: password must at least 8 characters, containing at least one special character, Uppercase letter, undercase letter and number');
      setTimeout(() => setStatus(''),3000);
      return false;
    }

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (label === 'email' && !field.match(emailRegex)){
      setStatus('Error: enter valid email');
      setTimeout(() => setStatus(''),3000)
      return false;
    }

    //error if username has been used before
    if (label === 'name' && data.filter((acc) => acc.name === field).length>0){
      setStatus('Error: name already exists in database. Please login with your existing account.');
      setTimeout(() => setStatus(''),3000)
      return false;
    }
    //error if user email has been used before. 
    if (label === 'email' && data.filter((acc) => acc.email === field).length>0){
      setStatus('Error: email already exists in database. Please login with your existing account.');
      setTimeout(() => setStatus(''),3000)
      return false;
    }

    return true;
  }

  const handleCreate = () =>{
    console.log(name, email, password);
    if (!validate(name,     'name')) return;
    if (!validate(email,    'email')) return;
    if (!validate(password, 'password')) return;
    // let currentDate = new Date();
    let newAccount = {
      // Commented out the following because MongoDB can automatically create an object_id
      // takes the person's name and addes the Year, Month(with 0 = January and changed to 2 digits), and Day(changed to 2 digits), and then gets rid of blank spaces
      // account_id  : (name + currentDate).replaceAll(/[^A-Z0-9]/ig, ''),
      // user        : {
        name: name,
        email:email,
        password:password,
        // date_created:currentDate
      // }
    }
    console.log("create account:",newAccount);
    let userID = handleSignupDB(newAccount);
    setUserID(userID);
    // setData([...data, newAccount]);
    // console.log(data);
    setShow(false);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
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
          <Button type="submit" className="btn btn-light" onClick={handleCreate} disabled={disableB()}>Create Account</Button>
          {status && <div id='createStatus'>{status}</div>}
      </Card.Body>)}
      {!show && (
      <Card.Body>
        <Card.Title>Success!</Card.Title>
        <Button onClick={clearForm} >Create New Account</Button>
      </Card.Body>
      )}
    </Card>
  )
};