import React, { useState, useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext'

export default function Deposit() {
  const {data, userID}  = useContext(BankContext);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  
  const userData = data.find((acc)=> acc.account_id === userID);
  console.log(userData)
  const {balance:{current_balance, transactions}, user} = userData;

  const transactionType = "Deposit";
  
  //sets amount
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  
  // validate submission
  const validate = (amt) => {
    if (amt <= 0){
      setStatus("Cannot deposit 0 or negative amount. Try again")
      return false;
    }
    return true;
  }

  // submit amount to account function
  const handleClick = (e) => {
    e.preventDefault();
    validate(amount);
    console.log("deposited: ", amount)
    //submits transaction

    //updates balance

  }

  return (
    <Card>
    <TransactionPanel 
      current_balance={current_balance} 
      transactionType={transactionType}
      handleClick={handleClick}
      handleChange ={handleChange}
      >
    </TransactionPanel>
    {status && <div>{status}</div>}
    </Card>
  )
};