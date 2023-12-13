import React, { useContext } from 'react';
import { BankContext } from '../contexts/BankContext';

export default function General() {
  const {data} = useContext(BankContext);

  return (
    <div> 
      <h1>Welcome to the Bad Bank</h1>
      General page to include a login section and some descriptions of products or what makes our bank great
      <h3>Inside General: {data}</h3>
    </div>
  )
};