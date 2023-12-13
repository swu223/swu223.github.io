import React, { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';

export default function LoginPanel() {
  const {data} = useContext(BankContext);

  return (
    <div> 
      <label>Login Panel</label>
      <label>Username:</label>
      <input></input>
      <label>Password:</label>
      <input></input>
      <button>Login</button>
    </div>
  )
};