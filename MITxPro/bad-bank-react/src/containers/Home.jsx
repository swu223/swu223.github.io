import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import General from './General';
import Login from './Login';
import CreateAccount from './CreateAccount';
import AccountOverview from './AccountOverview';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import {Button} from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


export default function Home() {
  const [signedIn, setSignedIn] = useState(false);

  const handleClick = () =>{
    setSignedIn(!signedIn);
  }

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:
        <>
          <NavBar signedIn={signedIn}/>
          <General/>
        </>
    },
    {
      path:"/login",
      element:
        <>
          <NavBar signedIn={signedIn}/>
          <Login/>
        </>
    },
    {
      path:"/create-account",
      element:
        <>
          <NavBar signedIn={signedIn}/>
          <CreateAccount/>
        </>
    },
    {
      path:"/account-overview",
      element:
        <>
          <NavBar signedIn={signedIn}/>
          <AccountOverview/>
        </>
    },
    {
      path:"/deposit",
      element:
        <>
          <NavBar signedIn={signedIn}/>
          <Deposit/>
        </>
    },
    {
      path:"/withdraw",
      element:
        <>
          <NavBar signedIn={signedIn}/>
          <Withdraw/>
        </>
    },
  ])

  return(
    <div>
      
      <RouterProvider router={appRouter}/>
      <Button onClick={handleClick}>Login</Button>
    </div>
  )
};
