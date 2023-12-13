import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
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
          <NavBar/>
        </>
    }
  ])

  return(
    <div>
      <RouterProvider router={appRouter}/>
      <NavBar signedIn={!signedIn}/>
      <h1>Welcome to the Bad Bank</h1>
      <Button onClick={handleClick}>Login</Button>
    </div>
  )
};
