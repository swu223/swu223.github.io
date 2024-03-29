import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default function TransactionPanel({
  current_balance,
  handleClick,
  handleChange,
  noInput
}) {

  return (
    <Card>
      <h1>Current Balance: ${current_balance}</h1>
      Deposit
      <input type="number" step=".01" onChange={handleChange}></input>
      <Button onClick={handleClick} disabled={noInput}>Submit</Button>
    </Card>
  )
};