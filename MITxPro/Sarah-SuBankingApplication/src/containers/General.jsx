import React, { useContext } from 'react';
import LoginPanel from '../components/LoginPanel';
import { BankContext } from '../contexts/BankContext';

export default function General() {

  return (
    <div> 
      <h1>Welcome to the Bad Bank</h1>
      So bad that it's good.
      <h3>Our Bank offers a lot of wonderful features!</h3>
      <LoginPanel/>
      <div>Don't have an account? 
        Create one here.
      </div>
    </div>
  )
};