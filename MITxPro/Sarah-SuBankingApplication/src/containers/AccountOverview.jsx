import React, { useContext } from 'react';
import {Card} from 'react-bootstrap';
import { BankContext } from '../contexts/BankContext';
import { useEffect } from 'react';
import { getData } from '../utils/endpoints/getData';

export default function AccountOverview() {
  const {data, userID} = useContext(BankContext);

  console.log("data",data)
  console.log("current userID", userID)
  // const userData = data.find((acc)=> acc._id === userID);
  // console.log(userData)
  
  const { _id, balance:{current_balance, transactions}, name, email} = data;

  return (
    <>
    <Card>
      <h1>Account Overview</h1>
      <h2>Welcome {name}!</h2>

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