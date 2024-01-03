import React, {useState, useEffect, useContext} from 'react';
import NavBar from '../components/NavBar';
import General from './General';
import Login from './Login';
import CreateAccount from './CreateAccount';
import AccountOverview from './AccountOverview';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import {Button} from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BankProvider } from '../contexts/BankContext';


export default function Home() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:
        <>
          <NavBar/>
          <General/>
        </>
    },
    {
      path:"/login",
      element:
        <>
          <NavBar/>
          <Login/>
        </>
    },
    {
      path:"/create-account",
      element:
        <>
          <NavBar/>
          <CreateAccount/>
        </>
    },
    {
      path:"/account-overview",
      element:
        <>
          <NavBar/>
          <AccountOverview/>
        </>
    },
    {
      path:"/deposit",
      element:
        <>
          <NavBar/>
          <Deposit/>
        </>
    },
    {
      path:"/withdraw",
      element:
        <>
          <NavBar/>
          <Withdraw/>
        </>
    },
  ])

  return(
    <div>
      <BankProvider>
        <RouterProvider router={appRouter}/>
      </BankProvider>
    </div>
  )
};
