import React, { useContext } from 'react';
import LoginPanel from '../components/LoginPanel';
import { BankContext } from '../contexts/BankContext';
import bad_bank_logo from '../bad_bank_logo.jpg'

export default function General() {

  return (
    <div> 
      <h1> 
      Welcome to the Bad Bank!  {' '}
      <img src={bad_bank_logo} height="50px" alt="bad bank logo"/>
      </h1>
      We're so bad that we're good.
      <h3>Our Bank offers a lot of wonderful features!</h3>
      <div>
        <ul>
          <li>No interest!</li>
          <li>Absolutely no security!</li>
          <li>No guarantee that your money won't be invested poorly!</li>
        </ul>
      </div>
      <h2>Login below!</h2>
      <LoginPanel/>
      <div>Don't have an account? 
        Create one <a href="/create-account">here</a>.
      </div>
    </div>
  )
};