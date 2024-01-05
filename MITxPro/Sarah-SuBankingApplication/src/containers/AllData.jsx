import React, {useContext } from 'react';
import { BankContext } from '../contexts/BankContext';

export default function AllData() {
  const {data} = useContext(BankContext);
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
};