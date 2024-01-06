import React, { useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';

export default function AccountOverview() {
  const {data, userID} = useContext(BankContext);

  const userData = data.find((acc)=> acc.account_id === userID);
  console.log(userData)
  const { balance:{current_balance, transactions}, user} = userData;

  return (
    <>
    <Card>
      <h1>Account Overview</h1>
      <h2>Welcome {user.name}!</h2>
      <h2>Your current Balance: </h2>
      <h2>${current_balance}</h2>
    </Card>
    <Card>
      <h1>History of transactions</h1>
      {/* history of transactions can be another component. */}
    </Card>
    </>
  )
};