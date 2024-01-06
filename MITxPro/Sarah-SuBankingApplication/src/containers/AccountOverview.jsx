import React, { useContext } from 'react';
import {Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BankContext } from '../contexts/BankContext';

export default function AccountOverview() {
  const {data, userID} = useContext(BankContext);

  const userData = data.find((acc)=> acc.account_id === userID);
  console.log(userData)
  console.log("current balance", userData.balance.current_balance)

  return (
    <>
    <Card>
      <h1>Account Overview</h1>
      <h2>Current Balance: </h2>
      <h2>{userData.balance.current_balance}</h2>
    </Card>
    <Card>
      <h1>History of transactions</h1>
    </Card>
    </>
  )
};