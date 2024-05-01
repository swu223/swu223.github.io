import React, {useContext } from 'react';
import {Card} from 'react-bootstrap';
import { BankContext } from '../contexts/BankContext';

export default function AllData() {
  const {data} = useContext(BankContext);

  return (
    <>
    {
      <Card>{JSON.stringify(data)}</Card>
    }
    </>
  )
};