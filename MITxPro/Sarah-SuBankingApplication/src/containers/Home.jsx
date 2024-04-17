import React, {useState, useEffect, useContext} from 'react';
import NavBar from '../components/NavBar';
import General from './General';
import Login from './Login';
import CreateAccount from './CreateAccount';
import AccountOverview from './AccountOverview';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BankProvider } from '../contexts/BankContext';
import PrivateRoute from '../components/PrivateRoute';



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
        <PrivateRoute>
          <NavBar/>
          <AccountOverview/>
        </PrivateRoute>
    },
    {
      path:"/deposit",
      element:
        <PrivateRoute>
          <NavBar/>
          <Deposit/>
        </PrivateRoute>
    },
    {
      path:"/withdraw",
      element:
        <PrivateRoute>
          <NavBar/>
          <Withdraw/>
        </PrivateRoute>
    },
    {
      path:"/alldata",
      element:
        <PrivateRoute>
          <NavBar/>
          <AllData/>
        </PrivateRoute>
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
