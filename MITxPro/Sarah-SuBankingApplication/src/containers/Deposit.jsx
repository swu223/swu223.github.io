import React, { useState, useContext } from 'react';
import {Card} from 'react-bootstrap';
import TransactionPanel from '../components/TransactionPanel';
import { BankContext } from '../contexts/BankContext'

export default function Deposit() {
  const {data, setData, userID}  = useContext(BankContext);
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');
  
  const userData = data.find((acc)=> acc.id === userID);
  // to do, fix the way to deconstruct the data
  const {_id, balance:{current_balance, transactions}, user} = userData;

  const transactionType = "Deposit";
  
  //sets amount
  const handleChange = (e) => {
    setAmount(e.target.value)
  }
  
  // validate submission
  const validate = (amt) => {
    if (amt <= 0){
      setStatus("Cannot deposit 0 or negative amount. Try again")
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    
    return true;
  }

  // submit amount to account function
  const handleClick = (e) => {
    e.preventDefault();
    if (!validate(amount)) return;

    let newTransaction = {
      type: transactionType,
      amount: amount,
      date: new Date(),
    }
    console.log("transaction: ", newTransaction)

    let newBalance = Number(current_balance) + Number(amount);
    console.log("newBalance:  ", newBalance)

    //submits transaction
    let updateData = data.map((acc) => {
      console.log("if acc matches userID", acc.account_id === userID);
      if( acc.account_id === userID) {
        return {
          ...acc, 
          balance:{
            current_balance:newBalance, 
            transactions:[...transactions, newTransaction]
          }  
        } 
      } 
      else return acc;
    })
    console.log("updateData: ",updateData);
    //updates balance
    setStatus(`You have successfully deposited $${amount}`)
    setTimeout(() => setStatus(''),3000);
    setData(updateData);
    
  }

  return (
    <Card>
    <TransactionPanel 
      current_balance={current_balance} 
      handleClick={handleClick}
      handleChange ={handleChange}
      noInput={!amount}
      >
    </TransactionPanel>
    {status && <div>{status}</div>}
    </Card>
  )
};