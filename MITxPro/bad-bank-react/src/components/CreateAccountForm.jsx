import React, { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';

export default function CreateAccountForm() {
  const {data} = useContext(BankContext);

  return (
    <div> 
      <h1>Create a new account</h1>
    </div>
  )
};