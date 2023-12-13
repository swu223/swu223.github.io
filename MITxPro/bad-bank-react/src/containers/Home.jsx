import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import {Button} from 'react-bootstrap';


export default function Home() {
  const [signedIn, setSignedIn] = useState(false);

  const handleClick = () =>{
    setSignedIn(!signedIn);
  }

  return(
    <div>
      <NavBar signedIn={!signedIn}/>
      <h1>Welcome to the Bad Bank</h1>
      <Button onClick={handleClick}>Login</Button>
    </div>
  )
};
